$('#btn_submit').on('click', function (e) {
  var form = $(this).parents('form')
  swal({
    title: 'Thanks for reaching out',
    text: 'We will get back to you',
    type: 'success',
    showClass: {
      popup: 'animate__animated animate__fadeInDown',
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp',
    },
  })
})
