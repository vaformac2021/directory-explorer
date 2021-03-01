<?php
include 'variables.php';

 //$names = array('Alexis S', 'Alexis D', 'Vadim', 'Greg', 'Florian', 'Thomas', 'Mano', 'Adelie', 'Laurent', 'Fabienne', 'Agnes');

// une fonction qui va retourner une ou plusieurs valeurs de ce tableau selon une valeur saisie;
isEmpty($_POST);

function verifyIfContainsStr($initialString){
    if (empty($initialString)){
        return [];
    }
    $lowerStr = strtolower($initialString);

    $result = [];
    GLOBAL $names;
    foreach($names as $name){
        $lower = strtolower($name);
        if (strpos($lower, $lowerStr) !== false ){
            array_push($result,$name);
        }
    }

    $newArray = array_slice($result, 0, 5);
    showResult($newArray);
    //return $result;
}

function showResult($result){
    foreach ($result as $name){
        echo "<input class='result' type='button' value='".$name."'>";
    }
}

//var_dump(verifyIfContainsStr('e'));

function isEmpty($post){
    if (!empty($post)){
        existsSearch($post['search']);
    }
}

function existsSearch($search){
    if (!empty($search)){
        verifyContent($search);
    }
}

function verifyContent($search){
    verifyIfContainsStr($search);
}


?>
