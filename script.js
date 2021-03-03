let whenReady = () => {
  
  let paths = $('.paths');
  let directory = $('.directory');
  let file = $('.file');
  let content = $('.content');
  let object = {};
  let currentDirectory = "/";

  let refrechPath = () =>{
    if (currentDirectory != '/'){
      let chemin = currentDirectory.split('/');
      for (elem of chemin){
        paths.append(`<div class='path'>${elem}/</div>`);
      }
    } else {
      paths.append(`<div class='path'>/</div>`);
    }
    
  }

  let showElements = () => {
    //console.log (object);
    content.html('');
    for (key in object){
      let dir = key.split('/');
      let name = dir[dir.length-1];
      if (object[key]=='directory'){
        content.append(`<div class='directory '><p>${name}</p></div>`);
      } else{
        content.append(`<div class='file'><p>${name}</p></div>`);
      }
    }
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
    refrechPath();
    directory = $('.directory');
    directory.click(accessDirectory);

  }

$.post('functions.php', {folder: "/"}, noName, "JSON");

  let accessDirectory = (e) => {
    currentDirectory += e.currentTarget.innerText + "/";
    //alert(currentDirectory);
    $.post('functions.php', {folder: currentDirectory}, noName, "JSON")
  }
}

$(document).ready(whenReady);