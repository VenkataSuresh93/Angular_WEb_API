using OOBS.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OOBS.Controllers
{
    public class TotalBalanceController : ApiController
    {
        private OOBSContext db = new OOBSContext();
        // GET: TotallAmount

        public float GetTotal()
        {

            try
            {
                var totalBankAmount = db.Withdraws.Sum(x => x.Amount);

                var organizationDepositstotal = db.OrganizationDeposits.Sum(x => x.Amount);
                float total =  organizationDepositstotal-totalBankAmount;
                return total;
            }
            catch (Exception)
            {
                throw;


            }
        }
             protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
         }

    }
}

