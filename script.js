const passwordInput = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const errorMessage = document.getElementById('confirmPasswordError');

function showError() {
    errorMessage.style.display = 'block'
}

function hideError() {
    errorMessage.style.display = 'none'
}

passwordConfirm.addEventListener('input', function () {
    if (passwordConfirm.value && passwordConfirm.value !== passwordInput.value) {
        showError();
    } else {
        hideError();
    }
});

document.getElementById('form').addEventListener('submit', function (e) {
    if (passwordConfirm.value !== passwordInput.value) {
        showError();
        e.preventDefault();
    }
});