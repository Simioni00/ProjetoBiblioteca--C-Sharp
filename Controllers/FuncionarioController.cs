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
    [Route("api/funcionario")]
    public class FuncionarioController : ControllerBase
    {
        private readonly AppDataContext _context;

        public FuncionarioController(AppDataContext context)
        {
            _context = context;
        }

        // GET: api/funcionario
        [HttpGet]
        public IActionResult Get()
        {
            var funcionarios = _context.Funcionarios.Where(f => f.Ativo).ToList();
            return Ok(funcionarios);
        }

        // GET: api/funcionario/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var funcionario = _context.Funcionarios.FirstOrDefault(m => m.FuncionarioId == id);
            if (funcionario == null || !funcionario.Ativo)
            {
                return NotFound();
            }

            return Ok(funcionario);
        }

        // POST: api/funcionario
        [HttpPost]
        public IActionResult Post([FromBody] Funcionario funcionario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Funcionarios.Add(funcionario);
            _context.SaveChanges();

            return CreatedAtAction(nameof(Get), new { id = funcionario.FuncionarioId }, funcionario);
        }

        // PUT: api/funcionario/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Funcionario funcionario)
        {
            if (id != funcionario.FuncionarioId)
            {
                return BadRequest();
            }

            _context.Entry(funcionario).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        // DELETE: api/funcionario/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var funcionario = _context.Funcionarios.Find(id);
            if (funcionario == null)
            {
                return NotFound();
            }

            _context.Funcionarios.Remove(funcionario);
            _context.SaveChanges();

            return NoContent();
        }
    }
}

