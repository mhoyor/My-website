$('#btn_submit').on('click', function (e) {
  var form = $(this).parents('form')
  swal({
    title: 'Thanks for reaching out',
    text: 'We will get back to you',
    type: 'success',
  })
})
