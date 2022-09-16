const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('se, ao executar getSavedCartItemsv cartItem como argumento, localStorage.getItem é chamado;', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  test('se, ao executar getSavedCartItems cartItem como argumento, localStorage.getItem é chamado com dois parâmetros, sendo o primeiro a chave cartItems e o segundo sendo o valor passado como argumento para getSavedCartItems.' , () => {
    getSavedCartItems('obj')
    expect(localStorage.getItem).toHaveBeenCalledWith('obj');
  });
});
