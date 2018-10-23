var app_fireBase = {};
(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyB09mM7hJrzUFF5cwcPd5eJ_0yJh4N6nU0",
        authDomain: "web-auth-demo-f8404.firebaseapp.com",
        databaseURL: "https://web-auth-demo-f8404.firebaseio.com",
        projectId: "web-auth-demo-f8404",
        storageBucket: "web-auth-demo-f8404.appspot.com",
        messagingSenderId: "226600896214"
    };
    firebase.initializeApp(config);

    app_fireBase = firebase;
})()