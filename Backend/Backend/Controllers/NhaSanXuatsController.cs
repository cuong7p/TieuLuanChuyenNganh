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
    public class NhaSanXuatsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public NhaSanXuatsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/NhaSanXuats
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NhaSanXuat>>> GetNhaSanXuats()
        {
            return await _context.NhaSanXuats.ToListAsync();
        }

        // GET: api/NhaSanXuats/5
        [HttpGet("{id}")]
        public async Task<ActionResult<NhaSanXuat>> GetNhaSanXuat(int id)
        {
            var nhaSanXuat = await _context.NhaSanXuats.FindAsync(id);

            if (nhaSanXuat == null)
            {
                return NotFound();
            }

            return nhaSanXuat;
        }

        // PUT: api/NhaSanXuats/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNhaSanXuat(int id, NhaSanXuat nhaSanXuat)
        {
            if (id != nhaSanXuat.MaNSX)
            {
                return BadRequest();
            }

            _context.Entry(nhaSanXuat).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NhaSanXuatExists(id))
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

        // POST: api/NhaSanXuats
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<NhaSanXuat>> PostNhaSanXuat(NhaSanXuat nhaSanXuat)
        {
            _context.NhaSanXuats.Add(nhaSanXuat);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNhaSanXuat", new { id = nhaSanXuat.MaNSX }, nhaSanXuat);
        }

        // DELETE: api/NhaSanXuats/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<NhaSanXuat>> DeleteNhaSanXuat(int id)
        {
            var nhaSanXuat = await _context.NhaSanXuats.FindAsync(id);
            if (nhaSanXuat == null)
            {
                return NotFound();
            }

            _context.NhaSanXuats.Remove(nhaSanXuat);
            await _context.SaveChangesAsync();

            return nhaSanXuat;
        }

        private bool NhaSanXuatExists(int id)
        {
            return _context.NhaSanXuats.Any(e => e.MaNSX == id);
        }
    }
}
