$(document).ready(function() {

    if ($('body').hasClass('about')) { //only fire this on the about page
        var userFeed = new Instafeed({

            get: 'user',
            userId: 179281979,
            accessToken: '179281979.467ede5.992da7576f6e4636adb523c625cecaac',
            resolution: 'standard_resolution',
            sortBy: 'most-recent',
            limit: 9,
            template: '<li><a href="{{link}}" target="_blank"><figure><img src="{{image}}" /><figcaption class="center-middle"><span class="instacaption">{{caption}}</span></figcaption></figure></a></li>'

        });
        userFeed.run();
    }

    // Lastfm.init({
    // container: $('#music'), // The ID of your template
    // username: 'roowilliams',                         // Last.fm username
    // count: 4,                              // Number of tracks to display. Maximum is 200
    // apikey: '7e5da2bb52ab1974e1ade6fb387f1cfb'                // Your API Key here.
    // });

// ===============Strava===============

//     $.getJSON( "https://www.strava.com/api/v3/athlete/activities?per_page=4&access_token=6be8c959db97bc6294cb5a7b61dde59b6e02e2fd&callback=?", function (data) {
//         console.log(data);
//         container = $("#rides");
//         items = data;

//         var list = container.append('<ul class="cf"></ul>').find('ul');

//         for (i=0; i < items.length; i++) {

//           /* set up some easy to read vars */
//           rideDate = String(items[i].start_date_local)
//           rideDistance = items[i].distance * 0.000621371192;
//           rideDistance = rideDistance.toFixed(2);
//           rideDuration = items[i].moving_time;
//           rideMins = rideDuration / 60;
//           rideSecs = ((rideMins % 1) * 60).toFixed(0);
//           rideMins = Math.floor(rideMins)
//           rideDuration = String(rideMins + ":" + rideSecs);

//       // list.append('<li><span class="book-title">' + 
//       //   bookTitle + '</span><span class="book-author">by ' + 
//       //   bookAuthor + '</span></li>');

//     list.append('<li><span class="ride-date">' + rideDate + '</span><span class="ride-distance">' + 
//         rideDistance + 'miles</span> - <span class="ride-duration">' + 
//         rideDuration + '</span></li>');


// }    


// });


});