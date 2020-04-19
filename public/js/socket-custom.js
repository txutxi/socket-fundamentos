var socket = io();

//Los "on" son para recibir información
socket.on('connect', function() {
    console.log('Conectado servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//Los emit son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Txutxi',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server:', resp);
});

//escuchar:
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});