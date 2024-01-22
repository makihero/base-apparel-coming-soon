function validateForm () {
    var form = document.querySelector('.container__content__form');
    var email = document.querySelector('.container__content__form__input');
    var error = document.querySelector('.container__content__form__error');

    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email.value)) {
        error.style.display = 'block'
        email.style.borderColor = 'var(--soft-red)'
        email.style.backgroundImage = 'url(images/icon-error.svg)'
    } else {
        error.style.display = 'none'
        email.style.backgroundImage = 'none'
        email.style.borderColor = 'green'
        email.value = ''
    }

}