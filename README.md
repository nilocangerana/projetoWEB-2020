Nome: Nilo Conrado Messias Alves Cangerana  -  Número USP: 9805362

# Projeto de SCC0209 - Introdução ao Desenvolvimento Web - E-commerce Website

### Link para o mockup com as telas:
[Figma Mockup](https://www.figma.com/file/8nXv0L7PmW7SEVV4ejNahK/Untitled?node-id=0%3A1)

### 1. Requisitos: 
Todos os requisitos pedidos no enunciado do milestone 1 foram implementados.  
  
A loja pode vender produtos por quantidade e serviços por tempo(duração do serviço).  
  
Usuários administradores servem apenas para gerenciar o sistema com criação de novos usuários ou produtos/serviços e atualização/exclusão dos mesmos.  
  
Usuários clientes podem visitar as páginas de produtos e serviços, adicionar eles ao carrinho e finalizar a compra.  
  
Usuário administradores podem visitar apenas as páginas de administração, indicadas pelos arquivos(...Adm.html). Usuários clientes podem visitar as demais páginas.

### 2. Descrição do Projeto:
Todas as telas e a navegação entre elas está representada no link Figma Mockup acima.  
  
A página Home(home.html) é a primeira página do site. Essa página contém o botão Explorar, que leva o usuário para a página de produtos que são vendidos.  
  
Em todas as páginas de usuários clientes existe um menu principal com links para Home, Produtos e Serviços, facilitando a navegação pelo site.  
  
Os usuários clientes podem visitar a página com a listagem dos produtos vendidos (paginaProdutos.html) e ela contém todos os produtos registrados no site com foto, nome, quantidade em estoque e preço. Essa página também contém a funcionalidade específica de trocar a foto de cada produto clicando nas setas direta e esquerda do respectivo produto, sendo possível visualizar diversas fotos do mesmo produto. O botão comprar em cada produto faz com que o mesmo seja direcionado a uma página com o produto escolhido(produto.html) contendo foto, ID do produto, nome, descrição, preço, quantidade em estoque e um campo para preencher quantidade que deseja comprar. Ao clicar no botão Adicionar ao Carrinho, o produto é adicionado ao carrinho.  
  
Os usuários clientes podem visitar a página com a listagem dos serviços vendidos (paginaServicos.html) e ela contém todos os serviços registrados no site com foto, nome, tempo e preço. O botão comprar em cada serviço faz com que o mesmo seja direcionado a uma página com o serviço escolhido(servico.html) contendo foto, ID do serviço, nome, descrição, preço, tempo e um campo para preencher dia e hora para executar o serviço. Ao clicar no botão Adicionar ao Carrinho, o serviço é adicionado ao carrinho.  
  
Usuários podem clicar no botão Login no topo a direita da tela para entrar no site através de um usuário e uma senha(login.html). Durante o login, o sistema deve identificar o tipo de usuário que está entrando. Se for Administrador, o sistema leva para a página de Administradores(paginaAdm.html) e se for Cliente, leva para a página de produtos(paginaProdutos.html).  
  
Usuário clientes que estão logados no sistema podem checar seu carrinho(carrinho.html) clicando no botão Carrinho no topo a direita da tela. O Carrinho é dividido em duas áreas onde são colocados os produtos e serviços com seus respectivos ID, preço, nome e quantidade ou dia/hora escolhidos. Os produtos podem ser retirados do carrinho clicando no botão da Lixeira. No final da página carrinho é mostrado o valor total da compra, o ID da compra, nome do cliente e um campo para colocar o número do cartão de crédito. Para finalizar a compra o cliente deve preencher o campo do cartão e clicar no botão Finalizar Compra.  
  
Usuários clientes que estão logados no sistema também podem editar suas informações através do botão Editar Informações no topo a direita da tela. Ao clicar nele, o usuário é direcionado a uma página(editInfo.html) com campos para alterar suas informações de nome, endereço, telefone e email.  
  
Os usuários podem fazer o logout do sistema clicando no botão Logout no topo a direita da tela.  
  
Usuários logados como administrador são direcionados para a página de administradores(paginaAdm.html) que contém 4 botões:  
Cadastrar Usuário que direciona para a página cadastrarUserAdm.html  
Cadastrar Produto/Serviço que direciona para a página cadastrarProdAdm.html  
Gerenciar Usuários que direciona para a página listaUserAdm.html  
Gerenciar Produtos/Serviços que direciona para a página listaProdAdm.html  
  
Na página cadastrarUserAdm.html, o administrador pode cadastrar um novo usuário no sistema preenchendo os campos indicados.  
  
Na página cadastrarProdAdm.html, o administrador pode cadastrar um novo produto ou serviço no sistema preenchendo os campos indicados.  
  
Na página listaUserAdm.html é mostrada uma lista com todos os usuários cadastrados no sistema naquele momento. O administrador pode clicar na Lixeira para excluir um usuário ou clicar no botão Editar para ir para a página gerenciarUserAdm.html que contém campos para atualizar as informações de determinado usuário.  
  
Na página listaProdAdm.html é mostrada uma lista com todos os produtos e serviços cadastrados no sistema naquele momento. O administrador pode clicar na Lixeira para excluir um produto ou serviço ou clicar no botão Editar para ir para a página gerenciarProdAdm.html que contém campos para atualizar as informações de determinado produto ou serviço.  
  
No servidor deverá ser armazenado informações de usuários, informações de produtos/serviços e compras já realizadas na loja.  
Para usuários: ID do usuário, tipo do usuário(Administrador ou cliente), nome, endereço, telefone, email, nome de usuário e senha.  
Para produtos/Serviços: ID do produto/serviço, tipo(produto ou serviço), nome, descrição, foto(s), preço, quantidade em estoque, quantidade vendida, tempo.  
Para compras: lista de produtos/serviços vendidos, quantidade, ID da compra, ID e nome do cliente, valor total.

### 3. Comentários sobre o Código:
Todos as páginas foram feitas em HTML5 e CSS3. As páginas de administrador estão no formato (...Adm.html), ou seja, essas páginas só serão visíveis para usuários logados do tipo administrador no sistema. As demais páginas podem ser acessadas pelo usuário do tipo cliente.  
  
Todas as páginas possuem um código inicial igual que gera o topo do site(logo, botões login, logout e background) e um código específico dependendo da funcionalidade daquela página. Existe comentários no código para indicar a parte específica de cada página.  
  
O código do CSS está no arquivo ../css/style.css  
Todo o design da página foi feito neste arquivo e ele está organizado com comentários indicando a estilização de cada elemento.  
  
Imagens utilizadas no site estão na pasta ../img

### 4. Plano de Testes:
Não definido ainda.

### 5. Resultados dos Testes:
Não definido ainda.

### 6. Procedimento para Build:
O projeto foi feito em HTML5 e CSS3 portanto basta um navegador para poder acessá-lo.  
  
Recomenda-se iniciar o projeto pelo arquivo home.html clicando sobre ele e abrindo no navegador.

### 7. Problemas
Na página de carrinho.html e nas páginas paginaProdutos.html/ paginaServicos.html podem ocorrer sobreposição do botão com os textos dispostos na tela caso ocorra uma redução muito grande na tela.

### 8. Comentários:
As páginas de administrador não estão conectadas com o resto do site pois não existe um sistema de login ainda, portanto, para acessar elas é necessário abrir o arquivo paginaAdm.html manualmente no navegador para ver o menu de administradores implementado.  
  
Alguns botões e informações estão dispostos estaticamente apenas para mostrar a posição e o formato deles na tela e não estão executando sua devida função. Essas funções serão implementadas em etapas posteriores. 
