let myModal = document.querySelector('myModal');
let myInput = document.querySelector('myInput');

const emailInputEl = document.querySelector('#exampleInputEmail1')
const modalEl =document.querySelector('#exampleModal')

modalEl.addEventListener('shown.bs.modal', function () {
  emailInputEl.focus();
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})