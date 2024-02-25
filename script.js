
const list = document.querySelectorAll('.card');

list.forEach(selected => {
    selected.addEventListener('click', () => {
        if (selected.classList.contains('active')) {
            selected.classList.remove('active');
        } else {
            selected.classList.add('active');
        }
    });
});






