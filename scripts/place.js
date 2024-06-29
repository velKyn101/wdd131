const temperature = 26.3;
const windSpeed = 5;

if (temperature > 10 && windSpeed > 4.8) {
    const chill = windChill(temperature, windSpeed);
    const windChillElement = document.getElementById("wind-chill");
    windChillElement.innerHTML = `<strong>Wind Chill:</strong> ${chill.toFixed(2)} °C`;
}
function windChill (temperature, windSpeed) 
{ 
    return 13.12 + (0.6215 * temperature) - (11.37 * windSpeed ** 0.16) + (0.3965 * temperature * windSpeed ** 0.16);
}

window.addEventListener("DOMContentLoaded",()=>{const e=(new Date).getFullYear();document.getElementById("currentyear").textContent=e;const t=document.lastModified;document.getElementById("lastModified").textContent=t})