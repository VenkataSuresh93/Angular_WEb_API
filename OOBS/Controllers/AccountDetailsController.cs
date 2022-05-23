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
   
    public class AccountDetailsController : ApiController
    {
        private OOBSContext db = new OOBSContext();

        // GET: api/AccountDetails
        //public IEnumerable<AccountDetails> GetAccountDetails()
        //var emp= db.AccountDetails;
        //    return ok
        [Route("api/AccountDetails/Users")]
        [HttpPost]
        public IHttpActionResult GetDetails(AccountDetails accountDetails)
        {

            try
            {
                var userdetail = db.AccountDetails.SqlQuery("select * from AccountDetails where Email=@Email",  new SqlParameter("@Email", accountDetails.Email)).FirstOrDefault();
                //var userdetail = db.AccountDetails.Where(y => y.Email == email);
                   // var employeeWithdrawtotal = db.Withdraws.Where(y => y.FromAccountNo == accountNo).Sum(x => x.Amount);
                if (userdetail == null)
                {
                    return NotFound();
                }
                return Ok(userdetail);
            }
            catch (Exception)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);


            }

        }

        public HttpResponseMessage Get()
        {
            var studetns = db.AccountDetails.ToList();
            return Request.CreateResponse(HttpStatusCode.OK, studetns);
        }


        // GET: api/AccountDetails/5
        [ResponseType(typeof(AccountDetails))]
        public IHttpActionResult GetAccountDetails(int id)
        {
            AccountDetails accountDetails = db.AccountDetails.Find(id);
            if (accountDetails == null)
            {
                return NotFound();
            }

            return Ok(accountDetails);
        }

        // PUT: api/AccountDetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAccountDetails(int id, AccountDetails accountDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != accountDetails.Id)
            {
                return BadRequest();
            }

            db.Entry(accountDetails).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccountDetailsExists(id))
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

        // POST: api/AccountDetails
        [ResponseType(typeof(AccountDetails))]
        public IHttpActionResult PostAccountDetails(AccountDetails accountDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                accountDetails.Opendate = DateTime.Now;
                Random randon = new Random();
                int rand = randon.Next(10, 99);
                accountDetails.AccountNo = string.Concat("899900", rand);
                db.AccountDetails.Add(accountDetails);
                db.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
           return CreatedAtRoute("DefaultApi", new { id = accountDetails.Id }, accountDetails);
        }
       
            // DELETE: api/AccountDetails/5
            [ResponseType(typeof(AccountDetails))]
        public IHttpActionResult DeleteAccountDetails(int id)
        {
            AccountDetails accountDetails = db.AccountDetails.Find(id);
            if (accountDetails == null)
            {
                return NotFound();
            }

            db.AccountDetails.Remove(accountDetails);
            db.SaveChanges();

            return Ok(accountDetails);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AccountDetailsExists(int id)
        {
            return db.AccountDetails.Count(e => e.Id == id) > 0;
        }
    }
}