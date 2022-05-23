using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using OOBS.Data;
using OOBS.Models;

namespace OOBS.Controllers
{
    public class EmployeeLoginsController : ApiController
    {
        private OOBSContext db = new OOBSContext();

        [Route("api/EmployeeLogins/UserLogin")]
        [HttpPost]
        public IHttpActionResult Login(EmployeeLogin employeeLogin)
        {

            try
            {
                var logindetail = db.EmployeeLogins.SqlQuery("select id,UserName,Password from EmployeeLogins where UserName=@userName and Password=@Password;", new SqlParameter("@id", employeeLogin.Id), new SqlParameter("@UserName", employeeLogin.UserName),
                    new SqlParameter("@Password", employeeLogin.Password))
                         .FirstOrDefault();
                if (logindetail == null)
                {
                    return NotFound();
                }
                return Ok(logindetail);
            }
            catch (Exception)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);


            }

        }

        // GET: api/EmployeeLogins
        public IQueryable<EmployeeLogin> GetEmployeeLogins()
        {
            return db.EmployeeLogins;
        }

        // GET: api/EmployeeLogins/5
        [ResponseType(typeof(EmployeeLogin))]
        public IHttpActionResult GetEmployeeLogin(int id)
        {
            EmployeeLogin employeeLogin = db.EmployeeLogins.Find(id);
            if (employeeLogin == null)
            {
                return NotFound();
            }

            return Ok(employeeLogin);
        }

        // PUT: api/EmployeeLogins/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEmployeeLogin(int id, EmployeeLogin employeeLogin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != employeeLogin.Id)
            {
                return BadRequest();
            }

            db.Entry(employeeLogin).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeLoginExists(id))
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

        // POST: api/EmployeeLogins
        [ResponseType(typeof(EmployeeLogin))]
        public IHttpActionResult PostEmployeeLogin(EmployeeLogin employeeLogin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
           
            db.EmployeeLogins.Add(employeeLogin);
            db.SaveChanges();
            
            return CreatedAtRoute("DefaultApi", new { id = employeeLogin.Id }, employeeLogin);
        }

        // DELETE: api/EmployeeLogins/5
        [ResponseType(typeof(EmployeeLogin))]
        public IHttpActionResult DeleteEmployeeLogin(int id)
        {
            EmployeeLogin employeeLogin = db.EmployeeLogins.Find(id);
            if (employeeLogin == null)
            {
                return NotFound();
            }

            db.EmployeeLogins.Remove(employeeLogin);
            db.SaveChanges();

            return Ok(employeeLogin);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EmployeeLoginExists(int id)
        {
            return db.EmployeeLogins.Count(e => e.Id == id) > 0;
        }
    }
}