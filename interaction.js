$(function() {
  $('add').on('click', function(e) {
    e.preventDefault();
    var newText = $('input:text').val();
    $('li:last').after('<li>' + newText + '</li>');
    $textInput.val('');

  });
  $('li').on('click', function() {
    (this).remove();
  });

});
