    /*
A => 90
b => 80
C => 70
D => 50
E => 35
F <35 
*/

// function grade(score) {
//   if (score >= 90) {
//     console.log(`You have passed with A grade. Score is ${score}`);
//   } 
//   else if (score >= 80 && score < 90) {
//     console.log(`You have passed with B grade. Score is ${score}`);
//   } 
//   else if (score >= 70 && score < 80) {
//     console.log(`You have passed with C grade. Score is ${score}`);
//   } 
//   else if (score >= 50 && score < 70) {
//     console.log(`You have passed with D grade. Score is ${score}`);
//   } 
//   else if (score >= 35 && score < 50) {
//     console.log(`You have passed with E grade. Score is ${score}`);
//   } 
//   else {
//     console.log(`You have failed with F grade. Score is ${score}`);
//   }
// }

// grade(85);




function grade(score) {
  let gradeLetter;

  if (score >= 90) gradeLetter = "A";
  else if (score >= 80) gradeLetter = "B";
  
  else if (score >= 70) gradeLetter = "C";
  else if (score >= 50) gradeLetter = "D";
  else if (score >= 35) gradeLetter = "E";
  else gradeLetter = "F";

  const result =
    gradeLetter === "F"
      ? `You have failed with F grade. Score is ${score}`
      : `You have passed with ${gradeLetter} grade. Score is ${score}`;

  console.log(result);
}

grade(35);
grade(92);
grade(64);
grade(20);
