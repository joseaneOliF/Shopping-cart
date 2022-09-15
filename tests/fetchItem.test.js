require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('Se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  test('Se fetch é chamado com o argumento MLB1615760527', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  test('Se a função fetchItem utiliza o endpoint correto com o argumento MLB1615760527', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(
      `https://api.mercadolibre.com/items/MLB1615760527`
    );
  });
  test('Se o retorno da função com o argumento MLB1615760527 retorna um objeto', async () => {
    const obj = await fetchItem('MLB1615760527');
    expect(obj).toEqual(item);
  });
  test('Se ao chamar fetchItem sem argumento, retorna um erro', async () => {
    try {
      await fetchItem();
    } catch (erro) {
      expect(erro.message).toEqual('You must provide an url');
    }
  });
});
