 
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

 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("roomname-"+Room_names);
       row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML=row;
      });});}
     getData();
      user_name=localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
      function addroom(){
        room_name= document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
          purpose:"addinroom name"
         });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";

         }
         function redirectToRoomName(name){
          console.log(name);
          localStorage.setItem("room_name",name);
          window.location="kwitter_page.html";
         }
          function logout(){
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location="index.html";
          }
