<?php 
include 'header.php';
include 'variables.php';

//mettre a jour le contenu en fonction du nom qui est apparu
//au cas ou il n'existe pas 

isEmpty($_POST);

function isEmpty($post){
    if (!empty($post)){
        existsSearch($post['search']);
    }
}

function existsSearch($search){
    if (!empty($search)){
        verifyContent($search);
    } else {
        echo "valeur nulle";
    }
}

function verifyContent($search){
    verifyIfContainsStr($search);
}

function verifyIfContainsStr($initialString){
    if (empty($initialString)){
        return [];
    }
    $lowerStr = strtolower($initialString);

    $result = [];
    GLOBAL $names;
    foreach($names as $name){
        $lower = strtolower($name);
        if (strpos($lower, $lowerStr) !== false){
            array_push($result,$name);
        }
    }

    showResult($result);
    //return $result;
}

function showResult($result){
    switch ($result) {
        case 0:
            echo "i equals 0";
            break;
        case 1:
            echo "i equals 1";
            break;
        case 2:
            echo "i equals 2";
            break;
    }
}

include 'footer.php';
?>