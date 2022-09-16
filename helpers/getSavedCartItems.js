const getSavedCartItems = (objeto) => localStorage.getItem(objeto);

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
