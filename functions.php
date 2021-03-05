<?php
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
           array_push($content, $directory.$file);
           }
           closedir($dh);
        }
   }

   asort($content);
   $newContent = deletePoints($content);

   associativeArray($newContent);
}

function deletePoints($content){
    array_shift($content);
    array_shift($content);
    return $content;
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
        }       
   }
   echo json_encode($names);
}
?>
