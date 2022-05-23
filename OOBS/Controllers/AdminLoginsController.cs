using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using OOBS.Data;
using OOBS.Models;

namespace OOBS.Controllers
{
    public class AdminLoginsController : ApiController
    {
        private OOBSContext db = new OOBSContext();

        // GET: api/AdminLogins
        public IQueryable<AdminLogin> GetAdminLogins()
        {
            return db.AdminLogins;
        }

        // GET: api/AdminLogins/5
        [ResponseType(typeof(AdminLogin))]
        public IHttpActionResult GetAdminLogin(int id)
        {
            AdminLogin adminLogin = db.AdminLogins.Find(id);
            if (adminLogin == null)
            {
                return NotFound();
            }

            return Ok(adminLogin);
        }

        // PUT: api/AdminLogins/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAdminLogin(int id, AdminLogin adminLogin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != adminLogin.Id)
            {
                return BadRequest();
            }

            db.Entry(adminLogin).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdminLoginExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/AdminLogins
        [ResponseType(typeof(AdminLogin))]
        public IHttpActionResult PostAdminLogin(AdminLogin adminLogin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AdminLogins.Add(adminLogin);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = adminLogin.Id }, adminLogin);
        }

        // DELETE: api/AdminLogins/5
        [ResponseType(typeof(AdminLogin))]
        public IHttpActionResult DeleteAdminLogin(int id)
        {
            AdminLogin adminLogin = db.AdminLogins.Find(id);
            if (adminLogin == null)
            {
                return NotFound();
            }

            db.AdminLogins.Remove(adminLogin);
            db.SaveChanges();

            return Ok(adminLogin);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AdminLoginExists(int id)
        {
            return db.AdminLogins.Count(e => e.Id == id) > 0;
        }
    }
}