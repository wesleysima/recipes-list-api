# Recipes List API

API para buscar receitas a partir de ingredientes passados por parametro.

## Dependências
Este projeto foi construído com as seguintes dependências:

- [NodeJs](https://nodejs.org/en/download/) 10.0.0 Ou [Docker](https://www.docker.com/products/docker-desktop)
- [Express](https://www.npmjs.com/package/express) 4.17.1
- [axios](https://www.npmjs.com/package/axios) 0.21.0
- [pm2](https://www.npmjs.com/package/pm2) 4.5.0

## Primeiros passos

A API pode ser iniciada, tanto com o node rodando localmente quanto com o docker.

Para iniciar com o docker na pasta raiz do projeto, execute o comando abaixo:

```shell
    docker-compose build
```

Após a finalização do build, deve ser iniciado o container, execute o comando abaixo:

```shell
    docker-compose up
```

O comando acima, irá exacutar o container com os logs do mesmo no terminal.

Caso não queira ver os logs, execute:

```shell
    docker-compose up -d
```

Caso queira rodar o projeto localmente, execute os seguintes comandos:

```shell
    npm install
```

Após a instalação das dependências com o comando acima, inicie a API com o seguinte comando:

```shell
    npm start
```

## Configuração do Projeto

Existe um arquivo de configuração na raiz do projeto **env-variables.env**, nele contém algumas variáveis de ambiente, abaixo se encontram as variáveis existentes atualmente:

- `RECIPE_PUPPY_API_URL`: URL da API do recipe puppy.
- `GIPHY_API_URL`: URL da API do Giphy.
- `GIPHY_API_KEY`: Chave de acesso para acessar API do GIPHY.

## Documentação da API

Atualmente a API possui apennas um endpoint

**GET http://{HOST}/recipes/?i={ingredient_1},{ingredient_2},{ingredient_3}** Endpoint que reporta a lista de receitas a partir dos ingredientes passados por parametro.

> O parâmetro `i` deve conter de 1 a 3 ingredientes.

**Exemplo:**

```
http://localhost:3000/recipes/?i=onions,garlic
```
Aqui tem um exemplo de retorno do request.

```json
{
	"keywords": ["onion", "tomato"],
	"recipes": [{
		"title": "Greek Omelet with Feta",
		"ingredients": ["eggs", "feta cheese", "garlic", "red onions", "spinach", "tomato", "water"],
		"link": "http://www.kraftfoods.com/kf/recipes/greek-omelet-feta-104508.aspx",
		"gif": "https://media.giphy.com/media/xBRhcST67lI2c/giphy.gif"
	   },{
		"title": "Guacamole Dip Recipe",
		"ingredients": ["avocado", "onions", "tomato"],
		"link":"http://cookeatshare.com/recipes/guacamole-dip-2783",
		"gif":"https://media.giphy.com/media/I3eVhMpz8hns4/giphy.gif"
	   }
	]
}
```