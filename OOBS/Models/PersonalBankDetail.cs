using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace OOBS.Models
{
    public class PersonalBankDetail
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [StringLength(30)]
        [Column(TypeName = "varchar")]
        public string BankName { get; set; }

        [Required]
        [StringLength(16)]
        [Column(TypeName = "varchar")]
        public string AccountNo { get; set; }

        [Required]
        [StringLength(11)]
        [Column(TypeName = "varchar")]
        public string IFSCCode { get; set; }

        public AccountDetails AccountDetails { get; set; }

       
    }
}