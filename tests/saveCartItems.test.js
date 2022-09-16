const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');


localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test('se, ao executar saveCartItems cartItem como argumento, localStorage.setItem é chamado;', () => {
    saveCartItems()
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  test('se, ao executar saveCartItems cartItem como argumento, localStorage.setItem é chamado com dois parâmetros, sendo o primeiro a chave cartItems e o segundo sendo o valor passado como argumento para saveCartItems.' , () => {
    saveCartItems('cartItem', 'obj')
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItem', 'obj');
  });
});
