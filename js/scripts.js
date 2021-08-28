const linksTabElems = document.querySelectorAll('.tab__link');
const tabLineElem = document.querySelector('.bottom__line');

if (linksTabElems.length >= 0) {
    for (let i = 0; i < linksTabElems.length; i++) {
        let link = linksTabElems[i];
        link.addEventListener('click', function (e) {
            let width = link.offsetWidth;
            let posL = link.offsetLeft;
            tabLineElem.style.left = `${posL}px`;
            tabLineElem.style.width = `${width}px`;
            const tabItemsElem = document.querySelectorAll('.tab-item');
            for (let i = 0; i < tabItemsElem.length; i++) {
                tabItemsElem[i].classList.remove('active');
            }
            const tabItemElem = document.querySelector([link.getAttribute('data-href')]);
            tabItemElem.classList.add('active');
        });
    }
}