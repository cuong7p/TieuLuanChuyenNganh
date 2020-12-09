using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Model
{
    public class NhomSanPham
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ManhomSP { get; set; }
        public string TennhomSP { get; set; }
        public int SoluongSP { get; set; }


        public ICollection<ChiTietSanPham> chiTietSanPhams { get; set; }
        public ChiTietSanPham ChiTietSanPham { get; set; }
    }
}
