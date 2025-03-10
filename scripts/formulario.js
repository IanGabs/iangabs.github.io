document.addEventListener('DOMContentLoaded', function() {
    const formularioContato = document.getElementById('formulario-contato');

    if(formularioContato) {
        formularioContato.addEventListener('submit', function(e) {
            e.preventDefault();

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const assunto = document.getElementById('assunto').value;
            const mensagem = document.getElementById('mensagem').value;

            alert('Mensagem enviada com sucesso!');

            formularioContato.reset();
        });
    }

    const camposFormulario = document.querySelectorAll('.form-grupo input, .form-grupo textarea');

    camposFormulario.forEach(campo => {
        campo.addEventListener('focus', function() {
            this.parentElement.classList.add('campo-ativo');
        });

        campo.addEventListener('blur', function() {
            if(this.value === '') {
                this.parentElement.classList.remove('campo-ativo')
            }
        });
    });
});