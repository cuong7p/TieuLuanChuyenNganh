﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Model
{
    public class HoaDon
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MaHD { get; set; }
        public string TenHD { get; set; }
        public int SoluongMua { get; set; }
        public string ChiTiet { get; set; }
        public bool TrangThaiHD { get; set; }

        public int MGD { get; set; }
        public GiaoDich giaoDich { get; set; }
        public SanPhamInHoaDon SanPhamInHoaDon { get; set; }

        public ICollection<SanPhamInHoaDon> SanPhamInHoaDons { get; set; }
    }
}