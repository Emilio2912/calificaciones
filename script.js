
const entrada = document.getElementById("entrada");
const btnEnviar = document.getElementById("btnEnviar");
const respuesta = document.getElementById("respuesta");
const imagen = document.getElementById("imagen");
const gifAprobado = "https://media1.tenor.com/m/-VG9cLwSYTcAAAAC/dancing-triangle-dancing.gif";
const gifReprobado = "https://media1.tenor.com/m/z1q9vPBZ75UAAAAd/spider-man-spiderman.gif";
const gifInvalido = "https://media1.tenor.com/m/TsmJ8yVex4kAAAAC/what-the-dog-dog-loading.gif";

btnEnviar.addEventListener("click", () => {
  const dato = parseInt(entrada.value, 10);

  imagen.style.display = "none";

  if (dato >= 70 && dato <= 100) {
    respuesta.textContent = "Estudiante aprobado :)";
    imagen.src = gifAprobado;
    imagen.style.display = "block";
  } else if (dato < 70 && dato >= 0) {
    respuesta.textContent = "Estudiante reprobado :(";
    imagen.src = gifReprobado;
    imagen.style.display = "block";
  } else if (dato < 0 || dato > 100) {
    respuesta.textContent = "Ingresa un valor valido :o";
    imagen.src = gifInvalido;
    imagen.style.display = "block";
  } else {
    respuesta.textContent = "Ingresa una calificación";
  }
});

entrada.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btnEnviar.click();
  }
});