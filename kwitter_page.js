//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCX53Rz3iOjNu0wIBNbfHO-BFlaX1pxz_Y",
      authDomain: "kwitter-61d61.firebaseapp.com",
      databaseURL: "https://kwitter-61d61-default-rtdb.firebaseio.com",
      projectId: "kwitter-61d61",
      storageBucket: "kwitter-61d61.appspot.com",
      messagingSenderId: "710893607769",
      appId: "1:710893607769:web:d31d09ef06a21c239bca48"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("name_1");
room_name =localStorage.getItem("room_name");
function send() {
      console.log(user_name);
      msg =document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            message:msg,
            like:0,
            name1:user_name
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData; 
      //Start code
       console.log(firebase_message_id); 
       console.log(message_data); 
       
       var name= message_data['name1']; 
       message = message_data['message']; 
       like = message_data['like']; 

       name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>"; 

       message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; 
       
       span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"; 

       row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML +=row;
//End code
      } });  }); }
getData();

function updateLike(message_id) {
      button_id =message_id;
      Likes =document.getElementById(button_id).value;
      updated_likes =Number(like)+1;
      firebase.database().ref(room_name).child(button_id).update({
like : updated_likes
      });
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
