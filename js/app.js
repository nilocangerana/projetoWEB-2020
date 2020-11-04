//Nome: Nilo Conrado Messias Alves Cangerana          Número USP: 9805362

//Definicao das Classes/Objetos:
//Usuarios:
class Usuario{
    constructor(tipo,idUsuario,nome,endereco,telefone,email,nomeUsuario,senha) {
        this.tipo=tipo;
        this.idUsuario=idUsuario;
        this.nome=nome;
        this.endereco=endereco;
        this.telefone=telefone;
        this.email=email;
        this.nomeUsuario=nomeUsuario;
        this.senha=senha;
    }
}
//Criação de dois usuarios no sistema
let user1 = new Usuario("adm", "1", "Adm Um", "Rua 1","111-111","adm1@email.com","admin","admin")
let user2 = new Usuario("cliente", "2", "Cliente Um", "Rua 1234","121-121","cliente1@email.com","cliente1","cliente1")

//Lista de Usuarios do sistema:
let listaUsuarios = []
listaUsuarios.push(user1) //adiciona usuarios na lista
listaUsuarios.push(user2)


let usuarioLogado //variavel que guarda o usuario logado no momento
///////////////////////////////////////////////////////////////////////////////////////////////////
//Produtos/Servicos:
class Produto{
    constructor(tipo,idProduto,nome,descricao,foto,preco,estoque,tempo) {
        this.tipo=tipo;
        this.idProduto=idProduto;
        this.nome=nome;
        this.descricao=descricao;
        this.foto=foto;
        this.preco=preco;
        this.estoque=estoque;
        this.tempo=tempo;
        this.qtdVendida=0;
        this.vetorFotos=foto.split(';')
    }
}
//Criação de quatro produtos no sistema
let prod1 = new Produto("produto","1","Casinha de Cachorro","Uma casinha de cachorro de madeira.","img/casinha.jpg;img/casinha2.png;img/casinha3.png","30.00","10","0")
let prod2 = new Produto("produto","2","Ração","Ração para cachorros.","img/racao.jpg;img/racao2.png","15.00","5","0")
let prod3 = new Produto("produto","3","Coleira","Coleira para cachorros.","img/coleira.webp;img/coleira2.png;img/coleira3.png;img/coleira4.png","10.00","32","0")
let prod4 = new Produto("produto","4","Bola de Borracha","Brinquedo bola de borracha.","img/brinquedo.webp","10.00","13","0")

//Criação de tres servicos no sistema
let serv1 = new Produto("servico","5","Banho","Banho no animal.","img/banho.png","30.00","0","1")
let serv2 = new Produto("servico","6","Tosa","Tosa do pelo do animal.","img/tosa.png","20.00","0","2")
let serv3 = new Produto("servico","7","Atendimento Veterinário","Um médico veterinário realiza uma consulta ao animal.","img/vet.png","40.00","0","3")

let listaProdutos = []
listaProdutos.push(prod1) //adiciona produtos na lista
listaProdutos.push(prod2)
listaProdutos.push(prod3)
listaProdutos.push(prod4)

let listaServicos = []
listaServicos.push(serv1) //adiciona servicos na lista
listaServicos.push(serv2)
listaServicos.push(serv3)

///////////////////////////////////////////////////////////////////////////////////////////////////
class Carrinho{
    constructor(tipo,idProduto,nome,preco,qtd,diaHora,tempo) {
        this.tipo=tipo;
        this.idProduto=idProduto;
        this.nome=nome;
        this.preco=preco;
        this.qtd=qtd;
        this.diaHora=diaHora;
        this.tempo=tempo;
        if(tipo=="servico") {
        this.vetorTempoSplit=diaHora.split(' - ')
        this.vetorTempoOcupado=[]
        this.c=0
        for(this.c=0;this.c<parseInt(this.tempo,10);this.c++)
        {
            this.vetorTempoOcupado.push(this.vetorTempoSplit[0]+" - "+(parseInt(this.vetorTempoSplit[1],10)+this.c)+":00")
        }
        }
    }
}

/*let car1 = new Carrinho("produto","1","Casinha de Cachorro","30.00","2","0","0")
let car2 = new Carrinho("produto","3","Coleira","10.00","1","0","0")
let car4 = new Carrinho("produto","2","Ração","15.00","3","0","0")
let car3 = new Carrinho("servico","7","Atendimento Veterinário","40.00","0","2020-10-28 - 11:00","3")*/

let carrinhoProd = []
let carrinhoServ = []
/*carrinhoProd.push(car1)
carrinhoProd.push(car2)
carrinhoServ.push(car3)
carrinhoProd.push(car4)*/

///////////////////////////////////////////////////////////////////////////////////////////////////
//Compra:
class Compra{
    constructor(id,nomeCliente,enderecoCliente,numeroCartao,listaProd,listaServ,valorTotal) {
        this.id=id;
        this.nomeCliente=nomeCliente;
        this.enderecoCliente=enderecoCliente;
        this.numeroCartao=numeroCartao;
        this.listaProd=listaProd;
        this.listaServ=listaServ;
        this.valorTotal=valorTotal;
    }
}

let listaCompras=[]

//criacao de uma compra
let compra1= new Compra("1","cliente um","rua 1","111-111",[new Carrinho("produto","1","Casinha de Cachorro","30.00","2","0","0"),new Carrinho("produto","3","Coleira","10.00","1","0","0")],[new Carrinho("servico","7","Atendimento Veterinário","40.00","0","2020-10-10 - 10:00","3")],"70.00")
listaCompras.push(compra1) //adiciona compra na lista

//Reset localStorage
//localStorage.clear(); 
//localStorage.setItem("listaProdutos",JSON.stringify(listaProdutos))
//localStorage.setItem("listaServicos",JSON.stringify(listaServicos))
//localStorage.setItem("listaUsuarios",JSON.stringify(listaUsuarios))
//localStorage.setItem("carrinhoProd",JSON.stringify(carrinhoProd))
//localStorage.setItem("carrinhoServ",JSON.stringify(carrinhoServ))
//localStorage.setItem("listaCompras",JSON.stringify(listaCompras))

function load() { //carrega base de dados criados no localStorage
    var eventsFired = localStorage.getItem('firedLS');
    if (eventsFired != '1'){
            localStorage.setItem("listaProdutos",JSON.stringify(listaProdutos))
            localStorage.setItem("listaServicos",JSON.stringify(listaServicos))
            localStorage.setItem("listaUsuarios",JSON.stringify(listaUsuarios))
            localStorage.setItem("carrinhoProd",JSON.stringify(carrinhoProd))
            localStorage.setItem("carrinhoServ",JSON.stringify(carrinhoServ))
            localStorage.setItem("listaCompras",JSON.stringify(listaCompras))
        localStorage.setItem('firedLS', '1');
    }
  }

  load();

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//Definição das funções:
//Funcao que procura usuario na lista de usuarios e atualiza
function atualizaUsuarioPorId(id,usuarioAtualizado)
{
    lista=JSON.parse(localStorage.getItem("listaUsuarios"));
    for(i=0;i<lista.length;i++)
    {
        if(id==lista.idUsuario) //achou usuario na lista
        {
            lista[i]=usuarioAtualizado //atualiza usuario na lista
            i=lista.length
            localStorage.setItem("listaUsuarios",JSON.stringify(lista)) //atualiza lista
        }
    }
}

