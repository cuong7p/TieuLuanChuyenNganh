using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Model
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext()
        {
        }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<SanPham> SanPhams { get; set; }
        public DbSet<HoaDon> HoaDons { get; set; }
        public DbSet<HinhAnh> HinhAnhs { get; set; }
        public DbSet<GiaoDich> GiaoDiches { get; set; }
        public DbSet<SanPhamInHoaDon> SanPhamInHoaDons { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.UserID).UseIdentityColumn();
                entity.HasOne(a => a.account).WithOne(u => u.user).HasForeignKey<Account>(a => a.UserID).OnDelete(DeleteBehavior.Cascade);
                //entity.HasOne(a => a.role).WithMany(u => u.users).HasForeignKey(a => a.RoleID).OnDelete(DeleteBehavior.Restrict);
            });          
            modelBuilder.Entity<Account>(entity =>
            {
                entity.Property(e => e.AccountID).UseIdentityColumn();
                //entity.HasOne(a => a.user).WithOne(u => u.account).HasForeignKey<User>(a => a.UserID).OnDelete(DeleteBehavior.Restrict);
                //entity.HasOne(a => a.role).WithMany(u => u.accounts).HasForeignKey(a => a.RoleID).OnDelete(DeleteBehavior.Restrict);
            });
            modelBuilder.Entity<SanPham>(entity =>
            {
                entity.Property(e => e.MaSP).UseIdentityColumn();
                //entity.HasOne(a => a.chiTietSanPham).WithOne(u => u.sanPham).HasForeignKey<ChiTietSanPham>(a => a.MaCTSP).OnDelete(DeleteBehavior.Restrict);
                //entity.HasOne(a => a.hinhAnh).WithOne(u => u.sanPham).HasForeignKey<HinhAnh>(a => a.HinhID).OnDelete(DeleteBehavior.Restrict);
            });
            modelBuilder.Entity<HoaDon>(entity =>
            {
                entity.Property(e => e.MaHD).UseIdentityColumn();
                //entity.HasOne(e => e.giaoDich).WithOne(u => u.hoaDon).HasForeignKey<GiaoDich>(a => a.MaGD).OnDelete(DeleteBehavior.Restrict);
            });
            modelBuilder.Entity<HinhAnh>(entity =>
            {
                entity.Property(e => e.HinhID).UseIdentityColumn();
                //entity.HasOne(e => e.sanPham).WithOne(u => u.hinhAnh).HasForeignKey<SanPham>(a => a.HinhID).OnDelete(DeleteBehavior.Cascade);
            });
            modelBuilder.Entity<GiaoDich>(entity =>
            {
                entity.Property(e => e.MaGD).UseIdentityColumn();
                entity.HasOne(e => e.hoaDon).WithOne(u => u.giaoDich).HasForeignKey<HoaDon>(a => a.MGD).OnDelete(DeleteBehavior.Cascade);
                entity.HasOne(e => e.user).WithMany(u => u.giaoDiches).HasForeignKey(a => a.UserID).OnDelete(DeleteBehavior.Restrict);
            });
            modelBuilder.Entity<SanPhamInHoaDon>(entity =>
            {
                entity.HasKey(e => new { e.MaSP, e.MaHD });
                entity.HasOne(e => e.SanPham).WithMany(u => u.SanPhamInHoaDons).HasForeignKey(a => a.MaSP).OnDelete(DeleteBehavior.Restrict);
                entity.HasOne(e => e.hoaDon).WithMany(u => u.SanPhamInHoaDons).HasForeignKey(a => a.MaHD).OnDelete(DeleteBehavior.Restrict);
            });
        }
    }
}
