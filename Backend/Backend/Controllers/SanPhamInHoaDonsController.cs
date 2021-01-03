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
    public class SanPhamInHoaDonsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SanPhamInHoaDonsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/SanPhamInHoaDons
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SanPhamInHoaDon>>> GetSanPhamInHoaDons()
        {
            return await _context.SanPhamInHoaDons.ToListAsync();
        }

        /*// GET: api/SanPhamInHoaDons/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SanPhamInHoaDon>> GetSanPhamInHoaDon(int id)
        {
            var sanPhamInHoaDon = await _context.SanPhamInHoaDons.FindAsync(id);

            if (sanPhamInHoaDon == null)
            {
                return NotFound();
            }

            return sanPhamInHoaDon;
        }*/

        [HttpGet]
        [Route("SanphamInHoadon/{id}")]
        public async Task<ActionResult<IEnumerable<SanPhamInHoaDon>>> GetSanPhamInHoaDon(int id)
        {
            var hoadon = await _context.SanPhamInHoaDons.Include(i => i.SanPham).Where(a => a.MaHD == id).Where(a => a.MaSP == a.SanPham.MaSP).ToListAsync();
            return hoadon;
        }

        // PUT: api/SanPhamInHoaDons/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSanPhamInHoaDon(int id, SanPhamInHoaDon sanPhamInHoaDon)
        {
            if (id != sanPhamInHoaDon.MaSP)
            {
                return BadRequest();
            }

            _context.Entry(sanPhamInHoaDon).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SanPhamInHoaDonExists(id))
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

        // POST: api/SanPhamInHoaDons
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<SanPhamInHoaDon>> PostSanPhamInHoaDon(SanPhamInHoaDon sanPhamInHoaDon)
        {
            _context.SanPhamInHoaDons.Add(sanPhamInHoaDon);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (SanPhamInHoaDonExists(sanPhamInHoaDon.MaSP))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetSanPhamInHoaDon", new { id = sanPhamInHoaDon.MaSP }, sanPhamInHoaDon);
        }

        // DELETE: api/SanPhamInHoaDons/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SanPhamInHoaDon>> DeleteSanPhamInHoaDon(int id)
        {
            var sanPhamInHoaDon = await _context.SanPhamInHoaDons.FindAsync(id);
            if (sanPhamInHoaDon == null)
            {
                return NotFound();
            }

            _context.SanPhamInHoaDons.Remove(sanPhamInHoaDon);
            await _context.SaveChangesAsync();

            return sanPhamInHoaDon;
        }

        private bool SanPhamInHoaDonExists(int id)
        {
            return _context.SanPhamInHoaDons.Any(e => e.MaSP == id);
        }


    }
}
