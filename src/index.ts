let dato1: string = document.getElementById("dato1");
let dato2: string = document.getElementById("dato2");
let btn = document.getElementById("btn");
const usIngresado: string = "juan";
const contIngresado: string = "clavejuan";
btn.addEventListener("click", () => {
  let usuar: string = dato1.value;
  let contr: string = dato2.value;
  if (usuar === usIngresado && contr === contIngresado) {
    console.log("bienvenido");
  } else {
    console.log("el usuario o la contraseña son incorrectos");
  }
});
