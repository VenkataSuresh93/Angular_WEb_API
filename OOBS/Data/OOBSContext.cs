using OOBS.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace OOBS.Data
{
    public class OOBSContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public OOBSContext() : base("name=OOBSContext")
        {
        }

        public DbSet<AccountDetails> AccountDetails { get; set; }

        public DbSet<EmployeeLogin> EmployeeLogins { get; set; }

        public DbSet<PersonalBankDetail> PersonalBankDetails { get; set; }
        public DbSet<AdminLogin> AdminLogins { get; set; }
        public DbSet<Interest> Interests { get; set; }
        public DbSet<OrganizationDeposit> OrganizationDeposits { get; set; }
        public DbSet<Withdraw> Withdraws { get; set; }
    }
}

