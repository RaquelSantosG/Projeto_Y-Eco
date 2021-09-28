CREATE TABLE `Usuario` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`nome_completo` varchar(100) NOT NULL,
	`usuario` varchar(100) NOT NULL,
	`senha` varchar(100) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Produto` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL,
	`valor` DECIMAL NOT NULL,
	`quantidade` bigint NOT NULL,
	`descricao` varchar(255) NOT NULL,
	`categoria_id` bigint(255) NOT NULL,
	`usuario_id` bigint(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Categoria` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL,
	`tipo` varchar(255) NOT NULL,
	`setor` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `Produto` ADD CONSTRAINT `Produto_fk0` FOREIGN KEY (`categoria_id`) REFERENCES `Categoria`(`id`);

ALTER TABLE `Produto` ADD CONSTRAINT `Produto_fk1` FOREIGN KEY (`usuario_id`) REFERENCES `Usuario`(`id`);




