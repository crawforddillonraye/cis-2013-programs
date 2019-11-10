/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/

intMin = parseInt(prompt("Welcome to the number guessing game! input your minimum number for the range \" must be atleast 0\" "));

while (isNaN(intMin) || (intMin <0))
{
    intMin = parseInt(prompt("I'm sorry but your lowest number is invalid. \n" + "Please choose the lowest number in your guessing range (but no lower than 0)."));
}
alert("lowest number = " +intMin); // the alert is only so the user is aware what the system has recorded.



/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/

intMax = parseInt(prompt(" Please input your maximum number for the range"));

while (isNaN(intMax) || (intMax <= intMin +2))
// the max is required to be at least 2 above the minimum simply to keep the game interesting.
{
    intMax = parseInt(prompt("I'm sorry but your Max number is invalid. \n" + "Please choose the Max number in your guessing range (but no lower than 0)."));
}
alert("maximum number = " +intMax);







/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);


// set the loop counter

intCount= 1; // the counter is set to one rather than 0 because the program only increments each incorrect guess

/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/
intGuess = parseInt(prompt( "please enter your guess!"));
while (isNaN(intGuess) || intGuess < intMin || intGuess > intMax)
{
intGuess =parseInt(prompt("your number seems to be giving our number machine a problem \n(please ensure your number is between your maximum and minimum and that it's really a number) \n please enter a new number"));
}


    


/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */
while (intGuess != intRandom && intGuess < intRandom)
 {
    intGuess =parseInt(prompt("your number is too low! try again!"));
    // allows the player to give a new guess and gives them an idea towards the correct guess
    if (isNaN(intGuess))
    {
        intGuess = parseInt(prompt("that is not a number try a number"));
        // an escape for if they get cheeky and want to enter an input that is NaN
    }
intCount++;
 }
while ( intGuess != intRandom && intGuess > intRandom)
 {
    intGuess =parseInt(prompt("your number is too high! try again!"));
    if (isNaN(intGuess))
    {
        intGuess = parseInt(prompt("that is not a number try a number"));
    }
    intCount++;
 } 
 
 
 

// provides final output upon successful guessing
while (intGuess === intRandom)
{

alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");

}