function showTab(tab) {
    const sections = document.querySelectorAll('.content > div');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('life').style.display = 'none';
    document.getElementById('personal').style.display = 'none';
    document.getElementById('future').style.display = 'none';
    document.getElementById('values').style.display = 'none';
    document.getElementById('personality').style.display = 'none';
    document.getElementById('character').style.display = 'none';
    document.getElementById('learning').style.display = 'none';
    document.getElementById('crochet').style.display = 'none';
    document.getElementById('crafts').style.display = 'none';
    document.getElementById(tab).style.display = 'block';
}

function toggleSubmenu(btn) {
    const submenu = btn.nextElementSibling;
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}