var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyYONgnMSZoetwAi'
});

// Créer un nouvel enregistrement directement depui l'appli. 
function creerRestiko() {
    base('RESTIKO').create([
      {
        "fields": {
          "Date": "2020-01-17",
          "Ce que j'ai fait": "Ma veille tech, et projet blog veille info que je dois finir ce matin ! cette après midi je vais devoir faire l'horloge, samedi et dimanche le restiko...",
          "Quels sont les objectifs ?": "Finir impérativement les 5 projets à rendre pour lundi, et comprendre ce que Teremu veut qu'on fasse sur GitHub",
          "Qu'est-ce qui m'a manqué ?": "toujours plus de temps :(",
          "Personne (Initiales)": {
            "id": "usrE7MZpkUeLMsQws",
            "email": "orianne.brize@protonmail.com",
            "name": "Oria ria"
          }
        }
      },
      {
        "fields": {
          "Date": "2020-01-16",
          "Ce que j'ai aimé": "sport et mon jeu du pendu que je trouve rigolo avec mon pote Groots. ",
          "Ce que j'ai fait": "ma veille informationnelle, finalisation de mon Projet jeu du Pendu, et j'ai fais une version 2 avec Teremu pour intégrer le tableau Airtable WOD, tra...",
          "Ce que j'ai appris": "j'ai appris plus de fonction JS et notamment comment modifier en Js les caractères des mots du tableau airtable (de miniscule à majuscule) >ToUpperCas...",
          "Ce que j'ai utilisé de nouveaux": "requete sql / Js nouvelles fonction / jquery remplace document.write\n",
          "Problématiques  rencontrées": "ne pas perdre trop de temps à solutionner les nombreuses erreurs que je n'arrête pas de faire !!!",
          "Quels sont les objectifs ?": "finir les projets dans les temps c'est à dire avant lundi !!!!!",
          "Qu'est-ce qui m'a manqué ?": "beaucoup plus de temps :(",
          "Personne (Initiales)": {
            "id": "usrE7MZpkUeLMsQws",
            "email": "orianne.brize@protonmail.com",
            "name": "Oria ria"
          },
          "Note sur 5": 4
        }
      }
    ], {typecast: true}, function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    });
  }