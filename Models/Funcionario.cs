namespace Projeto.Models
{
    public class Funcionario
    {   
        public int FuncionarioId { get; set; }
        public string? Nome { get; set; } 
        public string? CPF { get; set; } 
        public string? Endereco { get; set; } 
        public string? Senha { get; set; } 
        public string? Telefone { get; set; } 
        public string? EMAIL { get; set; } 
        public bool Ativo { get; set; }

    }
}