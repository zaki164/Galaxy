let mynav = document.querySelector('.mynav');
let sidebar = document.querySelector('.sidebar');
let mytoggle = document.querySelector('.mytoggle');
let navlinks = document.querySelectorAll('.nav li a');

// overlay
let overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

// handle toggler
mytoggle.addEventListener('click', function () {
  mytoggle.children[0].classList.toggle('fa-bars')
  mytoggle.children[0].classList.toggle('fa-xmark')
  sidebar.classList.toggle('open');
  document.querySelector('.overlay').classList.toggle('show');
})
document.addEventListener('click', e => {
  if (sidebar.classList.contains('open')) {
    if (e.target !== sidebar && e.target !== mytoggle) {
      mytoggle.click();
    }
  }
})

mytoggle.addEventListener('click', function(e) {
  e.stopPropagation();
})
sidebar.addEventListener('click', function(e) {
  e.stopPropagation();
})


// handle navbar background
window.onscroll = () => {
  if (scrollY == 0) {
    mynav.classList.remove('scroll')
  } else {
    mynav.classList.add('scroll')
  }
}

// handle sidebar links active class
function handlenavlinks(namepage) {
  navlinks.forEach(li => {
    li.classList.remove('active')
    if (li.textContent.toLowerCase() == namepage) {
      li.classList.add('active');
    }
  })
}
let path = window.location.pathname;
if (path.length == 1) {
  handlenavlinks('home')
} else {
  let page = path.split("/").pop();
  let pagename = page.split(".")[0].toLowerCase();
  handlenavlinks(pagename)
}


//  handle search
let inputsearch = document.querySelector('.search input');
let closesearch = document.querySelector('.search span');

if (inputsearch && closesearch) {
  inputsearch.addEventListener('input', () => {
    closesearch.classList.add('hasvalue')
    if (inputsearch.value == '') {
      closesearch.classList.remove('hasvalue')
    }
  })
  closesearch.addEventListener('click', () => {
    inputsearch.value = '';
    closesearch.classList.remove('hasvalue')
  })
}