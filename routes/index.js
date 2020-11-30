//Nome: Nilo Conrado Messias Alves Cangerana    -   Número USP: 9805362
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dbprojeto');
var Schema = mongoose.Schema;

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//Rotas do Banco de dados mongoose XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
var usuariosSchema = new Schema({
  tipo: {type:String, required:true},
  idUsuario: {type:Number, required:true, unique: true},
  nome: {type:String, required:true},
  endereco: {type:String, required:true},
  telefone: String,
  email: String,
  nomeUsuario: {type:String, required:true, unique: true},
  senha: {type:String, required:true}
}, {collection: 'dadosUsuarios'});


var produtosSchema = new Schema({
  tipo: {type:String, required:true},
  idProduto: {type:Number, required:true, unique: true},
  nome: {type:String, required:true},
  descricao: {type:String, required:true},
  foto: String,
  preco: {type:String, required:true},
  estoque: Number,
  tempo: String,
  qtdVendida:  {type:Number, default: 0}
}, {collection: 'dadosProdutos'});


var vendasSchema = new Schema({
  idVenda: {type:Number, required:true, unique: true},
  nomeCliente: {type:String, required:true},
  enderecoCliente: {type:String, required:true},
  numeroCartao: {type:String, required:true},
  valorTotal: String
}, {collection: 'dadosVendas'});


var UserData = mongoose.model('UserData',usuariosSchema)
var ProductData = mongoose.model('ProductData',produtosSchema)
var VendaData = mongoose.model('VendaData',vendasSchema)

//Rota para carregar lista de usuarios do sistema
router.get('/listaUserAdm.html', function(req, res, next) {
  UserData.find().then(function(doc) {
    res.render('listaUserAdm',{resDoc: doc});
  });
});

//Rota para carregar lista de produtos/servicos do sistema
router.get('/listaProdAdm.html', function(req, res, next) {
  ProductData.find().then(function(doc) {
    res.render('listaProdAdm',{resDoc: doc});
  });
});

//Rota para pagina paginaServicos
router.get('/paginaServicos.html', function(req, res, next) {
  ProductData.find().then(function(doc) {
    res.render('paginaServicos',{resDoc: doc});
  });
});

//Rota para pagina paginaProdutos
router.get('/paginaProdutos.html', function(req, res, next) {
  ProductData.find().then(function(doc) {
    res.render('paginaProdutos',{resDoc: doc});
  });
});

//Rota para inserir usuario no banco
router.post('/insertUser', function(req, res, next) {
  var novoUser = {
    tipo: req.body.tipoUser,
    idUsuario: req.body.fid,
    nome: req.body.fname,
    endereco: req.body.fend,
    telefone: req.body.ftel,
    email: req.body.femail,
    nomeUsuario: req.body.fus,
    senha: req.body.fps
  };
  var data = new UserData(novoUser);
  data.save(function(err) {
      if (err) return res.status(400).send('Erro: ID ou nome de usuario inválidos');
      res.redirect('/paginaAdm.html');
  });
});

//Rota para inserir produto no banco
router.post('/insertProduct', function(req, res, next) {
  var novoProduct = {
    tipo: req.body.tipoSP,
    idProduto: req.body.fpsid,
    nome: req.body.fname,
    descricao: req.body.fdescricao,
    foto:req.body.ffoto,
    preco: req.body.fpreco,
    estoque: req.body.festoq,
    tempo: req.body.ftempo
  };
  var data = new ProductData(novoProduct);
  data.save(function(err) {
    if (err) return res.status(400).send('Erro: ID inválido');
    res.redirect('/paginaAdm.html');
});
});

//Atualizar usuario no banco
router.post('/updateUser', function(req, res, next) {
  UserData.findOne({ idUsuario: req.body.fid }, function(err,doc) {
    if(err) {
      console.error('Erro, usuario nao encontrado');
    }
    doc.tipo= req.body.tipoUser,
    doc.idUsuario= req.body.fid,
    doc.nome= req.body.fname,
    doc.endereco= req.body.fend,
    doc.telefone= req.body.ftel,
    doc.email= req.body.femail,
    doc.nomeUsuario= req.body.fus,
    doc.senha= req.body.fps
    doc.save();
  })
  res.redirect('/listaUserAdm.html');
}); 

//Atualizar usuario no banco
router.post('/updateUserEdit', function(req, res, next) {
  UserData.findOne({ idUsuario: req.body.fid }, function(err,doc) {
    if(err) {
      console.error('Erro, usuario nao encontrado');
    }
    doc.nome= req.body.fname,
    doc.endereco= req.body.fend,
    doc.telefone= req.body.ftel,
    doc.email= req.body.femail
    doc.save();
  })
  res.redirect('/home.html');
}); 

