const sidebarBtns = [];
const optionBtn = document.querySelector('.search-room__option-btn');
const btnCloseSidebar = document.getElementById('btnCloseSidebar');

sidebarBtns.push(optionBtn, btnCloseSidebar);

// eslint-disable-next-line no-restricted-syntax
for (const btn of sidebarBtns) {
  if (btn) {
    btn.addEventListener('click', () => {
      const sidebar = document.querySelector('.search-room__sidebar');
      sidebar.classList.toggle('search-room__sidebar--active');
    });
  }
}
