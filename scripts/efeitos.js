document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.link-menu').forEach(link => {
        link.addEventListener('mouseover', () => {
            item.style.setProperty('--scale', '1');
        });

        link.addEventListener('mouseout', () => {
            item.style.setProperty('--scale', '0');
        });
    });

    const sobreMimLink = document.querySelector('.link-menu[href="#sobre-mim"]');
    if(sobreMimLink) {
        sobreMimLink.addEventListener('click', function(event) {
            event.preventDefault();
            const sobreMimSection = document.querySelector('#sobre-mim');
            if(sobreMimSection) {
                sobreMimSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    const projetosLink = document.querySelector('.link-menu[href="#projetos"]');
    if(projetosLink) {
        projetosLink.addEventListener('click', function(event) {
            event.preventDefault();
            const projetosSection = document.querySelector('#projetos');
            if(projetosSection) {
                projetosSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    const contatosLink = document.querySelector('.link-menu[href="#contatos"]');
    if(contatosLink) {
        contatosLink.addEventListener('click', function(event) {
            event.preventDefault();
            const contatosSection = document.querySelector('#contatos');
            if(contatosSection) {
                contatosSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
})