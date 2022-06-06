function validarFormulario() {
    let nombres = document.getElementById("nombres").value;
    let apellidos = document.getElementById("apellidos").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let tipoTel = document.getElementById("tipoTel").value;   
    let domicilio = document.getElementById("domicilio").value;
    let localidad = document.getElementById("localidad").value;
    let provincia = document.getElementById("provincia").value;
    let cp = document.getElementById("cp").value;
    let horarioEntrega = document.getElementById("horarioEntrega").value;

    if (nombres.length == 0) {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Campos sin completar',
            text: 'Por favor, ingrese su nombre',
          })
        return false;
    }
    if (apellidos.length == 0) {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Campos sin completar',
            text: 'Por favor, ingrese su apellido',
          })
        return false;
    }
    if (email.length == 0) {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Campos sin completar',
            text: 'Por favor, ingrese su mail',
          })
        return false;
    } else if (email.indexOf("@") == -1) {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Error en el mail',
            text: 'Por favor, verifique que su mail se encuentre bien escrito',
          })
        return false;
    } else if (email.indexOf(".com") == -1) {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Error en el mail',
            text: 'Por favor, verifique que su mail se encuentre bien escrito',
          })
        return false;
    }
    if ((telefono.length == 0)) {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Campos sin completar',
            text: 'Por favor, ingrese su número de telefono',
          })
        return false;
    } else if ((telefono.length < 8)) {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Error en el teléfono',
            text: 'El número de teléfono no puede tener menos de 8 números',
          })
        return false;
    } else if ((telefono.length > 14)) {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Error en el teléfono',
            text: 'El número de teléfono no puede tener mas de 14 números',
          })
        return false;
    }
    if (tipoTel == "...") {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Campos sin completar',
            text: 'Por favor, seleccione el tipo de teléfono',
          })
        return false;
    }
    if (domicilio.length == 0) {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Campos sin completar',
            text: 'Por favor, ingrese su domicilio',
          })
        return false;
    }
    if (localidad.length == 0) {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Campos sin completar',
            text: 'Por favor, ingrese su localidad',
          })
        return false;
    }
    if (provincia.length == 0) {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Campos sin completar',
            text: 'Por favor, ingrese su provincia',
          })
        return false;
    } 
    if (cp.length == 0) {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Campos sin completar',
            text: 'Por favor, ingrese su código postal',
          })
        return false;
    } else if ((cp.length > 4)) {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Error en el codigo postal',
            text: 'El código postal debe tener 4 numeros, Ej: 1234',
          })
        return false;
    } else if ((cp.length < 4)) {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Error en el codigo postal',
            text: 'El código postal debe tener 4 numeros, Ej: 1234',
          })
        return false;
    }
    if (horarioEntrega == "...") {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Campos sin completar',
            text: 'Por favor, completar un horario de entrega',
          })
        return false;
    }
}
document.getElementById("btnConfirmar").addEventListener("click", validarFormulario);