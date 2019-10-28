var express = require('express'),
    os = require('os'),
    webpush = require('web-push');

var vapidKeys = { // web-push generate-vapid-keys --json
    "publicKey":"BE6IqM0la0Mr7jg5w5vYwPk5gwbypKcpsJrqH-xX3nfLm9BCCrt2EDCyMZH7yZYFDGtGxtCgZqCgnGeuJehndoc",
    "privateKey":"bW1GCNS8dMosgZr3bO155BRuATT8GVbJhPKPy9ZPmoY"
};

webpush.setVapidDetails(
    'mailto:paul.gilchrist@outlook.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

var app = express();

app.route('/api/notifications').post(sendNotification);

function sendNotification(req, res) {
    var allSubscriptions = [ // This would normally come from a database and contain subscriptions from every customer
        {"endpoint":"https://fcm.googleapis.com/fcm/send/fQji9CXZVcs:APA91bEkBAvmu6LvcZ15G0YEC4Oi7KDgOzhvh58efPrX5HVxI8h2Me3i-KNaGMvA3QWyP1UEQsQzEVVLfbNOKwaEpCQKi63GKWKfJ81sJVF2do079vzB7mnBuRpaY7-1Cy9_kCzIiE0E","expirationTime":null,"keys":{"p256dh":"BCbQqg_94lRR5bPVXrzfSJhc-cDWCeb80exl7I-dNj49lTZBmo67SzIMzdpyl2_r2zvzkg2EWND5aDPzn7Xg8Ws","auth":"vLBjUYkw4_YRaq2l_IrbTQ"}}
    ];
    console.log('Total Subscriptions', allSubscriptions.length);
    var notificationPayload = {
        "notification": {
            "title": "Angular Template Notification",
            "body": "Welcome to the Angular Training Template!",
            "icon": "assets/icons/icon-72x72.png", // Relative to the client not the server
            "vibrate": [100, 50, 100],
            "data": { // Put any data you want here and it will be accessable on the client with the notification
                "applicationUrl": "https://angulartemplate.azurewebsites.net",
                "githubUrl": "https://github.com/PaulGilchrist/angular-template"
            },
            "actions": [ // Can also add icon
                {
                    "action": "explore-application",
                    "title": "View the application"
                },
                {
                    "action": "explore-github",
                    "title": "Checkout our GitHub"
                }
            ]
        }
    };
    Promise.all(allSubscriptions.map(function(sub) {
            webpush.sendNotification(sub, JSON.stringify(notificationPayload));
        })
    )
    .then(function() { return res.status(200).json({message: 'Notification sent successfully.'});})
    .catch(function(err) {
        console.error("Error sending notification, reason: ", err);
        res.sendStatus(500);
    });
}

//Use port provided by hosting provider if available
app.set('port', (process.env.PORT || 3000));
//Start the application
app.listen(app.get('port'), function() {
    console.log('App running on host', os.hostname(), 'and port', app.get('port'));
});
