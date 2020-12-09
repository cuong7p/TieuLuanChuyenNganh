using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Model
{
    public class ChiTietSanPham
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MaCTSP { get; set; }
        public double DonGia { get; set; }
        public int SoLuong { get; set; }
        public float GiamGia { get; set; }
        public bool TinhTrang { get; set; }
        public int LuotxemSP { get; set; }

        public int MaNSX { get; set; }
        public int ManhomSP { get; set; }
   
        public SanPham sanPham { get; set; }
        public NhomSanPham NhomSanPham { get; set; }
        public NhaSanXuat NhaSanXuat { get; set; }
    }
}
