package br.org.generation.YEco.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.org.generation.YEco.model.Categoria;

import java.util.List;

public interface CategoriaRepository extends JpaRepository<Categoria, Long>{
    public List<Categoria> findAllByNomeContainingIgnoreCase (String nome);
    public List<Categoria> findAllByTipoContainingIgnoreCase (String tipo);
    public List<Categoria> findAllBySetorContainingIgnoreCase (String setor);

}
