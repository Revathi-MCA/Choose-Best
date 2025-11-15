// product 1
function showPopup() {
  const popup = document.getElementById('popup');
  const container = document.getElementById('popup-images');
  container.innerHTML = '';


// List your 33 image file names here exactly as they are in the folder
  const imageUrls = [
    'images/img1.avif',
    'images/img2.avif',
    'images/img3.avif',
    'images/img4.avif',
    'images/img5.avif',
    'images/img6.avif',
    'images/img7.avif',
    'images/img8.avif',
    'images/img9.avif',
    'images/img10.avif',
    'images/img11.avif',
    'images/img12.avif',
    'images/img13.avif',
    'images/img14.avif',
    'images/img15.avif',
    'images/img16.avif',
    'images/img17.avif',
    'images/img18.avif',
    'images/img19.avif',
    'images/img20.avif',
    'images/img21.avif',
    'images/img22.avif',
    'images/img23.avif',
    'images/img24.avif',
    'images/img25.avif',
    'images/img26.avif',
    'images/img27.avif',
    'images/img28.avif',
    'images/img29.avif'
  ];


  imageUrls.forEach((url, index) => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = `Image ${index + 4}`;
    container.appendChild(img);
  });


  popup.style.display = 'block';
}


function hidePopup() {
  document.getElementById('popup').style.display = 'none';
}

// product 2
function showPopup1() {
  const popup1 = document.getElementById('popup1');
  const container1 = document.getElementById('popup-images1');
  container1.innerHTML = '';

// List your 15 image file names here exactly as they are in the folder
  const imageUrls = [
    'images/img30.avif',
    'images/img31.avif',
    'images/img32.avif',
    'images/img33.avif',
    'images/img34.avif',
    'images/img35.avif',
    'images/img36.avif',
    'images/img37.avif',
    'images/img38.avif',
    'images/img39.avif',
    'images/img40.avif',
    'images/img41.avif',
    'images/img42.avif',
    'images/img43.avif',
    'images/img44.avif',
    'images/img45.avif'
  ];

  imageUrls.forEach((url, index) => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = `Image ${index + 4}`;
    container1.appendChild(img);
  });

  popup1.style.display = 'block';
}

function hidePopup1() {
  document.getElementById('popup1').style.display = 'none';
}
// product 3
function showPopup2() {
  const popup1 = document.getElementById('popup2');
  const container1 = document.getElementById('popup-images2');
  container1.innerHTML = '';

// List your 12 image file names here exactly as they are in the folder
  const imageUrls = [
    'images/img46.avif',
    'images/img47.avif',
    'images/img48.avif',
    'images/img49.avif',
    'images/img50.avif',
    'images/img51.avif',
    'images/img52.avif',
    'images/img53.avif',
    'images/img54.avif',
    'images/img55.avif',
    'images/img56.avif',
    'images/img57.avif'
  ];
  imageUrls.forEach((url, index) => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = `Image ${index + 4}`;
    container1.appendChild(img);
  });
  popup1.style.display = 'block';
}

function hidePopup2() {
  document.getElementById('popup2').style.display = 'none';
}

// ad
document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.getElementById('closeBtn');
  if (closeBtn) { // check if it exists
    closeBtn.addEventListener('click', function () {
      const adContainer = document.getElementById('adContainer');
      if (adContainer) adContainer.style.display = 'none';
    });
  }
});


// profile page
document.getElementById('profileBtn').addEventListener('click', function () {
    const overlay = document.getElementById('overlay');
    const editForm = document.getElementById('editForm');

    // Hide edit form if open
    if (editForm.style.display === 'block') {
        editForm.style.display = 'none';
    }

    // Toggle overlay visibility
    overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';

    // Always show profile popup when overlay opens
    document.getElementById('profilePopup').style.display = 'block';
});

