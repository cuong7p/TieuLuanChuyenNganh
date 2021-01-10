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
    public class GiaoDichesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public GiaoDichesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/GiaoDiches
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GiaoDich>>> GetGiaoDiches()
        {
            return await _context.GiaoDiches.ToListAsync();
        }

        // GET: api/GiaoDiches/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GiaoDich>> GetGiaoDich(int id)
        {
            var giaoDich = await _context.GiaoDiches.FindAsync(id);

            if (giaoDich == null)
            {
                return NotFound();
            }

            return giaoDich;
        }

        // PUT: api/GiaoDiches/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGiaoDich(int id, GiaoDich giaoDich)
        {
            if (id != giaoDich.MaGD)
            {
                return BadRequest();
            }

            _context.Entry(giaoDich).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GiaoDichExists(id))
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

        [HttpGet]
        [Route("hoadon/{id}")]
        public async Task<ActionResult<IEnumerable<GiaoDich>>> GetSanPhamInHoaDon(int id)
        {
            var hoadon = await _context.GiaoDiches.Include(i => i.hoaDon).Where(a => a.UserID == id && a.hoaDon.MGD == a.MaGD).ToListAsync();
            return hoadon;
        }

        // POST: api/GiaoDiches
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<GiaoDich>> PostGiaoDich(GiaoDich giaoDich)
        {
            _context.GiaoDiches.Add(giaoDich);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGiaoDich", new { id = giaoDich.MaGD }, giaoDich);
        }

        // DELETE: api/GiaoDiches/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<GiaoDich>> DeleteGiaoDich(int id)
        {
            var giaoDich = await _context.GiaoDiches.FindAsync(id);
            if (giaoDich == null)
            {
                return NotFound();
            }

            _context.GiaoDiches.Remove(giaoDich);
            await _context.SaveChangesAsync();

            return giaoDich;
        }

        private bool GiaoDichExists(int id)
        {
            return _context.GiaoDiches.Any(e => e.MaGD == id);
        }
    }
}
