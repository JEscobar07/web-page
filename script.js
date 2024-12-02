const snowContainer = document.getElementById('snowContainer');
let snowing = false;

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

function toggleSnow() {
    snowing = !snowing;
    if (snowing) {
        snowInterval = setInterval(createSnowflake, 100);
    } else {
        clearInterval(snowInterval);
    }
}

document.getElementById('toggleSnow').addEventListener('click', toggleSnow);
