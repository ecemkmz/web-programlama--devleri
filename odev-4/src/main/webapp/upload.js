$(document).ready(function() {
	$('#uploadForm').submit(function(event) {
		event.preventDefault();

		var formData = new FormData($(this)[0]);

		$('#progress').show();

		$.ajax({
			url: $(this).attr('action'),
			type: 'POST',
			data: formData,
			processData: false,
			contentType: false,
			xhr: function() {
				var xhr = new window.XMLHttpRequest();
				xhr.upload.addEventListener('progress', function(evt) {
					if (evt.lengthComputable) {
						var percentComplete = evt.loaded / evt.total;
						percentComplete = parseInt(percentComplete * 100);
						$('#progress-text').text(percentComplete + '%');
						$('progress').attr('value', percentComplete);
					}
				}, false);
				return xhr;
			},
			success: function(data) {
				$('#message').html(data).show();
				$('#progress').hide();
				$('#file').val('');
				$('#fileNames').text('Dosya Seçilmedi');
			}
		});
	});

	$('#file').change(function() {
		var fileNames = [];
		$.each(this.files, function(index, file) {
			fileNames.push(file.name);
		});
		$('#fileNames').text(fileNames.join(', ') || 'Dosya Seçilmedi');
	});
});
