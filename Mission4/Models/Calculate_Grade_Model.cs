using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4.Models
{
    public class Calculate_Grade_Model
    {

        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a number (percent) from 0 to 100")]
        public int AssignmentGradeGradePercent { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a number (percent) from 0 to 100")]
        public int GroupProjectsGradePercent { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a number (percent) from 0 to 100")]
        public int QuizzesGradePercent { get; set; }

        public int MidtermExamGradePercent { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a number (percent) from 0 to 100")]
        public int FinalExamGradePercent { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a number (percent) from 0 to 100")]
        public int INTEXGradePercent { get; set; }

    }
}