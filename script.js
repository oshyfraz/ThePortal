// script.js
function loadPageAsBlank(fileName) {
  console.log('Running Popout...')
  const win = window.open('about:blank', '_blank');

  if (!win) {
    alert('Pop-up blocked! Please allow pop-ups for this site.');
    return;
  }

  win.document.title = 'about:blank';

  win.document.body.style.margin = '0';
  win.document.body.style.height = '100vh';
  win.document.body.style.overflow = 'hidden';
  win.document.body.style.backgroundColor = '#000';

  const iframe = win.document.createElement('iframe');
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.style.outline = 'none';
  
  iframe.setAttribute('allow', 'fullscreen; pointer-lock');
  
  const currentPath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
  iframe.src = window.location.origin + currentPath + fileName;

  win.document.body.appendChild(iframe);
  console.log('Ran Popout.')
}

function toggleInfo() {
  const panel = document.getElementById('infoPanel');
  const button = document.querySelector('.dropdown-btn');
  
  panel.classList.toggle('open');
  
  if (panel.classList.contains('open')) {
    button.textContent = 'Client Information ▲';
  } else {
    button.textContent = 'Client Information ▼';
  }
}
