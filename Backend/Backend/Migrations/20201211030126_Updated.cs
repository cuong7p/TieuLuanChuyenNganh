using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class Updated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accounts", x => x.AccountID);
                    table.ForeignKey(
                        name: "FK_Accounts_Users_UserID",
                        column: x => x.UserID,
                        principalTable: "Users",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Cascade);
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
                        name: "FK_HoaDons_GiaoDiches_MGD",
                        column: x => x.MGD,
                        principalTable: "GiaoDiches",
                        principalColumn: "MaGD",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SanPhams",
                columns: table => new
                {
                    MaSP = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenSP = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Mota = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TenNSX = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TennhomSP = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DonGia = table.Column<double>(type: "float", nullable: false),
                    SoLuong = table.Column<int>(type: "int", nullable: false),
                    TinhTrang = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HinhID = table.Column<int>(type: "int", nullable: false),
                    SanPhamInHoaDonMaSP = table.Column<int>(type: "int", nullable: true),
                    SanPhamInHoaDonMaHD = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SanPhams", x => x.MaSP);
                    table.ForeignKey(
                        name: "FK_SanPhams_HinhAnhs_HinhID",
                        column: x => x.HinhID,
                        principalTable: "HinhAnhs",
                        principalColumn: "HinhID",
                        onDelete: ReferentialAction.Cascade);
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
                    table.ForeignKey(
                        name: "FK_SanPhamInHoaDons_HoaDons_MaHD",
                        column: x => x.MaHD,
                        principalTable: "HoaDons",
                        principalColumn: "MaHD",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SanPhamInHoaDons_SanPhams_MaSP",
                        column: x => x.MaSP,
                        principalTable: "SanPhams",
                        principalColumn: "MaSP",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Accounts_UserID",
                table: "Accounts",
                column: "UserID",
                unique: true);

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
                name: "IX_HoaDons_MGD",
                table: "HoaDons",
                column: "MGD",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_HoaDons_SanPhamInHoaDonMaSP_SanPhamInHoaDonMaHD",
                table: "HoaDons",
                columns: new[] { "SanPhamInHoaDonMaSP", "SanPhamInHoaDonMaHD" });

            migrationBuilder.CreateIndex(
                name: "IX_SanPhamInHoaDons_MaHD",
                table: "SanPhamInHoaDons",
                column: "MaHD");

            migrationBuilder.CreateIndex(
                name: "IX_SanPhams_HinhID",
                table: "SanPhams",
                column: "HinhID",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_SanPhams_SanPhamInHoaDonMaSP_SanPhamInHoaDonMaHD",
                table: "SanPhams",
                columns: new[] { "SanPhamInHoaDonMaSP", "SanPhamInHoaDonMaHD" });

            migrationBuilder.AddForeignKey(
                name: "FK_HoaDons_SanPhamInHoaDons_SanPhamInHoaDonMaSP_SanPhamInHoaDonMaHD",
                table: "HoaDons",
                columns: new[] { "SanPhamInHoaDonMaSP", "SanPhamInHoaDonMaHD" },
                principalTable: "SanPhamInHoaDons",
                principalColumns: new[] { "MaSP", "MaHD" },
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_SanPhams_SanPhamInHoaDons_SanPhamInHoaDonMaSP_SanPhamInHoaDonMaHD",
                table: "SanPhams",
                columns: new[] { "SanPhamInHoaDonMaSP", "SanPhamInHoaDonMaHD" },
                principalTable: "SanPhamInHoaDons",
                principalColumns: new[] { "MaSP", "MaHD" },
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GiaoDiches_Users_UserID",
                table: "GiaoDiches");

            migrationBuilder.DropForeignKey(
                name: "FK_GiaoDiches_Users_UserID1",
                table: "GiaoDiches");

            migrationBuilder.DropForeignKey(
                name: "FK_HoaDons_GiaoDiches_MGD",
                table: "HoaDons");

            migrationBuilder.DropForeignKey(
                name: "FK_HoaDons_SanPhamInHoaDons_SanPhamInHoaDonMaSP_SanPhamInHoaDonMaHD",
                table: "HoaDons");

            migrationBuilder.DropForeignKey(
                name: "FK_SanPhams_SanPhamInHoaDons_SanPhamInHoaDonMaSP_SanPhamInHoaDonMaHD",
                table: "SanPhams");

            migrationBuilder.DropTable(
                name: "Accounts");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "GiaoDiches");

            migrationBuilder.DropTable(
                name: "SanPhamInHoaDons");

            migrationBuilder.DropTable(
                name: "HoaDons");

            migrationBuilder.DropTable(
                name: "SanPhams");

            migrationBuilder.DropTable(
                name: "HinhAnhs");
        }
    }
}
