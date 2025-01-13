const { initializeApp } = require("firebase/app");
const { getMessaging, getToken } = require("firebase/messaging");

const firebaseConfig = {
    apiKey: "AIzaSyBynfo7tFEVWH74t5ZtPRaK07Gtb2GMz9M",
    authDomain: "kannabis-fleetbase.firebaseapp.com",
    projectId: "kannabis-fleetbase",
    storageBucket: "kannabis-fleetbase.appspot.com",
    messagingSenderId: "7815735130",
    appId: "1:7815735130:web:f52dac5028f1f80e5c4fd3",
    measurementId: "G-GEL5SCNJ49"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

getToken(messaging, {
    vapidKey: "G8kLOFHB53OqFlT8UkeMlRELSVintuE_C9xUZX8fXQQ",
}).then((currentToken) => {
    if (currentToken) {
        console.log("FCM Token:", currentToken);
    } else {
        console.log("No registration token available. Request permission to generate one.");
    }
}).catch((err) => {
    console.error("An error occurred while retrieving the FCM token:", err);
});
