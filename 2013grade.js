

var intGradeOption, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

intGradeOption = parseInt(prompt("input 1 for pass/fail, input 2 for letter grade "));

floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));

floatMidPts = parseFloat(prompt("please enter final midterm pts (0-35) :"));

floatFinPts = parseFloat(prompt("please enter final  pts (0-35) :"));

stringFinalGrade = parseFloat(floatHwPts + floatMidPts + floatFinPts);







if (intGradeOption==1)
{
    if (stringFinalGrade >=80)  alert("pass");

     if(stringFinalGrade <=79) alert("fail");
}

    if (intGradeOption==2)
      {
      if (stringFinalGrade >= 90) alert("A");
      }
      {
   if(stringFinalGrade <= 89 && stringFinalGrade >= 80) alert("B");
      }
        
        {
    if (stringFinalGrade >= 70  && stringFinalGrade <= 79) alert("C");
        }
      {
         if (stringFinalGrade <= 69 && stringFinalGrade >= 60) alert("D");
      }
      {
         if (stringFinalGrade <= 59 && stringFinalGrade>=0) alert("F");
      }






alert("Your final grade is: " +stringFinalGrade);