function openEditForm() {
    // Hide profile popup, show edit form inside the overlay
    document.getElementById('profilePopup').style.display = 'none';
    document.getElementById('editForm').style.display = 'block';
    // Pre-fill inputs
    document.getElementById('nameInput').value = document.getElementById('displayName').innerText;
    document.getElementById('roleInput').value = document.getElementById('displayRole').innerText;
    document.getElementById('emailInput').value = document.getElementById('displayEmail').innerText;
    document.getElementById('addressInput').value = document.getElementById('displayAddress').innerText;
}

function saveProfile() {
    // Get input values
    const name = document.getElementById('nameInput').value;
    const role = document.getElementById('roleInput').value;
    const email = document.getElementById('emailInput').value;
    const address = document.getElementById('addressInput').value;

    // Update display
    document.getElementById('displayName').innerText = name;
    document.getElementById('displayRole').innerText = role;
    document.getElementById('displayEmail').innerText = email;
    document.getElementById('displayAddress').innerText = address;

    // Show profile popup and hide edit form
    document.getElementById('profilePopup').style.display = 'block';
    document.getElementById('editForm').style.display = 'none';
}

function cancelEdit() {
    // Hide edit form and show profile popup
    document.getElementById('editForm').style.display = 'none';
    document.getElementById('profilePopup').style.display = 'block';
}

function closeProfile() {
    // Close the whole overlay (and everything inside it)
    document.getElementById('overlay').style.display = 'none';
}

// for local storage of profile
// Load profile from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    const profile = JSON.parse(localStorage.getItem('profile'));
    if (profile) {
        document.getElementById('displayName').innerText = profile.name;
        document.getElementById('displayRole').innerText = profile.role;
        document.getElementById('displayEmail').innerText = profile.email;
        document.getElementById('displayAddress').innerText = profile.address;
    }
});

function saveProfile() {
    const name = document.getElementById('nameInput').value;
    const role = document.getElementById('roleInput').value;
    const email = document.getElementById('emailInput').value;
    const address = document.getElementById('addressInput').value;

    // Update display
    document.getElementById('displayName').innerText = name;
    document.getElementById('displayRole').innerText = role;
    document.getElementById('displayEmail').innerText = email;
    document.getElementById('displayAddress').innerText = address;

    // Save permanently in localStorage
    localStorage.setItem('profile', JSON.stringify({
        name, role, email, address
    }));

    // Show profile popup and hide edit form
    document.getElementById('profilePopup').style.display = 'block';
    document.getElementById('editForm').style.display = 'none';
}

// add client images

// product 1 — women
async function showPopup() {
  const popup = document.getElementById('popup');
  const container = document.getElementById('popup-images');
  container.innerHTML = '';

  // fetch women images from API
  const res = await fetch(`${API_URL}?category=women`);
  const images = await res.json();

  images.forEach(img => {
    const image = document.createElement('img');
    image.src = UPLOADS_URL + img.filename;
    image.alt = img.category;
    container.appendChild(image);
  });

  popup.style.display = 'block';
}
function hidePopup() {
  document.getElementById('popup').style.display = 'none';
}

// product 2 — men
async function showPopup1() {
  const popup1 = document.getElementById('popup1');
  const container1 = document.getElementById('popup-images1');
  container1.innerHTML = '';

  const res = await fetch(`${API_URL}?category=men`);
  const images = await res.json();

  images.forEach(img => {
    const image = document.createElement('img');
    image.src = UPLOADS_URL + img.filename;
    image.alt = img.category;
    container1.appendChild(image);
  });

  popup1.style.display = 'block';
}
function hidePopup1() {
  document.getElementById('popup1').style.display = 'none';
}

// product 3 — kids
async function showPopup2() {
  const popup2 = document.getElementById('popup2');
  const container2 = document.getElementById('popup-images2');
  container2.innerHTML = '';

  const res = await fetch(`${API_URL}?category=kids`);
  const images = await res.json();

  images.forEach(img => {
    const image = document.createElement('img');
    image.src = UPLOADS_URL + img.filename;
    image.alt = img.category;
    container2.appendChild(image);
  });

  popup2.style.display = 'block';
}
function hidePopup2() {
  document.getElementById('popup2').style.display = 'none';
}

