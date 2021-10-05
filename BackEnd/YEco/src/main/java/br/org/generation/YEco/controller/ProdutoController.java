package br.org.generation.YEco.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.org.generation.YEco.model.Produto;
import br.org.generation.YEco.repository.ProdutoRepository;

@RestController
@RequestMapping("/produto")
@CrossOrigin(origins="*",allowedHeaders="*")
public class ProdutoController {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	@GetMapping
	public ResponseEntity <List<Produto>> getAll(){
		
		return ResponseEntity.ok(produtoRepository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Produto> getbyId(@PathVariable long id){
		return produtoRepository.findById(id)
				.map(resposta -> ResponseEntity.ok(resposta))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("nome/{nome}")
	public ResponseEntity<List<Produto>> getByNome(@PathVariable String nome){
		return ResponseEntity.ok(produtoRepository.findAllByNomeContainingIgnoreCase(nome));
	}
	
	@GetMapping("descricao/{descricao}")
	public ResponseEntity<List<Produto>> getByDescricao(@PathVariable String descricao){
		return ResponseEntity.ok(produtoRepository.findAllByDescricaoContainingIgnoreCase(descricao));
	}
	
	@PostMapping
	public ResponseEntity<Produto> postPostagem (@RequestBody Produto produto){
		
		return ResponseEntity.status(HttpStatus.CREATED).body(produtoRepository.save(produto));
		
	}
	
	@PutMapping
	public ResponseEntity<Produto> putProduto (@RequestBody Produto produto){
		
		return ResponseEntity.status(HttpStatus.OK).body(produtoRepository.save(produto));
		
	}
	
	@DeleteMapping("/{id}")
	public void deletePostgram(@PathVariable long id) {
		
		produtoRepository.deleteById(id);
	}

}
