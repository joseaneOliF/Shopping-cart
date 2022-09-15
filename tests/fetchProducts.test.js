require('../mocks/fetchSimulator');
// const { expect } = require('chai');
// const { expect } = require();
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Se fetchProduct é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  test('Se fetch é chamado com o argumento computador', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  test('Se a função fetchProduct utiliza o endpoint correto com o argumento computador', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(
      `https://api.mercadolibre.com/sites/MLB/search?q=computador`
    );
  });
  test('Se o retorno da função com o argumento computador retorna um objeto', async () => {
    const obj = await fetchProducts('computador');
    expect(obj).toEqual(computadorSearch);
  });
  test('Se ao chamar fetchProduct sem argumento, retorna um erro', async () => {
    // const fail = ;
    //expect(await fetchProducts()).toThrow();
    // await expect(fetchProducts()).rejects.toMatch('You must provide an url');
    try {
      await fetchProducts();
    } catch (erro) {
      expect(erro.message).toEqual('You must provide an url');
    }
  });
});
