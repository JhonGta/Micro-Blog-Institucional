const API_URL = 'http://localhost:3001/api/posts';

async function fetchPosts() {
  const res = await fetch(API_URL);
  const posts = await res.json();
  const postsList = document.getElementById('postsList');
  postsList.innerHTML = '';
  posts.forEach(post => {
    const li = document.createElement('li');
    li.textContent = `${post.message} (${new Date(post.createdAt).toLocaleString()})`;
    postsList.appendChild(li);
  });
}

document.getElementById('postForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const message = document.getElementById('message').value;
  if (!message || message.length > 280) return alert('Mensaje inválido');
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  });
  if (res.ok) {
    document.getElementById('message').value = '';
    fetchPosts();
  } else {
    alert('Error al publicar el mensaje');
  }
});

fetchPosts();
