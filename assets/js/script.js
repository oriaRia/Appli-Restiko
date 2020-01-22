var Airtable = require('airtable');
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'keyYONgnMSZoetwAi'
});

var base = Airtable.base('appw4oQV49IkvbpCk');
var template =
  '<div class="media border rounded-0 home">' +
  '<div class="media-body d-sm-flex flex-row flex-fill flex-sm-fill justify-content-sm-center shadow p-2 mb-2 bg-white rounded">' +
  '<div class="row justify-content-center align-items-center">' +
  '<div class="col-auto col-sm-12 text-left float-left align-self-center m-auto">' +
  '<h5>###Date###</h5>' +
  '<img src="assets/image/Note###Note###.bmp" class="etoile" alt="la note du jour">' +
  '</div>' +
  '<div class="col-auto col-sm-12 flex-shrink-1"><button onclick="garderId(\'###recordId###\')" class="btn btn-primary" role="button" href="detail-restiko.html">Lire</button></div>' +
  '</div>' +
  '</div>' +
  '</div>';
//Template affichage de la page d'acceuil des restiko 
affiche();

function affiche() {

  base('RESTIKO').select({
    sort: [{
      field: "Date",
      direction: 'asc'
    }],
    // Selectionner le nombre d'affichage dans le Grid view:
    maxRecords: 100,
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function (record) {

      console.log('record', record);
      var recordId = record.id;
      var date = record.get("Date");
      console.log('date', date)
      var note = (record.get("Note")) ? record.get("Note") : 0;

      date = date.split('-'); //inversion du format date pour fr
      date = date.reverse();
      date = date.join('-');

      var newTemplate = template.replace("###recordId###", recordId);
      newTemplate = newTemplate.replace("###Date###", date);
      newTemplate = newTemplate.replace("###Note###", note);


      $(".model").prepend(newTemplate); //les element avec la class model seront envoyes dans un nouveau template.
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

  }, function done(err) {
    if (err) {
      console.error(err);
      return;
    }
  });

}

function garderId(id) {
  localStorage.setItem("restikoId", id); // localStorage.setItem("restikoId", restikoId); sert a stocker les id de chaque records selectionné
  window.location = 'detail-restiko.html'; // sert a envoyer les infos sur une autre page de l'index à details-restiko

}