angular.module('billetterieProjectApp')
    .service('BilletService', function () {

    function toDataURL(src, callback, outputFormat) {
        var img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = function() {
            var canvas = document.createElement('CANVAS');
            var ctx = canvas.getContext('2d');
            var dataURL;
            canvas.height = this.naturalHeight;
            canvas.width = this.naturalWidth;
            ctx.drawImage(this, 0, 0);
            dataURL = canvas.toDataURL(outputFormat);
            callback(dataURL);
        };
        img.src = src;
        if (img.complete || img.complete === undefined) {
            img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
            img.src = src;
        }
    }



    this.createBillet = function(event, user) {
        if (user.campus == "Autre") {
            user.campus = user.otherCampus;
        }
        if (user.filiere == "Autre") {
            user.filiere = user.otherFiliere;
        }
        // Do whatever you'd like with the Data URI!
        toDataURL(event.get('coverPhoto').url(), function(data) {
            console.log("RESYLT", data);
                  var dd = {
                  content: [
                  {
                  text: "Billet d'entrée pour l'événement : " + event.get('name') + "\n\n",
            style: 'header',
                alignment: 'center'
    },
        {
        alignment: 'justify',
        columns: [
            {
                text: "\nInformations importantes : \n\nNom : " + user.name + "\nPrénom : " + user.firstname + "\nNuméro de carte étudiant : " + user.carteNumber + "\n\nCampus :  " + user.campus + "\nFilière : " + user.filiere
            },
            {
                text: "\nInformations de l'événement : \n\n Lieu : " + event.get('localisation') + "\nDates et Heures : \n Du " + event.get('dateStart') + " à " + event.get('hourStart') + " \Au " + event.get('dateEnd') + " à " + event.get('hourEnd')
            },
        ]
    },
        {
        text: "\n\n\n\n\n\n\n\n\nTexte en rapport avec la loi",

    }
    ],
        background: [
            {
                image: data,
                width: 792
            }
        ],

}

        pdfMake.createPdf(dd).download();
});
}



});
