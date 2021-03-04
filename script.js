let whenReady = () => {
  
  let paths = $('.paths');
  let directory = $('.directory');
  let file = $('.file');
  let content = $('.content');
  let object = {};
  let currentDirectory = "/";
  let path = $('.path');

  let activationButton = () => {
    console.log ($('.paths > .path').length);
    if ($('.paths > .path').length == 1){
      $('.return').prop('disabled', true);
    } else {
      $('.return').removeAttr('disabled');
    }
  }

  let splitPath = (chemin) =>{
    paths.html(`<div class='path' id='/'>/</div>`);
    let pth = "/";
    for (elem of chemin){
      if (elem !=""){
        pth +=elem+'/';
        paths.append(`<div class='path' id='${pth}'>${elem}/</div>`);
      }
    }
  }
  let refreshPath2 = () =>{
    let chemin = currentDirectory.split('/');
    console.log (chemin);
    splitPath(chemin);
    
  }

  let showElements = () => {
    console.log (object);
    content.html('');
    for (key in object){
      let dir = key.split('/');
      let name = dir[dir.length-1];
      if (object[key]=='directory'){
        content.append(`<div class='directory' id=${key}><p>${name}</p></div>`);
      } else{
        content.append(`<div class='file' id=${key}><p>${name}</p></div>`);
      }
    }
    refreshPath2();
  }

  
  let noName = (data) =>{
    //$.Callbacks(data);
    object = data;
    //console.log(data);
    for(key in data){
      let dir = key.split('/');
      let name = dir[dir.length-1];
      //content.append(`<p>${name}</p>`)
      
    }
    showElements();
    activationButton();
    directory = $('.directory');
    directory.click(accessDirectory);

    path = $('.path');
    path.click(accessDirectory);
  }

$.post('functions.php', {folder: "/"}, noName, "JSON");
$('.return').click((e)=>{
  //console.log();
  currentDirectory = $('.paths > .path').eq(-2).attr("id") + '/';
  $.post('functions.php', {folder: $('.paths > .path').eq(-2).attr("id")}, noName, "JSON");
})

  let accessDirectory = (e) => {
    currentDirectory = e.currentTarget.id + '/';
    $.post('functions.php', {folder: currentDirectory}, noName, "JSON")
  }
}

$(document).ready(whenReady);