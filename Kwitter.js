function add_user() {
    name_1 =document.getElementById("User_name").value;

    localStorage.setItem("name_1",name_1); 

    window.location ="Kwitter_room.html";
}