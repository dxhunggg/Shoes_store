﻿using System.ComponentModel.DataAnnotations;

namespace API.Model.Domain
{
    public class User
    {
        [Key]

        public int UserId { get; set; }

        public string UserName { get; set; }

        public string Password { get; set; }
        public string UserEmail { get; set; }
       
    }
}
