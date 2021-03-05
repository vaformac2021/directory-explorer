let activationButton = (buttonReturn) => {
  let pathsChilds = $('.paths > .path').length
  if (pathsChilds == 1) buttonReturn.prop('disabled', true)
  else buttonReturn.removeAttr('disabled')
}

let splitPath = (chemin, paths) =>{
  paths.html(`<input type="button" class='path' id='/' value="/">`)
  let pth = "/"
  for (elem of chemin){
    if (elem !=""){
      pth +=elem+'/'
      paths.append(`<input type="button" class='path' id='${pth}' value="${elem}/">`)
    }
  }
}

let refreshPath = (currentDirectory, paths) =>{
  let chemin = currentDirectory.split('/')
  splitPath(chemin, paths)
  
}

let post = (noName, fonctionRetour) => {
  $.post('functions.php', {folder: noName}, fonctionRetour, "JSON")
}

let showElements = (content, object, currentDirectory, paths, svgFile, svgFolder) => {
  content.html('')
  for (key in object){
    let dir = key.split('/')
    let name = dir[dir.length-1]
    if (object[key]=='directory') content.append(`<div class='directory' id=${key}>${svgFolder}<p>${name}</p></div>`)
    else content.append(`<div class='file' id=${key}>${svgFile}<p>${name}</p></div>`)
  }
  refreshPath(currentDirectory, paths)
}

let whenReady = () => {
  
  let paths = $('.paths')
  let directory = $('.directory')
  let content = $('.content')
  let buttonReturn = $('.return')
  let object = {}
  let currentDirectory = "/"
  let path = $('.path')
  let svgFile = '<svg enable-background="new 0 0 477.867 477.867" version="1.1" viewBox="0 0 477.87 477.87" xml:space="preserve"><path d="m324.27 119.47c-9.426 0-17.067-7.641-17.067-17.067v-102.4h-204.8c-28.277 0-51.2 22.923-51.2 51.2v375.47c0 28.277 22.923 51.2 51.2 51.2h273.07c28.277 0 51.2-22.923 51.2-51.2v-307.2h-102.4z"/><polygon points="341.33 10.001 341.33 85.333 416.67 85.333"/></svg>'
  let svgFolder = '<svg enable-background="new 0 0 408 408" version="1.1" viewBox="0 0 408 408" xml:space="preserve"><path d="m372 88.661h-165.68l-33-39.24c-0.985-1.184-2.461-1.848-4-1.8h-133.32c-19.956 0.198-36.023 16.443-36 36.4v240c-1e-3 19.941 16.06 36.163 36 36.36h336c19.94-0.197 36.001-16.419 36-36.36v-199c1e-3 -19.941-16.06-36.162-36-36.36z"/></svg>'

  let fonctionRetour = (data) =>{
    object = data
    showElements(content, object, currentDirectory, paths, svgFile, svgFolder)
    activationButton(buttonReturn)

    directory = $('.directory')
    directory.click(accessDirectory)

    path = $('.path')
    path.click(accessDirectory)
  }

  let noName = content => post(currentDirectory = content, fonctionRetour)
  

  let addClickButtonReturn = () =>{
    buttonReturn.click(e => noName($('.paths > .path').eq(-2).attr("id")))
  }

  let accessDirectory = e => noName(e.currentTarget.id +'/')

  post('/', fonctionRetour)
  addClickButtonReturn()
}
$(document).ready(whenReady)