# Views

## Dashboard
	* Rota '/'
	* Renderiza um Nav e um ChirpList

## Chirp
	* Rota '/chirp/{chirpID}'
	* Renderiza um Nav e um ChirpContainer
	* Submit atualiza o componente

## New Chirp
	* Rota '/new'
	* Renderiza um Nav e um NewChirp
	* Submit linka no Dashboard

--------------------------------------------------

# Componentes

## App
	* Container geral para o projeto

## Nav
	* Navegação para as telas
		- Dashboard
		- NewChirp

## ChirpList
	* Renderiza uma lista de Chirps
	* Ações
		- GET _chirps

## ChirpComponent
	* Renderiza um Chirp, um NewChirp e um Chirplist com as replies
	* Ações
		- GET _chirp
		- GET _replies from _chirp
		- GET _authUser
			- SET _replies from _chirp

## Chirp
	* Navegação para a tela Chirp
	* Mostra os dados do usuário
		- Avatar
		- Nome
	* Mostra os dados do Chirp
		- Timestamp
		- Reply para qual usuário
		- Texto do Chirp
		- Botão reply
			- Mostra o número de replies se > 0
		- Botão like
			- Mostra o número de likes se > 0
	* Ações
		- GET _chirp from _chirplist
		- GET _authUser
			- SET _likes from _chirp
			- SET _replies from  _chirp

## NewChirp
	* Mostra  um form para adicionar um Chirp
		- Texto como TextArea
		- Botão submit atualiza o estado
	* Ações
		- GET _authUser
			- SET _chirps

--------------------------------------------------

# Store

## Chirps
	* chirpId: str
	* author: userId
	* timestamp: str
	* replyingTo: userId
	* text: str
	* likes: [userId]
	* replies: [chirpId]

## Users
	* userId: str
	* avatar: URL
	* name: str
	* chirps: [chirpId]

## authedUser
	* str
