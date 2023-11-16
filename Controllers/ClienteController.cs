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
    [Route("api/cliente")]
    public class ClienteController : ControllerBase
    {
        private readonly AppDataContext _context;

        public ClienteController(AppDataContext context)
        {
            _context = context;
        }

        // GET: api/cliente
        [HttpGet]
        public IActionResult Get()
        {
            var clientes = _context.Clientes.Where(c => c.Ativo).ToList();
            return Ok(clientes);
        }

        // GET: api/cliente/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var cliente = _context.Clientes.FirstOrDefault(m => m.ClienteId == id);
            if (cliente == null || !cliente.Ativo)
            {
                return NotFound();
            }

            return Ok(cliente);
        }

        // POST: api/cliente
        [HttpPost]
        public IActionResult Post([FromBody] Cliente cliente)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Clientes.Add(cliente);
            _context.SaveChanges();

            return CreatedAtAction(nameof(Get), new { id = cliente.ClienteId }, cliente);
        }

        // PUT: api/cliente/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Cliente cliente)
        {
            if (id != cliente.ClienteId)
            {
                return BadRequest();
            }

            _context.Entry(cliente).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        // DELETE: api/cliente/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var cliente = _context.Clientes.Find(id);
            if (cliente == null)
            {
                return NotFound();
            }

            // Verificar se o cliente tem algum empréstimo ativo
            var temEmprestimoAtivo = _context.Emprestimos.Any(e => e.ClienteId == id && e.DataDevolucao == null);
            if (temEmprestimoAtivo)
            {
                // Não permitir a exclusão e retornar uma mensagem de erro
                return BadRequest("O cliente tem um empréstimo ativo e não pode ser excluído.");
            }

            _context.Clientes.Remove(cliente);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
