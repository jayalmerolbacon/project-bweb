const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

// Toggle sidebar open/close
function toggleSidebar() {
  sidebar.classList.toggle('close');
  toggleButton.classList.toggle('rotate');
}

// Submenu toggle (optional if you add dropdowns later)
function toggleSubMenu(button) {
  const subMenu = button.nextElementSibling;
  if (!subMenu.classList.contains('show')) {
    closeAllSubMenus();
  }
  subMenu.classList.toggle('show');
  button.classList.toggle('rotate');

  if (sidebar.classList.contains('close')) {
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
  }
}

// Close all submenus
function closeAllSubMenus() {
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show');
    ul.previousElementSibling.classList.remove('rotate');
  });
}

// Highlight active sidebar link
const listItems = document.querySelectorAll('#sidebar ul li');

listItems.forEach(item => {
  item.addEventListener('click', function () {
    const currentActive = document.querySelector('#sidebar ul li.active');
    if (currentActive) {
      currentActive.classList.remove('active');
    }
    this.classList.add('active');
  });
});
