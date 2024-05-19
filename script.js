document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector(".carousel");
    let items = carousel.querySelectorAll(".item");
    let dotsContainer = document.querySelector(".dots");
  
    // Insert dots into the DOM
    items.forEach((_, index) => {
      let dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
    });
  
    let dots = document.querySelectorAll(".dot");
  
    // Function to show a specific item
    function showItem(index) {
      items.forEach((item, idx) => {
        item.classList.remove("active");
        dots[idx].classList.remove("active");
        if (idx === index) {
          item.classList.add("active");
          dots[idx].classList.add("active");
        }
      });
    }
  
    // Event listeners for buttons
    document.querySelector(".prev").addEventListener("click", () => {
      let index = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      showItem((index - 1 + items.length) % items.length);
    });
  
    document.querySelector(".next").addEventListener("click", () => {
      let index = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      showItem((index + 1) % items.length);
    });
  
    // Event listeners for dots
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        let index = parseInt(dot.dataset.index);
        showItem(index);
      });
    });
  });

  
// INCIO POP-UP DE LOGIN

// Função para verificar se o pop-up deve ser exibido
function checkPopupDisplay() {
    const popupWrapper = document.getElementById("popupWrapper");
    if (popupWrapper.style.display === "block") {
      popupWrapper.style.display = "none"; // Esconde o pop-up se estiver visível
    }
  }
  
  // Executa a verificação ao carregar a página
  window.addEventListener("load", checkPopupDisplay);
  
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');
  
  signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
  });
  
  signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
  });
  
  // Definindo variáveis do pop-up de login
  const loginIcon = document.getElementById("loginBtn");
  const popupWrapper = document.getElementById("popupWrapper");
  const closeBtn = document.getElementById("closeBtn");
  
  function showPopup() {
      popupWrapper.style.display = "block";
  }
  
  function hidePopup() {
      popupWrapper.style.display = "none";
  }
  
  // Adicionando um ouvinte de evento para o botão de login
  loginIcon.addEventListener("click", function(event) {
    event.preventDefault(); // Evita a ação padrão do link
    showPopup(); // Mostra o pop-up
  });
  
  closeBtn.addEventListener("click", hidePopup);
  
  // Responsive Toggle Navigation =============================================
  let menuIcon = document.querySelector('.menuIcon');
  let nav = document.querySelector('.overlay-menu');
  
  menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
      nav.style.transform = 'translateX(0%)';
      nav.style.transition = 'transform 0.2s ease-out';
    } else {
      nav.style.transform = 'translateX(-100%)';
      nav.style.transition = 'transform 0.2s ease-out';
    }
  });
  

  // Alert Senha

  function showAlert() {
    alert("O suporte entrará em contato com você em breve!");
}
