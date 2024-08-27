const form = document.getElementById('form');
const container = document.querySelector('.container');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	container.innerHTML = '<p>Thanks for your message. <br /> I\'ll get back to you soon. 😃</p>';
});