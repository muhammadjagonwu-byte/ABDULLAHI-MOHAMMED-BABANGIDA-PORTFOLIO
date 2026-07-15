function showPage(pageId) {
    const pages = document.querySelectorAll('.page-view');
  pages.forEach(page => page.classList.remove('active-view'));


  const targetPage = document.getElementById('page-' + pageId);
  if (targetPage) {
    targetPage.classList.add('active-view');
  }

  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => link.classList.remove('active'));
  
 
  const activeLink = document.getElementById('nav-' + pageId);
  if (activeLink) {
    activeLink.classList.add('active');
  }

 
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


window.showPage = showPage;
