using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace OOBS.Models
{
    public class EmployeeLogin
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [StringLength(30)]
        [Column(TypeName = "varchar")]
        public string UserName { get; set; }

        [Required]
        [StringLength(16)]
        [Column(TypeName = "varchar")]
        public string Password { get; set; }

        public AccountDetails AccountDetails { get; set; }
    }
}