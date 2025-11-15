// backend/index.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/choosebest', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('Mongo error:', err));

// ✅ Define Wishlist Schema & Model
const wishlistSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  link: String,
});
const WishlistItem = mongoose.model('WishlistItem', wishlistSchema);

// ✅ API route to save wishlist item
app.post('/api/wishlist', async (req, res) => {
  try {
    const { title, price, image, link } = req.body;
    const newItem = new WishlistItem({ title, price, image, link });
    await newItem.save();
    res.status(201).json({ message: 'Item saved', item: newItem });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ API route to get wishlist items
app.get('/api/wishlist', async (req, res) => {
  const items = await WishlistItem.find();
  res.json(items);
});

// ✅ Serve your frontend from public folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
