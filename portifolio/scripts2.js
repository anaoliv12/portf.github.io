document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('.checkbox');
    var body = document.body;

    document.querySelector('.switch-label').addEventListener('click', function () {
      checkbox.checked = !checkbox.checked;
      body.classList.toggle('light-theme', checkbox.checked);
    });
  });