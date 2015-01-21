$(function() {

    //RELLENA LISTAS DE LOCALIDADES
'use strict';

    

    var promise = $.ajax({
        //url: 'http://localhost:8888/berificacion_bbdd/localidades.php',
        url: 'http://www.rodrigobenito.infenlaces.com/trabajosDWEC/formulario/localidades.php',
        type: 'GET',
        dataType: 'json',
        data: {'cp': $('#cp').val()}
    });
    promise.done(function(data) {
        $.each(data, function(index) {
            
            $('#lista_localidades').append('<option value="data[index].cod_prov">' + data[index].poblacion + '</option>');
                    });
    });
    promise.fail(function() {
        console.log("error al obtener las localidades");

    });

    //RELLENA LISTAS DE PROVINCIAS

   

    var promise = $.ajax({
         //url: 'http://localhost:8888/berificacion_bbdd/provincias.php',
        url: 'http://www.rodrigobenito.infenlaces.com/trabajosDWEC/formulario/provincias.php',
        type: 'GET',
        dataType: 'json',
        data: {}
    });
    promise.done(function(data) {
        $.each(data, function(index) {

            $('#lista_provincias').append('<option>' + data[index].provincia + '</option>');
            //$('#lista_provincias').append('<option value="'+data[index].cod_prov+'">' + data[index].provincia + '</option>');
        });
    });
    promise.fail(function(data) {
        console.log("error al obtener las provincias");

    });

    //ESTO ES PARA CAMBIAR EL NOMBRE DE LOS CAMPOS EN FUNCION DE EL CHECK SELECCIONADO
    $('#demandante').change(function() {
        if ($('#empresa').is(':checked')) {

            $('#nifCif').html('CIF');
            $('#nombreEmpresa').html('Empresa');
            $('#input_nif_cif').prop('placeholder', 'CIF');
            $('#input_nombre_empresa').prop('placeholder', 'Empresa');
        } else {
            $('#nifCif').html('NIF');
            $('#nombreEmpresa').html('Nombre');
            $('#input_nif_cif').prop('placeholder', 'NIF');
            $('#input_nombre_empresa').prop('placeholder', 'Nombre');
        }
    });

    //RELLENAR EL CAMPO NOMBRE EMPRESA

    $('#input_nombre_empresa').focus(function() {
        var nombre = $('#nom').val();
        var apellido = $('#apellido').val();

        if (nombre && apellido && !this.value) {
            this.value = nombre + ' ' + apellido;
        }
    });

    //RELLENAR EL CAMPO USUARIO este campo no se puede modificar

    $('#email').focusout(function() {

        var email = $('#email').val();

        $('#usuario').val(email);
    });
    //AUTOCOMPLITAR CP

    $('#cp').focusout(function() {

        var cp = $('#cp').val();
        var digitos = cp.length;
        var ceros = "";
        for (var i = 1; i <= (5 - digitos); i++) {
            ceros = '0' + ceros;
        };
        var resultado = ceros + cp;
        $('#cp').val(resultado);

    });

});
