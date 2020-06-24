const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (id) {
    // remove active from all buttons and add to current
    btns.forEach((btn) => {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });
    // hide all articles and show current
    articles.forEach((article) => {
      article.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active');
  }
});
