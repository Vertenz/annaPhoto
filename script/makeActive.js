document.addEventListener("DOMContentLoaded", () => {
    const works = document.getElementById('works');


    function change(idName) {
        return document.getElementById(`${idName}`).style.color = '#F54040';
    }

    function normal(idName) {
        return document.getElementById(`${idName}`).style.color = '';
    }

    works.onmouseover = hover; //только когда в секции works начинается проверка

    function hover(event) {
        function getId(el) { //при наведении на какой-то объект из секции works
            if (!el) return "null"; //если не элемент, то вернуть
            if(el.dataset.id !== undefined) { //если элемент с дата, то дальше надо поменять цвет у меню
                let name = el.dataset.id + 'Link'; // id в html у ссылок это название + Link (например artLink)
                let li = document.getElementById(name);
                const menu = document.getElementsByClassName('works__description');
                const img = document.getElementsByClassName('works__img');
                if (li) { //если есть такой элемент с таким id, то меняем цвет \
                    change(name);
                    el.onmouseout = () => {
                        normal(name);
                    }
                }else if (menu) {
                    img[el.dataset.id].style =  "filter: brightness(0.3); border-top: 40px solid #F54040; border-bottom: 40px solid #F54040;";
                    menu[el.dataset.id].style.display = 'flex';
                    el.onmouseout = () => {
                        img[el.dataset.id].style =  "";
                        menu[el.dataset.id].style.display = '';
                    }
                }
            }else return undefined;
        }
        getId(event.target);
    }

});