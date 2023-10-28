const formularioContacto = document.querySelector('#formulario-contacto');

    const NombreUsuario = document.querySelector('#nombre-usuario');

    const EmailUsuario = document.querySelector('#email-usuario');

    const Mensaje = document.querySelector('#mensaje');

    formularioContacto.addEventListener('submit', (e) => {
        e.preventDefault();

        
        const body = {
            service_id: 'service_nchu067',
            template_id: 'template_a2017lv',
            user_id: 'pmM7kpqwhCE4zqFvd',
            template_params: {
                'to_name': NombreUsuario.value,
                'from_name': EmailUsuario.value,
                'message': Mensaje.value,
            }

        }

        enviarEmail(body);

        formularioContacto.reset();

    });
    const enviarEmail = async (body) => {
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        };
        const response = await fetch('http://api.emailjs.com/api/v1.0/email/send', settings);
    }

   


    