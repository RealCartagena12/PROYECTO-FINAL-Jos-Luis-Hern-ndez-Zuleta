
//EXPANDIR IMAGEN INICIO
const imagenModal = document.getElementById('imagenModal');
  const imagenExpandida = document.getElementById('imagenExpandida');

  imagenModal.addEventListener('show.bs.modal', event => {
    const boton = event.relatedTarget;
    const imagenSrc = boton.getAttribute('data-img');
    imagenExpandida.src = imagenSrc;
  });




//REGISTO DE SESION
   const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

// --- REGISTRO ---
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const equipo = document.getElementById("registerTeam").value;
    const password = document.getElementById("registerPassword").value.trim();

    if (!nombre || !email || !equipo || !password) {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Guardar datos en localStorage
    const userData = { nombre, email, equipo, password };
    localStorage.setItem("usuarioNFL", JSON.stringify(userData));

    alert("✅ Registro exitoso. Ahora puedes iniciar sesión.");
    registerForm.reset();
  });
}

// --- INICIO DE SESIÓN ---
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const storedUser = JSON.parse(localStorage.getItem("usuarioNFL"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert(`Bienvenido de nuevo, ${storedUser.nombre} 🏈`);
      window.location.href = "index.html";
    } else {
      alert("❌ Correo o contraseña incorrectos.");
    }
  });
}

//SELECCIONAR EQUIPO
const equiposNFL = [
    "Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Buffalo Bills",
    "Carolina Panthers", "Chicago Bears", "Cincinnati Bengals", "Cleveland Browns",
    "Dallas Cowboys", "Denver Broncos", "Detroit Lions", "Green Bay Packers",
    "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs",
    "Las Vegas Raiders", "Los Angeles Chargers", "Los Angeles Rams", "Miami Dolphins",
    "Minnesota Vikings", "New England Patriots", "New Orleans Saints", "New York Giants",
    "New York Jets", "Philadelphia Eagles", "Pittsburgh Steelers", "San Francisco 49ers",
    "Seattle Seahawks", "Tampa Bay Buccaneers", "Tennessee Titans", "Washington Commanders"
  ];

  const selectEquipo = document.getElementById("registerTeam");
  equiposNFL.forEach(equipo => {
    const option = document.createElement("option");
    option.value = equipo;
    option.textContent = equipo;
    selectEquipo.appendChild(option);
  });


