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
	* Lista com as categorias disponíveis OK
	* Postagens ordenadas pela pontuação (default) OK
		- Se for passada uma categoria, filtra os resultados OK
	* Controle para alterar forma de ordenação entre pontuação e data OK
	* Controle para adicionar novas postagens
	* Ações OK
		- GET _categories OK
		- GET _posts OK

## Postagem
	* Navegação para a tela do post OK
	* Mostra dados do autor OK
		- Username OK
	* Mostra dados do post OK
		- Número de comentários OK
		- Título OK
		- Texto OK
		- Data legível OK
	* Controles para votar OK
	* Editar/Remover
	* Form para comentários
	* Ações
		- GET _comments from _posts
		- GET _post from _posts OK
			- GET _score from _post OK
			- SET _score in _post OK
			- GET _comments from _post OK
			- REM _post from posts
		- GET _authedUser
			- SET _canEdit from _author _from post

## Comentário
	* Mostra dados do autor OK
		- Username OK
	* Mostra dados do post OK
		- Texto OK
		- Data legível OK
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
	* Mostra pontuação OK
	* Ações OK
		- GET _score from _post OK
		- SET _score in _post OK

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
	* Ordenação de posts tá estranha
	* Largura dos posts !== novo post
