<?php

// Open a directory, and read its contents

//je je recois des donnes en post, je verifiee que c'est bien ce que j'attends,
//et je lance openDirectory en lui donnant en parametre le chemin recu.
isEmpty($_POST);

function isEmpty($post){
    if (!empty($post)){
        existsFolder($post['folder']);
    }
}

function existsFolder($search){
    if (!empty($search)){
        openDirectory($search);
    }
}

function openDirectory($directory){
   $content = [];
   if (is_dir($directory)){
       if ($dh = opendir($directory)){
           while (($file = readdir($dh)) !== false){
           //echo "filename:" . $file . "<br>";
           array_push($content, $directory.$file);
           }
           closedir($dh);
       }
   }
   associativeArray($content);
   //echo json_encode($content);
}

function associativeArray($filenames){
    $names = [];
   if (is_array($filenames) && !empty($filenames)){
       foreach($filenames as $filename){
            if (filetype($filename) == "dir"){
                $names[$filename] = 'directory';
            } else {
                $names[$filename] = 'file';
            }
            //echo transformInLink($filename);
        }       
   }
   //var_dump($names);
   echo json_encode($names);
}



//transformer en lien

function transformInLink($filename){
    $var = explode("/", $filename);
    $varName = end($var);

   if (filetype($filename) == "dir"){
       return "<div class='directory'><p>$filename</p></div>";
   } else {
       return "<div class='file '><p>$filename</p></div>";
   }
}
// <img src='images/directory.png' alt='directory'>
//<img src='images/file.png' alt='file'>
?>
