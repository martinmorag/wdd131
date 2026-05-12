const today = new Date()
document.getElementById("currentYear").innerHTML = today.getFullYear()

document.getElementById("lastModified").innerHTML = document.lastModified;

const temp = document.getElementById("temperature").innerText.trim()
const wind = document.getElementById("wind").innerText.trim()

document.getElementById("wind_chill").textContent = calculateWindChill(temp, wind);


function calculateWindChill(temperature, wind_speed) {
    const type_temp = temperature.toString().slice(-1)
    const type_wind = wind_speed.toString().slice(-3)

    const num_temp = temperature.replace(/\D/g, "");
    const num_wind = wind_speed.replace(/\D/g, "");

    const power = num_wind ** 0.16;
    let wind_chill = 0;

    if (type_temp === 'C') {
        if (num_temp <= 10) {
            if (type_wind === 'mph') {
                if (num_wind > 3) {
                    wind_chill = windChillFormula(num_temp, power)
                }
            } else if (type_wind === 'm/h') {
                if (num_wind > 4.8) {
                    wind_chill = windChillFormula(num_temp, power)
                }
            }
        }
    } else if (type_temp === 'F') {
        if (num_temp <= 50) {
            if (type_wind === 'mph') {
                if (num_wind > 3) {
                    wind_chill = windChillFormula(num_temp, power)
                }
            } else if (type_wind === 'm/h') {
                if (num_wind > 4.8) {
                    wind_chill = windChillFormula(num_temp, power)
                }
            }
        }
    }

    return `${wind_chill.toFixed(1)}°${type_temp}`;
}
function windChillFormula(temperature, power) {
    return 13.12 + (0.6215 * temperature) - (11.37 * power) + (0.3965 * temperature * power); 
}
