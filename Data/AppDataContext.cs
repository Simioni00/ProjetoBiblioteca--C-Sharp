using Microsoft.EntityFrameworkCore;
using Projeto.Models;

namespace Projeto.Data;

public class AppDataContext : DbContext
{

    public AppDataContext(DbContextOptions<AppDataContext> options) : base(options)
    {

    }

    public DbSet<Cliente>? Clientes {get; set;}

    public DbSet<Funcionario>? Funcionarios {get; set;}

    public DbSet<Livro>? Livros {get; set;}

    public DbSet<Emprestimo>? Emprestimos {get; set;}
}