//Funcao para checar se usuario e senha existem e realizar o login no sistema
function logar() {
    lista=JSON.parse(localStorage.getItem("listaUsuarios"));
    let existeUsuarioFlag=0
    for(i=0; i<lista.length;i++)
    {
        if(document.getElementById("nomeDeUsuarioLogin").value==lista[i].nomeUsuario && document.getElementById("senhaLogin").value==lista[i].senha) //usuario e senha esta na lista de usuarios
        {
            usuarioLogado=lista[i]
            existeUsuarioFlag=1
            localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
            localStorage.setItem("usuarioLogadoFlag", "1");
            i=lista.length
        }
    }

    if(existeUsuarioFlag==0)
    {
        alert("Usuário ou Senha Incorreto(s)")
    }
    else
    {
        if(usuarioLogado.tipo=="adm")
        {
            window.location.href = "paginaAdm.html"
        }
        else
        {
            window.location.href = "paginaProdutos.html"
        }
    }
}

//Funcao para deslogar do sistema
function deslogar() {
    localStorage.setItem("usuarioLogadoFlag","0")
    localStorage.setItem("usuarioLogado","")
    let produtosComprados=JSON.parse(localStorage.getItem("carrinhoProd")); //carrega carrinho produtos
    let servicosComprados=JSON.parse(localStorage.getItem("carrinhoServ")); //carrega carrinho servicos
    produtosComprados=[]//remove todos itens do carrinho
    servicosComprados=[]
    localStorage.setItem("carrinhoProd",JSON.stringify(produtosComprados)); //salva carrinho vazio
    localStorage.setItem("carrinhoServ",JSON.stringify(servicosComprados));
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//Funcao que carrega informacoes de uma pagina ao entrar nela
window.onload = function(){
    //Carrega informacao do cliente/botoes carrinho, login, logout, editInfo no topo das paginas
    if(localStorage.getItem("usuarioLogadoFlag")==1)
    {
        usuarioLogado=JSON.parse(localStorage.getItem("usuarioLogado"));
        document.getElementById("informacaoUsuario").innerHTML = "Usuário: " +usuarioLogado.nomeUsuario + "<br>Nome: " + usuarioLogado.nome + "<br>Email: " + usuarioLogado.email;
        document.getElementsByClassName("logout-btn")[0].style.display="block";
        document.getElementsByClassName("login-btn")[0].style.display="none";
        if(window.location.href.indexOf("Adm.html")==-1)
        {
            document.getElementsByClassName("carrinho-btn")[0].style.display="block";
            document.getElementsByClassName("editInfo-btn")[0].style.display="block";
        }
    }
    else
    {
        document.getElementById("informacaoUsuario").innerHTML =""
        document.getElementsByClassName("logout-btn")[0].style.display="none";
        document.getElementsByClassName("login-btn")[0].style.display="block";
        if(window.location.href.indexOf("Adm.html")==-1)
        {
            document.getElementsByClassName("carrinho-btn")[0].style.display="none";
            document.getElementsByClassName("editInfo-btn")[0].style.display="none";
        }
    }

    //Controla pagina login.html, impedindo que usuarios logados possam fazer outro login
    if (window.location.href.indexOf('login.html') > -1) {
        usuarioLogadoFlag=JSON.parse(localStorage.getItem("usuarioLogadoFlag"));
        if(usuarioLogadoFlag=="1")
        {
            deslogar();
            window.location.href = "login.html"
        }
      }
      //Controla acesso a paginaAdm.html, impedindo que usuários clientes acessem
      if (window.location.href.indexOf('paginaAdm.html') > -1) {
        usuarioLogado=JSON.parse(localStorage.getItem("usuarioLogado"));
        if(usuarioLogado.valueOf()=="cliente")
        {
            alert("Usuário não possui acesso a essa página")
            window.location.href = "home.html"
        }
      }

    //Carrega informacoes nos campos da Pagina editInfo.html
    if (window.location.href.indexOf('editInfo.html') > -1) {
        usuarioLogado=JSON.parse(localStorage.getItem("usuarioLogado"));
        document.getElementById("editInfoIdUser").innerHTML = "ID do Cliente: " + usuarioLogado.idUsuario
        document.getElementById("nomeCliente").value=usuarioLogado.nome
        document.getElementById("endCliente").value=usuarioLogado.endereco
        document.getElementById("telCliente").value=usuarioLogado.telefone
        document.getElementById("emailCliente").value=usuarioLogado.email
      }

    //Carrega lista de usuarios pagina listaUserAdm.html
    if (window.location.href.indexOf('listaUserAdm.html') > -1) {
        tabela=document.getElementsByClassName("tabelaAllUsers")[0]
        lista=JSON.parse(localStorage.getItem("listaUsuarios"));
        for(i=0;i<lista.length;i++) //insere todos usuarios da lista na pagina
        {
            let novaLinha   = tabela.insertRow();
            let novaColuna0 = novaLinha.insertCell(0);
            let novaColuna1 = novaLinha.insertCell(1);
            let novaColuna2 = novaLinha.insertCell(2);
            let novaColuna3 = novaLinha.insertCell(3);

            novaColuna0.appendChild(document.createTextNode("ID: "+lista[i].idUsuario))
            novaColuna1.appendChild(document.createTextNode("Nome: "+lista[i].nome))

            let btEditar = document.createElement("a")
            btEditar.className="editar-btn";
            btEditar.href="javascript:editarUsuarioAdm("+lista[i].idUsuario+")";
            btEditar.title="Editar"
            btEditar.innerHTML="<i class=\"fa fa-edit\"></i>"
            novaColuna2.appendChild(btEditar)

            let btExcluir = document.createElement("a")
            btExcluir.className="excluir-btn"
            btExcluir.href="javascript:excluirUser("+lista[i].idUsuario+")"
            btExcluir.title="Excluir"
            btExcluir.innerHTML="<i class=\"fa fa-trash\"></i>"
            novaColuna3.appendChild(btExcluir)
        }
      }

      //Carrega informacoes nos campos da Pagina gerenciarUserAdm.html
    if (window.location.href.indexOf('gerenciarUserAdm.html') > -1) {
        usuarioEscolhido=JSON.parse(localStorage.getItem("usuarioEscolhido"));
        document.getElementById("campoTipoAdm").value=usuarioEscolhido.tipo
        document.getElementById("campoIdAdm").value=usuarioEscolhido.idUsuario
        document.getElementById("campoNomeAdm").value=usuarioEscolhido.nome
        document.getElementById("campoEndAdm").value=usuarioEscolhido.endereco
        document.getElementById("campoTelAdm").value=usuarioEscolhido.telefone
        document.getElementById("campoEmailAdm").value=usuarioEscolhido.email
        document.getElementById("campoNUsuarioAdm").value=usuarioEscolhido.nomeUsuario
        document.getElementById("campoSenhaAdm").value=usuarioEscolhido.senha
      }

       //Carrega informacoes nos campos da Pagina gerenciarProdAdm.html
    if (window.location.href.indexOf('gerenciarProdAdm.html') > -1) {
        produtoEscolhido=JSON.parse(localStorage.getItem("prodEscolhido"));
        if(produtoEscolhido.tipo.valueOf()=="produto")
        {
            document.getElementById("campoTipo").value="Produto"
        }
        else
        {
            document.getElementById("campoTipo").value="Serviço"
        }
        document.getElementById("campoId").value=produtoEscolhido.idProduto
        document.getElementById("campoNome").value=produtoEscolhido.nome
        document.getElementById("campoDescricao").value=produtoEscolhido.descricao
        document.getElementById("campoFoto").value=produtoEscolhido.foto
        document.getElementById("campoPreco").value=produtoEscolhido.preco
        document.getElementById("campoEstoque").value=produtoEscolhido.estoque
        document.getElementById("campoTempo").value=produtoEscolhido.tempo
      }


      //Carrega lista de produtos/servicos pagina listaProdAdm.html
    if (window.location.href.indexOf('listaProdAdm.html') > -1) {
        tabela1=document.getElementsByClassName("tabelaAllUsers")[0]
        listaProdutos=JSON.parse(localStorage.getItem("listaProdutos"));
        for(i=0;i<listaProdutos.length;i++) //insere todos produtos da lista na pagina
        {
            let novaLinha   = tabela1.insertRow();
            let novaColuna0 = novaLinha.insertCell(0);
            let novaColuna1 = novaLinha.insertCell(1);
            let novaColuna2 = novaLinha.insertCell(2);
            let novaColuna3 = novaLinha.insertCell(3);

            novaColuna0.appendChild(document.createTextNode("ID: "+listaProdutos[i].idProduto))
            novaColuna1.appendChild(document.createTextNode("Nome: "+listaProdutos[i].nome))

            let btEditar = document.createElement("a")
            btEditar.className="editar-btn";
            btEditar.href="javascript:editarProdAdm("+listaProdutos[i].idProduto+")";
            btEditar.title="Editar"
            btEditar.innerHTML="<i class=\"fa fa-edit\"></i>"
            novaColuna2.appendChild(btEditar)

            let btExcluir = document.createElement("a")
            btExcluir.className="excluir-btn"
            btExcluir.href="javascript:excluirProd("+listaProdutos[i].idProduto+")"
            btExcluir.title="Excluir"
            btExcluir.innerHTML="<i class=\"fa fa-trash\"></i>"
            novaColuna3.appendChild(btExcluir)
        }

        tabela2=document.getElementsByClassName("tabelaAllUsers")[1]
        listaServicos=JSON.parse(localStorage.getItem("listaServicos"));
        for(i=0;i<listaServicos.length;i++) //insere todos servicos da lista na pagina
        {
            let novaLinha   = tabela2.insertRow();
            let novaColuna0 = novaLinha.insertCell(0);
            let novaColuna1 = novaLinha.insertCell(1);
            let novaColuna2 = novaLinha.insertCell(2);
            let novaColuna3 = novaLinha.insertCell(3);

            novaColuna0.appendChild(document.createTextNode("ID: "+listaServicos[i].idProduto))
            novaColuna1.appendChild(document.createTextNode("Nome: "+listaServicos[i].nome))

            let btEditar = document.createElement("a")
            btEditar.className="editar-btn";
            btEditar.href="javascript:editarServAdm("+listaServicos[i].idProduto+")";
            btEditar.title="Editar"
            btEditar.innerHTML="<i class=\"fa fa-edit\"></i>"
            novaColuna2.appendChild(btEditar)

            let btExcluir = document.createElement("a")
            btExcluir.className="excluir-btn"
            btExcluir.href="javascript:excluirServ("+listaServicos[i].idProduto+")"
            btExcluir.title="Excluir"
            btExcluir.innerHTML="<i class=\"fa fa-trash\"></i>"
            novaColuna3.appendChild(btExcluir)
        }
      }

//Carrega carrinho pagina: carrinho.html
if (window.location.href.indexOf('carrinho.html') > -1) {
    tabela1=document.getElementsByClassName("tabelaAllUsers")[0]
    carrinhoProd=JSON.parse(localStorage.getItem("carrinhoProd"));
    for(i=0;i<carrinhoProd.length;i++) //insere todos produtos da lista na pagina
    {
        let novaLinha   = tabela1.insertRow();
        let novaColuna0 = novaLinha.insertCell(0);
        let novaColuna1 = novaLinha.insertCell(1);
        let novaColuna2 = novaLinha.insertCell(2);
        let novaColuna3 = novaLinha.insertCell(3);
        let novaColuna4 = novaLinha.insertCell(4);

        novaColuna0.appendChild(document.createTextNode("ID: "+carrinhoProd[i].idProduto))
        novaColuna1.appendChild(document.createTextNode("Nome: "+carrinhoProd[i].nome))

        let label1= document.createElement("label")
        label1.for="qtd"
        label1.innerHTML="Quantidade: " 
        novaColuna2.appendChild(label1)
        let form1 = document.createElement("form")
        form1.className="formInline"
        form1.method="POST"
        let input1=document.createElement("input")
        input1.type="number"
        input1.min="1"
        input1.name="qtd"
        let inputId1=i
        input1.onchange=function(){
            carrinhoProd=JSON.parse(localStorage.getItem("carrinhoProd"));
            carrinhoProd[inputId1].qtd=tabela1.getElementsByTagName("input")[inputId1].value //input1.value
            localStorage.setItem("carrinhoProd", JSON.stringify(carrinhoProd));
            document.getElementsByClassName("valorTotal")[0].innerHTML="Total: R$ "+calculaTotal(carrinhoProd,carrinhoServ);
        }
        input1.value=carrinhoProd[i].qtd
        form1.appendChild(input1)
        novaColuna2.appendChild(form1)

        novaColuna3.appendChild(document.createTextNode("Preço/un: R$ "+carrinhoProd[i].preco))

        let btExcluir = document.createElement("a")
        btExcluir.className="excluir-btn"
        btExcluir.href="javascript:excluirProdCarrinho("+carrinhoProd[i].idProduto+")"
        btExcluir.title="Excluir"
        btExcluir.innerHTML="<i class=\"fa fa-trash\"></i>"
        novaColuna4.appendChild(btExcluir)
    }

    tabela2=document.getElementsByClassName("tabelaAllUsers")[1]
    carrinhoServ=JSON.parse(localStorage.getItem("carrinhoServ"));
    for(i=0;i<carrinhoServ.length;i++) //insere todos servicos da lista na pagina
    {
        let novaLinha   = tabela2.insertRow();
        let novaColuna0 = novaLinha.insertCell(0);
        let novaColuna1 = novaLinha.insertCell(1);
        let novaColuna2 = novaLinha.insertCell(2);
        let novaColuna3 = novaLinha.insertCell(3);
        let novaColuna4 = novaLinha.insertCell(4);

        novaColuna0.appendChild(document.createTextNode("ID: "+carrinhoServ[i].idProduto))
        novaColuna1.appendChild(document.createTextNode("Nome: "+carrinhoServ[i].nome))

        novaColuna2.appendChild(document.createTextNode("Dia-Hora: "+carrinhoServ[i].diaHora))
        
        novaColuna3.appendChild(document.createTextNode("Preço: R$ "+carrinhoServ[i].preco))

        let btExcluir = document.createElement("a")
        btExcluir.className="excluir-btn"
        btExcluir.href="javascript:excluirServCarrinho("+carrinhoServ[i].idProduto+")"
        btExcluir.title="Excluir"
        btExcluir.innerHTML="<i class=\"fa fa-trash\"></i>"
        novaColuna4.appendChild(btExcluir)
    }

    listaCompras=JSON.parse(localStorage.getItem("listaCompras"));
    document.getElementById("idCompraInfo").innerHTML="ID da Compra: "+(parseInt(listaCompras.length,10)+1);
    usuarioLogado=JSON.parse(localStorage.getItem("usuarioLogado"));
    document.getElementById("nomeCompraInfo").innerHTML="Nome: "+usuarioLogado.nome;

    document.getElementsByClassName("valorTotal")[0].innerHTML="Total: R$ "+calculaTotal(carrinhoProd,carrinhoServ);
  }

  //Carrega informacoes nos campos da paginaProdutos.html
  if (window.location.href.indexOf('paginaProdutos.html') > -1) {
    let divConteiner=document.getElementsByClassName("produtosDisplay")[0];
    listaProdutos=JSON.parse(localStorage.getItem("listaProdutos"));
    for(i=0;i<listaProdutos.length;i++) //passa por todos produtos
    {
        if(i%2==0) //par, add nova linha
        {
            let divRow = document.createElement("div")
            divRow.className="row"
            divConteiner.appendChild(divRow)

            let divCol1 = document.createElement("div")
            divCol1.className="column"
            divRow.appendChild(divCol1)

            let novaImg = document.createElement("img")
            novaImg.src=listaProdutos[i].vetorFotos[0]
            novaImg.alt="produto"
            divCol1.appendChild(novaImg)

            let novoP1 = document.createElement("p")
            novoP1.innerHTML="Nome: "+listaProdutos[i].nome
            let novoP2 = document.createElement("p")
            novoP2.innerHTML="Preço: "+listaProdutos[i].preco
            let novoP3 = document.createElement("p")
            novoP3.innerHTML="Em Estoque: "+listaProdutos[i].estoque
            divCol1.appendChild(novoP1)
            divCol1.appendChild(novoP2)
            divCol1.appendChild(novoP3)

            let novoBtnComprar = document.createElement("a")
            novoBtnComprar.className="compra-btn"
            novoBtnComprar.href="javascript:carregaProduto("+listaProdutos[i].idProduto+")";
            novoBtnComprar.title="Comprar Produto"
            novoBtnComprar.innerHTML="Comprar"
            divCol1.appendChild(novoBtnComprar)

            let bt1 = document.createElement("button")
            bt1.className="buttonR"
            bt1.innerHTML="<i class=\"fa fa-angle-right\"></i>"
            let numeroFoto=0
            let prodNumber=listaProdutos[i]
            bt1.onclick=function(){
                if(numeroFoto<prodNumber.vetorFotos.length-1)
                {
                    numeroFoto++
                    novaImg.src=prodNumber.vetorFotos[numeroFoto]
                }
            }
            let bt2 = document.createElement("button")
            bt2.className="buttonL"
            bt2.innerHTML="<i class=\"fa fa-angle-left\"></i>"
            bt2.onclick=function(){
                if(numeroFoto>0)
                {
                    numeroFoto--
                    novaImg.src=prodNumber.vetorFotos[numeroFoto]
                }
            }
            divCol1.appendChild(bt1)
            divCol1.appendChild(bt2)

            i++
            if(i<listaProdutos.length) //existe mais produtos - impar, add nova coluna
            {
                let divCol2 = document.createElement("div")
                divCol2.className="column"
                divRow.appendChild(divCol2)
    
                let novaImg = document.createElement("img")
                novaImg.src=listaProdutos[i].vetorFotos[0]
                novaImg.alt="produto"
                divCol2.appendChild(novaImg)
    
                let novoP1 = document.createElement("p")
                novoP1.innerHTML="Nome: "+listaProdutos[i].nome
                let novoP2 = document.createElement("p")
                novoP2.innerHTML="Preço: "+listaProdutos[i].preco
                let novoP3 = document.createElement("p")
                novoP3.innerHTML="Em Estoque: "+listaProdutos[i].estoque
                divCol2.appendChild(novoP1)
                divCol2.appendChild(novoP2)
                divCol2.appendChild(novoP3)
    
                let novoBtnComprar = document.createElement("a")
                novoBtnComprar.className="compra-btn"
                novoBtnComprar.href="javascript:carregaProduto("+listaProdutos[i].idProduto+")";
                novoBtnComprar.title="Comprar Produto"
                novoBtnComprar.innerHTML="Comprar"
                divCol2.appendChild(novoBtnComprar)
    
                let bt1 = document.createElement("button")
                bt1.className="buttonR"
                bt1.innerHTML="<i class=\"fa fa-angle-right\"></i>"
                let numeroFoto=0
                let prodNumber=listaProdutos[i]
                bt1.onclick=function(){
                    if(numeroFoto<prodNumber.vetorFotos.length-1)
                    {
                        numeroFoto++
                        novaImg.src=prodNumber.vetorFotos[numeroFoto]
                    }
                }
                let bt2 = document.createElement("button")
                bt2.className="buttonL"
                bt2.innerHTML="<i class=\"fa fa-angle-left\"></i>"
                bt2.onclick=function(){
                    if(numeroFoto>0)
                    {
                        numeroFoto--
                        novaImg.src=prodNumber.vetorFotos[numeroFoto]
                    }
                }
                divCol2.appendChild(bt1)
                divCol2.appendChild(bt2)
            }

        } 
    }
  }

  //Carrega informacoes nos campos da paginaServicos.html
  if (window.location.href.indexOf('paginaServicos.html') > -1) {
    let divConteiner=document.getElementsByClassName("produtosDisplay")[0];
    listaServicos=JSON.parse(localStorage.getItem("listaServicos"));
    for(i=0;i<listaServicos.length;i++) //passa por todos servicos
    {
        if(i%2==0) //par, add nova linha
        {
            let divRow = document.createElement("div")
            divRow.className="row"
            divConteiner.appendChild(divRow)

            let divCol1 = document.createElement("div")
            divCol1.className="column"
            divRow.appendChild(divCol1)

            let novaImg = document.createElement("img")
            novaImg.src=listaServicos[i].vetorFotos[0]
            novaImg.alt="servico"
            divCol1.appendChild(novaImg)

            let novoP1 = document.createElement("p")
            novoP1.innerHTML="Nome: "+listaServicos[i].nome
            let novoP2 = document.createElement("p")
            novoP2.innerHTML="Preço: "+listaServicos[i].preco
            let novoP3 = document.createElement("p")
            novoP3.innerHTML="Tempo: "+listaServicos[i].tempo+" hora(s)"
            divCol1.appendChild(novoP1)
            divCol1.appendChild(novoP2)
            divCol1.appendChild(novoP3)

            let novoBtnComprar = document.createElement("a")
            novoBtnComprar.className="compra-btn"
            novoBtnComprar.href="javascript:carregaServico("+listaServicos[i].idProduto+")";
            novoBtnComprar.title="Comprar Serviço"
            novoBtnComprar.innerHTML="Comprar"
            divCol1.appendChild(novoBtnComprar)

            i++
            if(i<listaServicos.length) //existe mais servicos - impar, add nova coluna
            {
                let divCol2 = document.createElement("div")
                divCol2.className="column"
                divRow.appendChild(divCol2)
    
                let novaImg = document.createElement("img")
                novaImg.src=listaServicos[i].vetorFotos[0]
                novaImg.alt="servico"
                divCol2.appendChild(novaImg)
    
                let novoP1 = document.createElement("p")
                novoP1.innerHTML="Nome: "+listaServicos[i].nome
                let novoP2 = document.createElement("p")
                novoP2.innerHTML="Preço: "+listaServicos[i].preco
                let novoP3 = document.createElement("p")
                novoP3.innerHTML="Tempo: "+listaServicos[i].tempo+" hora(s)"
                divCol2.appendChild(novoP1)
                divCol2.appendChild(novoP2)
                divCol2.appendChild(novoP3)
    
                let novoBtnComprar = document.createElement("a")
                novoBtnComprar.className="compra-btn"
                novoBtnComprar.href="javascript:carregaServico("+listaServicos[i].idProduto+")";
                novoBtnComprar.title="Comprar Serviço"
                novoBtnComprar.innerHTML="Comprar"
                divCol2.appendChild(novoBtnComprar)
            }
        }
    }
  }

  //carrega informacao da pagina produto.html
  if (window.location.href.indexOf('produto.html') > -1) {
    let produtoEscolhido=JSON.parse(localStorage.getItem("prodEscolhido"));
    let novaImg=document.createElement("img")
    novaImg.src=produtoEscolhido.vetorFotos[0]
    novaImg.alt="produto"
    document.getElementsByClassName("produtoIndividual")[0].appendChild(novaImg)

    let novaDiv = document.createElement("div")
    novaDiv.className="textoProd"
    document.getElementsByClassName("produtoIndividual")[0].appendChild(novaDiv)

    let p1= document.createElement("p")
    p1.innerHTML="<b>ID:</b> "+produtoEscolhido.idProduto
    let p2= document.createElement("p")
    p2.innerHTML="<b>Nome:</b> "+produtoEscolhido.nome
    let p3= document.createElement("p")
    p3.innerHTML="<b>Descrição:</b> "+produtoEscolhido.descricao
    let p4= document.createElement("p")
    p4.innerHTML="<b>Preço:</b> R$ "+produtoEscolhido.preco
    let p5= document.createElement("p")
    p5.innerHTML="<b>Em Estoque:</b> "+produtoEscolhido.estoque+" unidades"
    novaDiv.appendChild(p1)
    novaDiv.appendChild(p2)
    novaDiv.appendChild(p3)
    novaDiv.appendChild(p4)
    novaDiv.appendChild(p5)

    let novoLabel = document.createElement("label")
    novoLabel.for="qtd"
    novoLabel.innerHTML="<b>Quantidade: </b>"
    novaDiv.appendChild(novoLabel)

    let novoForm= document.createElement("form")
    novoForm.className="formInline"
    novoForm.method="POST"
    novaDiv.appendChild(novoForm)

    let novoInput=document.createElement("input")
    novoInput.type="number"
    novoInput.min="0"
    novoInput.name="qtd"
    novoInput.value="1"
    novoInput.id="inQtd"
    novoForm.appendChild(novoInput)

    let novoBtnAddCarrinho = document.createElement("button")
    novoBtnAddCarrinho.className="addCarrinho"
    novoBtnAddCarrinho.innerHTML="Adicionar ao Carrinho"
    novoBtnAddCarrinho.onclick=function(){//botao adicionar ao carrinho produto
        carrinhoProd=JSON.parse(localStorage.getItem("carrinhoProd")); //carrega carrinho
        flagCarrinho=0
        usuarioLogadoFlag=JSON.parse(localStorage.getItem("usuarioLogadoFlag"));

        for(k=0;k<carrinhoProd.length;k++)
        {
            if(produtoEscolhido.idProduto==carrinhoProd[k].idProduto) //ja existe produto no carrinho
            {
                flagCarrinho=1
            }
        }

        if(flagCarrinho==0 && usuarioLogadoFlag=="1") //se nao existe o produto no carrinho
        {
            let novoProdCarrinho = new Carrinho(produtoEscolhido.tipo,produtoEscolhido.idProduto,produtoEscolhido.nome,produtoEscolhido.preco,document.getElementById("inQtd").value,0,produtoEscolhido.tempo)
            carrinhoProd.push(novoProdCarrinho)
            localStorage.setItem("carrinhoProd", JSON.stringify(carrinhoProd)); //atualiza carrinho
            alert("Produto Adicionado ao Carrinho.")
        }
        else
        {
            alert("Erro: Produto já está no carrinho ou usuário não está logado.")
        }
    }
    novaDiv.appendChild(novoBtnAddCarrinho)
  }

  //carrega informacao da pagina servico.html
  if (window.location.href.indexOf('servico.html') > -1) {
    let produtoEscolhido=JSON.parse(localStorage.getItem("prodEscolhido"));
    let novaImg=document.createElement("img")
    novaImg.src=produtoEscolhido.vetorFotos[0]
    novaImg.alt="servico"
    document.getElementsByClassName("produtoIndividual")[0].appendChild(novaImg)

    let novaDiv = document.createElement("div")
    novaDiv.className="textoProd"
    document.getElementsByClassName("produtoIndividual")[0].appendChild(novaDiv)

    let p1= document.createElement("p")
    p1.innerHTML="<b>ID:</b> "+produtoEscolhido.idProduto
    let p2= document.createElement("p")
    p2.innerHTML="<b>Nome:</b> "+produtoEscolhido.nome
    let p3= document.createElement("p")
    p3.innerHTML="<b>Descrição:</b> "+produtoEscolhido.descricao
    let p4= document.createElement("p")
    p4.innerHTML="<b>Preço:</b> R$ "+produtoEscolhido.preco
    let p5= document.createElement("p")
    p5.innerHTML="<b>Tempo:</b> "+produtoEscolhido.tempo+" hora(s)"
    novaDiv.appendChild(p1)
    novaDiv.appendChild(p2)
    novaDiv.appendChild(p3)
    novaDiv.appendChild(p4)
    novaDiv.appendChild(p5)

    let novoLabel = document.createElement("label")
    novoLabel.for="dia"
    novoLabel.innerHTML="<b>Escolher Dia/Horário: </b>"
    novaDiv.appendChild(novoLabel)

    let novoForm= document.createElement("form")
    novoForm.className="formInline2"
    novoForm.method="POST"
    novaDiv.appendChild(novoForm)

    let novoInput=document.createElement("input")
    novoInput.type="date"
    novoInput.name="dia"
    novoInput.id="inputData"
    novoForm.appendChild(novoInput)

    let novoSelect= document.createElement("select")
    novoSelect.name="ftempo"
    novoSelect.id="inSelect"
    novaDiv.appendChild(novoSelect)

    let op1= document.createElement("option")
    op1.value=8
    op1.innerHTML="8:00"
    let op2= document.createElement("option")
    op2.value=9
    op2.innerHTML="9:00"
    let op3= document.createElement("option")
    op3.value=10
    op3.innerHTML="10:00"
    let op4= document.createElement("option")
    op4.value=11
    op4.innerHTML="11:00"
    let op5= document.createElement("option")
    op5.value=12
    op5.innerHTML="12:00"
    let op6= document.createElement("option")
    op6.value=13
    op6.innerHTML="13:00"
    let op7= document.createElement("option")
    op7.value=14
    op7.innerHTML="14:00"
    let op8= document.createElement("option")
    op8.value=15
    op8.innerHTML="15:00"
    novoSelect.appendChild(op1)
    novoSelect.appendChild(op2)
    novoSelect.appendChild(op3)
    novoSelect.appendChild(op4)
    novoSelect.appendChild(op5)
    novoSelect.appendChild(op6)
    novoSelect.appendChild(op7)
    novoSelect.appendChild(op8)

    let novoBtnAddCarrinho = document.createElement("button")
    novoBtnAddCarrinho.className="addCarrinho"
    novoBtnAddCarrinho.innerHTML="Adicionar ao Carrinho"
    novoBtnAddCarrinho.onclick=function(){ //botao adicionar ao carrinho serviço
        carrinhoServ=JSON.parse(localStorage.getItem("carrinhoServ")); //carrega carrinho
        listaCompras=JSON.parse(localStorage.getItem("listaCompras")); //carrega compras no sistema
        flagCarrinho=0
        flagCarrinhoHorario=0
        usuarioLogadoFlag=JSON.parse(localStorage.getItem("usuarioLogadoFlag"));

        for(k=0;k<carrinhoServ.length;k++)
        {
            if(produtoEscolhido.idProduto==carrinhoServ[k].idProduto) //ja existe servico no carrinho
            {
                flagCarrinho=1
            }
        }

        let dataEscolhida=document.getElementById("inputData").value+" - "+document.getElementById("inSelect").value+":00";
        vTempoSplit=dataEscolhida.split(' - ')
        vTempoQueOcupa=[]
        let c=0
        for(c=0;c<parseInt(produtoEscolhido.tempo,10);c++)
        {
            vTempoQueOcupa.push(vTempoSplit[0]+" - "+(parseInt(vTempoSplit[1],10)+c)+":00")
        }

        for(let k=0;k<carrinhoServ.length;k++) //varia por todos servicos no carrinho para comparar dia e hora
        {
            for(g=0;g<carrinhoServ[k].vetorTempoOcupado.length;g++) //varia por todas as horas/dias ocupadas do carrinho
            {
                for(p=0;p<vTempoQueOcupa.length;p++) //varia por todas as horas que o servico ocupa
                {
                    if(vTempoQueOcupa[p].valueOf()==carrinhoServ[k].vetorTempoOcupado[g].valueOf()) //ja existe servico no carrinho com mesmo dia/horario
                    {
                        flagCarrinhoHorario=1
                    }
                }
            }
        }

        for(let k=0;k<listaCompras.length;k++) //varia por todos servicos no comprados para comparar dia e hora
        {
            for(g=0;g<listaCompras[k].listaServ.length;g++) 
            {
                for(p=0;p<listaCompras[k].listaServ[g].vetorTempoOcupado.length;p++)
                {
                    for(q=0;q<vTempoQueOcupa.length;q++) //varia por todas as horas que o servico ocupa
                    {
                        if(vTempoQueOcupa[q].valueOf()==listaCompras[k].listaServ[g].vetorTempoOcupado[p].valueOf()) //ja existe servico nas compras com mesmo dia/horario
                        {
                            flagCarrinhoHorario=1
                        }
                    }
                }
            }
        }

        if(flagCarrinho==0 && flagCarrinhoHorario==0 && usuarioLogadoFlag=="1") //se nao existe o servico no carrinho
        {
            let novoProdCarrinho = new Carrinho(produtoEscolhido.tipo,produtoEscolhido.idProduto,produtoEscolhido.nome,produtoEscolhido.preco,0,document.getElementById("inputData").value+" - "+document.getElementById("inSelect").value+":00",produtoEscolhido.tempo)
            carrinhoServ.push(novoProdCarrinho)
            localStorage.setItem("carrinhoServ", JSON.stringify(carrinhoServ)); //atualiza carrinho
            alert("Serviço Adicionado ao Carrinho.")
        }
        else
        {
            alert("Erro: Serviço já está no carrinho ou dia/horário escolhidos inválido ou usuário não está logado.")
        }
    }
    novaDiv.appendChild(novoBtnAddCarrinho)
  }

};

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//Definição de funções específicas para cada página:
//Pagina editInfo.html: botao para salvar informacoes
function salvarEditInfo() {
    usuarioLogado=JSON.parse(localStorage.getItem("usuarioLogado"));
    usuarioLogado.nome=document.getElementById("nomeCliente").value //adiciona novos valores ao usuario logado
    usuarioLogado.endereco=document.getElementById("endCliente").value
    usuarioLogado.telefone=document.getElementById("telCliente").value
    usuarioLogado.email=document.getElementById("emailCliente").value

    lista=JSON.parse(localStorage.getItem("listaUsuarios")); //carrega lista de usuarios do sistema
    for(i=0;i<lista.length;i++)
    {
        if(usuarioLogado.idUsuario.valueOf()==lista[i].idUsuario.valueOf()) //achou usuario na lista
        {
            lista[i]=usuarioLogado //atualiza usuario na lista
            i=lista.length
            localStorage.setItem("listaUsuarios",JSON.stringify(lista)) //atualiza lista
        }
    }
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado)); //atualiza usuario logado com as novas informacoes
    alert("Informações Atualizadas.")
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//Pagina cadastrarUserAdm.html: botao para cadastrar novo usuario
function cadastraNovoUsuario()
{
    lista=JSON.parse(localStorage.getItem("listaUsuarios")); //carrega lista de usuarios do sistema
    flagID=0
    flagNUsuario=0
    flagEspacoBranco=0

    //Procura se ID ja existe
    for(i=0;i<lista.length;i++)
    {
        if(lista[i].idUsuario==document.getElementById("campoId").value)
        {
            flagID=1
            alert("Erro: ID de usuário já existe.")
        }
    }
    //Procura de Nome de Usuario ja existe
    for(i=0;i<lista.length;i++)
    {
        if(lista[i].nomeUsuario==document.getElementById("campoNUsuario").value)
        {
            flagNUsuario=1
            alert("Erro: Nome de Usuário já existe.")
        }
    }

    if(document.getElementById("campoId").value=="" || document.getElementById("campoNUsuario").value=="")
    {
        flagEspacoBranco=1
        alert("Erro: Id ou nome de usuário inválido(s).")
    }

    //Se ID e nome de Usuario nao existem, o cadastro é feito
    if(flagID==0 && flagNUsuario==0 && flagEspacoBranco==0)
    {
        let novoUser = new Usuario( document.getElementById("campoTipo").value, 
                                document.getElementById("campoId").value, 
                                document.getElementById("campoNome").value, 
                                document.getElementById("campoEnd").value,
                                document.getElementById("campoTel").value,
                                document.getElementById("campoEmail").value,
                                document.getElementById("campoNUsuario").value,
                                document.getElementById("campoSenha").value)

        lista.push(novoUser);
        localStorage.setItem("listaUsuarios",JSON.stringify(lista)); //salva lista
        alert("Usuário cadastrado no sistema!")
        window.location.href = "paginaAdm.html"
    }
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//Pagina listaUserAdm.html: botao excluir e botao editar
function excluirUser(id) //Configura botao excluir
{
    lista=JSON.parse(localStorage.getItem("listaUsuarios")); //carrega lista de usuarios do sistema
    usuarioLogado=JSON.parse(localStorage.getItem("usuarioLogado"));
    for(i=0;i<lista.length;i++)
    {
        if(id==lista[i].idUsuario && id!=usuarioLogado.idUsuario)
        {
            lista.splice(i,1) //remove usuario da lista
            i=lista.length
        }
    }
    localStorage.setItem("listaUsuarios",JSON.stringify(lista)); //salva lista
    window.location.href = "listaUserAdm.html"
}

function editarUsuarioAdm(id)
{
    lista=JSON.parse(localStorage.getItem("listaUsuarios")); //carrega lista de usuarios do sistema
    for(i=0;i<lista.length;i++)
    {
        if(id==lista[i].idUsuario)
        {
            localStorage.setItem("usuarioEscolhido",JSON.stringify(lista[i]));
            i=lista.length
        }
    }
    window.location.href = "gerenciarUserAdm.html"
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//Pagina listaProdAdm.html: botao excluir e botao editar
function excluirProd(id) //Configura botao excluir
{
    listaProdutos=JSON.parse(localStorage.getItem("listaProdutos")); //carrega lista de produtos do sistema
    for(i=0;i<listaProdutos.length;i++)
    {
        if(id==listaProdutos[i].idProduto)
        {
            listaProdutos.splice(i,1) //remove usuario da lista
            i=listaProdutos.length
        }
    }
    localStorage.setItem("listaProdutos",JSON.stringify(listaProdutos)); //salva lista
    window.location.href = "listaProdAdm.html"
}

function excluirServ(id) //Configura botao excluir
{
    listaServicos=JSON.parse(localStorage.getItem("listaServicos")); //carrega lista de servicos do sistema
    for(i=0;i<listaServicos.length;i++)
    {
        if(id==listaServicos[i].idProduto)
        {
            listaServicos.splice(i,1) //remove usuario da lista
            i=listaServicos.length
        }
    }
    localStorage.setItem("listaServicos",JSON.stringify(listaServicos)); //salva lista
    window.location.href = "listaProdAdm.html"
}

function editarProdAdm(id)
{
    lista=JSON.parse(localStorage.getItem("listaProdutos")); //carrega lista de produtos do sistema
    for(i=0;i<lista.length;i++)
    {
        if(id==lista[i].idProduto)
        {
            localStorage.setItem("prodEscolhido",JSON.stringify(lista[i]));
            i=lista.length
        }
    }
    window.location.href = "gerenciarProdAdm.html"
}

function editarServAdm(id)
{
    lista=JSON.parse(localStorage.getItem("listaServicos")); //carrega lista de produtos do sistema
    for(i=0;i<lista.length;i++)
    {
        if(id==lista[i].idProduto)
        {
            localStorage.setItem("prodEscolhido",JSON.stringify(lista[i]));
            i=lista.length
        }
    }
    window.location.href = "gerenciarProdAdm.html"
}
//botao voltar
function btnVoltarAdm(){
    window.location.href = "paginaAdm.html"
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//Pagina gerenciarUserAdm.html: botao salvar
function salvarAttInfoAdm() {
    usuarioEscolhido=JSON.parse(localStorage.getItem("usuarioEscolhido"));
    usuarioEscolhido.nome=document.getElementById("campoNomeAdm").value //adiciona novos valores ao usuario escolhido
    usuarioEscolhido.endereco=document.getElementById("campoEndAdm").value
    usuarioEscolhido.telefone=document.getElementById("campoTelAdm").value
    usuarioEscolhido.email=document.getElementById("campoEmailAdm").value
    usuarioEscolhido.senha=document.getElementById("campoSenhaAdm").value
    usuarioEscolhido.tipo=document.getElementById("campoTipoAdm").value

    lista=JSON.parse(localStorage.getItem("listaUsuarios")); //carrega lista de usuarios do sistema
    for(i=0;i<lista.length;i++)
    {
        if(usuarioEscolhido.idUsuario==lista[i].idUsuario) //achou usuario na lista
        {
            lista[i]=usuarioEscolhido //atualiza usuario na lista
            i=lista.length
            localStorage.setItem("listaUsuarios",JSON.stringify(lista)) //atualiza lista
        }
    }
    alert("Informações Atualizadas.")
    window.location.href = "listaUserAdm.html"
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//Pagina cadastrarProdAdm.html: botao para cadastrar novo produto/servico
function cadastraNovoProd()
{
    listaProdutos=JSON.parse(localStorage.getItem("listaProdutos")); //carrega lista de produtos do sistema
    listaServicos=JSON.parse(localStorage.getItem("listaServicos")); //carrega lista de produtos do sistema
    flagIDprod=0
    flagIDserv=0
    flagEspacoBranco=0

    //Procura se ID ja existe nos produtos
    for(i=0;i<listaProdutos.length;i++)
    {
        if(listaProdutos[i].idProduto==document.getElementById("campoId").value)
        {
            flagIDprod=1
            alert("Erro: ID já existe.")
        }
    }
    //Procura se ID ja existe nos servicos
    for(i=0;i<listaServicos.length;i++)
    {
        if(listaServicos[i].idProduto==document.getElementById("campoId").value)
        {
            flagIDserv=1
            alert("Erro: ID já existe.")
        }
    }

    if(document.getElementById("campoId").value=="")
    {
        flagEspacoBranco=1
        alert("Erro: Id inválido.")
    }

    //Se ID esta livre, o cadastro é feito
    if(flagIDprod==0 && flagIDserv==0 && flagEspacoBranco==0)
    {
        let prod = new Produto( document.getElementById("campoTipo").value, 
                                document.getElementById("campoId").value, 
                                document.getElementById("campoNome").value, 
                                document.getElementById("campoDescricao").value,
                                document.getElementById("campoFoto").value,
                                document.getElementById("campoPreco").value,
                                document.getElementById("campoEstoque").value,
                                document.getElementById("campoTempo").value)

        if(prod.tipo.valueOf()=="produto")
        {
            listaProdutos.push(prod);
            localStorage.setItem("listaProdutos",JSON.stringify(listaProdutos)); //salva lista
        }
        else
        {
            listaServicos.push(prod);
            localStorage.setItem("listaServicos",JSON.stringify(listaServicos)); //salva lista
        }
        alert("Produto/Servico cadastrado no sistema!")
        window.location.href = "paginaAdm.html"
    }
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//Pagina gerenciarProdAdm.html: botao salvar
function salvarAttProdAdm() {
    produtoEscolhido=JSON.parse(localStorage.getItem("prodEscolhido"));
    produtoEscolhido.nome=document.getElementById("campoNome").value //adiciona novos valores ao produto/servico escolhido
    produtoEscolhido.descricao=document.getElementById("campoDescricao").value
    produtoEscolhido.foto=document.getElementById("campoFoto").value
    produtoEscolhido.preco=document.getElementById("campoPreco").value
    produtoEscolhido.estoque=document.getElementById("campoEstoque").value
    produtoEscolhido.tempo=document.getElementById("campoTempo").value
    produtoEscolhido.vetorFotos=produtoEscolhido.foto.split(';')

    if(produtoEscolhido.tipo.valueOf()=="produto")
    {
        lista=JSON.parse(localStorage.getItem("listaProdutos")); //carrega lista de produtos do sistema
        for(i=0;i<lista.length;i++)
        {
        if(produtoEscolhido.idProduto==lista[i].idProduto) //achou produto na lista
        {
            lista[i]=produtoEscolhido //atualiza usuario na lista
            i=lista.length
            localStorage.setItem("listaProdutos",JSON.stringify(lista)) //atualiza lista
        }
        }
    }
    else
    {
        lista=JSON.parse(localStorage.getItem("listaServicos")); //carrega lista de servicos do sistema
        for(i=0;i<lista.length;i++)
        {
        if(produtoEscolhido.idProduto==lista[i].idProduto) //achou produto na lista
        {
            lista[i]=produtoEscolhido //atualiza usuario na lista
            i=lista.length
            localStorage.setItem("listaServicos",JSON.stringify(lista)) //atualiza lista
        }
        }
    }
    alert("Informações Atualizadas.")
    window.location.href = "listaProdAdm.html"
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//pagina carrinho.html

function excluirServCarrinho(id) //Configura botao excluir
{
    carrinhoServ=JSON.parse(localStorage.getItem("carrinhoServ")); //carrega lista de servicos do carrinho
    for(i=0;i<carrinhoServ.length;i++)
    {
        if(id==carrinhoServ[i].idProduto)
        {
            carrinhoServ.splice(i,1) //remove servico da lista
            i=carrinhoServ.length
        }
    }
    localStorage.setItem("carrinhoServ",JSON.stringify(carrinhoServ)); //salva lista
    window.location.href = "carrinho.html"
}

function excluirProdCarrinho(id) //Configura botao excluir
{
    carrinhoProd=JSON.parse(localStorage.getItem("carrinhoProd")); //carrega lista de produtos do carrinho
    for(i=0;i<carrinhoProd.length;i++)
    {
        if(id==carrinhoProd[i].idProduto)
        {
            carrinhoProd.splice(i,1) //remove produto da lista
            i=carrinhoProd.length
        }
    }
    localStorage.setItem("carrinhoProd",JSON.stringify(carrinhoProd)); //salva lista
    window.location.href = "carrinho.html"
}

function calculaTotal(cProd,cServ)
{
    let total=0
    for(i=0;i<cProd.length;i++)
    {
        total=total+(parseInt(cProd[i].qtd,10)*(parseFloat(cProd[i].preco,10)))
    }

    for(i=0;i<cServ.length;i++)
    {
        total=total+(parseFloat(cServ[i].preco,10))
    }
    return total.toFixed(2);
}

//botao finalizar compra na pagina carrinho.html
function finalizarCompra() {
    listaCompras=JSON.parse(localStorage.getItem("listaCompras")); //carrega lista de compras
    usuarioLogado=JSON.parse(localStorage.getItem("usuarioLogado")); //carrega usuario logado
    let produtosComprados=JSON.parse(localStorage.getItem("carrinhoProd")); //carrega carrinho produtos
    let servicosComprados=JSON.parse(localStorage.getItem("carrinhoServ")); //carrega carrinho servicos
    listaProdutos=JSON.parse(localStorage.getItem("listaProdutos")); //carrega lista de produtos do sistema
    listaServicos=JSON.parse(localStorage.getItem("listaServicos")); //carrega lista de servicos do sistema

    flagEstoqueProd=0

    for(i=0;i<produtosComprados.length;i++) //passa por todos produtos comprados
    {
        index=procuraProduto(produtosComprados[i].idProduto);
        if(parseInt(listaProdutos[index].estoque,10)>=parseInt(produtosComprados[i].qtd,10)) //checa se estoque é maior ou igual ao que foi comprado
        {//caso for verdadeiro
            listaProdutos[index].estoque=""+(parseInt(listaProdutos[index].estoque,10)-parseInt(produtosComprados[i].qtd,10)); //remove do estoque
            listaProdutos[index].qtdVendida=""+(parseInt(listaProdutos[index].qtdVendida,10)+parseInt(produtosComprados[i].qtd,10)) //adiciona a quantidade a quantidade vendida do produto
        }
        else
        {
            flagEstoqueProd=1
            i=produtosComprados.length
        }
    }
    
    for(i=0;i<servicosComprados.length;i++) //passa por todos servicos comprados
    {
        index2=procuraServico(servicosComprados[i].idProduto)
        listaServicos[index2].qtdVendida=""+(parseInt(listaServicos[index2].qtdVendida,10)+1) //adiciona a quantidade a quantidade vendida do servico
    }

    if(produtosComprados.length>0 || servicosComprados.length>0)
    {
    if(flagEstoqueProd==0)
    {
        let novaCompra = new Compra(""+(listaCompras.length+1),usuarioLogado.nome,usuarioLogado.endereco,document.getElementById("numeroCartao"),produtosComprados,servicosComprados,""+calculaTotal(produtosComprados,servicosComprados));
        listaCompras.push(novaCompra) //adiciona nova compra na lista
        localStorage.setItem("listaCompras",JSON.stringify(listaCompras)); //atualiza lista de compras
        localStorage.setItem("listaProdutos",JSON.stringify(listaProdutos));
        localStorage.setItem("listaServicos",JSON.stringify(listaServicos));
        produtosComprados=[]//remove todos itens do carrinho
        servicosComprados=[]
        localStorage.setItem("carrinhoProd",JSON.stringify(produtosComprados));
        localStorage.setItem("carrinhoServ",JSON.stringify(servicosComprados));
        alert("Compra Realizada. Total: R$ "+novaCompra.valorTotal);
        window.location.href="carrinho.html"
    }
    else
    {
        alert("Erro: produto(s) sem estoque necessário para realizar a venda.")
    }

    }
    else
    {
        alert("Erro: carrinho vazio.")
    }
}

function procuraProduto(idProduto)
{
    listaProdutosA=JSON.parse(localStorage.getItem("listaProdutos")); //carrega lista de produtos do sistema
    for(k=0;k<listaProdutosA.length;k++)
    {
        if(idProduto==listaProdutosA[k].idProduto) //achou produto, retorna index dele na lista
        {
            return k;
        }
    }
}

function procuraServico(idServico)
{
    listaServicosA=JSON.parse(localStorage.getItem("listaServicos")); //carrega lista de produtos do sistema
    for(k=0;k<listaServicosA.length;k++)
    {
        if(idServico==listaServicosA[k].idProduto) //achou servico, retorna index dele na lista
        {
            return k;
        }
    }
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//Paginas produto.html e servico.html
function carregaProduto(id)
{
    lista=JSON.parse(localStorage.getItem("listaProdutos")); //carrega lista de produtos do sistema
    for(i=0;i<lista.length;i++)
    {
        if(id==lista[i].idProduto)
        {
            localStorage.setItem("prodEscolhido",JSON.stringify(lista[i]));
            i=lista.length
        }
    }
    window.location.href = "produto.html"
}


function carregaServico(id)
{
    lista=JSON.parse(localStorage.getItem("listaServicos")); //carrega lista de servicos do sistema
    for(i=0;i<lista.length;i++)
    {
        if(id==lista[i].idProduto)
        {
            localStorage.setItem("prodEscolhido",JSON.stringify(lista[i]));
            i=lista.length
        }
    }
    window.location.href = "servico.html"
}
