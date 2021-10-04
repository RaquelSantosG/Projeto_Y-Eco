package br.org.generation.YEco.controller;

import br.org.generation.YEco.model.Categoria;
import br.org.generation.YEco.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categoria")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CategoriaController {

    @Autowired
    private CategoriaRepository repository;

    @GetMapping("/{id}")
    public ResponseEntity<Categoria> findById(@PathVariable long id) {
        return repository.findById(id)
                .map(x -> ResponseEntity.ok(x))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<Categoria>> findAll() {
        return ResponseEntity.ok(repository.findAll());
    }

    @GetMapping("/nome/{nome}")
    public ResponseEntity<List<Categoria>> findByNome(@PathVariable String nome) {
        return ResponseEntity.ok(repository.findAllByNomeContainingIgnoreCase(nome));
    }

    @GetMapping("/tipo/{tipo}")
    public ResponseEntity<List<Categoria>> findByTipo(@PathVariable String tipo) {
        return ResponseEntity.ok(repository.findAllByTipoContainingIgnoreCase(tipo));
    }

    @GetMapping("/setor/{setor}")
    public ResponseEntity<List<Categoria>> findBySetor(@PathVariable String setor) {
        return ResponseEntity.ok(repository.findAllBySetorContainingIgnoreCase(setor));
    }

    @PostMapping
    public ResponseEntity<Categoria> postCategoria(@RequestBody Categoria categoria){
        return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(categoria));
    }

    @PutMapping
    public ResponseEntity<Categoria> updateCategoria(@RequestBody Categoria categoria){
        return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(categoria));
    }

    @DeleteMapping("{id}")
    public void deleteCategoria(@PathVariable long id){
        repository.deleteById(id);
    }
}

