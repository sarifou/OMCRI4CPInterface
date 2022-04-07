# OMCRI4CP Interface : Guide utilisateur

## Installations :
L'interface a besoin de l'environnement Angular pour fonctionner. Pour cela, il faut installer NodeJS et angular CLI.

1. NodeJs & npm (version 12 ou supérieure)

        sudo apt update
        sudo apt install nodejs
        sudo apt install npm

2. Angular CLI

        sudo npm install -g @angular/cli

Cloner le référentiel du projet dans le dossier de votre choix

    git clone https://github.com/sarifou/OMCRI4CPInterface.git

Se rendre à la racine du projet et installer les dépendances

    cd OMCRI4CPInterface
    npm install

Ouvrir l'application pour vérifier que l'installation s'est bien passée. Toujours à la racine du dossier *OMCRI4CPInterface*, faire:

    ng serve --open

>:warning: Suivant la version de node on peut avoir une erreur de openssl lors de l'exécution de la commande précédente. Pour résoudre cela faire :

    export NODE_OPTIONS=--openssl-legacy-provider

## Présentation des interfaces

 1. Page d'accueil

La page d’accueil regroupe l’ensemble des statistiques de la plateforme
 <div style="text-align: center;">
<img src="images/home.png" width="700" />
</div>

 2. Processus client

Cette interface permet à l’opérateur de definir un processus client. Par exemple une récupération d’un conteneur pour un client.

 <div style="text-align: center;">
<img src="images/process.png" width="700" />
</div>

 3. Téléopération

 L’interface de téléopération contient, pour chaque type de robot, l’ensemble des commandes pour les contrôler. Pour les robots avec une caméra embarquée, l’image est mise en arrière des boutons. Le contenu de l’interface change en fonction du type de robot sélectionner.

 <div style="text-align: center;">
<img src="images/train.png" width="700" />
</div>

 4. Simulateur 

 Cette interface renvoie le streaming du jumeau numérique.

 <div style="text-align: center;">
<img src="images/simulator.png" width="700" />
</div>

## Liaison de l'application avec MartServer

Pour envoyer et recevoir des requêtes avec le serveur Mart qui fait tourner les différentes extensions du projet OMCRI4CP, il faut fournir l'addresse IP et le port de communication du serveur. Pour cela, il faut changer le **ROOT_URL** dans les différents services de l'application.

Dans src->app->services, ouvrir les fichiers *mart-request.service.ts* et *teleop.service.ts* et remplacer la ligne suivante par la bonne adresse IP. Par défaut, le serveur mart tourne sur le port 8080.

        ROOT_URL = 'http://192.168.9.128:8080/' ;

Cette addresse IP est aussi utiliser dans le .ts des différents components de téléopération, il faut donc la mettre à jour.
