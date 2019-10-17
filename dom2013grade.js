var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
    var floatHwPts, floatMidPts, floatFinPts, stringFinalGrade, floatTotalPts, intGradeOption;

    floatHwPts = parseFloat($("hw_pts").value);
    floatMidPts = parseFloat($("mid_pts").value);
    floatFinPts = parseFloat($("fin_pts").value);
    floatTotalPts = (floatHwPts + floatMidPts + floatFinPts);
    intGradeOption = parseInt($("grade_option").value);
    stringFinalGrade = ($("final_grade").value);
};

if (intGradeOption==1)
{
    if (floatTotalPts >=80)
        {
            stringFinalGrade =("pass");
        }
     if(floatTotalPts <=79)  
    {
        stringFinalGrade =("fail");
    }
}
    else
      {
      if (floatTotalPts >= 90) floatTotalPts =("A");
      }
      {
   if(floatTotalPts <= 89 && floatTotalPts >= 80) stringFinalGrade =("B");
      }
        
        {
    if (floatTotalPts >= 70  && floatTotalPts <= 79) stringFinalGrade =("C");
        }
      {
         if (floatTotalPts <= 69 && floatTotalPts >= 60) stringFinalGrade =("D");
      }
      {
         if (floatTotalPts <= 59 && floatTotalPts>=0) stringFinalGrade =("F");
      }

$("final_grade").value = stringFinalGrade;






window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};