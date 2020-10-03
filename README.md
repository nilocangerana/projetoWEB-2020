Nome: Nilo Conrado Messias Alves Cangerana    Número USP: 9805362

# Projeto de SCC0209 - Introdução ao Desenvolvimento Web - E-commerce Website

### Link para o mockup com as telas:
[Figma Mockup](https://www.figma.com/file/8nXv0L7PmW7SEVV4ejNahK/Untitled?node-id=0%3A1)

### 1. Requisitos: 
Todos os requisitos pedidos no enunciado do milestone 1 foram implementados.\
A loja pode vender produtos por quantidade e serviços por tempo(duração do serviço).\
Usuários administradores servem apenas para gerenciar o sistema com criação de novos usuários ou produtos/serviços e atualização/exclusão dos mesmos.\
Usuários clientes podem visitar as páginas de produtos e serviços, adicionar eles ao carrinho e finalizar a compra.
Usuário administradores podem visitar apenas as páginas de administração, indicadas pelos arquivos(...Adm.html). Usuários clientes podem visitar as demais páginas.

### 2. Descrição do Projeto:
Todas as telas e a navegação entre elas está representada no link Figma Mockup acima.\
A página Home(home.html) é a primeira página do site. Essa página contém o botão Explorar, que leva o usuário para a página de produtos que são vendidos.\
Em todas as páginas de usuários clientes existe um menu principal com links para Home, Produtos e Serviços, facilitando a navegação pelo site.\
Os usuários clientes podem visitar as páginas com a listagem dos produtos vendidos (paginaProdutos.html) e ela contém todos os produtos registrados no site com foto, nome, quantidade em estoque e preço. Essa página também contém a funcionalidade específica de trocar a foto de cada produto clicando nas setas direta e esquerda do respectivo produto, sendo possível visualizar diversas fotos do mesmo produto. O botão comprar em cada produto faz com que o mesmo seja direcionado a uma página com o produto escolhido(produto.html) contendo foto, ID do produto, nome, descrição, preço, quantidade em estoque e um campo para preencher quantidade que deseja comprar. Ao clicar no botão Adicionar ao Carrinho, o produto é adicionado ao carrinho.\
Os usuários clientes podem visitar as páginas com a listagem dos serviços vendidos (paginaServicos.html) e ela contém todos os serviços registrados no site com foto, nome, tempo e preço. O botão comprar em cada serviço faz com que o mesmo seja direcionado a uma página com o serviço escolhido(servico.html) contendo foto, ID do serviço, nome, descrição, preço, tempo e um campo para preencher dia e hora para executar o serviço. Ao clicar no botão Adicionar ao Carrinho, o serviço é adicionado ao carrinho.\
Usuários podem clicar no botão Login no topo a direita da tela para entrar no site através de um usuário e uma senha(login.html). Durante o login, o sistema deve identificar o tipo de usuário que está entrando. Se for Administrador, o sistema leva para a página de Administradores(paginaAdm.html) e se for Cliente, leva para a página de produtos(paginaProdutos.html).\
Usuário clientes que estão logados no sistema podem checar seu carrinho(carrinho.html) clicando no botão Carrinho no topo a direita da tela. O Carrinho é dividido em duas áreas onde são colocados os produtos e serviços com seus respectivos ID, preço, nome e quantidade ou dia/hora escolhidos. Os produtos podem ser retirados do carrinho clicando no botão da Lixeira. No final da página carrinho é mostrado o valor total da compra, o ID da compra, nome do cliente e um campo para colocar o número do cartão de crédito. Para finalizar a compra o cliente deve preencher o campo do cartão e clicar no botão Finalizar Compra.\
Usuários clientes que estão logados no sistema também podem editar suas informações através do botão Editar Informações no topo a direita da tela. Ao clicar nele, o usuário é direcionado a uma página(editInfo.html) com campos para alterar suas informações de nome, endereço, telefone e email.
Os usuários podem fazer o logout do sistema clicando no botão Logout no topo a direita da tela.

### 3. Comments About the Code: Any comment you may want to add to help understand
your code. This is good programming practice.

### 4. Test Plan: Text describing the tests that will be performed. If an automatic test
tool/framework is used (ex: Selenium, jUnit, Spock), the code for the tests can be used.

### 5. Test Results: Text describing the test results. If an automatic test tool/framework is
used, its output can be used.

### 6. Build Procedures: A step-by-step guide to run your code. You should start telling how to
install whatever software you need, then how to download/build your program, and finally
how to set up the environment to run it. Imagine that someone installing will just follow
these commands (nothing more).

### 7. Problems: List any major problems you had.

### 8. Comments: Any comments you wish to add.
