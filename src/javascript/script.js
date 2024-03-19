$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    function comprarEbook(type) {
        var preco = $('#price .current-price span').text();

        if (type === 'link') {
            alert("Você está sendo redirecionado para a página de compra...");
            // Aqui você pode adicionar o código para redirecionar para a página de compra
        } else if (type === 'button') {
            alert("Você comprou o Ebook por apenas R$ " + preco);
            // Aqui você pode adicionar o código para processar a compra
        }
    }

    const sections = $('section');
    const navItems = $('.nav-item');

    $('#scroll_to_top').on('click', function(event) {
        event.preventDefault(); // Prevenir o comportamento padrão do link

        // Anima a rolagem da página até o topo
        $('html, body').animate({
            scrollTop: 0 // Rolagem para o topo da página
        }, 1000); // Duração da animação em milissegundos
    });

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 100;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });
});
