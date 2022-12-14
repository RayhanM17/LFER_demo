const menuBtn = document.querySelector('.bi-list');

menuBtn.addEventListener('click', (e) => {
  let list = document.querySelector('.nav-list')

  if(e.target.classList.contains('bi-list')) {
    e.target.classList.replace('bi-list', 'bi-x')
    list.classList.replace('top-[-400px]', 'top-[100px]')
    list.classList.replace('z-[-1]', 'z-[1]')
    list.classList.replace('opacity-0', 'opacity-100')
  } else {
    e.target.classList.replace('bi-x', 'bi-list')
    list.classList.replace('top-[100px]', 'top-[-400px]')
    list.classList.replace('z-[1]', 'z-[-1]')
    list.classList.replace('opacity-100', 'opacity-0')
  }
})


// Form Validation

if(document.querySelector('body').classList.contains('contact-body')){
  const alertPlaceholder = document.getElementById('alert-container');

  const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
    setTimeout(() => {
      alertPlaceholder.removeChild(wrapper);
    }, 3000);
  }

  // Get form
  const form = document.getElementById('contact-form');

  // Form Blur Event Listeners
  document.getElementById('email').addEventListener('blur', validateEmail);
  document.getElementById('name').addEventListener('blur', validateName);
  document.getElementById('message').addEventListener('blur', validateMsg);

  function validateMsg() {
    const msg = document.getElementById('message');
    const re = /^[\s\S]{2,400}$/;

    if(!re.test(msg.value)) {
      msg.classList.add('is-invalid'); 
    } else {
      msg.classList.remove('is-invalid'); 
    }
  }

  function validateName() {
    const name = document.getElementById('name');
    const re = /^[\s\S]{2,20}$/;

    if(!re.test(name.value)) {
      name.classList.add('is-invalid'); 
    } else {
      name.classList.remove('is-invalid'); 
    }
  }

  function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)) {
      email.classList.add('is-invalid');  
    } else {
      email.classList.remove('is-invalid'); 
    }
  }

  // Submit Event

  form.addEventListener('submit', function (e) {

    // Validate
    validateMsg();
    validateEmail();
    validateName();

    const inputs = document.querySelectorAll('input');

    // Loop through all inputs
    let count = 0;
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].classList.contains('is-invalid')) 
        count++;
    }

    if (count > 0) {
      e.stopPropagation();
      alert('Please Fill In All fields correctly', 'danger')
    } else {
      alert('Form Submitted', 'success')
      form.submit();
    }
    
    e.preventDefault();
  });
}

// Map
if(document.querySelector('body').classList.contains('services-body')){ 
  var map = L.map('map').setView([25.991650, -80.203550], 12);

  L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=fN667Qw1rWdexiPqfieL', {
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }).addTo(map);

  var customIcon = L.icon({
    iconUrl: './assets/logo-sm.png',

    iconSize:     [48, 65], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
});

  var marker = L.marker([25.991650, -80.203550], {icon: customIcon}).addTo(map);

  // var polygon = L.polygon([
  //   [26.35484385, -80.29658562],
  //   [26.3274, -80.2019],
  //   [26.1846, -80.2993],
  //   [26.1236, -80.3428],
  //   [26.1386, -80.4241],
  //   [26.32080112, -80.07535283],
  // ]).addTo(map);
}

if(document.querySelector('body').classList.contains('homepage-body')){ 
  var branding = document.querySelector('nav .logo');

  window.onscroll = function() {
    windowScroll();
  };

  function windowScroll() { 
    branding.classList.toggle("test-2", branding.scrollTop > 50 || document.documentElement.scrollTop > 50);
  }
}