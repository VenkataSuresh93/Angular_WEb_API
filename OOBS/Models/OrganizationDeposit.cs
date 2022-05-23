using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace OOBS.Models
{
    public class OrganizationDeposit
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

       
        [Column(TypeName = "date")]
        public DateTime DepositDate { get; set; }
        [StringLength(16)]
        [Column(TypeName = "varchar")]
        public string ToAccountNo { get; set; }
        [Required]
        public float Amount { get; set; }
        public AccountDetails AccountDetails { get; set; }
    }
}