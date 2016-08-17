using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using ACPModel;
using System.Data.Entity;
using System.Net;
using Newtonsoft.Json;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AssistaCommunityPortal.Controllers
{
    public class UsersController : Controller
    {
        private readonly eclaimlinkportalEntities _context;

        public UsersController(eclaimlinkportalEntities context)
        {
            _context = context;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View(_context.users.ToList());
        }

        //[AllowJsonGet]
        [HttpGet]
        public JsonResult GetAll()
        {
            //AssistaCommunityPortal.Controllers.user my = new AssistaCommunityPortal.Controllers.user();
            //my.name = "aaaa";
            //my.photo = "a";
            //var json = JsonConvert.SerializeObject(_context.users.ToList());
            return Json(_context.users.ToList());
            //return Json(my);
        }
        //[AllowJsonGet]
        [HttpGet]
        public JsonResult GetById(int? id)
        {
            //AssistaCommunityPortal.Controllers.user my = new AssistaCommunityPortal.Controllers.user();
            //my.name = "aaaa";
            //my.photo = "a";
            //var json = JsonConvert.SerializeObject(_context.users.ToList());
            return Json(_context.users.ToList().Find(user=> user.id==id));
            //return Json(my);
        }
        //GET: users/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult((int)HttpStatusCode.BadRequest);
            }
            user user = _context.users.Find(id);
            if (user == null)
            {
                return HttpNotFound();
            }
            return View(user);
        }

        // GET: users/Edit/5
        //public ActionResult Edit(int? id)
        //{
        //    if (id == null)
        //    {
        //        return new HttpStatusCodeResult((int)HttpStatusCode.BadRequest);
        //    }
        //    user user = _context.users.Find(id);
        //    if (user == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    return View(user);
        //}

        // POST: users/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public JsonResult Edit([FromBody]user user)
        {
            if (ModelState.IsValid)
            {
                _context.Entry(user).State = EntityState.Modified;
                _context.SaveChanges();
                //return RedirectToAction("Index");
            }
            return Json(user);
        }

        // GET: users/Create
        public ActionResult Create()
        {
            return View();
        }

        //POST: users/Create
        //To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public JsonResult Create([FromBody]user user)
        {
            //user.name = name;
            //user.username = username;
            //user.email = email;
            if (ModelState.IsValid)
            {
                _context.users.Add(user);
                _context.SaveChanges();
                return Json(user);
            }
            else
                return Json(_context.users.ToList());

            //return View(user);
        }

        // GET: users/Delete/5
        //public ActionResult Delete(int? id)
        //{
        //    if (id == null)
        //    {
        //        return new HttpStatusCodeResult((int)HttpStatusCode.BadRequest);
        //    }
        //    user user = _context.users.Find(id);
        //    if (user == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    return View(user);
        //}

        // POST: users/Delete/5
        //[HttpPost, ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        //public ActionResult DeleteConfirmed(int id)
        //{
        //    user user = _context.users.Find(id);
        //    _context.users.Remove(user);
        //    _context.SaveChanges();
        //    return RedirectToAction("Index");
        //}

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _context.Dispose();
            }
            base.Dispose(disposing);
        }
    }


    //public class user
    //{
    //public string name { get; set; }
    //public string photo { get; set; }
    
    //}
}