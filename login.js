 document.addEventListener('DOMContentLoaded', () => {
  
    const navLinks = document.getElementById('company-links');
   const togglebtn = document.getElementById('nav-toggle');
    console.log('Button clicked!');
   togglebtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
  });
 })

  function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var toggleIcon = document.querySelector('.password-toggle');
    
    // Check if the password is currently visible
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.classList.add('fa-eye-slash');
      toggleIcon.classList.remove('fa-eye');
    } else {
      passwordInput.type = 'password';
      toggleIcon.classList.add('fa-eye');
      toggleIcon.classList.remove('fa-eye-slash');
    }
  }
  
