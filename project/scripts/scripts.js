function navEffect(x) {
  x.classList.toggle("change");
  
  const sidebar = document.getElementById('sidebar');
  
  sidebar.classList.toggle('show');
  
  document.body.classList.toggle('blur');
}

addEventListener('DOMContentLoaded', function() {
  document.getElementById('currentyear').textContent = new Date().getFullYear();
})