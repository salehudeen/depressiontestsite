// function to calculate the result of the survey
function tabulateAnswers() {

    event.preventDefault();// prevents page from updating / refreshing on submit
  // initialize variables for each choice's score
  // If you add more choices and outcomes, you must add another variable here.
  var c1score = 0;
  var c2score = 0;
  var c3score = 0;
  var c4score = 0;
  
  // get a list of the radio inputs on the page
  var choices = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<choices.length; i++) {
    // if the radio is checked..
    if (choices[i].checked) {
      // add 1 to that choice's score
      if (choices[i].value == 'c1') {
        c1score = c1score + 1;
      }
      if (choices[i].value == 'c2') {
        c2score = c2score + 1;
      }
      if (choices[i].value == 'c3') {
        c3score = c3score + 1;
      }
      if (choices[i].value == 'c4') {
        c4score = c4score + 1;
      }
      // If you add more choices and outcomes, you must add another if statement below.
    }
  }
  
  // Find out which choice got the highest score.
  // If you add more choices and outcomes, you must add the variable here.
  var maxscore = Math.max(c1score,c2score,c3score,c4score);
  
  // Display answer corresponding to that choice
  var answerbox = document.getElementById('answer');
  if (c1score == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.
    answerbox.innerHTML = "You are free from depression, Enjoy life as it is, be in the moment and cherish the small things";
  }
  if (c2score == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
    answerbox.innerHTML = "You are not depressed maybe a bit tired if you work too much if so try and meditate after a tough long day, loosen up and try and have fun life is short!";
  }
  if (c3score == maxscore) { // If user chooses the third choice the most, this outcome will be displayed.
    answerbox.innerHTML = "You are experincing signs of depression, I would urge you to join a community,feel free to join Befrienders a charitable organization focusing on offering FREE emotional support here in Kenya there information is on the information section ";
  }
  if (c4score == maxscore) { // If user chooses the fourth choice the most, this outcome will be displayed.
    answerbox.innerHTML = "You are experiencing high levels of Depression, I would very much tell you to talk to a doctor, and immediately join a support group,You need help and there is NOTHING WRONG WITH ASKING FOR IT ,'join the group provided in the home page, and feel free to call the number provided for you'";
  }
 
  // If you add more choices, you must add another response below.
}

// program the reset button
function resetAnswer() {
  var answerbox = document.getElementById('answer');
  answerbox.innerHTML = "Your result will show up here!";
 
}