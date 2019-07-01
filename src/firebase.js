import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyACr-JQDVhtcA7oigoIm2HpeX_DsxSpiAY",
    authDomain: "m-city-d5763.firebaseapp.com",
    databaseURL: "https://m-city-d5763.firebaseio.com",
    projectId: "m-city-d5763",
    storageBucket: "m-city-d5763.appspot.com",
    messagingSenderId: "798250391338",
    appId: "1:798250391338:web:8c8d1e0775af0d32"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');

export {
    firebase,
    firebaseMatches,
    firebasePromotions
}