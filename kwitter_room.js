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

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 

function add_Room()
{ room_name = document.getElementById("room_name").value; 
firebase.database().ref("/").child(room_name).update({ 
     purpose : "adding room name" 
    }); 

    localStorage.setItem("room_name", room_name);
    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_page.html"; } 
    function getData() { 
          firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; 

                console.log("Room Name - " + Room_names); 
                row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
                document.getElementById("output").innerHTML += row; 
          }); }); } 
          getData(); 

          function redirectToRoomName(name) { 
                console.log(name); 
                localStorage.setItem("room_name", name); 
                localStorage.setItem("user_name", user_name);
                window.location = "kwitter_page.html";}

        function logout() {
              localStorage.removeItem("user_name");
              localStorage.removeItem("room_name");
              window.location="index.html";
        }
