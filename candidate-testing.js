const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i=0; i<5; i++){
    candidateAnswers[i] = input.question(questions[i]);
  }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  console.log("");
  console.log(`Candidate Name: ${candidateName}
1) Who was the first American woman in space?
Your Answer: ${candidateAnswers[0]}
Correct Answer: ${correctAnswers[0]}

2) True or false: 5000 meters = 5 kilometers.
Your Answer: ${candidateAnswers[1]}
Correct Answer: ${correctAnswers[1]}

3) (5 + 3)/2 * 10 = ?
Your Answer: ${candidateAnswers[2]}
Correct Answer: ${correctAnswers[2]}

4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?
Your Answer: ${candidateAnswers[3]}
Correct Answer: ${correctAnswers[3]}

5) What is the minimum crew size for the ISS?
Your Answer: ${candidateAnswers[4]}
Correct Answer: ${correctAnswers[4]}`);
  let grade = 0;
  let quizStatus = "";

  for (let i=0; i<5; i++){
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      grade = grade + 1;
    }
  }

  if (grade >= 3){
    quizStatus = "Passed";
  } else{
    quizStatus = "Failed";
  }

  console.log("");
  console.log(`  >>> Overall Grade: ${grade/5*100}% (${grade} of 5 responses correct) <<<
>>> Status: ${quizStatus} <<<
`)

  grade = grade/5*100;

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello " + candidateName); 
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  }

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};