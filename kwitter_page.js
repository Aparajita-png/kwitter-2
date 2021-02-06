var firebaseConfig = {
      apiKey: "AIzaSyDpRdBFBbc7S0VuF23jgFuSobQap-fVJKw",
      authDomain: "kwitter-project-d55d0.firebaseapp.com",
      databaseURL: "https://kwitter-project-d55d0-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-d55d0",
      storageBucket: "kwitter-project-d55d0.appspot.com",
      messagingSenderId: "80676565939",
      appId: "1:80676565939:web:b3312e8548bb459c8a11c6"
    };
    firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
   room_name=localStorage.getItem("room_name");
function send(){
      msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 });
        document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      }



