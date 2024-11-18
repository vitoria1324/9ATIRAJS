// Função para animação suave de rolagem para as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Função para mostrar um alerta ao clicar no link de projeto (opcional)
  document.querySelectorAll('.projeto-card a').forEach(link => {
    link.addEventListener('click', () => {
      alert("Você será redirecionado para o projeto!");
    });
  });
  