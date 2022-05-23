using OOBS.Data;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OOBS.Controllers
{
    public class EmployeeTotalAmountController : ApiController
    {
        private OOBSContext db = new OOBSContext();
        public float GetTotal()
        {
           string accountNo = "89990068";
          
            try
            {
                var employeeWithdrawtotal = db.Withdraws.Where(y => y.FromAccountNo == accountNo).Sum(x => x.Amount);


                var employeeDepositstotal = db.OrganizationDeposits.Where(s => s.ToAccountNo==accountNo).Sum(x => x.Amount);

                 float total = employeeDepositstotal - employeeWithdrawtotal;
                
                return total;
            }
            catch (Exception)
            {
                throw  ;


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
