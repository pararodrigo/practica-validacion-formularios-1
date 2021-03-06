$('#formulario').validate({
    rules: {
        nombre: {
            required: true
            //lettersonly: true
        },
        apellido: {
            required: true,
            lettersonly: true
        },
        telefono: {
            required: true,
            digits: true,
            minlength: 9,
            maxlength: 9
        },
        email: {
            required: true,
            email: true,
            remote: "http://www.rodrigobenito.infenlaces.com/trabajosDWEC/formulario/validar_email_db.php"
        },
        confirma_email: {
            equalTo: "#email",
            email: true
        },
        demandante: {
            required: true
        },
        cif_nif: {
            required: true,
            cifES: {
                depends: function() {
                    'use strict';
                    return $('#empresa').is(':checked');
                }
            },
            nifES: {
                depends: function() {
                    'use strict';
                    return $('#particular').is(':checked')
                }

            }


        },
        nombre_empresa: {

            required: true
        },
        direccion: {
            required: true
        },
        cp: {
            required: true,
            maxlength: 5,
            digits: true
        },
        localidad: {
            required: true
        },
        provincia: {
            required: true
        },
        pais: {
            required: true
        },
        iban: {
            required: true,
            iban: true
        },
        pago: {
            required: true
        },
        usuario: {
            required: true,
            minlength: 4
        },
        password: {
            required: true,
            
        },
        confirma_password: {
            
            equalTo: "#pswd",
            
        }


    },
    messages: {
        nombre: {
            required: "Este campo es obligatorio",
            lettersonly: "Este campo no puede contener numeros"
        },
        apellido: {
            required: "Este campo es obligatorio",
            lettersonly: "Este campo no puede contener numeros"
        },
        telefono: {
            required: "Este campo es obligatorio",
            digits: "EL telefono debe ser valido",
            minlength: "Solo 9 caracteres",
            maxlength: "Solo 9 caracteres"
        },
        email: {
            required: "Este campo es obligatorio",
            email: "El email debe ser valido",
            remote: "Este usuario ya esta registrado"
        },
        confirma_email: {
            equalTo: "El email con coincide",
            email: "El email debe ser valido"
        },
        demandante: {
            required: "Este campo es obligatorio"
        },
        cif_nif: {
            required: "Este campo es obligatorio",
            nifES: "El NIF no es valido",
            cifES: "El CIF no es valido"
        },
        nombre_empresa: {

            required: "Este campo es obligatorio"
        },
        direccion: {
            required: "Este campo es obligatorio"
        },
        cp: {
            required: "Este campo es obligatorio",
            maxlength: "El codigo postal debe ser correcto",
            digits: "El codigo postal debe ser correcto"
        },
        localidad: {
            required: "Este campo es obligatorio"
        },
        provincia: {
            required: "Este campo es obligatorio"
        },
        pais: {
            required: "Este campo es obligatorio"
        },
        iban: {
            required: "Este campo es obligatorio",
            iban: "El iban debe ser valido"
        },
        pago: {
            required: "Este campo es obligatorio"
        },
        usuario: {
            required: "Este campo es obligatorio",
            minlength: 'debe tener un minimo de 4 caracteres'
        },
        password: {
            required: "Este campo es obligatorio",
            minLength: "Debe tener un minimo de 6 caracteres, debe contener mayusculas y minusculas y algun numero"

        },
        confirma_password: {
            equalTo: "La contraseña no coincide"
        }
    },

    
    submitHandler: function(form) {
        'use strict';
        var confirmar = confirm('Se le pasará la primera cuota de 50€, 140€ o 550€ según corresponda (forma de pago).');
        if (confirmar === false) {
            return false;
            
        }else{
            return true;
        }
        
        }

    

});

$("#pswd").valid();

