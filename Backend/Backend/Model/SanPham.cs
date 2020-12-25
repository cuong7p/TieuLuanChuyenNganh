using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Model
{
    public class SanPham
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MaSP { get; set; }
        public string TenSP { get; set; }
        public string Mota { get; set; }
        public string TenNSX { get; set; }
        public string TennhomSP { get; set; }
        public double DonGia { get; set; }
        public int SoLuong { get; set; }
        public string TinhTrang { get; set; }
        public string urlHinh { get; set; }

        // public HinhAnh hinhAnh { get; set; }
        public SanPhamInHoaDon SanPhamInHoaDon { get; set; }

        public ICollection<SanPhamInHoaDon> SanPhamInHoaDons { get; set; }
    }
}
