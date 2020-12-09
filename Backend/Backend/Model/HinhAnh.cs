using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Model
{
    public class HinhAnh
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int HinhID { get; set; }
        public string TenHinh { get; set; }
        public byte[] ImageData { get; set; }

        public SanPham sanPham { get; set; }
    }
}
