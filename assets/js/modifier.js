var Airtable = require('airtable');
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'keyYONgnMSZoetwAi'
});

var base = Airtable.base('appw4oQV49IkvbpCk');


var restikoId = localStorage.getItem("restikoId");
console.log("restikoId", restikoId);
modifier();

function modifier() {
  base('RESTIKO').find(restikoId, function (err, record) {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Retrieved', record.id);


        var recordId = record.id;
        var date = record.get("Date");

        var note = record.get("Note");
        var fait = record.get("Ce que j'ai fait");
        var appris = record.get("Ce que j'ai appris");
        var aime = record.get("Ce que j'ai aimé");
        var nouveau = record.get("Ce que j'ai utilisé de nouveaux");
        var problematique = record.get("Problématiques  rencontrées");
        var objectif = record.get("Quels sont les objectifs ?");
        var manque = record.get("Qu'est-ce qui m'a manqué ?");
        var formateur = record.get("Qu'est-ce que tu ferais à la place du formateur ?");
        
        $('#date').val(date);
        $('#fait').val(fait);
        $('#appris').val(appris);
        $('#aime ').val(aime);
        $('#nouveau ').val(nouveau);
        $('#problematique ').val(problematique);
        $('#objectif ').val(objectif);
        $('#manque ').val(manque);
        $('#formateur ').val(formateur);
        $('#note ').val(note);
      });
}

      function updateRestiko() {
        base('RESTIKO').update(restikoId, {
          "Date": $("#date").val(),
          "Ce que j'ai aimé": $("#aime").val(),
          "Ce que j'ai fait": $("#fait").val(),
          "Ce que j'ai appris": $("#appris").val(),
          "Ce que j'ai utilisé de nouveaux": $("#nouveau").val(),
          "Problématiques  rencontrées": $("#problematique").val(),
          "Quels sont les objectifs ?": $("#objectif").val(),
          "Qu'est-ce qui m'a manqué ?": $("#manque").val(),
          "Qu'est-ce que tu ferais à la place du formateur ?": $("#formateur").val(),
          "Note": $("#note").val(),
          "Personne (Initiales)": {
            "id": "usrE7MZpkUeLMsQws",
            "email": "orianne.brize@protonmail.com",
            "name": "Oria ria"
          }
        }, function (err, record) {
          if (err) {
            console.error(err);
            return;
          }
          console.log(record.get('Date'));
        });

        setTimeout(function()
        { 
            window.location.replace("detail-restiko.html");
        }, 5000);
      }