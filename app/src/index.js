var angular = require('angular');
var firebase = require('firebase');

// var firebaseConfig = {
//     apiKey: "AIzaSyC784Tdyc2Fqvi8RcU14lgXaiFxuDZtIBM",
//     authDomain: "pastinha-univeritaria.firebaseapp.com",
//     databaseURL: "https://pastinha-univeritaria.firebaseio.com",
//     projectId: "pastinha-univeritaria",
//     storageBucket: "pastinha-univeritaria.appspot.com",
//     messagingSenderId: "408911847116",
//     appId: "1:408911847116:web:c17d71f2b0857e64c42c69",
//     measurementId: "G-H0ZC29GC1X"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

module.exports = angular
    .module('pastinha', [])
    .service('configurarFirebase', function() {
        function configurar() {
            firebase.initializeApp({
                apiKey: "AIzaSyC784Tdyc2Fqvi8RcU14lgXaiFxuDZtIBM",
                authDomain: "pastinha-univeritaria.firebaseapp.com",
                databaseURL: "https://pastinha-univeritaria.firebaseio.com",
                projectId: "pastinha-univeritaria",
                storageBucket: "pastinha-univeritaria.appspot.com",
                messagingSenderId: "408911847116",
                appId: "1:408911847116:web:c17d71f2b0857e64c42c69",
                measurementId: "G-H0ZC29GC1X"
            });
            firebase.analytics();

            return firebase;
        }
    })
    .service('$firebase', function() {
        var firebaseConfig = null;

        return getInstance()

        function configure() {
            firebase.initializeApp({
                apiKey: "AIzaSyC784Tdyc2Fqvi8RcU14lgXaiFxuDZtIBM",
                authDomain: "pastinha-univeritaria.firebaseapp.com",
                databaseURL: "https://pastinha-univeritaria.firebaseio.com",
                projectId: "pastinha-univeritaria",
                storageBucket: "pastinha-univeritaria.appspot.com",
                messagingSenderId: "408911847116",
                appId: "1:408911847116:web:c17d71f2b0857e64c42c69",
                measurementId: "G-H0ZC29GC1X"
            });
            firebase.analytics();
            firebaseConfig = firebase;
        }

        function getInstance() {
            if (!firebaseConfig) {
                configure();
            }

            return firebaseConfig;
        }
    })
    
    // .config(function() {
    //     var firebaseConfig = {
    //         apiKey: "AIzaSyC784Tdyc2Fqvi8RcU14lgXaiFxuDZtIBM",
    //         authDomain: "pastinha-univeritaria.firebaseapp.com",
    //         databaseURL: "https://pastinha-univeritaria.firebaseio.com",
    //         projectId: "pastinha-univeritaria",
    //         storageBucket: "pastinha-univeritaria.appspot.com",
    //         messagingSenderId: "408911847116",
    //         appId: "1:408911847116:web:c17d71f2b0857e64c42c69",
    //         measurementId: "G-H0ZC29GC1X"
    //     };
    //     // Initialize Firebase
    //     firebase.initializeApp(firebaseConfig);
    //     firebase.analytics();
    // })
    .factory('PastinhaService', require('./pastinha.service'))
    .directive('pastinha', require('./pastinha.directive')).name;
