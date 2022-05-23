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
    public class OrganizationDepositsController : ApiController
    {
        private OOBSContext db = new OOBSContext();

        // GET: api/OrganizationDeposits
        public IQueryable<OrganizationDeposit> GetOrganizationDeposits()
        {
            return db.OrganizationDeposits;
        }

        // GET: api/OrganizationDeposits/5
        [ResponseType(typeof(OrganizationDeposit))]
        public IHttpActionResult GetOrganizationDeposit(int id)
        {
            OrganizationDeposit organizationDeposit = db.OrganizationDeposits.Find(id);
            if (organizationDeposit == null)
            {
                return NotFound();
            }

            return Ok(organizationDeposit);
        }

        // PUT: api/OrganizationDeposits/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutOrganizationDeposit(int id, OrganizationDeposit organizationDeposit)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != organizationDeposit.Id)
            {
                return BadRequest();
            }

            db.Entry(organizationDeposit).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrganizationDepositExists(id))
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

        // POST: api/OrganizationDeposits
        [ResponseType(typeof(OrganizationDeposit))]
        public IHttpActionResult PostOrganizationDeposit(OrganizationDeposit organizationDeposit)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.OrganizationDeposits.Add(organizationDeposit);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = organizationDeposit.Id }, organizationDeposit);
        }

        // DELETE: api/OrganizationDeposits/5
        [ResponseType(typeof(OrganizationDeposit))]
        public IHttpActionResult DeleteOrganizationDeposit(int id)
        {
            OrganizationDeposit organizationDeposit = db.OrganizationDeposits.Find(id);
            if (organizationDeposit == null)
            {
                return NotFound();
            }

            db.OrganizationDeposits.Remove(organizationDeposit);
            db.SaveChanges();

            return Ok(organizationDeposit);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool OrganizationDepositExists(int id)
        {
            return db.OrganizationDeposits.Count(e => e.Id == id) > 0;
        }
    }
}