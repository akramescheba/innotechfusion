
# Projet InnotechFusion
Est un projet de réalisation d'une plateforme d'émargement de l'association innotechfusion permettant aux membres de voter leurs futurs responsabbles administratifs lors des prochains votes. 
## Préréquis

 - [Utiliser un éditeur de code](https://code.visualstudio.com/)
- [Connaissance en Angular, et du concept MVC ](./)
 - [Connaissance en JAVA, SpringBoot et Maven ](./)
 - [Connaissance en de Git et Github](./)
## Environment Variables

- J'ai utilisé VS Code comme éditeur de code pour ce projet. Le projet est développé avec springboot maven et angular, pour cela, vous devez configurer votre environnement de développement.
- Pour configurer votre environnement de développement, vous devez installer les outils suivants:

` Java 23.0.1 ou supérieur`

`Maven 3.9.9  ou supérieur`

`Node.js 22.13.0 ou supérieur`

`Angular CLI 18.2.14 ou supérieur`

` MySQL 8.0.21 ou supérieur`


## Installation

1. Télécharger  le [ JDK 8 ou 11 ](  https://www.oracle.com/java/technologies/downloads/) et suivre les insctructions d'installation

- Verifiez l'installation avec la commande: 

```bash
    java -version
```
2. Télécharger [ Maven](https://maven.apache.org/install.html) et suivre les insctructions d'installation

Verifiez l'installation avec la commande: 

```bash
    mvn --version
```
3. Télécharger [Node.js](https://nodejs.org/en/download/) et suivre les insctructions d'installation

- Verifiez l'installation avec la commande: 

```bash
    node -v ou node --version
```
4. Installer [Angular ](https://angular.dev/installation) avec la ligne de commande suivante:
- Verifiez l'installation avec la commande: 

```bash
    npm install -g @angular/cli@18.2.14
    ng --version
```

5. Télécharger [MySQL installer](https://dev.mysql.com/downloads/installe) et suivre les insctructions d'installation de MySQL Workbench.


## Installation et configuration de la base des données avec MySQL Workbench.

1. Après avoir installé MySQL Workbench, vous devez créer une base de données que vous devez nommer **innotechdata** en suivant les indiquations sur les images suivantes: 

Pour cela, vous devez créer un nouveau serveur en suivant les indications sur l'image suivante : 
![MySQL](https://github.com/user-attachments/assets/7e735cfd-fff5-4c0b-b7aa-658cc8520883)
Veillez à bien remplir ces champs:

- Connection name : Définier un nom pour la connection
- Hostname : 127.0.0.1 ou localhost
- Username : root
- Password : Saisir le mot de passe que vous avez défini lors de l'installation de MySQL Workbench.

2. Après avoir configuré la connection,clique sur le bouton Test de connection :

![test de connexion](https://github.com/user-attachments/assets/a650eeb6-5ea7-483d-a068-dad87a93e457)

La fenêtre ci-dessus s'affiche vous informant que le test de connection a réussie.

3. Vous devez maintenant accèder à la connection que vous venez de créer pour créer une nouvelle base des données, et y rajouter des données de test.

![server](https://github.com/user-attachments/assets/3fb23178-27ff-42a1-86be-266379592df6)

4. Une fois accedez à la connection, vous accedez à la page vous permettant de faire des requettes SQL.

![creer une base de donnees](https://github.com/user-attachments/assets/0a295fe7-471b-4c65-9843-6bd18e7da263)

La requette suivante permet de créer une nouvelle base des données.

```bash
    CREATE DATABASE innotechdata ;
```

![create database](https://github.com/user-attachments/assets/fd0fb6e5-d384-41ab-bab6-b8d894834997)

Après l'exécution de la requette SQL, on observe l'apparition de la base des données "donnees" suite à sa création comme sur l'image suivante :

![database](https://github.com/user-attachments/assets/639b5fd4-130a-4237-9c79-65eb096b9f28)

Pour sélectionner la bas de données et y introduire des données de test, vous devezexécuter la commande suivante:
```bash
    USE innotechdata ; 
```
![use database](https://github.com/user-attachments/assets/c026dfbf-29a8-4e1d-967d-9bfc97959b5e)

Vous devez procédez à la création de la table membres, qui contiendra la liste des membres et leurs données personnelles. 

```bash
    CREATE TABLE membre (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ddn INT NOT NULL,
    nom VARCHAR (50) NOT NULL,
    prenom VARCHAR (50) NOT NULL,
    vote VARCHAR (50) NOT NULL,);
```
![create table](https://github.com/user-attachments/assets/3a98d6fc-12bb-416a-9416-f711eb401df9)

Vous devez actuellement ajouter des données de test contenant les informations au format nom, prenom et dte de naissance et egalement vote pour le statut du vote.

Requête d'ajout des données à la base:

```bash
    INSERT INTO membre (id, ddn, nom, prenom, vote) 
VALUES (5, 2002, 'Moreau', 'Lucas', 'voter'),(6, 1996, 'Lefevre', 'Emma', 'voter'),(7, 1990, 'Bernard', 'Sophie', 'voter'),(8, 1985, 'Dubois', 'Thomas', 'voter'),(9, 1998, 'Martinez', 'Camille', 'voter'),(10, 1993, 'Garcia', 'Hugo', 'voter'),(11, 2000, 'Lambert', 'Manon', 'voter'),(12, 1987, 'Fontaine', 'Louis', 'voter'),(13, 1995, 'Rousseau', 'Chloé', 'voter'), (14, 2001, 'Blanc', 'Nathan', 'voter'
);

```
![insert des donnees](https://github.com/user-attachments/assets/58450fec-2f40-4f86-a5c8-9866350283d5)

### Affichage des données de labase des données.

Avec la commande suivante, vous accèdez à toutes les données de la base sous forme de tableau.

![affichage des donnees](https://github.com/user-attachments/assets/3c7365f3-ccf5-465f-b8c2-30e9d7ec7525)

## Clonage du projet

Créer un répertoire sur le bureau et ouvrez ce répertoire dans VS Code.
Cloner le projet avec la commande 


```bash
  git clone https://github.com/akramescheba/innotechfusion
```


## Lancement du backend
 1. Ouvrez un nouveau Terminal à la racine du projet puis naviguez vers le dossier backend, et lancez le script suivant:

```bash
   mvn spring-boot:run  
```
2. Ouvrez un navigateur et naviguer vers : [http://localhost:8082/membres](http://localhost:8082/membres). 


## Lancement du frontend


1. Naviguer vers le dossier frontend, dans le terminal, puis lancer le script suivant:

Installation des dépendences
```bash
  npm install
  
```

Lancer le server

```bash
  ng serve
```

Ouvrez un navigateur et naviguer vers : 
[http://localhost:4200](http://localhost:4200), pour cceder au frontend.




## Reference API 



#### Affichage d'un membre par Id
```http
  http://localhost:8082/membre/id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `membre/id`      | `string` | Affichage d'un membre par Id|

#### Affichage de tous les membres

```http
 http://localhost:8082/membres
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `membres` | `string` | Liste de tous les membres |

#### Erreur possible

En cas d'affichage d'erreur du type : *Whitelabel Error Page* , vous devez faire la verification de la saisie de l'API et vous rassurer que l'adresse à bien été saisir dans l'URL.

![Whitelabel Error Page](https://github.com/user-attachments/assets/fcd11d96-174d-43f9-b95c-03e11b845ae6)

## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jordy-akra-mescheba/)


![innotechfusion](https://github.com/user-attachments/assets/aba58e60-b04a-41da-8ec5-1fcb5688b566)
## Auteur

- [@akramescheba](https://github.com/akramescheba)
