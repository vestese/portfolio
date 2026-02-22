/**
 * ============================================================
 * PORTFOLIO - Steve Kabore Aymar Séraphin
 * Fichier : script.js
 * Rôle    : Ajoute les interactions et animations du site
 * ============================================================
 *
 * Ce fichier contient 5 fonctionnalités principales :
 *  1. Navigation fluide (clic → scroll vers la section)
 *  2. Menu hamburger (ouverture/fermeture sur mobile)
 *  3. Filtre de projets (Réseaux / Programmation / Électronique)
 *  4. Scroll spy (bouton actif selon la section visible)
 *  5. Animations au scroll (apparition des cartes)
 */


/* ──────────────────────────────────────────────────────────────
   On attend que tout le HTML soit chargé avant d'exécuter le code.
   "DOMContentLoaded" est un événement qui se déclenche quand
   le navigateur a fini de lire tout le HTML.
   ────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {


  /* ──────────────────────────────────────────────────────────
     1. RÉCUPÉRATION DES ÉLÉMENTS HTML
     "getElementById" cherche un élément par son attribut id=""
     "querySelectorAll" cherche TOUS les éléments qui correspondent
     au sélecteur CSS (comme en CSS : .classe, #id, balise)
     ────────────────────────────────────────────────────────── */

  // La barre de navigation (pour y ajouter une ombre au scroll)
  const navbar = document.getElementById('navbar');

  // Le bouton hamburger (les 3 traits sur mobile)
  const navToggle = document.getElementById('navToggle');

  // Le conteneur des boutons de nav (qui s'ouvre/ferme sur mobile)
  const navLinks = document.getElementById('navLinks');

  // Tous les boutons de navigation (Présentation, Compétences, Projets, Contact)
  // querySelectorAll retourne une liste (NodeList) de tous les éléments trouvés
  const navBtns = document.querySelectorAll('.nav-btn');

  // Tous les boutons de filtre des projets (Réseaux, Programmation, Électronique)
  const filterBtns = document.querySelectorAll('.btn-filter');

  // Toutes les catégories de projets (les divs cachés/affichés selon le filtre)
  const categories = document.querySelectorAll('.projet-category');

  // Le bouton "Me contacter" dans le hero
  const heroContactBtn = document.getElementById('heroContactBtn');

  // Le formulaire de contact
  const contactForm = document.getElementById('contactForm');


  /* ──────────────────────────────────────────────────────────
     2. DICTIONNAIRE : ID du bouton → Section cible
     Un objet JavaScript {} fonctionne comme un dictionnaire :
     clé: valeur
     Ici on associe l'id de chaque bouton à la section HTML
     vers laquelle il doit faire défiler la page.
     "querySelector('#presentation')" cherche l'élément avec id="presentation"
     ────────────────────────────────────────────────────────── */
  const sections = {
    Bouttonpresentation: document.querySelector('#presentation'),  // Section À propos
    Bouttoncompetence: document.querySelector('#competences'),   // Section Compétences
    Bouttonprojet: document.querySelector('#projets'),       // Section Projets
    Bouttoncontact: document.querySelector('#contact'),       // Section Contact
  };


  /* ──────────────────────────────────────────────────────────
     3. NAVIGATION PRINCIPALE : scroll fluide au clic
     ".forEach" parcourt chaque bouton de la liste navBtns
     ".addEventListener('click', ...)" écoute le clic sur le bouton
     "scrollIntoView" fait défiler la page jusqu'à l'élément cible
     ────────────────────────────────────────────────────────── */
  navBtns.forEach(btn => {
    // Pour chaque bouton de navigation...
    btn.addEventListener('click', () => {
      // On récupère la section correspondante à cet id de bouton
      // btn.id contient l'id HTML du bouton (ex: "Bouttonpresentation")
      const target = sections[btn.id];

      // On vérifie que la section existe (sécurité)
      if (target) {
        // Fait défiler doucement jusqu'à la section
        target.scrollIntoView({ behavior: 'smooth' });
      }

      // Ferme le menu déroulant sur mobile après avoir cliqué
      // classList.remove() supprime une classe CSS d'un élément
      navLinks.classList.remove('open');
    });
  });


  /* ──────────────────────────────────────────────────────────
     4. MENU HAMBURGER (ouverture/fermeture sur mobile)
     "classList.toggle('open')" :
       - Si la classe "open" est absente → elle est ajoutée (menu s'ouvre)
       - Si la classe "open" est présente → elle est retirée (menu se ferme)
     ────────────────────────────────────────────────────────── */
  navToggle.addEventListener('click', () => {
    // Bascule l'état ouvert/fermé du menu
    navLinks.classList.toggle('open');
  });

  // Ferme le menu si on clique n'importe où en dehors de la navbar
  document.addEventListener('click', (e) => {
    // "navbar.contains(e.target)" vérifie si le clic s'est produit
    // à l'intérieur de la navbar (true) ou en dehors (false)
    if (!navbar.contains(e.target)) {
      // Si le clic est en dehors, on ferme le menu
      navLinks.classList.remove('open');
    }
  });


  /* ──────────────────────────────────────────────────────────
     5. BOUTON CONTACT DANS LE HERO
     Le bouton "Me contacter" fait défiler jusqu'à la section contact
     ────────────────────────────────────────────────────────── */
  if (heroContactBtn) { // Si le bouton existe dans le HTML
    heroContactBtn.addEventListener('click', () => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    });
  }


  /* ──────────────────────────────────────────────────────────
     6. FILTRE DE PROJETS
     Quand on clique sur "Réseaux", on affiche .projet-category[data-category="reseaux"]
     et on cache les autres.
     ────────────────────────────────────────────────────────── */

  // Affiche la première catégorie par défaut au chargement de la page
  const firstCategory = document.querySelector('.projet-category');
  if (firstCategory) {
    // Ajoute la classe "active" → le CSS affiche cet élément (display: grid)
    firstCategory.classList.add('active');
  }

  // Pour chaque bouton de filtre...
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Récupère la valeur de l'attribut data-filter="" du bouton cliqué
      // Ex: <button data-filter="reseaux"> → filter = "reseaux"
      const filter = btn.dataset.filter;

      // Retire la classe "active" de TOUS les boutons de filtre
      filterBtns.forEach(b => b.classList.remove('active'));
      // Ajoute "active" uniquement sur le bouton cliqué
      btn.classList.add('active');

      // Pour chaque catégorie de projet...
      categories.forEach(cat => {
        // Vérifie si l'attribut data-category correspond au filtre choisi
        // Ex: <div data-category="reseaux">
        if (cat.dataset.category === filter) {
          cat.classList.add('active');    // Affiche cette catégorie
        } else {
          cat.classList.remove('active'); // Cache les autres
        }
      });
    });
  });


  /* ──────────────────────────────────────────────────────────
     7. SCROLL SPY : bouton actif selon la section visible
     "window.addEventListener('scroll', ...)" s'exécute chaque fois
     que l'utilisateur fait défiler la page.
     ────────────────────────────────────────────────────────── */

  // Liste des sections avec leur bouton de navigation correspondant
  const sectionsList = [
    { el: document.querySelector('#accueil'), id: null },
    // id: null → aucun bouton pour l'accueil (page de départ)

    { el: document.querySelector('#presentation'), id: 'Bouttonpresentation' },
    // Quand on est dans #presentation → le bouton id="Bouttonpresentation" devient actif

    { el: document.querySelector('#competences'), id: 'Bouttoncompetence' },
    { el: document.querySelector('#projets'), id: 'Bouttonprojet' },
    { el: document.querySelector('#contact'), id: 'Bouttoncontact' },
  ];

  // S'exécute à chaque défilement de page
  window.addEventListener('scroll', () => {
    // window.scrollY = nombre de pixels défilés depuis le haut de la page
    // On ajoute 100 pour anticiper légèrement (la section est "active"
    // avant d'atteindre exactement le haut)
    const scrollY = window.scrollY + 100;

    /* ── Ombre sous la navbar après 20px de scroll ── */
    if (window.scrollY > 20) {
      // Ajoute une ombre portée quand on a défilé
      navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
    } else {
      // Supprime l'ombre quand on est tout en haut
      navbar.style.boxShadow = 'none';
    }

    /* ── Détecte la section actuellement visible ── */
    let current = null; // Contiendra l'id du bouton à activer

    // Pour chaque section de la liste...
    sectionsList.forEach(({ el, id }) => {
      // el.offsetTop = distance en pixels depuis le haut de la page
      // Si on a défilé au-delà du début de cette section...
      if (el && el.offsetTop <= scrollY) {
        current = id; // Cette section est la dernière atteinte
        // On continue donc "current" sera la section la plus basse atteinte
      }
    });

    // Met à jour l'apparence de chaque bouton de navigation
    navBtns.forEach(btn => {
      // btn.id === current → true si ce bouton correspond à la section visible
      // classList.toggle(classe, condition) : ajoute si true, retire si false
      btn.classList.toggle('active', btn.id === current);
    });
  });


  /* ──────────────────────────────────────────────────────────
     8. FORMULAIRE DE CONTACT
     Si le site est hébergé sur Netlify, il gère la soumission
     automatiquement (grâce à data-netlify="true").
     Sinon, on affiche un message de confirmation simple.
     ────────────────────────────────────────────────────────── */
  if (contactForm) { // Si le formulaire existe dans le HTML
    contactForm.addEventListener('submit', (e) => {
      // Vérifie si Netlify est disponible (attribut data-netlify)
      if (!contactForm.dataset.netlify) {
        // Pas sur Netlify → on gère nous-mêmes la soumission
        e.preventDefault(); // Empêche le rechargement de la page

        // Récupère les valeurs des champs
        // .value = contenu tapé par l'utilisateur
        // .trim() = supprime les espaces au début et à la fin
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Si tous les champs sont remplis...
        if (name && email && message) {
          // Affiche une alerte de confirmation
          alert(`Merci ${name} ! Votre message a bien été envoyé. Je vous répondrai à ${email} dès que possible.`);

          // Vide le formulaire après envoi
          contactForm.reset();
        }
      }
      // Si data-netlify est présent : Netlify gère la soumission automatiquement
    });
  }


  /* ──────────────────────────────────────────────────────────
     9. ANIMATIONS AU SCROLL (Intersection Observer)
     IntersectionObserver détecte quand un élément entre dans
     le champ de vision (viewport) de l'utilisateur.
     C'est plus efficace que d'écouter l'événement "scroll"
     pour chaque élément (moins de calculs = meilleures performances).
     ────────────────────────────────────────────────────────── */

  // Sélectionne tous les éléments qui doivent s'animer à l'apparition
  const animateOnScroll = document.querySelectorAll(
    '.skill-card, .project-card, .presentationTexte, .presentation_image, .contact_formulaire, .contact-info'
  );

  // Vérifie que le navigateur supporte IntersectionObserver
  // (tous les navigateurs modernes le supportent)
  if ('IntersectionObserver' in window) {

    // Crée un observateur avec une fonction callback
    const observer = new IntersectionObserver((entries) => {
      // "entries" = liste des éléments observés qui ont changé d'état

      entries.forEach(entry => {
        // entry.isIntersecting = true si l'élément est visible à l'écran
        if (entry.isIntersecting) {
          // L'élément est visible → on l'anime (revient à sa position normale)
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';

          // On arrête d'observer cet élément (l'animation ne se rejoue qu'une fois)
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
      // L'animation se déclenche quand 10% de l'élément est visible à l'écran
    });

    // Pour chaque élément à animer...
    animateOnScroll.forEach(el => {
      // État initial : invisible et décalé vers le bas
      el.style.opacity = '0';                    // Invisible
      el.style.transform = 'translateY(25px)';   // 25px plus bas que sa position normale

      // Transition : l'animation dure 0.6 secondes
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

      // On commence à observer cet élément
      observer.observe(el);
    });
  }


}); // Fin du DOMContentLoaded
