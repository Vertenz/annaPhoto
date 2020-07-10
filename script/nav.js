document.addEventListener("DOMContentLoaded", () => {
        setInterval(() => {
            // console.log(cord['y']);
            let section = document.getElementById('works');
            let nav = document.getElementById('nav__ul');
            let cord = section.getBoundingClientRect();
            if (cord['y'] <= -411 && cord['bottom'] >= 581) {
                nav.style.position = 'fixed';
                nav.style.bottom = '22%';
                nav.style.left = '1%';
                nav.style.width = '25%';
            }else {
                nav.style.position = '';
                nav.style.bottom = '';
                nav.style.left = '';
                nav.style.width = '';
            }
        }, 10);
});