//Atualizar produto no banco
router.post('/updateProduct', function(req, res, next) {
  ProductData.findOne({ idProduto: req.body.fpsid }, function(err,doc) {
    if(err) {
      console.error('Erro, usuario nao encontrado');
    }
    doc.tipo= req.body.tipoSP,
    doc.idProduto= req.body.fpsid,
    doc.nome= req.body.fname,
    doc.descricao= req.body.fdescricao,
    doc.foto= req.body.ffoto,
    doc.preco= req.body.fpreco,
    doc.estoque= req.body.festoq,
    doc.tempo= req.body.ftempo,
    doc.save();
  })
  res.redirect('/listaProdAdm.html');
}); 

//Rota para pagina deletar usuario
router.post('/deleteUser/:idUser', function(req, res, next) {
  UserData.findOneAndRemove({ idUsuario: req.params.idUser },function(err,doc) {
    if(err){
      console.error('erro');
    }
  });
  res.redirect('/listaUserAdm.html');
});


//Rota para pagina deletar produto
router.post('/deleteProd/:idProd', function(req, res, next) {
  ProductData.findOneAndRemove({ idProduto: req.params.idProd },function(err,doc) {
    if(err){
      console.error('erro');
    }
  });
  res.redirect('/listaProdAdm.html');
});

//Rota para realizar login
router.post('/logar', function(req, res, next) {
  UserData.findOne({ nomeUsuario: req.body.fuser, senha: req.body.fpass}, function(err,doc) {
    if(err) { 
      return res.status(400).send('Erro na busca do banco de dados.'); 
    }
    else
    {
      if(doc==null)
      {
        return res.status(400).send('Erro: Nome de usuário ou senha inválidos.'); 
      }

      if(doc.tipo=='adm') { 
        res.render('paginaAdm',{resDoc: doc.toObject()});
      }
      else {
        res.render('home',{resDoc: doc.toObject()});
      }
    }
  })
});


//Finaliza compra
router.post('/compra', function(req, res, next) {
  var novaVenda = {
    idVenda: req.body.getid,
    nomeCliente: req.body.getn,
    enderecoCliente: req.body.getend,
    numeroCartao: req.body.card,
    valorTotal: req.body.getvalor
  };
  var data = new VendaData(novaVenda);

  console.log(req.body.card);
  if(data.numeroCartao!='') {
  ProductData.find(function(err,doc) { //atualiza estoque
    if(err) {
      console.error('Erro, produtos não encontrados');
    }
    for(var i=0;i<doc.length;i++)
    {
      doc[i].estoque=parseInt(JSON.parse(req.body.getlista)[i].estoque,10);
      doc[i].qtdVendida=parseInt(JSON.parse(req.body.getlista)[i].qtdVendida,10);
      doc[i].save(function(err) {
        if (err) console.error('Erro no banco de dados');
    });
    }
  });
}

  data.save(function(err) { //adiciona uma venda ao sistema
    if (err) {
      return res.status(400).send('Erro: Cartão inválido ou Compra inválida');
    }
    res.redirect('/home.html');
});
  //res.redirect('/home.html');
});

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//Rota para pagina home
router.get('/home.html', function(req, res, next) {
  res.render('home',{resDoc: '-'});
});

router.get('/', function(req, res, next) {
  res.render('home',{resDoc: '-'});
});

//Rota para pagina login
router.get('/login.html', function(req, res, next) {
  res.render('login');
});

//Rota para pagina paginaAdm
router.get('/paginaAdm.html', function(req, res, next) {
  res.render('paginaAdm',{resDoc: '-'});
});

//Rota para pagina cadastrarProdAdm
router.get('/cadastrarProdAdm.html', function(req, res, next) {
  res.render('cadastrarProdAdm');
});

//Rota para pagina cadastrarUserAdm
router.get('/cadastrarUserAdm.html', function(req, res, next) {
  res.render('cadastrarUserAdm');
});

//Rota para pagina carrinho
router.get('/carrinho.html', function(req, res, next) {
  ProductData.find().lean().then(function(doc) {
    VendaData.find().then(function(doc2) {
      res.render('carrinho',{resDoc: JSON.stringify(doc), resDoc2: doc2.length});
    });
  });

});

//Rota para pagina editInfo
router.get('/editInfo.html', function(req, res, next) {
  res.render('editInfo');
});

//Rota para pagina gerenciarUserAdm
router.get('/gerenciarUserAdm.html/:idUser', function(req, res, next) {
  UserData.find({ idUsuario: req.params.idUser }).then(function(doc) {
    res.render('gerenciarUserAdm',{resDoc: doc});
  });
});

//Rota para pagina gerenciarProdAdm
router.get('/gerenciarProdAdm.html/:idProd', function(req, res, next) {
  ProductData.find({ idProduto: req.params.idProd }).then(function(doc) {
    res.render('gerenciarProdAdm',{resDoc: doc});
  });
});

//Rota para pagina produto
router.get('/produto.html/:idProd', function(req, res, next) {
  ProductData.find({ idProduto: req.params.idProd }).then(function(doc) {
    res.render('produto',{resDoc: doc});
  });
});

//Rota para pagina servico
router.get('/servico.html/:idProd', function(req, res, next) {
  ProductData.find({ idProduto: req.params.idProd }).then(function(doc) {
    res.render('servico',{resDoc: doc});
  });
});


module.exports = router;
