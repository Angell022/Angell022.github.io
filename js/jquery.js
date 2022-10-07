const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

function scrollHeader() {
  const nav = document.getElementById("header");

  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");

  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

/*============Validacion ============*/
const formulario = document.getElementById("formulario");

const userName = document.getElementById("user");
const userEmail = document.getElementById("mail");

const alertSuccess = document.getElementById("alertSuccess");
const alertName = document.getElementById("alertName");
const alertEmail = document.getElementById("alertEmail");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Mensaje enviado con éxito";
};
const pintarMensajeError = (errores) => {
  errores.forEach((item) => {
      item.tipo.classList.remove("d-none");
      item.tipo.textContent = item.msg;
  });
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  alertSuccess.classList.add("d-none");
  const errores = [];

  // validar nombre
  if (!regUserName.test(userName.value) || !userName.value.trim()) {
      userName.classList.add("is-invalid");

      errores.push({
          tipo: alertName,
          msg: "Formato no válido, solo letras",
      });
  } else {
      userName.classList.remove("is-invalid");
      userName.classList.add("is-valid");
      alertName.classList.add("d-none");
  }

  // validar email
  if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
      userEmail.classList.add("is-invalid");

      errores.push({
          tipo: alertEmail,
          msg: "Escriba un correo válido",
      });
  } else {
      userEmail.classList.remove("is-invalid");
      userEmail.classList.add("is-valid");
      alertEmail.classList.add("d-none");
  }

  if (errores.length !== 0) {
      pintarMensajeError(errores);
      return;
  }

  //console.log("Formulario enviado con éxito");
  pintarMensajeExito();
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.home__data, .home__img,
            .about__data, .about__img,
            .skills__content, .services__content,
            .portfolio-member, .redes-sociales,
            .footer__content`,
  {
    interval: 200,
  }
);
