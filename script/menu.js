document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById('menu__ul');
    const buttonMenu = document.getElementById('menu__button');
    const firstBlock = document.getElementById('menu__block_1');
    const secondBlock = document.getElementById('menu__block_2');
    const thirdBlock = document.getElementById('menu__block_3');
    buttonMenu.onclick = () => {
        menu.classList.toggle('show');
        firstBlock.classList.toggle('active');
        secondBlock.classList.toggle('active');
        thirdBlock.classList.toggle('active');

    };
});

