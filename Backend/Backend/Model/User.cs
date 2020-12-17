using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Model
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }    
        public string urlHinh { get; set; }
        //public int AccountID { get; set; }
        public Account account { get; set; }
        public GiaoDich GiaoDich { get; set; }
        public ICollection<GiaoDich> giaoDiches { get; set; }     
    }
}
