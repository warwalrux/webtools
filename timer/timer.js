window.onload = function () {
      
      var seconds = 00; 
      var minutes = 00; 
      var appendSeconds = document.getElementById("seconds");
      var appendMinutes = document.getElementById("minutes");
      var appendRed = document.getElementById("redtime");
      var appendYlw = document.getElementById("yellowtime");
      var appendGrn = document.getElementById("greentime");
      var buttonStart = document.getElementById('button-start');
      var buttonReset = document.getElementById('button-reset');
      var buttonRecord = document.getElementById('button-record');
      var appendResults = document.getElementById('table-results');
      var Interval;
      var red_threshold;
      var green_threshold;
      var yellow_threshold;
      var is_running = 1;
      var speaker_number = 1;

      buttonStart.onclick = function() {
              if (is_running == 1) {
                  is_running = 0;
                  buttonStart.innerHTML = "Pause";
                  duration = document.getElementById("duration").value;
                  green_threshold = duration.split(",")[0];
                  yellow_threshold = duration.split(",")[1];
                  red_threshold = duration.split(",")[2];
                  appendRed.innerHTML = red_threshold;
                  appendYlw.innerHTML = yellow_threshold;
                  appendGrn.innerHTML = green_threshold;
                  clearInterval(Interval);
                  Interval = setInterval(startTimer, 1000);
              } else {
                  is_running = 1;
                  buttonStart.innerHTML = "Start";
                  clearInterval(Interval);
              }
            }
      
      buttonRecord.onclick = function() {
            appendResults.innerHTML += `<tr><td>${speaker_number}</td><td>${document.getElementById("duration").value}</td><td>${minutes}:${seconds.toLocaleString('en-us', {minimumIntegerDigits: 2})}</td></tr>`;
            }


      buttonReset.onclick = function() {
            document.body.style.background = "#FFFFFF";
            speaker_number += 1;
            buttonStart.innerHTML = "Start";
            appendRed.innerHTML = "0:00";
            appendYlw.innerHTML = "0:00";
            appendGrn.innerHTML = "0:00";
            seconds = 0;
            appendSeconds.innerHTML = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2});
            minutes = 0;
            appendMinutes.innerHTML = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2});
            clearInterval(Interval);
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
              current_time = minutes + ":" + seconds.toLocaleString('en-US', {minimumIntegerDigits: 2}) 
              if (current_time == green_threshold){
                        document.body.style.background = "#00FF00";
                      }
              if (current_time == yellow_threshold){
                        document.body.style.background = "#FFFF00";
                      }
              if (current_time == red_threshold){
                        document.body.style.background = "#FF0000";
                      }
            }
}
