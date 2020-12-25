using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class update_seven : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ChiTietGD",
                table: "GiaoDiches");

            migrationBuilder.DropColumn(
                name: "TinhTrang",
                table: "GiaoDiches");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ChiTietGD",
                table: "GiaoDiches",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TinhTrang",
                table: "GiaoDiches",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
