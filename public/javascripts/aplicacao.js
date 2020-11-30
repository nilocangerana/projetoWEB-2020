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
//let user1 = new Usuario("adm", "1", "Adm Um", "Rua 1","111-111","adm1@email.com","admin","admin")

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
//let prod1 = new Produto("produto","1","Casinha de Cachorro","Uma casinha de cachorro de madeira.","\/images/casinha.jpg;\/images/casinha2.png;\/images/casinha3.png","30.00","10","0")
//let prod2 = new Produto("produto","2","Ração","Ração para cachorros.","\/images/racao.jpg;\/images/racao2.png","15.00","5","0")
//let prod3 = new Produto("produto","3","Coleira","Coleira para cachorros.","\/images/coleira.webp;\/images/coleira2.png;\/images/coleira3.png;\/images/coleira4.png","10.00","32","0")
//let prod4 = new Produto("produto","4","Bola de Borracha","Brinquedo bola de borracha.","\/images/brinquedo.webp","10.00","13","0")

//Criação de tres servicos no sistema
//let serv1 = new Produto("servico","5","Banho","Banho no animal.","\/images/banho.png","30.00","0","1")
//let serv2 = new Produto("servico","6","Tosa","Tosa do pelo do animal.","\/images/tosa.png","20.00","0","2")
//let serv3 = new Produto("servico","7","Atendimento Veterinário","Um médico veterinário realiza uma consulta ao animal.","\/images/vet.png","40.00","0","3")

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

/*let car1 = new Carrinho("produto","1","Casinha de Cachorro","30.00","2","0","0")*/

let carrinhoProd = []
let carrinhoServ = []


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

class Compra2{
    constructor(idVenda,nomeCliente,enderecoCliente,numeroCartao,valorTotal) {
        this.idVenda=idVenda;
        this.nomeCliente=nomeCliente;
        this.enderecoCliente=enderecoCliente;
        this.numeroCartao=numeroCartao;
        this.valorTotal=valorTotal;
    }
}

