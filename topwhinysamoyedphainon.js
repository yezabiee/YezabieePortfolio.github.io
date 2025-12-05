function showTab(tab) {
  // Hide all content divs in the content area
  const contentArea = document.querySelector('.content');
  if (contentArea) {
    const allDivs = contentArea.querySelectorAll('div[id]');
    allDivs.forEach(div => {
      div.style.display = 'none';
    });
  }
  
  // Show the selected tab
  const targetTab = document.getElementById(tab);
  if (targetTab) {
    targetTab.style.display = 'block';
  }
}

function toggleSubmenu(btn) {
  const parent = btn.closest('.more-wrapper');
  const submenu = parent ? parent.querySelector('.submenu') : null;
  
  // Close all other submenus
  const allSubmenus = document.querySelectorAll('.submenu');
  allSubmenus.forEach(menu => {
    if (menu !== submenu) {
      menu.style.display = 'none';
    }
  });
  
  // Toggle current submenu
  if (submenu) {
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
  }
}