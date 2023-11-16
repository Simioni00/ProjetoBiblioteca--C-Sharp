/* 
using System.Linq;
*/
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Projeto.Data;
using Projeto.Models;


namespace Projeto.Controllers
{
    [ApiController]
    [Route("api/livro")]
    public class LivroController : ControllerBase
    {
        private readonly AppDataContext _context;

        public LivroController(AppDataContext context)
        {
            _context = context;
        }

        // GET: api/livro
        [HttpGet]
        public IActionResult Get()
        {
            var livros = _context.Livros.ToList();
            return Ok(livros);
        }

        // GET: api/livro/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var livro = _context.Livros.FirstOrDefault(m => m.LivroId == id);
            if (livro == null)
            {
                return NotFound();
            }

            return Ok(livro);
        }

        // POST: api/livro
        [HttpPost]
        public IActionResult Post([FromBody] Livro livro)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Livros.Add(livro);
            _context.SaveChanges();

            return CreatedAtAction(nameof(Get), new { id = livro.LivroId }, livro);
        }

        // PUT: api/livro/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Livro livro)
        {
            if (id != livro.LivroId)
            {
                return BadRequest();
            }

            _context.Entry(livro).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        // DELETE: api/livro/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var livro = _context.Livros.Find(id);
            if (livro == null)
            {
                return NotFound();
            }

            _context.Livros.Remove(livro);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
