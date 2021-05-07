import {REQUEST, SUCCESS, FAILURE, createRequestType, action} from '../actions';

export const LISTAR = createRequestType('CINEMAS_LISTAR');
export const SALVAR = createRequestType('CINEMAS_SALVAR');
export const EXCLUIR = createRequestType('CINEMAS_EXCLUIR');
export const ABRIR = 'CINEMAS_ABRIR';
export const FECHAR = 'CINEMAS_FECHAR';
export const LIMPAR_ERRO = 'CINEMAS_LIMPAR_ERRO';

export const listar = {
  request: () => action(LISTAR[REQUEST]),
  success: (lista) => action(LISTAR[SUCCESS], lista),
  failure: (erro) => action(LISTAR[FAILURE], {erro}),
};

export const salvar = {
  request: (cinema) => action(SALVAR[REQUEST], cinema),
  success: (cinema) => action(SALVAR[SUCCESS], cinema),
  failure: (erro) => action(SALVAR[FAILURE], {erro}),
};

export const excluir = {
  request: (id) => action(EXCLUIR[REQUEST], {id}),
  success: (id) => action(EXCLUIR[SUCCESS], {id}),
  failure: (erro) => action(EXCLUIR[FAILURE], {erro}),
};

export const abrir = (cinema) => action(ABRIR, cinema);

export const fechar = () => action(FECHAR);

export const limparErro = () => action(LIMPAR_ERRO);
