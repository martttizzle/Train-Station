
$(document).ready(function () {

    //Initialize Firebase
    var config = {
        apiKey: "AIzaSyBuS5uaU-hwIEWm71_VZgtZe_jt4jrke9E",
        authDomain: "inclass-916ce.firebaseapp.com",
        databaseURL: "https://inclass-916ce.firebaseio.com",
        projectId: "inclass-916ce",
        storageBucket: "inclass-916ce.appspot.com",
        messagingSenderId: "174048502518"
    };
    firebase.initializeApp(config);


    var database = firebase.database();
    var tName;
    var dest;
    var mTime;
    var hTime;
    var freq;



    $("#btn").on("click", function (event) {
        event.preventDefault();

        tName = $("#tName").val().trim();
        dest = $("#dest").val().trim();
        hTime = $("#hTime").val().trim();
        mTime = $("#mTime").val().trim();
        freq = $("#freq").val().trim();

        database.ref().push({
            Name: tName,
            Destination: dest,
            Hours: hTime,
            Minutes: mTime,
            Frequency: freq
        });
  

    database.ref().on("child_added", function (snapshot) {
        tName = snapshot.val().tName;
        dest = snapshot.val().dest;
        hTime = snapshot.val().hTime;
        mTime = snapshot.val().mTime;
        freq = snapshot.val().freq;

        var tr = $("<tr>");
        tr.append("<td>" + tName);
        tr.append("<td>" + dest);
        tr.append("<td>" + hTime);
        tr.append("<td>" + mTime);
        tr.append("<td>"+ freq);
        $("#tb").append(tr);
        console.log(tr);

    });
  });

});



