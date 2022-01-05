$(document).on('click', '#btn_submit', function (e) {
  e.preventDefault()
  Swal.fire({
    title: 'Thanks for reaching out',
    icon: 'success',
    footer: 'I will get back soon',
    showClass: {
      popup: 'animate__animated animate__fadeInDown',
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp',
    },
  }).then(function (result) {
    $('#myForm').submit()
  })
})
