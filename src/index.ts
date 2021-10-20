let usuario: string = document.getElementById("usuario");
let pass: string = document.getElementById("pass");
const usu: string = "juan";
const pasw: string = "clavejuan";
let btn = document.getElementById("btn");

btn?.addEventListener("click ", () => {
  let usuingresado: number = Number(usuario.value);
  let passingresado: number = Number(pass.value);

  if (usuingresado === usu && passingresado === pasw) {
    console.log("ingreso exitoso");
  } else {
    console.log("ingreso denegado");
  }
});
