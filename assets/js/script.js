$(document).ready(function () {
    // Cuando se hace clic en cualquier botón con clase .reservar-btn
    $('.reservar-btn').on('click', function (e) {
        e.preventDefault();

        // Obtenemos el nombre de la película desde el atributo data-pelicula
        var nombrePelicula = $(this).data('pelicula');

        // Insertamos el nombre en el campo de texto del modal
        $('#nombrePelicula').val(nombrePelicula);

        // Mostramos el modal
        var modalReserva = new bootstrap.Modal(document.getElementById('modalReserva'));
        modalReserva.show();
    });

    $('.confirmButton').on('click', function (e) {
        e.preventDefault();

        const formPrincipal = document.querySelector('.needs-validation');

        if (!formPrincipal.checkValidity()) {
            formPrincipal.classList.add('was-validated');
            return
        } else {
            alert('Reserva confirmada para la película ' + $('#nombrePelicula').val() + ' a las ' + $('#horarioPelicula option:selected').text());
        }

        
    });

});
