async function verificarAuth() {
    const token = localStorage.getItem("token");

    if (!token) {
        redirigirNoAuth();
        return;
    }

    try {
        const res = await fetch("http://localhost:3000/api/users/perfil", {
            headers: {
                "Authorization": token
            }
        });

        if (!res.ok) {
            redirigirNoAuth();
        }
    } catch (err) {
        redirigirNoAuth();
    }
}

function redirigirNoAuth() {
    alert("No estás autenticado.");
    localStorage.removeItem("token");
    window.location.href = "formularioInicio.html";
}