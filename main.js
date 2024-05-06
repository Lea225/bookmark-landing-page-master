document.addEventListener('DOMContentLoaded', function () {

  const hamburgerIcon = document.querySelector('.icon-hamburger');
  const closeIcon = document.querySelector('.icon-close');
  const mobileMenu = document.querySelector('.mobile-menu');

    function openMobileMenu() {
      mobileMenu.style.display = 'flex';
      hamburgerIcon.style.display = 'none';
      closeIcon.style.display = 'block';
  }

  // Fonction pour fermer le menu mobile et l'overlay
  function closeMobileMenu() {
      mobileMenu.style.display = 'none';
      hamburgerIcon.style.display = 'block';
      closeIcon.style.display = 'none';
  }

    // Ajoutez un écouteur d'événements au clic sur l'icône hamburger
    hamburgerIcon.addEventListener('click', openMobileMenu);

    // Ajoutez un écouteur d'événements au clic sur l'icône close
    closeIcon.addEventListener('click', closeMobileMenu);

 const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(faqItem => {
    const question = faqItem.querySelector('.question');
    const answer = faqItem.querySelector('.answer');
    const iconArrow = question.querySelector('.icon-arrow');

    question.addEventListener('click', function() {
      // Toggle l'affichage de la réponse
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        iconArrow.style.transform = 'rotate(0deg)';
        iconArrow.classList.remove('active'); // Supprimer la classe active
      } else {
        answer.style.display = 'block';
        iconArrow.classList.add('active'); // Ajouter la classe active
        iconArrow.style.transform = 'rotate(180deg)';
      }
    });
  });

const toggleSections = document.querySelectorAll('.toggle-section');

  toggleSections.forEach(toggleSection => {
    toggleSection.addEventListener('click', function(event) {
      event.preventDefault();
      const target = this.getAttribute('data-target');
      const section = document.querySelector('.' + target);
      if (section) {
        // Masquer toutes les sections
        const sections = document.querySelectorAll('.bookmarking, .searching, .sharing');
        sections.forEach(section => {
          section.style.display = 'none';
        });
        // Afficher la section cible
        section.style.display = 'flex';
      }
    });
  });

  const emailInput = document.getElementById('emailInput');
  const submitButton = document.getElementById('submitButton');
  const errorMessage = document.getElementById('errorMessage');
  const errorIcon = document.getElementById('errorIcon');

  submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Empêcher l'envoi du formulaire

    const email = emailInput.value.trim();

    // Vérifier si le champ email est vide
    if (email === '') {
      emailInput.classList.add('input-error'); // Ajouter la classe pour la bordure rouge
      errorMessage.textContent = 'Please enter your email address.';
      errorMessage.style.display = 'block';
      errorIcon.style.display = 'flex';
      return; // Arrêter l'exécution de la fonction
    }

    // Vérifier si l'email est valide
    if (!validateEmail(email)) {
      emailInput.classList.add('input-error'); // Ajouter la classe pour la bordure rouge
      errorMessage.textContent = 'Please enter a valid email address.';
      errorMessage.style.display = 'block';
      errorIcon.style.display = 'block';
      return; // Arrêter l'exécution de la fonction
    }

    // Réinitialiser le champ et les messages d'erreur s'il y en avait un précédemment
    emailInput.classList.remove('input-error'); // Supprimer la classe pour la bordure rouge
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
    errorIcon.style.display = 'none';

    // Envoyer le formulaire si tout est valide (non inclus dans cet exemple)
    // Form.submit();
  });

  // Fonction pour valider l'email
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});