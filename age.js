 var floatAge, floatDays, floatMonths, intWeeks, intFortnights;
     floatAge = parseInt(prompt("Enter how many years old you are"));
     floatDays =  floatAge * 365.25;
     floatMonths = floatAge * 12;
     intWeeks = floatDays / 7;
     intFortnights = floatDays / 14;
     alert("you are " + floatDays + " days old" +"," + floatMonths + " months old, "+ intWeeks +" weeks old, and " + intFortnights +" fortnights old");