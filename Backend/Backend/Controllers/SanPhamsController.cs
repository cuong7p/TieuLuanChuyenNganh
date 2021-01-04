using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Model;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SanPhamsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SanPhamsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/SanPhams
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SanPham>>> GetSanPhams()
        {
            return await _context.SanPhams.ToListAsync();
        }

        // GET: api/SanPhams/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SanPham>> GetSanPham(int id)
        {
            var sanPham = await _context.SanPhams.FindAsync(id);

            if (sanPham == null)
            {
                return NotFound();
            }

            return sanPham;
        }

        [HttpGet]
        [Route("SanphamInHoadon/{id}")]
        public async Task<ActionResult<IEnumerable<SanPham>>> GetSanPhamss(int id)
        {
            var hoadon = await _context.SanPhams.Include(i => i.SanPhamInHoaDon).Where(a => a.MaSP == 10).ToListAsync();
            return hoadon;
        }

        [HttpGet]
        [Route("Phone")]
        public async Task<ActionResult<IEnumerable<SanPham>>> GetSanPhamPhone()
        {
            var sanpham = await _context.SanPhams.Where(i => i.TennhomSP == "PHONE").ToListAsync();
            return sanpham;
        }

        [HttpGet]
        [Route("Audio")]
        public async Task<ActionResult<IEnumerable<SanPham>>> GetSanPhamAudio()
        {
            var sanpham = await _context.SanPhams.Where(i => i.TennhomSP == "Audio").ToListAsync();
            return sanpham;
        }

        [HttpGet]
        [Route("APPLIANCE")]
        public async Task<ActionResult<IEnumerable<SanPham>>> GetSanPhamAPPLIANCE()
        {
            var sanpham = await _context.SanPhams.Where(i => i.TennhomSP == "APPLIANCE").ToListAsync();
            return sanpham;
        }

        [HttpGet]
        [Route("Search/{name}")]
        public async Task<ActionResult<IEnumerable<SanPham>>> GetSanPhamName(string name)
        {
            var sanpham = await _context.SanPhams.Where(i => i.TenSP.ToLower().Contains(name.ToLower()) || i.TenNSX.ToLower().Contains(name.ToLower()) || i.TennhomSP.ToLower().Contains(name.ToLower())).ToListAsync();
            if(sanpham == null)
            {
                return NotFound();
            }
            return sanpham;
        }

        // PUT: api/SanPhams/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSanPham(int id, SanPham sanPham)
        {
            if (id != sanPham.MaSP)
            {
                return BadRequest();
            }

            _context.Entry(sanPham).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SanPhamExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/SanPhams
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<SanPham>> PostSanPham(SanPham sanPham)
        {
            _context.SanPhams.Add(sanPham);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSanPham", new { id = sanPham.MaSP }, sanPham);
        }

        // DELETE: api/SanPhams/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SanPham>> DeleteSanPham(int id)
        {
            var sanPham = await _context.SanPhams.FindAsync(id);
            if (sanPham == null)
            {
                return NotFound();
            }

            _context.SanPhams.Remove(sanPham);
            await _context.SaveChangesAsync();

            return sanPham;
        }

        private bool SanPhamExists(int id)
        {
            return _context.SanPhams.Any(e => e.MaSP == id);
        }
    }
}
