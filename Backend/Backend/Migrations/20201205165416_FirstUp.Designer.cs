﻿// <auto-generated />
using System;
using Backend.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Backend.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20201205165416_FirstUp")]
    partial class FirstUp
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("Backend.Model.Account", b =>
                {
                    b.Property<int>("AccountID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RoleID")
                        .HasColumnType("int");

                    b.Property<int?>("RoleID1")
                        .HasColumnType("int");

                    b.Property<int>("UserID")
                        .HasColumnType("int");

                    b.HasKey("AccountID");

                    b.HasIndex("RoleID");

                    b.HasIndex("RoleID1")
                        .IsUnique()
                        .HasFilter("[RoleID1] IS NOT NULL");

                    b.HasIndex("UserID")
                        .IsUnique();

                    b.ToTable("Accounts");
                });

            modelBuilder.Entity("Backend.Model.ChiTietSanPham", b =>
                {
                    b.Property<int>("MaCTSP")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<double>("DonGia")
                        .HasColumnType("float");

                    b.Property<float>("GiamGia")
                        .HasColumnType("real");

                    b.Property<int>("LuotxemSP")
                        .HasColumnType("int");

                    b.Property<int>("MaNSX")
                        .HasColumnType("int");

                    b.Property<int>("ManhomSP")
                        .HasColumnType("int");

                    b.Property<int>("SoLuong")
                        .HasColumnType("int");

                    b.Property<bool>("TinhTrang")
                        .HasColumnType("bit");

                    b.HasKey("MaCTSP");

                    b.HasIndex("MaNSX");

                    b.HasIndex("ManhomSP");

                    b.ToTable("ChiTietSanPhams");
                });

            modelBuilder.Entity("Backend.Model.GiaoDich", b =>
                {
                    b.Property<int>("MaGD")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("ChiTietGD")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TenCongThanhToan")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TenGD")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TinhTrang")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserID")
                        .HasColumnType("int");

                    b.Property<int?>("UserID1")
                        .HasColumnType("int");

                    b.HasKey("MaGD");

                    b.HasIndex("UserID");

                    b.HasIndex("UserID1")
                        .IsUnique()
                        .HasFilter("[UserID1] IS NOT NULL");

                    b.ToTable("GiaoDiches");
                });

            modelBuilder.Entity("Backend.Model.HinhAnh", b =>
                {
                    b.Property<int>("HinhID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<byte[]>("ImageData")
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("TenHinh")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("HinhID");

                    b.ToTable("HinhAnhs");
                });

            modelBuilder.Entity("Backend.Model.HoaDon", b =>
                {
                    b.Property<int>("MaHD")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("ChiTiet")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MGD")
                        .HasColumnType("int");

                    b.Property<int?>("SanPhamInHoaDonMaHD")
                        .HasColumnType("int");

                    b.Property<int?>("SanPhamInHoaDonMaSP")
                        .HasColumnType("int");

                    b.Property<int>("SoluongMua")
                        .HasColumnType("int");

                    b.Property<string>("TenHD")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TrangThaiHD")
                        .HasColumnType("bit");

                    b.HasKey("MaHD");

                    b.HasIndex("SanPhamInHoaDonMaSP", "SanPhamInHoaDonMaHD");

                    b.ToTable("HoaDons");
                });

            modelBuilder.Entity("Backend.Model.NhaSanXuat", b =>
                {
                    b.Property<int>("MaNSX")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("ChiTiet")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("ChiTietSanPhamMaCTSP")
                        .HasColumnType("int");

                    b.Property<string>("DiaChi")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SoDT")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TenNSX")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("MaNSX");

                    b.HasIndex("ChiTietSanPhamMaCTSP");

                    b.ToTable("NhaSanXuats");
                });

            modelBuilder.Entity("Backend.Model.NhomSanPham", b =>
                {
                    b.Property<int>("ManhomSP")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int?>("ChiTietSanPhamMaCTSP")
                        .HasColumnType("int");

                    b.Property<int>("SoluongSP")
                        .HasColumnType("int");

                    b.Property<string>("TennhomSP")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ManhomSP");

                    b.HasIndex("ChiTietSanPhamMaCTSP");

                    b.ToTable("NhomSanPhams");
                });

            modelBuilder.Entity("Backend.Model.Role", b =>
                {
                    b.Property<int>("RoleID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("RoleID");

                    b.ToTable("Roles");
                });

            modelBuilder.Entity("Backend.Model.SanPham", b =>
                {
                    b.Property<int>("MaSP")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("HinhID")
                        .HasColumnType("int");

                    b.Property<int>("MaCTSP")
                        .HasColumnType("int");

                    b.Property<string>("Mota")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("SanPhamInHoaDonMaHD")
                        .HasColumnType("int");

                    b.Property<int?>("SanPhamInHoaDonMaSP")
                        .HasColumnType("int");

                    b.Property<string>("TenSP")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("MaSP");

                    b.HasIndex("SanPhamInHoaDonMaSP", "SanPhamInHoaDonMaHD");

                    b.ToTable("SanPhams");
                });

            modelBuilder.Entity("Backend.Model.SanPhamInHoaDon", b =>
                {
                    b.Property<int>("MaSP")
                        .HasColumnType("int");

                    b.Property<int>("MaHD")
                        .HasColumnType("int");

                    b.HasKey("MaSP", "MaHD");

                    b.HasIndex("MaHD");

                    b.ToTable("SanPhamInHoaDons");
                });

            modelBuilder.Entity("Backend.Model.User", b =>
                {
                    b.Property<int>("UserID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserID");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Backend.Model.Account", b =>
                {
                    b.HasOne("Backend.Model.Role", "role")
                        .WithMany("accounts")
                        .HasForeignKey("RoleID")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("Backend.Model.Role", null)
                        .WithOne("account")
                        .HasForeignKey("Backend.Model.Account", "RoleID1");

                    b.HasOne("Backend.Model.User", "user")
                        .WithOne("account")
                        .HasForeignKey("Backend.Model.Account", "UserID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("role");

                    b.Navigation("user");
                });

            modelBuilder.Entity("Backend.Model.ChiTietSanPham", b =>
                {
                    b.HasOne("Backend.Model.SanPham", "sanPham")
                        .WithOne("chiTietSanPham")
                        .HasForeignKey("Backend.Model.ChiTietSanPham", "MaCTSP")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("Backend.Model.NhaSanXuat", "NhaSanXuat")
                        .WithMany("chiTietSanPhams")
                        .HasForeignKey("MaNSX")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("Backend.Model.NhomSanPham", "NhomSanPham")
                        .WithMany("chiTietSanPhams")
                        .HasForeignKey("ManhomSP")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("NhaSanXuat");

                    b.Navigation("NhomSanPham");

                    b.Navigation("sanPham");
                });

            modelBuilder.Entity("Backend.Model.GiaoDich", b =>
                {
                    b.HasOne("Backend.Model.HoaDon", "hoaDon")
                        .WithOne("giaoDich")
                        .HasForeignKey("Backend.Model.GiaoDich", "MaGD")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("Backend.Model.User", "user")
                        .WithMany("giaoDiches")
                        .HasForeignKey("UserID")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("Backend.Model.User", null)
                        .WithOne("GiaoDich")
                        .HasForeignKey("Backend.Model.GiaoDich", "UserID1");

                    b.Navigation("hoaDon");

                    b.Navigation("user");
                });

            modelBuilder.Entity("Backend.Model.HinhAnh", b =>
                {
                    b.HasOne("Backend.Model.SanPham", "sanPham")
                        .WithOne("hinhAnh")
                        .HasForeignKey("Backend.Model.HinhAnh", "HinhID")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("sanPham");
                });

            modelBuilder.Entity("Backend.Model.HoaDon", b =>
                {
                    b.HasOne("Backend.Model.SanPhamInHoaDon", "SanPhamInHoaDon")
                        .WithMany()
                        .HasForeignKey("SanPhamInHoaDonMaSP", "SanPhamInHoaDonMaHD");

                    b.Navigation("SanPhamInHoaDon");
                });

            modelBuilder.Entity("Backend.Model.NhaSanXuat", b =>
                {
                    b.HasOne("Backend.Model.ChiTietSanPham", "ChiTietSanPham")
                        .WithMany()
                        .HasForeignKey("ChiTietSanPhamMaCTSP");

                    b.Navigation("ChiTietSanPham");
                });

            modelBuilder.Entity("Backend.Model.NhomSanPham", b =>
                {
                    b.HasOne("Backend.Model.ChiTietSanPham", "ChiTietSanPham")
                        .WithMany()
                        .HasForeignKey("ChiTietSanPhamMaCTSP");

                    b.Navigation("ChiTietSanPham");
                });

            modelBuilder.Entity("Backend.Model.SanPham", b =>
                {
                    b.HasOne("Backend.Model.SanPhamInHoaDon", "SanPhamInHoaDon")
                        .WithMany()
                        .HasForeignKey("SanPhamInHoaDonMaSP", "SanPhamInHoaDonMaHD");

                    b.Navigation("SanPhamInHoaDon");
                });

            modelBuilder.Entity("Backend.Model.SanPhamInHoaDon", b =>
                {
                    b.HasOne("Backend.Model.HoaDon", "hoaDon")
                        .WithMany("SanPhamInHoaDons")
                        .HasForeignKey("MaHD")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("Backend.Model.SanPham", "SanPham")
                        .WithMany("SanPhamInHoaDons")
                        .HasForeignKey("MaSP")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("hoaDon");

                    b.Navigation("SanPham");
                });

            modelBuilder.Entity("Backend.Model.HoaDon", b =>
                {
                    b.Navigation("giaoDich");

                    b.Navigation("SanPhamInHoaDons");
                });

            modelBuilder.Entity("Backend.Model.NhaSanXuat", b =>
                {
                    b.Navigation("chiTietSanPhams");
                });

            modelBuilder.Entity("Backend.Model.NhomSanPham", b =>
                {
                    b.Navigation("chiTietSanPhams");
                });

            modelBuilder.Entity("Backend.Model.Role", b =>
                {
                    b.Navigation("account");

                    b.Navigation("accounts");
                });

            modelBuilder.Entity("Backend.Model.SanPham", b =>
                {
                    b.Navigation("chiTietSanPham");

                    b.Navigation("hinhAnh");

                    b.Navigation("SanPhamInHoaDons");
                });

            modelBuilder.Entity("Backend.Model.User", b =>
                {
                    b.Navigation("account");

                    b.Navigation("GiaoDich");

                    b.Navigation("giaoDiches");
                });
#pragma warning restore 612, 618
        }
    }
}
