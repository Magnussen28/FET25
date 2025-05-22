$(document).ready(function () {
    $('#liveToastBtn').click(function () {
      const toastEl = document.getElementById('liveToast');
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    });

    $('#boredBtn').click(function () {
      $.get('http://boredapi.restapi.co.za/', function (response) {
        console.log('Bored API Response:', response);
      });
    });
  });
  