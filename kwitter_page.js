//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
firebase_message_id = childKey;
message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data["name"];
message = message_data["message"];
like = message_data["likes"];
name_with_tag = "<h4>" + name + "<img id='user tick' src='tick.png'</h4>";
message_with_tag = "<h4> class='message_h4' + </h4>";
like_button = "<button class='btn btn-warning' id= "+firebase.message.id+" value= "+like+"  onclick='updateLike(thisid)'";
span_with_tag = "<span class = 'glyphicon-glyphicon-thumbs-up' Like: "+ like +" </span></button><hr>";
//End code
 } });  }); }
getData();

function updateLike(message_id)
{
console.log("clicked on like button -" + message_id);
button_id = message_id;
like = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
likes: updated_likes
});

}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter.html");
}
