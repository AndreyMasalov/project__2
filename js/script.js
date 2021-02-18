window.addEventListener('DOMContentLoaded', () => {

    let hamburger = document.getElementsByClassName('hamburger')[0];
    let navList = document.getElementsByClassName('nav_list')[0];
    let navItem = document.getElementsByClassName('nav_item');

    hamburger.addEventListener('click', () => {

        hamburger.classList.toggle('hamburger_active');
        navList.classList.toggle('nav_list_active');

    });

    Array.from(navItem).forEach(item => {

        item.addEventListener('click', () => {

            hamburger.classList.toggle('hamburger_active');
            navList.classList.toggle('nav_list_active');
            
        });

    });

});