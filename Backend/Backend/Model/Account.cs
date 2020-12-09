﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Model
{
    public class Account
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AccountID { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        
        public int UserID { get; set; }
        public User user { get; set; }
        public int RoleID { get; set; }
        public Role role { get; set; }
    }
}
