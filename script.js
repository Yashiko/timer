$(document).ready(function () {
    let audio = new Audio('beep.mp3');
    //if you pressed start button, you will start timer
    $("#playBtn").click(function () {
        
        //if field is empty
        let failed = false;
        $('#minutesInput').each(function(){
            if ($(this).val() == ""){
                failed = true;
            }
        });
        if (failed == true){
            alert("please fill out field.");
            clearInterval(interval);
        }

        //read input value
        let minuteInput = $("#minutesInput").val();
        let timer2 = minuteInput + ":00";

        //timer mechanism
        let interval = setInterval(function () {
            let timer = timer2.split(":");
            let minutes = parseInt(timer[0], 10);
            let seconds = parseInt(timer[1], 10);
            --seconds;
            minutes = (seconds < 0) ? --minutes : minutes;
            seconds = (seconds < 0) ? 59 : seconds;
            seconds = (seconds < 10) ? '0' + seconds : seconds;
            $(".bottom-selection").html(minutes + ":" + seconds); //put time value
            if ((seconds <= 0) && (minutes <= 0)) {
                clearInterval(interval);
                audio.play();
            } else {
                timer2 = minutes + ':' + seconds;
            }
        }, 1000);
        // if you press stop button it will stop timer
        $(document).on("click", "#stopBtn", function () {
            clearInterval(interval);

        });
    });
});


