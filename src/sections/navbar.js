// document.querySelector('.navbar-toggler').addEventListener('click', function() {
    // document.querySelector('.navbar-menu').classList.toggle('navbar-menu-shown');
    // });
    function burgerMenu(selector) {
        let menu = $(selector);
        let button = menu.find('.navbar-toggler');
        let links = menu.find('.navbar-menu-item');
        let overlay = menu.find('.navbar-menu-overlay');

        button.on('click', (e) => {
            e.preventDefault();
            toggleMenu();
        })

        links.on('click', () => toggleMenu());
        overlay.on('click', () => toggleMenu());

        function toggleMenu() {
            menu.toggleClass('navbar-block-active');

            if (menu.hasClass('navbar-block-active')) {
                $('body').css('overflow', 'hidden');
            } else {
                $('body').css('overflow', 'visible');
            }
        }
    }

    burgerMenu('.navbar-block');