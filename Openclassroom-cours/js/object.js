// Créez un objet (Object, en anglais) et stockez-le dans une variable appelée episode. 
// Utilisez bien des accolades  {}  et mettez les trois attributs suivants :
// title  : le titre de l'épisode ;
// duration  : la durée de l'épisode ;
// hasBeenWatched  : si l'épisode a été visionné ou non.

// ==================


let episode = {
    title: 'object JavaScript',
    duration: 32,
    hasBeenWatched: true
};
console.log(episode['duration']);

// =====================

// Créez les trois variables suivantes :
// episodeTitle  : le titre de l'épisode (string) ;
// episodeDuration  : la durée de l'épisode (number) ;
// episodeHasBeenWatched  : si l'épisode a été regardé ou non (boolean).
// Assignez-y les valeurs correspondantes de l'objet  episode  en utilisant la notation "dot".

// ==================

// let episodeTitle = episode.title;
// let episodeDuration = episode.duration;
// let hasBeenWatched = episode.hasBeenWatched;

// ==================

// Créez une classe   Episode  avec le mot clé  class  .
// Créez un constructor pour votre classe  Episode  qui devra accepter trois arguments :
// title  : le titre de l'épisode (string) ;
// duration  : la durée de l'épisode (number) ;
// hasBeenWatched  : si l'épisode a été regardé ou non (boolean).
// En utilisant le mot clé   this  , assignez les propriétés  title  ,  
// duration  et  hasBeenWatched  via un constructor .

// ==================

class Episode {
      constructor(title, duration, hasBeenWatched) {
        this.title = title;
        this.duration = duration;
        this.hasBeenWatched = hasBeenWatched;
      }
}

// ==================

// Avec le mot clé   new  , créez trois instances de la classe   Episode  :
// firstEpisode  ;
// secondEpisode  ;
// thirdEpisode  .

// ==================

let firstEpisode = new Episode("les class javascript", 15, "false");
let secondEpisode = new Episode("les instances javascript", 25, "true");
let thirdEpisode = new Episode("les objects javascript", 35, "false");

// ==================

/****Les variable*****/

// Créez un Array stocké dans une variable episodes, et peuplez-le avec les 
// trois variables   firstEpisode, secondEpisode et thirdEpisode .Essayez de 
// changer l'ordre dans lequel vous avez ajouté les épisodes, et regardez ce 
// qu'il se passe lorsque vous rafraîchissez. 

// ==================
/*
let episodes = [firstEpisode, secondEpisode, thirdEpisode];
console.log(episodes);
*/

// ==================
let episodes = [];

// Dans cet exercice, un Array vide   episode  a déjà été créé.
// En utilisant la méthode   push  du tableau  episodes  , ajoutez les 
// épisodes un par un. Ajoutez deux fois le troisième épisode.
episodes.push(firstEpisode, secondEpisode, thirdEpisode, thirdEpisode);

// Avec la méthode  pop  , retirez l'épisode superflu du tableau   episodes  .
episodes.pop();

// Créez une variable appelée   numberOfEpisodes  qui contient la   length  du tableau  episodes .
// Amusez-vous à ajouter et retirer des épisodes, et vérifiez que tout fonctionne correctement.
let numberOfEpisodes = episodes.length

