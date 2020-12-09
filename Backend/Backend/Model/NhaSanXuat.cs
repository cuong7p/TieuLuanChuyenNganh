using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Model
{
    public class NhaSanXuat
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MaNSX { get; set; }
        public string TenNSX { get; set; }
        public string DiaChi { get; set; }
        public string SoDT { get; set; }
        public string ChiTiet { get; set; }

        public ICollection<ChiTietSanPham> chiTietSanPhams { get; set; }
        public ChiTietSanPham ChiTietSanPham { get; set; }
    }
}
