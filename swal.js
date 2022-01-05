$(document).on('click', '#btn_submit', function (e) {
  e.preventDefault()
  swal({
    title: 'Confirm',
    input: 'checkbox',
    inputValue: 0,
    inputPlaceholder: ' I agree with the Terms',
    confirmButtonText: 'Continue',
    inputValidator: function (result) {
      return new Promise(function (resolve, reject) {
        if (result) {
          resolve()
        } else {
          reject('You need to agree with the Terms')
        }
      })
    },
  }).then(function (result) {
    $('#myForm').submit()
  })
})
