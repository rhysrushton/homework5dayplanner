$(document).ready(function() {

    /* Function for displaying and updating time */ 
    var time = function(){
    // instantiate a moment object
    var NowMoment = moment();
    // display value of moment object in #displayMoment div
    var eDisplayMoment = document.getElementById('displayMoment');
    eDisplayMoment.innerHTML = NowMoment.format("dddd, MMMM Do YYYY, h:mm:ss a");
    };
    /*call function every second*/ 
    setInterval(time,1); 

    /* variable for getting current time. Returning hour only (in 12 hour format) */   
    var currentTime = parseInt(moment().format('H'));
    console.log(currentTime);

    /*onclick event listener for local storage */ 
    $(".save").on("click", function () { 
        localStorage.setItem("9am", (textNine.val()))
        localStorage.setItem("10am", (textTen.val()))
        localStorage.setItem("11am", (textEleven.val()))
        localStorage.setItem("12pm", (textTwlve.val()))
        localStorage.setItem("13pm", (textOne.val()))
        localStorage.setItem("14pm", (textTwo.val()))
        localStorage.setItem("15pm", (textThree.val()))
        localStorage.setItem("16pm", (textFour.val()))
        localStorage.setItem("17pm", (textFive.val()))
    })

    //clear function. still needs work, as it clears all
    //key/value pairs. 
    $(".clear").on("click", function () { 
        localStorage.clear("9am", (textNine.val()))
        localStorage.clear("10am", (textTen.val()))
        localStorage.clear("11am", (textEleven.val()))
        localStorage.clear("12pm", (textTwlve.val()))
        localStorage.clear("13pm", (textOne.val()))
        localStorage.clear("14pm", (textTwo.val()))
        localStorage.clear("15pm", (textThree.val()))
        localStorage.clear("16pm", (textFour.val()))
        localStorage.clear("17pm", (textFive.val()))
    })

    /*function for changing colour of input fields.
    JQuery select textarea element, use .each() to change * elements. */  
    $("textarea").addClass(function(){
        /* get name attribute from html
        Use parsent to return number. 
        then use if statements to change colours */ 
        var name = parseInt($(this).attr("name"));
        if (name < currentTime){
            $(this).css("background-color", "gray"); 
        }   
        if (name > currentTime) {
            $(this).css("background-color", "yellow"); 
        }
        if (name === currentTime) {
            $(this).css("background-color", "red"); 
        }
    })
   
    /* Variables for user inputs into app */ 
    var textNine = $("#textNine"); 
    var textTen = $("#textTen"); 
    var textEleven = $("#textEleven"); 
    var textTwlve = $("#textTwlve"); 
    var textOne = $("#textOne"); 
    var textTwo = $("#textTwo"); 
    var textThree = $("#textThree"); 
    var textFour = $("#textFour"); 
    var textFive = $("#textFive");  

    /* appending saved stuff to text area in html from local storage */ 
    $("#textNine").append(localStorage.getItem("9am"));
    $("#textTen").append(localStorage.getItem("10am"))
    $("#textEleven").append(localStorage.getItem("11am"))
    $("#textTwlve").append(localStorage.getItem("12pm"))
    $("#textOne").append(localStorage.getItem("13pm"))
    $("#textTwo").append(localStorage.getItem("14pm"))
    $("#textThree").append(localStorage.getItem("15pm"))
    $("#textFour").append(localStorage.getItem("16pm"))
    $("#textFive").append(localStorage.getItem("17pm")) 

}); 




   