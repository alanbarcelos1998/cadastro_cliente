USE cad_cliente;

CREATE DATABASE cad_cliente;

CREATE TABLE `clientes` (
	id INT (11) auto_increment,
    nome VARCHAR (70) NOT NULL,
    sexo CHAR (1),
    nascimento VARCHAR (11) NOT NULL, 
    cep VARCHAR (8) NOT NULL, 
    telefone VARCHAR (11) NOT NULL, 
    email VARCHAR (50) NOT NULL,
    primary key (id)
);