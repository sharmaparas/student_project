using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Student_Project.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Add()
        {
            ViewBag.Message = "Add a student data.";

            return View();
        }

        public ActionResult ViewStudent()
        {
            ViewBag.Message = "View student data here.";

            return View();
        }
    }
}