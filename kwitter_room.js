
//ADD YOUR FIREBASE LINKS

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCwpdIVaiYwvEGZEtjdUXkM2ELARafG9Ec",
    authDomain: "kwitter-f3264.firebaseapp.com",
    projectId: "kwitter-f3264",
    storageBucket: "kwitter-f3264.appspot.com",
    messagingSenderId: "599869528470",
    appId: "1:599869528470:web:e361ec92c8ec44720265b7",
    measurementId: "G-547CQG1Q6Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function addRoom()
 {
   room_name = document.getElementById("room_name").value;
   
   firebase.database().re("/").child(user_name).update({
    purpose : "adding room name"
});

localStorage.setItem("user_name",user_name);

windowwindow.location = "kwitter_room.html";
}

function getData() {   firebase.database().ref("/").on('value', function (snapshot) 
{document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot)
{childKey  = childSnapshot.key;
        Room_name = childKey;
        console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName' >#"+ Room_names +"</div><hr>"
     document.getElementById("output").innerHTML += row;

     console.log(firebase_massage_id);
     console.log(message_data);
     name = message_data['name'];
     message = message_data['message'];
     like = message_data['like'];
     name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
     message_with_tag = "<h4 class= 'message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_massage_id+" value="+value+" onclick='updateLike(this.id)'>";
     span_with_tag = "<span class'glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
     
     
  });
});  
}

getData();

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";  
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("kwitter_room.html");
  }
  