window.onload = function () {
      
      var seconds = 00; 
      var minutes = 00; 
      var appendSeconds = document.getElementById("seconds")
      var appendMinutes = document.getElementById("minutes")
      var appendMsg = document.getElementById("msg");
      var duration = document.getElementById("duration").value;
      var buttonStart = document.getElementById('button-start');
      var buttonStop = document.getElementById('button-stop');
      var buttonReset = document.getElementById('button-reset');
      var Interval ;
      var red_threshold;
      var green_threshold;
      var yellow_threshold;

      buttonStart.onclick = function() {
              green_threshold = duration.split(",")[0];
              yellow_threshold = duration.split(",")[1];
              red_threshold = duration.split(",")[2];
              clearInterval(Interval);
              Interval = setInterval(startTimer, 1000);
            }
      
      buttonStop.onclick = function() {
            clearInterval(Interval);
            }
      

      buttonReset.onclick = function() {
/*              clearInterval(Interval);
              document.body.style.background = "#FFFFFF";
              seconds = 00;
              minutes = 00;
              appendSeconds.innerHTML = "0" + seconds;
              appendMinutes.innerHTML = "0" + minutes;*/
              location.reload()
            }
      
       
      
      function startTimer () {
              seconds++;
              // Fudge the constant below for testing (# of seconds in minute)
              if (seconds > 59) {
                        minutes++;
                        appendMinutes.innerHTML = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2});
                        seconds = 0;
                      }
              appendSeconds.innerHTML = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2});

              if (minutes + ":" + seconds.toLocaleString('en-US', {minimumIntegerDigits: 2}) == green_threshold){
                        document.body.style.background = "#00FF00";
                      }
              if (minutes + ":" + seconds.toLocaleString('en-US', {minimumIntegerDigits: 2}) == yellow_threshold){
                        document.body.style.background = "#FFFF00";
                      }
              if (minutes + ":" + seconds.toLocaleString('en-US', {minimumIntegerDigits: 2}) == red_threshold){
                        document.body.style.background = "#FF0000";
                      }
            }
}
