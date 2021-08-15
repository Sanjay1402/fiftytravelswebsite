//form
var firebaseConfig = {
    apiKey: "AIzaSyBV4q8Z7jxeoZe-HZdonM0UCO1QihV0yDg",
    authDomain: "booking-form---data.firebaseapp.com",
    databaseURL: "https://booking-form---data-default-rtdb.firebaseio.com",
    projectId: "booking-form---data",
    storageBucket: "booking-form---data.appspot.com",
    messagingSenderId: "950094608170",
    appId: "1:950094608170:web:759e1f9a8e4b171d1c9053"
  };

firebase.initializeApp(firebaseConfig);

var messageRef = firebase.database().ref("bookings");

const form = document.getElementById("bookform").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    let firstName = getValue("firstName");
    let lastName = getValue("lastName");
    let email = getValue("email");
    let address = getValue("address");
    let city = getValue("city");
    let phone = getValue("phone");
    let noOfPeople = getValue("noOfPeople");
    let packdest = getValue("packdest");
    let travelDate = getValue("travelDate");

    saveMessage(firstName,lastName,email,address,city,phone,noOfPeople,packdest,travelDate);

    document.getElementById("booking").style.display = "block";

    setTimeout(function(){
    document.getElementById("booking").style.display = "none";

    }, 3000);

}

function getValue(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(firstName,lastName,email, address, city, phone, noOfPeople, packdest, travelDate){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        firstName:firstName,
        lastName:lastName,
        email:email,
        address: address,
        city:city,
        phone:phone,
        noOfPeople:noOfPeople,
        packageordestination: packdest,
        travelDate:travelDate

    })
}