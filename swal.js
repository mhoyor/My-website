$(document).ready(function () {
  $(document).on('click', 'submit', function () {
    Swal.fire({
      type: 'success',
      title: 'Your work has been done',
      showConfirmButton: false,
      timer: 1500,
    })
  })
})
