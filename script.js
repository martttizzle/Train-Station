
$(document).ready(function(){


        // Initialize Firebase
        
       
          // Initialize Firebase
          var config = {
            apiKey: "AIzaSyBuS5uaU-hwIEWm71_VZgtZe_jt4jrke9E",
            authDomain: "inclass-916ce.firebaseapp.com",
            databaseURL: "https://inclass-916ce.firebaseio.com",
            projectId: "inclass-916ce",
            storageBucket: "inclass-916ce.appspot.com",
            messagingSenderId: "174048502518"
          };
          firebase.initializeApp(config);
  
        firebase.initializeApp(config);
        var database = firebase.database();
        var Tname;
        var mTime;
        var startDate;
        var monthlyR;
    
        $("#button").on("click", function () {
            Tname = $("#Tname").val().trim();
            mTime = $("#mTime").val().trim();
            startDate = $("#startDate").val().trim();
            monthlyR = $("#rate").val().trim();
    
            database.ref().push({
    
                Tname: Tname,
                mTime: mTime,
                startDate: startDate,
                monthlyR: monthlyR
    
            });
        });
        database.ref().on("child_added", function (snapshot) {
            Tname = snapshot.val().Tname;
            mTime = snapshot.val().mTime;
            startDate = snapshot.val().startDate;
            monthlyR = snapshot.val().monthlyR;
    
            var tr = $("<tr>");
            tr.append("<td>" + Tname);
            tr.append("<td>" + mTime);
            tr.append("<td>" + startDate);
            tr.append("<td>"+ monthlyR);
            $("#tb").append(tr);
            console.log(tr);
    
        },
        function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    
        
    });



