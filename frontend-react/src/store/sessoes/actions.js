import {REQUEST, SUCCESS, FAILURE, createRequestType, action} from '../actions';

export const LISTAR = createRequestType('SESSOES_GRID_LISTAR');
export const SALVAR = createRequestType('SESSOES_GRID_SALVAR');
export const EXCLUIR = createRequestType('SESSOES_GRID_EXCLUIR');
export const ABRIR = 'SESSOES_GRID_ABRIR';
export const FECHAR = 'SESSOES_GRID_FECHAR';
export const LIMPAR_ERRO = 'SESSOES_GRID_LIMPAR_ERRO';

export const listar = {
  request: () => action(LISTAR[REQUEST]),
  success: (lista) => action(LISTAR[SUCCESS], lista),
  failure: (erro) => action(LISTAR[FAILURE], {erro}),
};

export const salvar = {
  request: (sessao) => action(SALVAR[REQUEST], sessao),
  success: (sessao) => action(SALVAR[SUCCESS], sessao),
  failure: (erro) => action(SALVAR[FAILURE], {erro}),
};

export const excluir = {
  request: (id) => action(EXCLUIR[REQUEST], {id}),
  success: (id) => action(EXCLUIR[SUCCESS], {id}),
  failure: (erro) => action(EXCLUIR[FAILURE], {erro}),
};

export const abrir = (sessao) => action(ABRIR, sessao);

export const fechar = () => action(FECHAR);

export const limparErro = () => action(LIMPAR_ERRO);
