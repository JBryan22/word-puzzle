var vowels = ['a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U'];

$(function(){
  $("#string").submit(function(event){
    event.preventDefault();
    var sentArr = $("#your-string").val().split('');
    for (i = 0; i < sentArr.length; i++) {
      for (j = 0; j < vowels.length; j++) {
        if (sentArr[i] === vowels[j]) {
          sentArr[i] = '-';
        }
      }
    }
    sentArr = sentArr.join('');
    $(".output p").text(sentArr);
    $("#your-string").val('');
  });
});
