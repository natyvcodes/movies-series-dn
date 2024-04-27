let acordeon = document.querySelectorAll('.acordeon');
acordeon.forEach((aco) => {
    aco.addEventListener('click', () => {
        const isActive = aco.classList.contains('active');
        acordeon.forEach((el) => {
            el.classList.remove('active');
            el.querySelector('.acordeon__content').style.display = 'none';
        });
        if (!isActive) {
            aco.classList.add('active');
            aco.querySelector('.acordeon__content').style.display = 'block';
        }
    });
});