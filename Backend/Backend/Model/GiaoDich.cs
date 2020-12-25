using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Model
{
    public class GiaoDich
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MaGD { get; set; }
        public string TenGD { get; set; }
        public string TenCongThanhToan { get; set; }
        public string NgayGD { get; set; }

        public HoaDon hoaDon { get; set; }

        public int UserID { get; set; }
        public User user { get; set; }
    }
}
