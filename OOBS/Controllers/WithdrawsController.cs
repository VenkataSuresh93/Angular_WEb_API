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
    public class WithdrawsController : ApiController
    {
        private OOBSContext db = new OOBSContext();

        // GET: api/Withdraws
        public IQueryable<Withdraw> GetWithdraws()
        {
            return db.Withdraws;
        }

        // GET: api/Withdraws/5
        [ResponseType(typeof(Withdraw))]
        public IHttpActionResult GetWithdraw(int id)
        {
            Withdraw withdraw = db.Withdraws.Find(id);
            if (withdraw == null)
            {
                return NotFound();
            }

            return Ok(withdraw);
        }

        // PUT: api/Withdraws/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutWithdraw(int id, Withdraw withdraw)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != withdraw.Id)
            {
                return BadRequest();
            }

            db.Entry(withdraw).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WithdrawExists(id))
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

        // POST: api/Withdraws
        [ResponseType(typeof(Withdraw))]
        public IHttpActionResult PostWithdraw(Withdraw withdraw)
        {
            withdraw.WithdrawDate = DateTime.Now;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Withdraws.Add(withdraw);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = withdraw.Id }, withdraw);
        }

        // DELETE: api/Withdraws/5
        [ResponseType(typeof(Withdraw))]
        public IHttpActionResult DeleteWithdraw(int id)
        {
            Withdraw withdraw = db.Withdraws.Find(id);
            if (withdraw == null)
            {
                return NotFound();
            }

            db.Withdraws.Remove(withdraw);
            db.SaveChanges();

            return Ok(withdraw);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool WithdrawExists(int id)
        {
            return db.Withdraws.Count(e => e.Id == id) > 0;
        }
    }
}