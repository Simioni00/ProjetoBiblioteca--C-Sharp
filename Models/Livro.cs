namespace Projeto.Models;

public class Livro
{

        public int LivroId { get; set; }
        public string? Autor { get; set; }
        public string? Genero { get; set; }
        public string? Titulo  { get; set; }
        public string? Descricao { get; set; }
        public int Estoque { get; set; }

}
