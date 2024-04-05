<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="login.CookieUtil" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" type="text/css" href="login.css">
</head>
<body>
    <div class="login-form">
        <h2>Kullanıcı Girişi</h2>
        <form action="LoginServlet" method="post">
            <label for="username">Kullanıcı Adı:</label>
            <input type="text" id="username" name="username" value="<%= CookieUtil.getUsernameFromCookie(request) %>"><br>
            <label for="password">Şifre:</label>
            <div class="password-container">
                <input type="password" id="password" name="password" value="<%= CookieUtil.getPasswordFromCookie(request) %>">
                <span toggle="#password" class="toggle-password"><i class="far fa-eye"></i></span>
            </div>
            <input type="checkbox" id="rememberMe" name="rememberMe" class="remember-me">
            <label for="rememberMe">Giriş Bilgilerimi Kaydet</label><br>
            <input type="submit" value="Giriş Yap">
        </form>
    </div>
    <script>
        const togglePassword = document.querySelector('.toggle-password');
        const password = document.getElementById('password');

        togglePassword.addEventListener('click', function() {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
        });
    </script>
</body>
</html>
