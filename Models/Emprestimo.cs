using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Projeto.Models
{
    public class Emprestimo
    {
        public int EmprestimoId { get; set; }

        [ForeignKey("Cliente")]
        public int ClienteId { get; set; }
        public Cliente? Cliente { get; set; }

        [ForeignKey("Livro")]
        public int LivroId { get; set; }
        public Livro? Livro { get; set; }

        [Required]
        public DateTime DataEmprestimo { get; set; }

        public DateTime? DataDevolucao { get; set; }

        public decimal Multa { get; set; }
    }
}
