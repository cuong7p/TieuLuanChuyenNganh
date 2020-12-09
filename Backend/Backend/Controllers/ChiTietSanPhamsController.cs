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
    public class ChiTietSanPhamsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ChiTietSanPhamsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ChiTietSanPhams
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ChiTietSanPham>>> GetChiTietSanPhams()
        {
            return await _context.ChiTietSanPhams.ToListAsync();
        }

        // GET: api/ChiTietSanPhams/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ChiTietSanPham>> GetChiTietSanPham(int id)
        {
            var chiTietSanPham = await _context.ChiTietSanPhams.FindAsync(id);

            if (chiTietSanPham == null)
            {
                return NotFound();
            }

            return chiTietSanPham;
        }

        // PUT: api/ChiTietSanPhams/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutChiTietSanPham(int id, ChiTietSanPham chiTietSanPham)
        {
            if (id != chiTietSanPham.MaCTSP)
            {
                return BadRequest();
            }

            _context.Entry(chiTietSanPham).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ChiTietSanPhamExists(id))
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

        // POST: api/ChiTietSanPhams
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<ChiTietSanPham>> PostChiTietSanPham(ChiTietSanPham chiTietSanPham)
        {
            _context.ChiTietSanPhams.Add(chiTietSanPham);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetChiTietSanPham", new { id = chiTietSanPham.MaCTSP }, chiTietSanPham);
        }

        // DELETE: api/ChiTietSanPhams/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ChiTietSanPham>> DeleteChiTietSanPham(int id)
        {
            var chiTietSanPham = await _context.ChiTietSanPhams.FindAsync(id);
            if (chiTietSanPham == null)
            {
                return NotFound();
            }

            _context.ChiTietSanPhams.Remove(chiTietSanPham);
            await _context.SaveChangesAsync();

            return chiTietSanPham;
        }

        private bool ChiTietSanPhamExists(int id)
        {
            return _context.ChiTietSanPhams.Any(e => e.MaCTSP == id);
        }
    }
}