let listaCompras=[]
//let compra1= new Compra2("1","cliente um","rua 1","111-111","70.00")
//criacao de uma compra
//let compra1= new Compra("1","cliente um","rua 1","111-111",[new Carrinho("produto","1","Casinha de Cachorro","30.00","2","0","0"),new Carrinho("produto","3","Coleira","10.00","1","0","0")],[new Carrinho("servico","7","Atendimento Veterinário","40.00","0","2020-10-10 - 10:00","3")],"70.00")
//listaCompras.push(compra1) //adiciona compra na lista


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//Definição das funções:
//Funcao para deslogar do sistema
function deslogar() { 
    localStorage.setItem("usuarioLogado","")
    localStorage.setItem("usuarioLogadoFlag","0")
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

//Carrega usuario logar
if (window.location.href.indexOf('logar') > -1) { 
    usuarioLogado= new Usuario(document.getElementById('getTipo').innerHTML, document.getElementById('getId').innerHTML, document.getElementById('getNome').innerHTML, document.getElementById('getEnd').innerHTML,document.getElementById('getTel').innerHTML,document.getElementById('getEmail').innerHTML,document.getElementById('getNuser').innerHTML,document.getElementById('getPass').innerHTML);
    localStorage.setItem("usuarioLogadoFlag", "1");
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
  }

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

    //Carrega informacoes nos campos da Pagina editInfo.html
    if (window.location.href.indexOf('editInfo.html') > -1) {
        usuarioLogado=JSON.parse(localStorage.getItem("usuarioLogado"));
        document.getElementById("idCliente").value=usuarioLogado.idUsuario
        document.getElementById("nomeCliente").value=usuarioLogado.nome
        document.getElementById("endCliente").value=usuarioLogado.endereco
        document.getElementById("telCliente").value=usuarioLogado.telefone
        document.getElementById("emailCliente").value=usuarioLogado.email
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
            document.getElementById('getV').value=""+calculaTotal(carrinhoProd,carrinhoServ);
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
    usuarioLogado=JSON.parse(localStorage.getItem("usuarioLogado"));
    document.getElementById("nomeCompraInfo").innerHTML="Nome: "+usuarioLogado.nome;

    document.getElementsByClassName("valorTotal")[0].innerHTML="Total: R$ "+calculaTotal(carrinhoProd,carrinhoServ);
    document.getElementById('getNome').value=usuarioLogado.nome;
    document.getElementById('getEnd').value=usuarioLogado.endereco;
    document.getElementById('getV').value=""+calculaTotal(carrinhoProd,carrinhoServ);
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
    usuarioLogado.idUsuario=document.getElementById("idCliente").value
    usuarioLogado.endereco=document.getElementById("endCliente").value
    usuarioLogado.telefone=document.getElementById("telCliente").value
    usuarioLogado.email=document.getElementById("emailCliente").value
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado)); //atualiza usuario logado com as novas informacoes
    alert("Informações Atualizadas.")
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//botao voltar
function btnVoltarAdm(){
    window.location.href = "paginaAdm.html"
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//Pagina gerenciarUserAdm.html: botao salvar
function salvarAttInfoAdm() {
    alert("Informações Atualizadas.")
}

//Pagina gerenciarProdAdm.html: botao salvar
function salvarAttProdAdm() {
    alert("Informações Atualizadas.")
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
function finalizarCompra(listaProdJSON,idcompra) { 
    usuarioLogado=JSON.parse(localStorage.getItem("usuarioLogado"));
    listaProdutosSistema=JSON.parse(listaProdJSON); //carrega lista de produtos do sistema
    let produtosComprados=JSON.parse(localStorage.getItem("carrinhoProd")); //carrega carrinho produtos
    let servicosComprados=JSON.parse(localStorage.getItem("carrinhoServ")); //carrega carrinho servicos
    flagEstoqueProd=0

    for(i=0;i<produtosComprados.length;i++) //passa por todos produtos comprados
    {
        index=procuraProduto(produtosComprados[i].idProduto,listaProdutosSistema);
        if(parseInt(listaProdutosSistema[index].estoque,10)>=parseInt(produtosComprados[i].qtd,10)) //checa se estoque é maior ou igual ao que foi comprado
        {//caso for verdadeiro
            listaProdutosSistema[index].estoque=""+(parseInt(listaProdutosSistema[index].estoque,10)-parseInt(produtosComprados[i].qtd,10)); //remove do estoque
            listaProdutosSistema[index].qtdVendida=""+(parseInt(listaProdutosSistema[index].qtdVendida,10)+parseInt(produtosComprados[i].qtd,10)) //adiciona a quantidade a quantidade vendida do produto
        }
        else
        {
            flagEstoqueProd=1
            i=produtosComprados.length
        }
    }
    
    for(i=0;i<servicosComprados.length;i++) //passa por todos servicos comprados
    {
        index2=procuraProduto(servicosComprados[i].idProduto,listaProdutosSistema)
        listaProdutosSistema[index2].qtdVendida=""+(parseInt(listaProdutosSistema[index2].qtdVendida,10)+1) //adiciona a quantidade a quantidade vendida do servico
    }

    if(produtosComprados.length>0 || servicosComprados.length>0)
    {
    if(flagEstoqueProd==0)
    {
       
        let compra1= new Compra2(idcompra+1,usuarioLogado.nome,usuarioLogado.endereco,document.getElementById("numeroCartao"),""+calculaTotal(produtosComprados,servicosComprados));

        produtosComprados=[]//remove todos itens do carrinho
        servicosComprados=[]
        localStorage.setItem("carrinhoProd",JSON.stringify(produtosComprados));
        localStorage.setItem("carrinhoServ",JSON.stringify(servicosComprados));
        //alert("Compra Realizada. Total: R$ "+compra1.valorTotal);

        document.getElementById('getLista').value=JSON.stringify(listaProdutosSistema);
        document.getElementById('formFinalizaCompra').action='/compra'
        document.getElementById('formFinalizaCompra').submit();
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

function procuraProduto(idProduto,list)
{
    listaProdutosA=list    //carrega lista de produtos do sistema
    for(k=0;k<listaProdutosA.length;k++)
    {
        if(idProduto==listaProdutosA[k].idProduto) //achou produto, retorna index dele na lista
        {
            return k;
        }
    }
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
function addProdCarrinho(){//botao adicionar ao carrinho produto
    let produtoEscolhido=new Produto(document.getElementById('getTipo').innerHTML,document.getElementById('getId').innerHTML,document.getElementById('getNome').innerHTML,document.getElementById('getDesc').innerHTML,document.getElementById('getFoto').innerHTML,document.getElementById('getPreco').innerHTML,document.getElementById('getEstoque').innerHTML,document.getElementById('getTempo').innerHTML)
    produtoEscolhido.qtdVendida=document.getElementById('getQtdVend').innerHTML;
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


function addServCarrinho(){ //botao adicionar ao carrinho serviço
    let produtoEscolhido=new Produto(document.getElementById('getTipo').innerHTML,document.getElementById('getId').innerHTML,document.getElementById('getNome').innerHTML,document.getElementById('getDesc').innerHTML,document.getElementById('getFoto').innerHTML,document.getElementById('getPreco').innerHTML,document.getElementById('getEstoque').innerHTML,document.getElementById('getTempo').innerHTML)
    produtoEscolhido.qtdVendida=document.getElementById('getQtdVend').innerHTML;

    carrinhoServ=JSON.parse(localStorage.getItem("carrinhoServ")); //carrega carrinho

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

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//Funcoes para avancar e voltar fotos dos produtos
function avancaFoto(vetorFotos) {
    vetor = [];
    vetor.push(vetorFotos.split(',')[0]);
    vetor.push(vetorFotos.split(',')[1]);
    for(var y=0;y<document.getElementsByClassName('fotoClass').length;y++)
    {
        if(document.getElementsByClassName('fotoClass')[y].src===('http://localhost:3000'+vetor[0]) || document.getElementsByClassName('fotoClass')[y].src===('http://localhost:3000'+vetor[1]))
        {
            if(vetor[1]!="")
            {
                document.getElementsByClassName('fotoClass')[y].src=vetor[1];
                y=document.getElementsByClassName('fotoClass').length;
            }
        }
    }

}

function voltaFoto(vetorFotos) {
    vetor = [];
    vetor.push(vetorFotos.split(',')[0]);
    vetor.push(vetorFotos.split(',')[1]);

    for(var y=0;y<document.getElementsByClassName('fotoClass').length;y++)
    {
        if(document.getElementsByClassName('fotoClass')[y].src===('http://localhost:3000'+vetor[0]) || document.getElementsByClassName('fotoClass')[y].src===('http://localhost:3000'+vetor[1]))
        {
            document.getElementsByClassName('fotoClass')[y].src=vetor[0];
            y=document.getElementsByClassName('fotoClass').length;
        }
    }
}