using Microsoft.AspNetCore.Mvc;
using Mission4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        // The HttpGet Attribute
        [HttpGet]
        public IActionResult Grade_Calculator()
        {
            return View();
        }

        // The HttpPost Attribute
        [HttpPost]
        public IActionResult Grade_Calculator(Calculate_Grade_Model model)
        {
            return View();
        }

    }
}
