// Itérez le tableau episodes et assignez la valeur false à la propriété 
// hasBeenWatched  de chaque épisode, en utilisant une boucle for, for…in ou for…of.
// Maintenant, faites en sorte que tous les épisodes soient considérés comme ayant été 
// vus. Cela fonctionne-t-il également ?
class Episode {
    constructor(title, duration, hasBeenWatched) {
        this.title = title;
        this.duration = duration;
        this.hasBeenWatched = hasBeenWatched;
    }
}

let episodes = [
    new Episode('Dark Beginnings', 45, true),
    new Episode('The Mytery Continues', 45, false),
    new Episode('An Unexpected Climax', 60, false)
];

for (let episode of episodes) {
    episode.hasBeenWatched = false;
    console.log(episode);
}
