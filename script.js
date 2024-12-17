// Función para generar un copo de nieve
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '$';
    snowflake.style.left = Math.random() * window.innerWidth * 1 + 'px';
    snowflake.style.animationDuration = Math.random() * 10 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 70 + 10 + 'px';
    document.body.appendChild(snowflake);

    // Eliminar el copo de nieve después de que termine la animación
    setTimeout(() => {
        snowflake.remove();
    }, parseFloat(snowflake.style.animationDuration) * 1000);
}

// Crear copos de nieve a intervalos regulares
setInterval(createSnowflake, 200);

