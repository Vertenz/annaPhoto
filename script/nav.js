document.addEventListener("DOMContentLoaded", () => {
        setInterval(() => {
            // console.log(cord['y']);
            let section = document.getElementById('works');
            let nav = document.getElementById('nav__ul');
            let cord = section.getBoundingClientRect();
            if (cord['y'] <= -411) {
                nav.style.position = 'fixed';
                nav.style.bottom = '45%';
            }else {
                nav.style.position = '';
                nav.style.bottom = '';
            }
        }, 10);
});