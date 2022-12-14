
function kiemTraRong(value, selectorError, name) {
  if (value === "") {
    document.querySelector(selectorError).innerHTML =
      name + " không được bỏ trống!";
    return false;
  }
  document.querySelector(selectorError).innerHTML = "";
  return true;
}


function kiemTraTatCaKyTu(value, selectorError, name) {
  var regexLetter = /^[A-Z a-z]+$/;
  if (regexLetter.test(value)) {

    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML = name + " phải là chữ cái !";
  return false;
}

function kiemTraEmail(value, selectorError, name) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (regexEmail.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML =
    name + " không đúng định dạng !";
  return false;
}

function kiemTraSo(value, selectorError, name) {
  var regexNumber = /^[0-9]+$/;
  if (regexNumber.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }

  document.querySelector(selectorError).innerHTML = name + " tất cả là số";
  return false;
}


function kiemTraDoDai(value, selectorError, name, minLength, maxLength) {
  if (value.length < minLength || value.length > maxLength) {
    document.querySelector(selectorError).innerHTML =
      name + " từ " + minLength + " đến " + maxLength + " ký tự!";
    return false;
  }
  document.querySelector(selectorError).innerHTML = "";
  return true;
}

function kiemTraGiaTri(value, selectorError, name, minValue, maxValue) {
  if (Number(value) < minValue || Number(value) > maxValue) {
    document.querySelector(selectorError).innerHTML =
      name + " giá trị từ " + minValue + " đến " + maxValue;
    return false;
  }
  document.querySelector(selectorError).innerHTML = "";
  return true;
}

function kiemTraPassword(value, selectorError, name) {
  var regexPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
  if (regexPassword.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML =
    name + " từ 6-20 ký tự, 1 số, </br> 1 chữ hoa, 1 chữ thường, 1 ký tự";
  return false;
}

function kiemTraPhone(value, selectorError, name) {

  var regex = /^[0-9]+$/
  if (!regex.test(value) || value.length < 10 || value.length > 11) {
    document.querySelector(selectorError).innerHTML = name + " phải từ 10 đến 11 số";
    return true;
  }
  document.querySelector(selectorError).innerHTML = '';

  return true;

}

function confirmPassword(value, value1, selectorError, name) {

  if (value !== value1) {
    document.querySelector(selectorError).innerHTML =
      name + " không chính xác";
    return false;

  }
  document.querySelector(selectorError).innerHTML = "";
  return true;

}