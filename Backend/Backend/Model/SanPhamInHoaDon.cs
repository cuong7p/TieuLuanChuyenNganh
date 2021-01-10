using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Model
{
    public class SanPhamInHoaDon
    {
        [Key]
        public int MaHD { get; set; }
        public HoaDon hoaDon { get; set; }
        public int soluong { get; set; }
        public double DonGia { get; set; }
        public int MaSP { get; set; }
        public SanPham SanPham { get; set; }     

    }
}
