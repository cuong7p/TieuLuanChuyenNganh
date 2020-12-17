using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class update_second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SanPhams_HinhAnhs_HinhID",
                table: "SanPhams");

            migrationBuilder.DropIndex(
                name: "IX_SanPhams_HinhID",
                table: "SanPhams");

            migrationBuilder.DropColumn(
                name: "HinhID",
                table: "SanPhams");

            migrationBuilder.AddColumn<byte[]>(
                name: "urlHinh",
                table: "SanPhams",
                type: "varbinary(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "sanPhamMaSP",
                table: "HinhAnhs",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_HinhAnhs_sanPhamMaSP",
                table: "HinhAnhs",
                column: "sanPhamMaSP");

            migrationBuilder.AddForeignKey(
                name: "FK_HinhAnhs_SanPhams_sanPhamMaSP",
                table: "HinhAnhs",
                column: "sanPhamMaSP",
                principalTable: "SanPhams",
                principalColumn: "MaSP",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HinhAnhs_SanPhams_sanPhamMaSP",
                table: "HinhAnhs");

            migrationBuilder.DropIndex(
                name: "IX_HinhAnhs_sanPhamMaSP",
                table: "HinhAnhs");

            migrationBuilder.DropColumn(
                name: "urlHinh",
                table: "SanPhams");

            migrationBuilder.DropColumn(
                name: "sanPhamMaSP",
                table: "HinhAnhs");

            migrationBuilder.AddColumn<int>(
                name: "HinhID",
                table: "SanPhams",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_SanPhams_HinhID",
                table: "SanPhams",
                column: "HinhID",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_SanPhams_HinhAnhs_HinhID",
                table: "SanPhams",
                column: "HinhID",
                principalTable: "HinhAnhs",
                principalColumn: "HinhID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
