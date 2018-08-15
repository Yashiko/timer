$(document).ready(function(){

    let minutes = $("#minutesInput").val();
    let timer2 = minutes;
    $("#playBtn").click(function(){

        let interval = setInterval(function(){
            let timer = timer2.split(":");
            let minutes = parseInt(timer[0], 10);
            let seconds = parseInt(timer[1], 10);
            --seconds;
            minutes = (seconds < 0) ? --minutes : minutes;
            seconds = (seconds < 0) ? 59 : seconds;
            seconds = (seconds < 10) ? '0' + seconds : seconds;
            $(".bottom-selection").html(minutes+ ":"+ seconds);
            if (minutes < 0) clearInterval(interval);
            if ((seconds <= 0) && (minutes <= 0)) clearInterval(interval);
            timer2 = minutes + ':' + seconds;
    
        }, 1000);
    })

});


