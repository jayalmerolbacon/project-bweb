const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')
const help = document.getElementById('helpfunc')

function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotate')

  closeAllSubMenus()
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}

//active list selector
const listItems = document.querySelectorAll('.isActive');

        listItems.forEach(item => {
          item.addEventListener('click', function() {

          const currentActive = document.querySelector('.active');
          if (currentActive) {
            currentActive.classList.remove('active');
          }

        // Add 'active' class to the clicked item
        this.classList.add('active');
    });
});

//print click
const printPanel = document.getElementById('printPanel');
const printIcon = document.querySelector('.toPrint');
const printClose = document.querySelector('.close-print');

// open when clicking print icon
printIcon.addEventListener('click', () => {
    printPanel.classList.toggle('show');
    printIcon.classList.toggle('active')
});

// close the panel
printClose.addEventListener('click', () => {
    printPanel.classList.remove('show');
    printIcon.classList.remove('active')
});