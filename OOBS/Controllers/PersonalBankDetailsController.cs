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
    public class PersonalBankDetailsController : ApiController
    {
        private OOBSContext db = new OOBSContext();

        // GET: api/PersonalBankDetails
        public IQueryable<PersonalBankDetail> GetPersonalBankDetails()
        {
            return db.PersonalBankDetails;
        }

        // GET: api/PersonalBankDetails/5
        [ResponseType(typeof(PersonalBankDetail))]
        public IHttpActionResult GetPersonalBankDetail(int id)
        {
            PersonalBankDetail personalBankDetail = db.PersonalBankDetails.Find(id);
            if (personalBankDetail == null)
            {
                return NotFound();
            }

            return Ok(personalBankDetail);
        }

        // PUT: api/PersonalBankDetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPersonalBankDetail(int id, PersonalBankDetail personalBankDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != personalBankDetail.Id)
            {
                return BadRequest();
            }

            db.Entry(personalBankDetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonalBankDetailExists(id))
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

        // POST: api/PersonalBankDetails
        [ResponseType(typeof(PersonalBankDetail))]
        public IHttpActionResult PostPersonalBankDetail(PersonalBankDetail personalBankDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PersonalBankDetails.Add(personalBankDetail);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = personalBankDetail.Id }, personalBankDetail);
        }

        // DELETE: api/PersonalBankDetails/5
        [ResponseType(typeof(PersonalBankDetail))]
        public IHttpActionResult DeletePersonalBankDetail(int id)
        {
            PersonalBankDetail personalBankDetail = db.PersonalBankDetails.Find(id);
            if (personalBankDetail == null)
            {
                return NotFound();
            }

            db.PersonalBankDetails.Remove(personalBankDetail);
            db.SaveChanges();

            return Ok(personalBankDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PersonalBankDetailExists(int id)
        {
            return db.PersonalBankDetails.Count(e => e.Id == id) > 0;
        }
    }
}