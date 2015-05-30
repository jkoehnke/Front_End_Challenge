$(function() {
  $('#add').on('click', function(e) {
    e.preventDefault();
    var newText = $('input:text').val();
    $('ul').append('<li>' + newText + '</li>');
    $textInput.val('');

  });
  $('body').on('click', 'li', function() {
    $(this).closest('li').remove();
  });

});
