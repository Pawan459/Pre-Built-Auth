let firbaseApp = {};

(function() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        //config here
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    firbaseApp = firebase;

    firebase.analytics();
})();