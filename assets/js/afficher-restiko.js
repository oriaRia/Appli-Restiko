var Airtable = require('airtable');
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'keyYONgnMSZoetwAi'
});

var base = Airtable.base('appw4oQV49IkvbpCk');

var restikoId = localStorage.getItem("restikoId");
console.log("restikoId", restikoId);

//Template affichage de la page détails restiko
var details =
    '<div class="media-body text-justify">' +
    '<h5>###Date###</h5>' +
    '<h5>Note du jour</h5>' +
    '<img src="assets/image/Note###Note###.bmp" class="etoile">' +
    '<h5>Ce que j\'ai fait :</h5>' +
    '<p>###fait### </p>' +
    '<h5>Ce que j\'ai appris :</h5>' +
    '<p>###appris### </p>' +
    '<h5>Ce que j\'ai aimé :</h5>' +
    '<p>###aime### </p>' +
    '<h5>Ce que j\'ai utilisé de nouveau :</h5>' +
    '<p>###nouveau### </p>' +
    '<h5>Problématiques :</h5>' +
    '<p>###problematique### </p>' +
    '<h5>Objectifs :</h5>' +
    '<p>###objectif### </p>' +
    '<h5>Ce qui m\'a manqué :</h5>' +
    '<p>###manque### </p>' +
    '<h5>Ce que j\'aurai fait à la place du formateur :</h5>' +
    '<p>###formateur### </p>' +
    '</div>' +
    '</div><a class="btn btn-primary btn-lg btn-block" role="button" href="modifier.html">Modifier</a><a class="btn btn-secondary btn-lg btn-block" role="button" href="index.html">Fermer</a>';

//find pour recuperer les infos et les afficher dans le nouveau template de la page afficher-restiko.html

affichageOne(restikoId);

function affichageOne(restikoId)
{
    base('RESTIKO').find(restikoId, function(err, record) {
        if (err) { console.error(err); return; }
        console.log('Retrieved', record.id);
    
       
        var recordId = record.id;
        var date = record.get("Date"); //recuperer la date mais changer son affichage de iso 8601 en jj/mm/annee
        date = date.split('-');
        date = date.reverse();
        date = date.join('-');
        var note = record.get("Note");
        var fait = record.get("Ce que j'ai fait");
        var appris = record.get("Ce que j'ai appris");
        var aime = record.get("Ce que j'ai aimé");
        var nouveau = record.get("Ce que j'ai utilisé de nouveaux");
        var problematique = record.get("Problématiques  rencontrées");
        var objectif = record.get("Quels sont les objectifs ?");
        var manque = record.get("Qu'est-ce qui m'a manqué ?");
        var formateur = record.get("Qu'est-ce que tu ferais à la place du formateur ?");
    
        var newTemplate = details.replace("###Date###", date);
        newTemplate = newTemplate.replace("###recordId###", recordId);
        newTemplate = newTemplate.replace("###Note###", note);
        newTemplate = newTemplate.replace("###fait###", fait);
        newTemplate = newTemplate.replace("###appris###", appris);
        newTemplate = newTemplate.replace("###aime###", aime);
        newTemplate = newTemplate.replace("###nouveau###", nouveau);
        newTemplate = newTemplate.replace("###problematique###", problematique);
        newTemplate = newTemplate.replace("###objectif###", objectif);
        newTemplate = newTemplate.replace("###manque###", manque);
        newTemplate = newTemplate.replace("###formateur###", formateur);
    
    
        $(".details").html(newTemplate); 
    
    
    });
}