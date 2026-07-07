function showPage(pageId) {
  // Hide all views
  const pages = document.querySelectorAll('.page-view');
  pages.forEach(page => page.classList.remove('active-view'));

  // Target single selected viewport
  const targetPage = document.getElementById('page-' + pageId);
  if (targetPage) {
    targetPage.classList.add('active-view');
  }

  // Strip links active highlights
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => link.classList.remove('active'));
  
  // Assign highlight target
  const activeLink = document.getElementById('nav-' + pageId);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  // View reset smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Make sure browser treats the inline attributes as a global execution block
window.showPage = showPage;