let whenReady = () => {
  var buttonName = $('.result');
  var results = $('.results');

  let form = $('#form');
  let searchInput = $('#searchInput');
  let submit = $('#submit');

  searchInput.val('');

  let allowNewName  = (e) => {
    searchInput.val(e.target.value);
    results.html("");
  }

  let noName = (event) => {
    results.html(event);
    buttonName = $('.result');
    buttonName.click(allowNewName);
  }

  let verifyInput = () => {
    let formComplete = form.serialize();
    $.post('functions.php', formComplete, noName, "html");
  };


  searchInput.on('input', verifyInput);

  submit.click(
    //faire un post vers la nouvelle page avec le la valeur de searchInput
  )

}
$(document).ready(whenReady);