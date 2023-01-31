/*
     A "Grade Calculator" form that takes as input a percentage scored for each grade
     category listed in the syllabus

     Build a JavaScript program that calculates and displays both a final percentage and a letter grade
     using the "Grade Calculator" form entries based on the weights listed in the syllabus. Use
     jQuery selectors (i.e. the “$”) in your program. Print the letter grade to the form (not in an alert.)

     Write good code (use good indentation, commenting, whitespace, descriptive variable names,
     etc.) Good style counts for 10% of the score on each assignment.
     
     Grade weights (approximate):
          Assignments 50 %
          Group Project 10 %
          Quizzes 10 %
          Midterm Exam 10 %
          Final Exam 10 %
          INTEX 10 %
*/




$('#CalcGrade').click(function ()
{
     // Getting the values from the DOM (using jQuery)
     let iAssignmentsGrade = $('#AssignmentsInput').val();
     let iGroupProjectsGrade = $('#GroupProjectsInput').val();
     let iQuizzesGrade = $('#QuizzesInput').val();
     let iMidtermExamGrade = $('#MidtermExamInput').val();
     let iFinalExamGrade = $('#FinalExamInput').val();
     let iINTEXGrade = $('#INTEXInput').val();

     // Calculating the final grade

     /* Grade weights (approximate):
          Assignments 50 %
          Group Project 10 %
          Quizzes 10 %
          Midterm Exam 10 %
          Final Exam 10 %
          INTEX 10 %
     */
     let iFinalGrade = (
          // Assignments 50 %
          (iAssignmentsGrade * 0.5) +
          // Group Project 10 %
          (iGroupProjectsGrade * 0.1) +
          // Quizzes 10 %
          (iQuizzesGrade * 0.1) +
          // Midterm Exam 10 %
          (iMidtermExamGrade * 0.1) +
          // Final Exam 10 %
          (iFinalExamGrade * 0.1) +
          // INTEX 10 %
          (iINTEXGrade * 0.1)
     );

     // Showing the hidden break
     $('#HiddenBreak').show();

     // Displaying the final grade (Percentage)
     $('#CalculatedGrade').text(iFinalGrade);

     // Calculating the Letter Grade
     /*
     Total >= 94% ... A
     90% <= Total < 94% ... A- 
     87% <= Total < 90% ... B+
     84% <= Total < 87% ... B
     80% <= Total < 84% ... B-
     77% <= Total < 80% ... C+
     74% <= Total < 77% ... C
     70% <= Total < 74% ... C-
     67% <= Total < 70% ... D+
     64% <= Total < 67% ... D
     60% <= Total < 64% ... D-
     Total < 60% ... E
     */
     // Determining the letter grade based on the final grade percentage
     switch (iFinalGrade)
     {
          // if the final grade is greater than or equal to 94...
          case (iFinalGrade >= 94):
               // the final letter grade is an A
               sLetterGrade = "A";
               break;
          // if the final grade is between 90 and 94...
          case (iFinalGrade >= 90 && iFinalGrade < 94):
               // the final letter grade is an A-
               sLetterGrade = "A-";
               break;
          // if the final grade is between 87 and 90...
          case (iFinalGrade >= 87 && iFinalGrade < 90):
               // the final letter grade is a B+
               sLetterGrade = "B+";
               break;
          // if the final grade is between 84 and 87...
          case (iFinalGrade >= 84 && iFinalGrade < 87):
               // the final letter grade is a B
               sLetterGrade = "B";
               break;
          // if the final grade is between 80 and 84...
          case (iFinalGrade >= 80 && iFinalGrade < 84):
               // the final letter grade is a B-
               sLetterGrade = "B-";
               break;
          // if the final grade is between 77 and 80...
          case (iFinalGrade >= 77 && iFinalGrade < 80):
               // the final letter grade is a C+
               sLetterGrade = "C+";
               break;
          // if the final grade is between 74 and 77...
          case (iFinalGrade >= 74 && iFinalGrade < 77):
               // the final letter grade is a C
               sLetterGrade = "C";
               break;
          // if the final grade is between 70 and 74...
          case (iFinalGrade >= 70 && iFinalGrade < 74):
               // the final letter grade is a C-
               sLetterGrade = "C-";
               break;
          // if the final grade is between 67 and 70...
          case (iFinalGrade >= 67 && iFinalGrade < 70):
               // the final letter grade is a D+
               sLetterGrade = "D+";
               break;
          // if the final grade is between 64 and 67...
          case (iFinalGrade >= 64 && iFinalGrade < 67):
               // the final letter grade is a D
               sLetterGrade = "D";
               break;
          // if the final grade is between 60 and 64...
          case (iFinalGrade >= 60 && iFinalGrade < 64):
               // the final letter grade is a D-
               sLetterGrade = "D-";
               break;
          // if the final grade is less than 60...
          case (iFinalGrade < 60):
               // the final letter grade is an E
               sLetterGrade = "E";
               break;
     }

     // Displaying the final grade (Letter Grade)
     $('#LetterGrade').text(sLetterGrade);


});

