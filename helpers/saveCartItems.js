const saveCartItems = (obj) => localStorage.setItem('cartItem', obj);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
