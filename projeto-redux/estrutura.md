# O que é o projeto

Um agregador de conteúdo, semelhante ao reddit ou hackernews, em que é possível postar conteúdo, comentar e votar positiva/negativamente para classificar postagens e comentários

# Views

## Home
	* Rota -> /
	* Renderiza Dashboard

## Categoria
	* Rota -> /:categoria
	* Renderiza o Dashboard filtrado pela categoria

## Post
	* Rota -> /view/:postId
	* Renderiza
		- Componente Post
		- Lista de comentários
		- Novo comentário

## Criar/Editar postagem
	* Rota -> /p/{:postId}?
	* Renderiza form de nova postagem
		- SE postId, popular com dados da postagem

--------------------------------------------------

# Componentes

## Dashboard
	* Lista com as categorias disponíveis
	* Postagens ordenadas pela pontuação (default)
		- Se for passada uma categoria, filtra os resultados
	* Controle para alterar forma de ordenação entre pontuação e data
	* Controle para adicionar novas postagens
	* Ações
		- GET _categories
		- GET _posts

## Postagem
	* Navegação para a tela do post
	* Mostra dados do autor
		- Username
	* Mostra dados do post
		- Número de comentários
		- Título
		- Texto
		- Data legível
	* Controles para votar
	* Editar/Remover
	* Form para comentários
	* Ações
		- GET _comments from _posts
		- GET _post from _posts
			- GET _score from _post
			- SET _score in _post
			- GET _comments from _post
			- REM _post from posts
		- GET _authedUser
			- SET _canEdit from _author _from post

## Comentário
	* Mostra dados do autor
		- Username
	* Mostra dados do post
		- Texto
		- Data legível
	* Controles para votar
	* Editar/Remover
	* Ações
		- GET _comment from _comment
			- GET _score from _comment
			- SET _score from _comment
			- REM _comment from comments
		- GET _authedUser
			- SET _canEdit from _author _from comment

## Forms
	* Precisam ter o usuário logado
	* Enviam objetos para o servidor
	* Se receberem um `id`, populam os campos
	* Post
		- Título
		- Texto
		- Categoria
	* Comentário
		- Texto
	* Ações
		- GET _obj from _objList
		- POST _obj in _objList

## Controles de voto
	* Mostra pontuação
	* Ações
		- GET _score from _post
		- SET _score in _post

--------------------------------------------------

# Store

## Posts
	id: String
	timestamp: Integer
	title: String
	body: String
	author: authorId
	category: String
	voteScore: Integer
	deleted: Boolean

## Comments
	id: String
	parentId: String
	timestamp: Integer
	body: String
	author: authorId
	voteScore: Integer
	deleted: Boolean
	parentDeleted: Boolean

## Categorias
	* [strings]

# Pacotes

	* react
	* redux
	* react-redux
	* react-redux-loading
	* react-router-dom
	* prop-types

# Fuxo

	+->-ação->-redutor->-UI-+
	|                       |
	+-----<-------<-------<-+

--------------------------------------------------

# Fixes
	* Click pra upvote não pode abrir o post
	* Estilo do post pra saber o que acessa a página e o que não