const API_URL = 'http://localhost:5000/api/images'; // adjust if different
const UPLOADS_URL = 'http://localhost:5000/uploads/';

// product 1 — women
async function showPopup() {
  const popup = document.getElementById('popup');
  const container = document.getElementById('popup-images');
  container.innerHTML = '';

  // your existing 29 hard-coded images
  const imageUrls = [
    'images/img1.avif',
    'images/img2.avif',
    'images/img3.avif',
    'images/img4.avif',
    'images/img5.avif',
    'images/img6.avif',
    'images/img7.avif',
    'images/img8.avif',
    'images/img9.avif',
    'images/img10.avif',
    'images/img11.avif',
    'images/img12.avif',
    'images/img13.avif',
    'images/img14.avif',
    'images/img15.avif',
    'images/img16.avif',
    'images/img17.avif',
    'images/img18.avif',
    'images/img19.avif',
    'images/img20.avif',
    'images/img21.avif',
    'images/img22.avif',
    'images/img23.avif',
    'images/img24.avif',
    'images/img25.avif',
    'images/img26.avif',
    'images/img27.avif',
    'images/img28.avif',
    'images/img29.avif'
  ];

  // append old images first
  imageUrls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    container.appendChild(img);
  });

  // now fetch uploaded images from server
  const res = await fetch(`${API_URL}?category=women`);
  const uploaded = await res.json();
  uploaded.forEach(file => {
    const img = document.createElement('img');
    img.src = UPLOADS_URL + file.filename;
    container.appendChild(img);
  });

  popup.style.display = 'block';
}

function hidePopup() {
  document.getElementById('popup').style.display = 'none';
}

// product 2 — men
async function showPopup1() {
  const popup1 = document.getElementById('popup1');
  const container1 = document.getElementById('popup-images1');
  container1.innerHTML = '';

  const imageUrls = [
    'images/img30.avif',
    'images/img31.avif',
    'images/img32.avif',
    'images/img33.avif',
    'images/img34.avif',
    'images/img35.avif',
    'images/img36.avif',
    'images/img37.avif',
    'images/img38.avif',
    'images/img39.avif',
    'images/img40.avif',
    'images/img41.avif',
    'images/img42.avif',
    'images/img43.avif',
    'images/img44.avif',
    'images/img45.avif'
  ];

  imageUrls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    container1.appendChild(img);
  });

  const res = await fetch(`${API_URL}?category=men`);
  const uploaded = await res.json();
  uploaded.forEach(file => {
    const img = document.createElement('img');
    img.src = UPLOADS_URL + file.filename;
    container1.appendChild(img);
  });

  popup1.style.display = 'block';
}

function hidePopup1() {
  document.getElementById('popup1').style.display = 'none';
}

// product 3 — kids
async function showPopup2() {
  const popup2 = document.getElementById('popup2');
  const container2 = document.getElementById('popup-images2');
  container2.innerHTML = '';

  const imageUrls = [
    'images/img46.avif',
    'images/img47.avif',
    'images/img48.avif',
    'images/img49.avif',
    'images/img50.avif',
    'images/img51.avif',
    'images/img52.avif',
    'images/img53.avif',
    'images/img54.avif',
    'images/img55.avif',
    'images/img56.avif',
    'images/img57.avif'
  ];

  imageUrls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    container2.appendChild(img);
  });

  const res = await fetch(`${API_URL}?category=kids`);
  const uploaded = await res.json();
  uploaded.forEach(file => {
    const img = document.createElement('img');
    img.src = UPLOADS_URL + file.filename;
    container2.appendChild(img);
  });

  popup2.style.display = 'block';
}

function hidePopup2() {
  document.getElementById('popup2').style.display = 'none';
}
app.get('/api/images', async (req, res) => {
  const category = req.query.category;
  const images = await ImageModel.find({ category });
  res.json(images);
});
// when appending uploaded images
uploaded.forEach(file => {
  const img = document.createElement('img');
  img.src = UPLOADS_URL + file.filename;
  img.alt = file.category;
  img.classList.add('popup-img'); // optional, for clarity
  container.appendChild(img);
});

