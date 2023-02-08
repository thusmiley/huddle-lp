function formSubmit() {
  document.getElementById("subscribed").style.display = "block";
  setTimeout(function () {
    window.location.reload();
  }, 5000);
}
