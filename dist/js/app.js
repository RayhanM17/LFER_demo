const menuBtn = document.querySelector('.bi-list');

menuBtn.addEventListener('click', (e) => {
  let list = document.querySelector('.nav-list')

  if(e.target.classList.contains('bi-list')) {
    e.target.classList.replace('bi-list', 'bi-x')
    list.classList.replace('top-[-400px]', 'top-[100px]')
    list.classList.replace('opacity-0', 'opacity-100')
  } else {
    e.target.classList.replace('bi-x', 'bi-list')
    list.classList.replace('top-[100px]', 'top-[-400px]')
    list.classList.replace('opacity-100', 'opacity-0')
  }
})