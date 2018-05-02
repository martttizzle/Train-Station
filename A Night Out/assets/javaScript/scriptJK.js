// //modal call function

// $(document).ready(function () {
//     $("#myModal").modal();
// });
// //alert("Joseph");
// //modal submit function

// $("#modalSummitButton").on("click", function(e) {
//     e.preventDefault();
//     $('#myModal').modal('hide');
//     dumpInArray();
    
// });

// tester();

// //checkbox array for Google Search

// function dumpInArray(){
     
//     $('.checkboxChoices input[type="checkbox"]:checked').each(function() {
//        type.push($(this).val());
//     }); 
//     console.log(type);
//     return type;
//  }




//momentJS

// var datetime = null,
//     date = null;

// var update = function () {
//     date = moment(new Date())
//     datetime.html(date.format('MMM Do YYYY, h:mm a'));
// };

// $(document).ready(function () {
//     datetime = $('#currentTimeDate')
//     update();
//     setInterval(update, 1000);
// });