$(document).ready(function(){


    $("#playBtn").click(function(){
        let minuteInput = $("#minutesInput").val();
        let timer2 = minuteInput + ":00";
        let interval = setInterval(function(){
            let timer = timer2.split(":");
            let minutes = parseInt(timer[0], 10);
            let seconds = parseInt(timer[1], 10);
            --seconds;
            minutes = (seconds < 0) ? --minutes : minutes;
            seconds = (seconds < 0) ? 59 : seconds;
            seconds = (seconds < 10) ? '0' + seconds : seconds;
            $(".bottom-selection").html(minutes+ ":"+ seconds);
            if ((seconds <= 0) && (minutes <= 0)){
                clearInterval(interval);
                alert("Times Up");
            } else{
                timer2 = minutes + ':' + seconds;
            }
           
    
        }, 1000);
    });  

});


