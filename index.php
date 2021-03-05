<?php 
include 'header.php';
include 'functions.php';
?>

<!--
    TODO:
     Objectif principal :
    L'application doit permettre d'ouvrir un dossier et d'afficher son contenu à l'écran de la même manière que l'explorateur de fichier de votre système d'exploitation.
    L'application doit différencier les dossier des fichiers avec des icônes différentes.
    Au clic dans un dossier, le contenu affiché doit se mettre à jour sans recharger la page.
    L'application doit permettre de revenir en arrière.
    L'application n'est pas censé permettre d'afficher le contenu des fichiers donc ne vous embêtez pas avec ça.

    Objectif secondaires :
    difficulté hard : afficher le chemin du répertoire en cours dans une div
    difficulté extrem : découper ce chemin et permettre à l'utilisateur de revenir au dossier cliqué
    - handle les les .. when navigatin in folders
    - Add tooltips
    - Ad cannot open folder.


-->
<div class="noName">
    <button class='return' type="button"><</button>
    <div class='paths'></div>
</div>
<div class='content'></div>

<?php include 'footer.php'; ?>