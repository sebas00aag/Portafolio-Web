let menu = document.querySelector('#menu-bars');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}




document.getElementById("copy-email-button").addEventListener("click", function() {
    var emailElement = document.getElementById("email");
    var emailText = emailElement.textContent || emailElement.innerText;

    var textarea = document.createElement("textarea");
    textarea.value = emailText;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");

    document.body.removeChild(textarea);
    alert("Email copied!");
  });

  document.getElementById("copy-phone-button").addEventListener("click", function() {
    var phoneElement = document.getElementById("phone");
    var phoneText = phoneElement.textContent || phoneElement.innerText;

    var textarea = document.createElement("textarea");
    textarea.value = phoneText;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");

    document.body.removeChild(textarea);

    alert("Phone number copied!");
  });


// Form validation and success message
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const message = document.getElementById("message").value.trim();
    const successMsg = document.getElementById("form-success");

    if (name === "" || email === "" || message === "") {
        successMsg.style.display = "block";
        successMsg.style.color = "red";
        successMsg.textContent = "Please fill in all fields.";
        return;
    }

    // Simple email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        successMsg.style.display = "block";
        successMsg.style.color = "red";
        successMsg.textContent = "Please enter a valid email address.";
        return;
    }

    // Show success message
    successMsg.style.display = "block";
    successMsg.style.color = "#4CAF50";
    successMsg.textContent = "Your message has been sent successfully!";

    // Reset form
    document.getElementById("contactForm").reset();

    // Hide message after 3 seconds
    setTimeout(() => {
        successMsg.style.display = "none";
    }, 3000);
});


// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Diccionario de traducciones
const translations = {
    es: {
        headerHome: "Inicio",
        headerAbout: "Sobre Mí",
        headerProjects: "Proyectos",
        headerContact: "Contáctame",

        homeHello: "Hola,",
        homeIAm: "Soy <span> Sebastián Arrieta</span>",
        homeRole: "Desarrollador de Software",
        homeBtn: "Sobre Mí",
       
       
        aboutTitle: "Sobre <span>Mí</span>",
        aboutHeading: "Mi nombre es Sebastián Arrieta Guzmán.",
        aboutText: "Como estudiante de desarrollo de software, poseo habilidades para la resolución de problemas y también pasión por crear aplicaciones eficientes y fáciles de usar. Busco oportunidades que me permitan expandir y diversificar mi experiencia profesional, desarrollando nuevas habilidades y aportando valor a equipos de trabajo en diferentes áreas, siempre con el objetivo de crecer y contribuir al éxito de la organización. Me gusta poder brindar mis servicios para un mejor funcionamiento de mi entorno y estoy abierto a nuevas experiencias que me ayuden a mejorar mis propias habilidades.",
        aboutBtn: "Mira mi CV",
        aboutAge: "<span> Edad : </span> 22 ",
        aboutGender: "<span> Género : </span>Masculino ",
        aboutLanguages: "<span> Idiomas : </span> Español - Inglés",
        aboutWork: " <span> Trabajo : </span> Desarrollador de Software",
        aboutPhone: "<span> Teléfono : </span> +506 8992-4871",
        aboutemail: "<span> Correo : </span> sebas00aag@gmail.com",
        aboutCountry: "<span> País : </span> Costa Rica ",
       
        projectsTitle: "Mis <span>Proyectos</span>",
        projectsHotel: "Plataforma para reservar habitaciones, ver disponibilidad y gestionar reservas. Incluye validaciones y UI responsiva.",
        projectsRPS: "Juego clásico con lógica de IA básica para el computador, animaciones y puntuación persistente en localStorage.",
        projectsWeatherapi: "App que consulta datos meteorológicos vía API, muestra pronóstico y permite buscar por ciudad con UI intuitiva.",
        projectsTictactoe: "Juego de Tic Tac Toe con lógica de ganador, animaciones en las celdas y opción de dos jugadores o contra la IA.",


        contactTitle: "Contáctame",
        contactMe: "Envíame un mensaje",
        sendMessage: "Enviar Mensaje",
        contactMyemail: "Mi Correo",
        contactMynumber: "Mi Número",
        contactMyaddress: "Mi Ubicación",
        contactCopyemail: "Copiar Correo",
        contactCopyphone: "Copiar Número"
    },
    en: {
        headerHome: "Home",
        headerAbout: "About",
        headerProjects: "Projects",
        headerContact: "Contact Me",

        homeHello: "Hello,",
        homeIAm: "I am <span> Sebastián Arrieta</span>",
        homeRole: "Software Developer",
        homeBtn: "About Me",
       
        aboutTitle: "About <span>Me</span>",
        aboutHeading: "My name is Sebastián Arrieta Guzmán.",
        aboutText: "I'm a driven software developer student, I possess problem-solving skills and also passion for creating efficient and user-friendly applications. With a foundation in programming languages, design web pages, and the ability to work independently, I am able to deliver high-quality results and adapt to changing project requirements. I like being able to provide my services for a better functioning of my environment, and I’m opened to new experiences that help me improve my own skills.",
        aboutBtn: "See My CV",
        aboutAge: "<span> Age : </span> 22 ",
        aboutGender: "<span> Gender : </span>Male ",
        aboutLanguages: "<span> Languages : </span> Spanish - English",
        aboutWork: " <span> Work : </span> Software Developer",
        aboutPhone: "<span> Phone : </span> +506 8992-4871",
        aboutemail: "<span> Email : </span> sebas00aag@gmail.com",
        aboutCountry: "<span> Country : </span> Costa Rica ",
       
        projectsHotel: "Platform for booking rooms, viewing availability, and managing reservations. Includes form validations and a responsive UI.",
        projectsRPS: "A classic game with basic AI logic for the computer, animations, and persistent scoring using localStorage.",
        projectsWeatherapi: "An app that fetches weather data via an API, displays the forecast, and allows users to search by city with an intuitive UI.",
        projectsTictactoe: "A Tic-Tac-Toe game with winner logic, cell animations, and options for two players or against an AI.",
        projectsTitle: "My <span>Projects</span>",
       
        contactTitle: "Contact <span>Me</span>",
        contactMe: "Send me a message",
        sendMessage: "Send Message",
        contactMyemail: "My Email",
        contactMynumber: "My Number",
        contactMyaddress: "My Address",
        contactCopyemail: "Copy Email",
        contactCopyphone: "Copy Phone"
    }
};

