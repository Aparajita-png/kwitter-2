var firebaseConfig = {
    apiKey: "AIzaSyDpRdBFBbc7S0VuF23jgFuSobQap-fVJKw",
    authDomain: "kwitter-project-d55d0.firebaseapp.com",
    databaseURL: "https://kwitter-project-d55d0-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-d55d0",
    storageBucket: "kwitter-project-d55d0.appspot.com",
    messagingSenderId: "80676565939",
    appId: "1:80676565939:web:b3312e8548bb459c8a11c6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function adduser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"addinuser"
    });
}
