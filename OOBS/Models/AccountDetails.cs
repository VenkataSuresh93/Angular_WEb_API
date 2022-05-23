using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace OOBS.Models
{
    public class AccountDetails
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [StringLength(10)]
        [Column(TypeName = "varchar")]
        public string AccountNo { get; set; }

        [Required]
        [StringLength(10)]
        [Column(TypeName = "varchar")]
        public string EmployeeCode { get; set; }

        [Required]
        [StringLength(20)]
        [Column(TypeName = "varchar")]
        public string FirstName { get; set; }

        [Required]
        [StringLength(30)]
        [Column(TypeName = "varchar")]
        public string LastName { get; set; }

        [Required]
        [StringLength(30)]
        [Column(TypeName = "varchar")]
        public string FatherName { get; set; }

        [Required]
        [StringLength(6)]
        [Column(TypeName = "varchar")]
        public string Gender { get; set; }

        [Required]
        [StringLength(30)]
        [Column(TypeName = "varchar")]
        public string Email { get; set; }

        [Required]
        [Column(TypeName = "date")]
        public DateTime BirthDate { get; set; }


        [Column(TypeName = "date")]
        public DateTime Opendate { get; set; }
       public ICollection<EmployeeLogin> EmployeeLogins { get; set; }
        public ICollection<PersonalBankDetail> PersonalBankDetails { get; set; }
        public ICollection<OrganizationDeposit> OrganizationDeposits { get; set; }
        public ICollection<Withdraw> Withdraws { get; set; }





    }
}