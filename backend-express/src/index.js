'use strict';

const db = require('./db');
const filmeModel = require('./models/filme');
const cinemaModel = require('./models/cinema');
const sessoesModel = require('./models/sessoes');
const api = require('./api');
const http = require('http');

db.connect()
    .then(() => {
      filmeModel.create([
        { nome: 'Aladdin', genero: 'Fantasia, Romance', duracao: 130, classificacao: 10, lancamento: new Date(2019, 5, 23), sinopse: 'Um jovem humilde descobre uma lâmpada mágica' },
        { nome: 'Brightburn - Filho das Trevas', genero: 'Drama, Ficção Científica', duracao: 91, classificacao: 16 , lancamento: new Date(2019, 5, 23), sinopse: 'Quando uma criança alienígena cai no terreno de um casal da parte rural dos Estados Unidos' },
        { nome: 'Godzilla II: Rei dos Monstros', genero: 'Fantasia, Ficção Científica', duracao: 132, classificacao: 12, lancamento: new Date(2019, 5, 30), sinopse: 'Na sequência do sucesso mundial de "Godzilla" e "Kong: A Ilha da Caveira"' },
        { nome: 'Hellboy', genero: 'Supernatural, Fantasia', duracao: 148, classificacao: 16, lancamento: new Date(2019, 5, 16), sinopse: 'Uma antiga feiticeira volta à vida decidida a vingar-se de uma traição do passado. Dividido entre o mundo sobrenatural e humano' },
        { nome: 'Kardec: A História por Trás do Nome', genero: 'Drama, Religião', duracao: 110, classificacao: 12, lancamento: new Date(2019, 5, 16), sinopse: 'A história do educador francês Hypolite Leon Denizard Rivail' },
        { nome: 'Rocketman', genero: 'Drama / Biografia', duracao: 121, classificacao: 16, lancamento: new Date(2019, 5, 30), sinopse: 'Extremamente talentoso mas muito tímido' },
        { nome: 'Vingadores: Ultimato', genero: 'Fantasia / Filme', duracao: 182, classificacao: 12, lancamento: new Date(2019, 4, 25), sinopse: 'Após Thanos eliminar metade das criaturas vivas' }]);
    })
    .then(() => {
      cinemaModel.create([
        { nome: 'Cinemax', cidade: 'Indaiatuba', estado: 'São Paulo'},
        { nome: 'Topázio', cidade: 'Indaiatuba', estado: 'São Paulo'},
        { nome: 'Cinépolis', cidade: 'Campinas', estado: 'São Paulo'},
        { nome: 'Cinemark', cidade: 'Campinas', estado: 'São Paulo'}
      ]);
    })
    .then(() => {
      sessoesModel.create([
        { 
        cinema: '6092d6f1a9d48a1c44186d79', filme: '6092d6f1a9d48a1c44186d72', 
        domingo: true,
        segunda: false,
        terca: false,
        quarta: false,
        quinta: false,
        sexta: true,
        sabado: true,
        quinze: true,
        dezoito: true,
        vinteUm: true
      }
      ]);
    });

const server = http.createServer(api);
server.setTimeout(60 * 60 * 1000);
server.listen(8080);
