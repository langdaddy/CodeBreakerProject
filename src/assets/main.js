let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');



//implement new functions here
/*    let answer = document.getElementById('answer').value;
    if(answer == "") {
        answer = Math.floor(Math.random() * 10000).toString();
        while(answer.length < 4) {
            answer = "0" + answer;
        }
        document.getElementById('answer').value = answer;
    }

  let attempt = document.getElementById('attempt').value;

  if(attempt == "") {
      attempt = 0;
  }


}*/
function setHiddenFields() {
      if(answer == "") {
    answer.value = Math.floor(Math.random() * 10000).toString();
    while(answer.value.length < 4) {
        answer.value = "0" + answer.value;
    }
  }
  if(attempt == "") {
      attempt = 0;
  }
}
function setMessage(){
    let message = document.getElementById('message');

}

function validateInput(){
  if(input.length != 4) {
      message.innerHTML = 'Guesses must be exactly 4 characters long.';
      return;
  } else {
      attempt++;
      document.getElementById('attempt').value = attempt;
  }
}

function getResults(){

}

function showAnswer(){

}

function showReply(){

}


function guess(){


  let code = document.getElementById('code');
  let guessingDiv = document.getElementById('guessing-div');

  let message = document.getElementById('message');

  let results = document.getElementById('results');
let input = document.getElementById('user-guess').value;
let replayDiv = document.getElementById('replay-div');
    message.innerHTML = "";






    let correct = 0;
    let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    for(i = 0; i < input.length; i++)
    {
        if(input.charAt(i) == answer.charAt(i))
        {
            html += '<span class="glyphicon glyphicon-ok"></span>';
            correct++;
        } else if (answer.indexOf(input.charAt(i)) > -1) {
            html += '<span class="glyphicon glyphicon-transfer"></span>';
        } else {
            html += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    html += '</div></div>';

    results.innerHTML += html;

    if(correct == input.length) {
        message.innerHTML = 'You Win! :)';
        code.className += " success";
        code.innerHTML = answer;
        guessingDiv.style = "display:none";
        replayDiv.style = "display:block";
    } else if(attempt >= 10) {
        message.innerHTML = 'You Lose! :(';
        code.className += " failure";
        code.innerHTML = answer;
        guessingDiv.style = "display:none";
        replayDiv.style = "display:block";
    } else {
        message.innerHTML = 'Incorrect, try again.';
    }
}
