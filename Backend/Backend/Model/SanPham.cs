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

        public int HinhID { get; set; }
        public int MaCTSP { get; set; }

        public HinhAnh hinhAnh { get; set; }
        public ChiTietSanPham chiTietSanPham { get; set; }
        public SanPhamInHoaDon SanPhamInHoaDon { get; set; }

        public ICollection<SanPhamInHoaDon> SanPhamInHoaDons { get; set; }
    }
}
