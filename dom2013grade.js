var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
    var floatHwPts, floatMidPts, floatFinPts, stringFinalGrade, floatTotalPts;

    floatHwPts = parseFloat($("hw_pts").value);
    floatMidPts = parseFloat($("mid_pts").value);
    floatFinPts = parseFloat($("fin_pts").value);
    floatTotalPts = (floatHwPts + floatMidPts + floatFinPts);
    stringFinalGrade =($("final_grade").value);
};

if ($("grade_option").value==1)
{
    if (floatTotalPts >=80)  stringFinalGrade =("pass");

     if(floatTotalPts <=79) stringFinalGrade =("fail");
}
/*
    if ($("grade_option").value==2)
      {
      if (stringFinalGrade >= 90) stringFinalGrade =("A");
      }
      {
   if(stringFinalGrade <= 89 && stringFinalGrade >= 80) stringFinalGrade =("B");
      }
        
        {
    if (stringFinalGrade >= 70  && stringFinalGrade <= 79) stringFinalGrade =("C");
        }
      {
         if (stringFinalGrade <= 69 && stringFinalGrade >= 60) stringFinalGrade =("D");
      }
      {
         if (stringFinalGrade <= 59 && stringFinalGrade>=0) stringFinalGrade =("F");
      }
*/






window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};