$(document).ready(function () {
  $("#submitButton").click(function () {
    const email = $("#email").val();
    const first_name = $("#first_name").val();
    const last_name = $("#last_name").val();
    const phone_number = $("#phone_number").val();
    const password = $("#password").val();
    const password_confirm = $("#password_confirm").val();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Geçerli bir e-posta adresi giriniz.");
      return;
    }

    if (
      first_name === "" ||
      last_name === "" ||
      phone_number === "" ||
      password === "" ||
      password_confirm === ""
    ) {
      alert("Lütfen tüm alanları doldurunuz.");
      return;
    }

    if (password !== password_confirm) {
      alert("Şifreler uyuşmuyor.");
      $("#passwordWarning").text("Şifreler uyuşmuyor.");
      return;
    } else {
      $("#passwordWarning").text("");
    }

    alert(
      "Kayıt başarıyla tamamlandı:\nE-posta: " +
        email +
        "\nAd: " +
        first_name +
        "\nSoyad: " +
        last_name +
        "\nCep Telefonu: " +
        phone_number
    );
    window.location.href = "page2.html";
  });

  $("#password_confirm").keyup(function () {
    $("#passwordWarning").text("");
  });

  $(document).ready(function () {
    $("#togglePassword").click(function () {
      const passwordField = $("#password");
      const passwordFieldType = passwordField.attr("type");
      if (passwordFieldType === "password") {
        passwordField.attr("type", "text");
        $(this).removeClass("fa-eye").addClass("fa-eye-slash");
      } else {
        passwordField.attr("type", "password");
        $(this).removeClass("fa-eye-slash").addClass("fa-eye");
      }
    });

    $("#togglePasswordConfirm").click(function () {
      const passwordField = $("#password_confirm");
      const passwordFieldType = passwordField.attr("type");
      if (passwordFieldType === "password") {
        passwordField.attr("type", "text");
        $(this).removeClass("fa-eye").addClass("fa-eye-slash");
      } else {
        passwordField.attr("type", "password");
        $(this).removeClass("fa-eye-slash").addClass("fa-eye");
      }
    });
  });
});
