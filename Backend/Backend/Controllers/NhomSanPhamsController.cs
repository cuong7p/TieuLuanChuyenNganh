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
    public class NhomSanPhamsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public NhomSanPhamsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/NhomSanPhams
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NhomSanPham>>> GetNhomSanPhams()
        {
            return await _context.NhomSanPhams.ToListAsync();
        }

        // GET: api/NhomSanPhams/5
        [HttpGet("{id}")]
        public async Task<ActionResult<NhomSanPham>> GetNhomSanPham(int id)
        {
            var nhomSanPham = await _context.NhomSanPhams.FindAsync(id);

            if (nhomSanPham == null)
            {
                return NotFound();
            }

            return nhomSanPham;
        }

        // PUT: api/NhomSanPhams/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNhomSanPham(int id, NhomSanPham nhomSanPham)
        {
            if (id != nhomSanPham.ManhomSP)
            {
                return BadRequest();
            }

            _context.Entry(nhomSanPham).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NhomSanPhamExists(id))
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

        // POST: api/NhomSanPhams
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<NhomSanPham>> PostNhomSanPham(NhomSanPham nhomSanPham)
        {
            _context.NhomSanPhams.Add(nhomSanPham);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNhomSanPham", new { id = nhomSanPham.ManhomSP }, nhomSanPham);
        }

        // DELETE: api/NhomSanPhams/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<NhomSanPham>> DeleteNhomSanPham(int id)
        {
            var nhomSanPham = await _context.NhomSanPhams.FindAsync(id);
            if (nhomSanPham == null)
            {
                return NotFound();
            }

            _context.NhomSanPhams.Remove(nhomSanPham);
            await _context.SaveChangesAsync();

            return nhomSanPham;
        }

        private bool NhomSanPhamExists(int id)
        {
            return _context.NhomSanPhams.Any(e => e.ManhomSP == id);
        }
    }
}
