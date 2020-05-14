import firebase  from 'firebase'

  const config = {
    apiKey: "AIzaSyAZWJWMGwm-XFPuBXLNEEMph-z4F7ONqxM",
    authDomain: "dispute-f8dc3.firebaseapp.com",
    databaseURL: "https://dispute-f8dc3.firebaseio.com",
    projectId: "dispute-f8dc3",
    storageBucket: "dispute-f8dc3.appspot.com",
    messagingSenderId: "232037253531",
    appId: "1:232037253531:web:06cee5dc8574e20f56213e",
    measurementId: "G-F01L8P2WKL"
  };
  const fire = firebase.initializeApp(config)
  export default fire