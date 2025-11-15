const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');


const app = express();


app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'public')));


// connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/choosebest', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));


// schema for wishlist
const wishlistSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  link: String
});
const WishlistItem = mongoose.model('WishlistItem', wishlistSchema);


// add to wishlist
app.post('/api/wishlist', async (req, res) => {
  try {
    const item = new WishlistItem(req.body);
    await item.save();
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


// get wishlist
app.get('/api/wishlist', async (req, res) => {
  try {
    const items = await WishlistItem.find();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


// **delete wishlist item**
app.delete('/api/wishlist/:id', async (req, res) => {
  try {
    await WishlistItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item removed' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


// fallback for frontend
app.get(/^(?!\/api\/).*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));


// add client images

const fs = require('fs');


app.use(cors());
app.use(express.json());

// 1. connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/choosebest', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// 2. create schema/model
const imageSchema = new mongoose.Schema({
  category: String,
  filename: String,
  originalName: String,
  createdAt: { type: Date, default: Date.now }
});
const Image = mongoose.model('Image', imageSchema);

// 3. configure multer for uploads folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath);
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 4. POST /api/images (upload)
app.post('/api/images', upload.single('image'), async (req, res) => {
  try {
    const { category } = req.body;
    const img = new Image({
      category,
      filename: req.file.filename,
      originalName: req.file.originalname
    });
    await img.save();
    res.json(img);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

// 5. GET /api/images?category=women
app.get('/api/images', async (req, res) => {
  try {
    const { category } = req.query;
    const images = await Image.find(category ? { category } : {});
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: 'Fetch failed' });
  }
});

// 6. DELETE /api/images/:id
app.delete('/api/images/:id', async (req, res) => {
  try {
    const img = await Image.findById(req.params.id);
    if (!img) return res.status(404).json({ error: 'Not found' });

    // delete file from disk
    const filePath = path.join(__dirname, 'uploads', img.filename);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    await img.deleteOne();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Delete failed' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
