
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBW3rke76bM-uVWw9XyacLoVkZAKz_o8zY",
    authDomain: "kwitterapp-3f0ce.firebaseapp.com",
    projectId: "kwitterapp-3f0ce",
    storageBucket: "kwitterapp-3f0ce.appspot.com",
    messagingSenderId: "183749774973",
    appId: "1:183749774973:web:b884e3994b7c3cc6316b14"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom(){

    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    
   localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}


    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
    getData();

    function redirectTheRoomName(name)
    {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
    }

    function logout()
    {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
    }

    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.databse().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
      });

      document.getElementById("msg").value = "";
    }