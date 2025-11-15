document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('wishlist-container');

  // Load and render wishlist from MongoDB
  async function loadWishlist() {
    try {
      const res = await fetch('/api/wishlist');
      const items = await res.json();
      container.innerHTML = ''; // clear old content

      items.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('wishlist-item');

        div.innerHTML = `
          <img src="${item.image}" alt="${item.title}" width="150">
          <h3>${item.title}</h3>
          <p>Price: ₹${item.price}</p>
          <a href="${item.link}" target="_blank"><button>Shop Now</button></a>
          <button class="remove-btn" data-id="${item._id}">Remove</button>
          <hr>
        `;

        // attach remove handler
        div.querySelector('.remove-btn').addEventListener('click', async () => {
          try {
            const res = await fetch(`/api/wishlist/${item._id}`, { method: 'DELETE' });
            if (!res.ok) throw new Error('Delete failed');
            div.remove(); // remove from DOM
          } catch (err) {
            console.error(err);
            alert('Failed to remove');
          }
        });

        container.appendChild(div);
      });
    } catch (err) {
      console.error(err);
    }
  }

  loadWishlist();

  // Add new item to wishlist (MongoDB)
  document.querySelectorAll('.add-to-wishlist').forEach(button => {
    button.addEventListener('click', async () => {
      const item = {
        title: button.dataset.title,
        price: Number(button.dataset.price),
        image: button.dataset.image,
        link: button.dataset.link
      };

      try {
        const res = await fetch('/api/wishlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item)
        });
        const saved = await res.json();
        alert('Added to wishlist!');
        loadWishlist(); // reload after adding
      } catch (err) {
        console.error(err);
        alert('Failed to add');
      }
    });
  });
});
