<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>Fotoğraf Yükleme Formu</title>
<link rel="stylesheet" type="text/css" href="style.css">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="upload.js"></script>
</head>
<body>
	<h2>Fotoğraf Yükleme Formu</h2>
	<form id="uploadForm" action="AddImage" method="post"
		enctype="multipart/form-data">
		<input type="file" id="file" name="file" accept="image/*" multiple><br>
		<br> <input type="submit" value="Gönder">
		<div id="progress" style="display: none;">
			<progress value="0" max="100"></progress>
			<span id="progress-text">0%</span>
		</div>
		<div id="message" style="display: none;"></div>
	</form>
</body>
</html>
