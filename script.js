 // Ejecutar esto lo más pronto posible
    window.addEventListener("load", () => {
      // Forzar 5 segundos exactos desde carga
      setTimeout(() => {
        const preloader = document.getElementById("preloader");
        preloader.classList.add("fade-out");

        // Mostrar contenido principal
        document.querySelector(".main-content").style.visibility = "visible";
        document.body.style.overflow = "auto";

        // Eliminar el preloader
        setTimeout(() => {
          preloader.remove();
        }, 500); // Duración del fade
      }, 3000); // <-- DURACIÓN EXACTA DEL PRELOADER
    });