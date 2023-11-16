using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Projeto.Data;
using Projeto.Models;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto.Controllers
{
    [ApiController]
    [Route("api/emprestimo")]
    public class EmprestimoController : ControllerBase
    {
        private readonly AppDataContext _context;

        public EmprestimoController(AppDataContext context)
        {
            _context = context;
        }

        // GET: api/emprestimo
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var emprestimos = _context.Emprestimos.Include(e => e.Cliente).Include(e => e.Livro);
            return Ok(await emprestimos.ToListAsync());
        }

        // GET: api/emprestimo/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var emprestimo = await _context.Emprestimos
                .Include(e => e.Cliente)
                .Include(e => e.Livro)
                .FirstOrDefaultAsync(m => m.EmprestimoId == id);
            if (emprestimo == null)
            {
                return NotFound();
            }

            return Ok(emprestimo);
        }

        // POST: api/emprestimo
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Emprestimo emprestimo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Emprestimos.Add(emprestimo);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(Get), new { id = emprestimo.EmprestimoId }, emprestimo);
        }

        // PUT: api/emprestimo/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Emprestimo emprestimo)
        {
            if (id != emprestimo.EmprestimoId)
            {
                return BadRequest();
            }

            _context.Entry(emprestimo).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/emprestimo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var emprestimo = await _context.Emprestimos.FindAsync(id);
            if (emprestimo == null)
            {
                return NotFound();
            }

            _context.Emprestimos.Remove(emprestimo);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}

