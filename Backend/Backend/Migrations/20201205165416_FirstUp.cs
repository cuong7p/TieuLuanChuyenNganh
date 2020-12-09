using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class FirstUp : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    RoleID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.RoleID);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserID);
                });

            migrationBuilder.CreateTable(
                name: "Accounts",
                columns: table => new
                {
                    AccountID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserID = table.Column<int>(type: "int", nullable: false),
                    RoleID = table.Column<int>(type: "int", nullable: false),
                    RoleID1 = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accounts", x => x.AccountID);
                    table.ForeignKey(
                        name: "FK_Accounts_Roles_RoleID",
                        column: x => x.RoleID,
                        principalTable: "Roles",
                        principalColumn: "RoleID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Accounts_Roles_RoleID1",
                        column: x => x.RoleID1,
                        principalTable: "Roles",
                        principalColumn: "RoleID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Accounts_Users_UserID",
                        column: x => x.UserID,
                        principalTable: "Users",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "NhaSanXuats",
                columns: table => new
                {
                    MaNSX = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenNSX = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DiaChi = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SoDT = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ChiTiet = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ChiTietSanPhamMaCTSP = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NhaSanXuats", x => x.MaNSX);
                });

            migrationBuilder.CreateTable(
                name: "NhomSanPhams",
                columns: table => new
                {
                    ManhomSP = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TennhomSP = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SoluongSP = table.Column<int>(type: "int", nullable: false),
                    ChiTietSanPhamMaCTSP = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NhomSanPhams", x => x.ManhomSP);
                });

            migrationBuilder.CreateTable(
                name: "GiaoDiches",
                columns: table => new
                {
                    MaGD = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenGD = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TinhTrang = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TenCongThanhToan = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ChiTietGD = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserID = table.Column<int>(type: "int", nullable: false),
                    UserID1 = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GiaoDiches", x => x.MaGD);
                    table.ForeignKey(
                        name: "FK_GiaoDiches_Users_UserID",
                        column: x => x.UserID,
                        principalTable: "Users",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_GiaoDiches_Users_UserID1",
                        column: x => x.UserID1,
                        principalTable: "Users",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SanPhamInHoaDons",
                columns: table => new
                {
                    MaHD = table.Column<int>(type: "int", nullable: false),
                    MaSP = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SanPhamInHoaDons", x => new { x.MaSP, x.MaHD });
                });

            migrationBuilder.CreateTable(
                name: "HoaDons",
                columns: table => new
                {
                    MaHD = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenHD = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SoluongMua = table.Column<int>(type: "int", nullable: false),
                    ChiTiet = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TrangThaiHD = table.Column<bool>(type: "bit", nullable: false),
                    MGD = table.Column<int>(type: "int", nullable: false),
                    SanPhamInHoaDonMaSP = table.Column<int>(type: "int", nullable: true),
                    SanPhamInHoaDonMaHD = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HoaDons", x => x.MaHD);
                    table.ForeignKey(
                        name: "FK_HoaDons_SanPhamInHoaDons_SanPhamInHoaDonMaSP_SanPhamInHoaDonMaHD",
                        columns: x => new { x.SanPhamInHoaDonMaSP, x.SanPhamInHoaDonMaHD },
                        principalTable: "SanPhamInHoaDons",
                        principalColumns: new[] { "MaSP", "MaHD" },
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SanPhams",
                columns: table => new
                {
                    MaSP = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenSP = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Mota = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HinhID = table.Column<int>(type: "int", nullable: false),
                    MaCTSP = table.Column<int>(type: "int", nullable: false),
                    SanPhamInHoaDonMaSP = table.Column<int>(type: "int", nullable: true),
                    SanPhamInHoaDonMaHD = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SanPhams", x => x.MaSP);
                    table.ForeignKey(
                        name: "FK_SanPhams_SanPhamInHoaDons_SanPhamInHoaDonMaSP_SanPhamInHoaDonMaHD",
                        columns: x => new { x.SanPhamInHoaDonMaSP, x.SanPhamInHoaDonMaHD },
                        principalTable: "SanPhamInHoaDons",
                        principalColumns: new[] { "MaSP", "MaHD" },
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ChiTietSanPhams",
                columns: table => new
                {
                    MaCTSP = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DonGia = table.Column<double>(type: "float", nullable: false),
                    SoLuong = table.Column<int>(type: "int", nullable: false),
                    GiamGia = table.Column<float>(type: "real", nullable: false),
                    TinhTrang = table.Column<bool>(type: "bit", nullable: false),
                    LuotxemSP = table.Column<int>(type: "int", nullable: false),
                    MaNSX = table.Column<int>(type: "int", nullable: false),
                    ManhomSP = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChiTietSanPhams", x => x.MaCTSP);
                    table.ForeignKey(
                        name: "FK_ChiTietSanPhams_NhaSanXuats_MaNSX",
                        column: x => x.MaNSX,
                        principalTable: "NhaSanXuats",
                        principalColumn: "MaNSX",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ChiTietSanPhams_NhomSanPhams_ManhomSP",
                        column: x => x.ManhomSP,
                        principalTable: "NhomSanPhams",
                        principalColumn: "ManhomSP",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ChiTietSanPhams_SanPhams_MaCTSP",
                        column: x => x.MaCTSP,
                        principalTable: "SanPhams",
                        principalColumn: "MaSP",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "HinhAnhs",
                columns: table => new
                {
                    HinhID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenHinh = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ImageData = table.Column<byte[]>(type: "varbinary(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HinhAnhs", x => x.HinhID);
                    table.ForeignKey(
                        name: "FK_HinhAnhs_SanPhams_HinhID",
                        column: x => x.HinhID,
                        principalTable: "SanPhams",
                        principalColumn: "MaSP",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Accounts_RoleID",
                table: "Accounts",
                column: "RoleID");

            migrationBuilder.CreateIndex(
                name: "IX_Accounts_RoleID1",
                table: "Accounts",
                column: "RoleID1",
                unique: true,
                filter: "[RoleID1] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Accounts_UserID",
                table: "Accounts",
                column: "UserID",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ChiTietSanPhams_ManhomSP",
                table: "ChiTietSanPhams",
                column: "ManhomSP");

            migrationBuilder.CreateIndex(
                name: "IX_ChiTietSanPhams_MaNSX",
                table: "ChiTietSanPhams",
                column: "MaNSX");

            migrationBuilder.CreateIndex(
                name: "IX_GiaoDiches_UserID",
                table: "GiaoDiches",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_GiaoDiches_UserID1",
                table: "GiaoDiches",
                column: "UserID1",
                unique: true,
                filter: "[UserID1] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_HoaDons_SanPhamInHoaDonMaSP_SanPhamInHoaDonMaHD",
                table: "HoaDons",
                columns: new[] { "SanPhamInHoaDonMaSP", "SanPhamInHoaDonMaHD" });

            migrationBuilder.CreateIndex(
                name: "IX_NhaSanXuats_ChiTietSanPhamMaCTSP",
                table: "NhaSanXuats",
                column: "ChiTietSanPhamMaCTSP");

            migrationBuilder.CreateIndex(
                name: "IX_NhomSanPhams_ChiTietSanPhamMaCTSP",
                table: "NhomSanPhams",
                column: "ChiTietSanPhamMaCTSP");

            migrationBuilder.CreateIndex(
                name: "IX_SanPhamInHoaDons_MaHD",
                table: "SanPhamInHoaDons",
                column: "MaHD");

            migrationBuilder.CreateIndex(
                name: "IX_SanPhams_SanPhamInHoaDonMaSP_SanPhamInHoaDonMaHD",
                table: "SanPhams",
                columns: new[] { "SanPhamInHoaDonMaSP", "SanPhamInHoaDonMaHD" });

            migrationBuilder.AddForeignKey(
                name: "FK_NhaSanXuats_ChiTietSanPhams_ChiTietSanPhamMaCTSP",
                table: "NhaSanXuats",
                column: "ChiTietSanPhamMaCTSP",
                principalTable: "ChiTietSanPhams",
                principalColumn: "MaCTSP",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_NhomSanPhams_ChiTietSanPhams_ChiTietSanPhamMaCTSP",
                table: "NhomSanPhams",
                column: "ChiTietSanPhamMaCTSP",
                principalTable: "ChiTietSanPhams",
                principalColumn: "MaCTSP",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_GiaoDiches_HoaDons_MaGD",
                table: "GiaoDiches",
                column: "MaGD",
                principalTable: "HoaDons",
                principalColumn: "MaHD",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_SanPhamInHoaDons_HoaDons_MaHD",
                table: "SanPhamInHoaDons",
                column: "MaHD",
                principalTable: "HoaDons",
                principalColumn: "MaHD",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_SanPhamInHoaDons_SanPhams_MaSP",
                table: "SanPhamInHoaDons",
                column: "MaSP",
                principalTable: "SanPhams",
                principalColumn: "MaSP",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChiTietSanPhams_NhaSanXuats_MaNSX",
                table: "ChiTietSanPhams");

            migrationBuilder.DropForeignKey(
                name: "FK_ChiTietSanPhams_NhomSanPhams_ManhomSP",
                table: "ChiTietSanPhams");

            migrationBuilder.DropForeignKey(
                name: "FK_SanPhamInHoaDons_SanPhams_MaSP",
                table: "SanPhamInHoaDons");

            migrationBuilder.DropForeignKey(
                name: "FK_SanPhamInHoaDons_HoaDons_MaHD",
                table: "SanPhamInHoaDons");

            migrationBuilder.DropTable(
                name: "Accounts");

            migrationBuilder.DropTable(
                name: "GiaoDiches");

            migrationBuilder.DropTable(
                name: "HinhAnhs");

            migrationBuilder.DropTable(
                name: "Roles");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "NhaSanXuats");

            migrationBuilder.DropTable(
                name: "NhomSanPhams");

            migrationBuilder.DropTable(
                name: "ChiTietSanPhams");

            migrationBuilder.DropTable(
                name: "SanPhams");

            migrationBuilder.DropTable(
                name: "HoaDons");

            migrationBuilder.DropTable(
                name: "SanPhamInHoaDons");
        }
    }
}
