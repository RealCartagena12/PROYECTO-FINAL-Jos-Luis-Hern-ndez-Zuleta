// EXPANDIR IMAGEN INICIO
const imagenModal = document.getElementById('imagenModal');
const imagenExpandida = document.getElementById('imagenExpandida');

if (imagenModal && imagenExpandida) {
  imagenModal.addEventListener('show.bs.modal', event => {
    const boton = event.relatedTarget;
    const imagenSrc = boton.getAttribute('data-img');
    imagenExpandida.src = imagenSrc;
  });
}

// Obtener formularios
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

// ---------------------- REGISTRO ----------------------
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const userData = {
      nombre: document.getElementById("registerName").value,
      email: document.getElementById("registerEmail").value,
      equipo: document.getElementById("registerTeam").value,
      password: document.getElementById("registerPassword").value
    };

    const res = await fetch("http://localhost:3000/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)   // ← FIX
    });

    const data = await res.json();

    if (res.ok) {
      alert("Registro exitoso");
      registerForm.reset();
    } else {
      alert(data.error);
    }
  });
}

// ---------------------- LOGIN ----------------------
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const res = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("usuarioNFL", JSON.stringify(data.user));
      alert("Bienvenido " + data.user.nombre);
      window.location.href = "./index.html";
    } else {
      alert(data.error);
    }
  });
}

// ---------------------- SELECT EQUIPOS ----------------------
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

document.addEventListener("DOMContentLoaded", () => {
  const selectEquipo = document.getElementById("registerTeam");
  if (!selectEquipo) return;

  equiposNFL.forEach(equipo => {
    const option = document.createElement("option");
    option.value = equipo;
    option.textContent = equipo;
    selectEquipo.appendChild(option);
  });
});