// Función para cambiar idioma
function changeLanguage(lang) {
    document.querySelector(".header .navbar .Navhome").innerHTML = translations[lang].headerHome;
    document.querySelector(".header .navbar .Navabout").innerHTML = translations[lang].headerAbout;
    document.querySelector(".header .navbar .Navprojects").innerHTML = translations[lang].headerProjects;
    document.querySelector(".header .navbar .Navcontact").innerHTML = translations[lang].headerContact;




    document.querySelector(".home .hi").innerHTML = translations[lang].homeHello;
    document.querySelector(".home h3").innerHTML = translations[lang].homeIAm;
    document.querySelector(".home .info").textContent = translations[lang].homeRole;
    document.querySelector(".home .btn").textContent = translations[lang].homeBtn;
    
    
    document.querySelector(".about .heading").innerHTML = translations[lang].aboutTitle;
    document.querySelector(".about .content h3").textContent = translations[lang].aboutHeading;
    document.querySelector(".about .content .text").textContent = translations[lang].aboutText;
    document.querySelector(".about .btn").textContent = translations[lang].aboutBtn;
    document.querySelector(".about .content .box-container .box .Age").innerHTML = translations[lang].aboutAge;
    document.querySelector(".about .content .box-container .box .Gender").innerHTML = translations[lang].aboutGender;
    document.querySelector(".about .content .box-container .box .Languages").innerHTML = translations[lang].aboutLanguages;
    document.querySelector(".about .content .box-container .box .Work").innerHTML = translations[lang].aboutWork;
    document.querySelector(".about .content .box-container .box .Phone").innerHTML = translations[lang].aboutPhone;
    document.querySelector(".about .content .box-container .box .email").innerHTML = translations[lang].aboutemail;
    document.querySelector(".about .content .box-container .box .Country").innerHTML = translations[lang].aboutCountry;



    document.querySelector(".proyects .heading").innerHTML = translations[lang].projectsTitle;
    document.querySelector(".proyects .hotel").innerHTML = translations[lang].projectsHotel;
    document.querySelector(".proyects .RPS").innerHTML = translations[lang].projectsRPS;
    document.querySelector(".proyects .weatherapi").innerHTML = translations[lang].projectsWeatherapi;
    document.querySelector(".proyects .tictactoe").innerHTML = translations[lang].projectsTictactoe;


    document.querySelector(".contact-form h3").textContent = translations[lang].contactMe;
    document.querySelector(".contact .heading").innerHTML = translations[lang].contactTitle;
    document.querySelector(".contact-form h3").textContent = translations[lang].contactMe;
    document.querySelector(".contact-form button").textContent = translations[lang].sendMessage;
    document.querySelector(".contact .icons-container .myemail").innerHTML = translations[lang].contactMyemail;
    document.querySelector(".contact .icons-container .mynumber").innerHTML = translations[lang].contactMynumber;
    document.querySelector(".contact .icons-container .myaddress").innerHTML = translations[lang].contactMyaddress;
    document.querySelector(".contact .icons-container .myemail").innerHTML = translations[lang].contactMyemail;
    document.querySelector(".contact .icons-container .myemail").innerHTML = translations[lang].contactMyemail;
    document.querySelector(".contact .icons-container #copy-email-button").innerHTML = translations[lang].contactCopyemail;
    document.querySelector(".contact .icons-container #copy-phone-button").innerHTML = translations[lang].contactCopyphone;

    // Guardar preferencia
    localStorage.setItem("preferredLang", lang);

    // Marcar botón activo
    document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.remove("active"));
    document.getElementById(`lang-${lang}`).classList.add("active");
}

// Eventos de click
document.getElementById("lang-es").addEventListener("click", () => changeLanguage("es"));
document.getElementById("lang-en").addEventListener("click", () => changeLanguage("en"));

// Cargar idioma guardado
const savedLang = localStorage.getItem("preferredLang") || "es";
changeLanguage(savedLang);
