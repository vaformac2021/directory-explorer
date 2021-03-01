<?php 
include 'header.php';
?>

<!--
    TODO:
     Done - on va faire un champ de recherche qui nous propose des noms 
     Done - en cliquant sur le nom cela nous fait une auto completion de la barre de recherche
     - Lorsqu'on appuye sur rechercher, la fiche de l'eleve nous aparait
     Done - Definir une limite pour le nombre des suggestions.
     - Ne pas deplacer le search quand nous montrons des suggestions ?
     Done - Aligner les suggestions a gauche

-->
<div class="row">

    <!-- Title -->
    <div class="column">
        <h1 class="center">Recherce</h1>
    </div>

    <!-- Search Form -->
    <div class="column">
        <form id="form" action="" method="POST" autocomplete="off">
            <input class="inputText" type="text" name="search" id="searchInput" placeholder="Search :"/>
            <input id="searchButton" type="submit" value="Search" />

            <!-- Results -->
            <div class="results">
            </div>
        </form>
    </div>
</div>
<?php include 'footer.php'; ?>