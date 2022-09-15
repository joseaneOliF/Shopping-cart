const fetchProducts = async (computador) => {
  if (!computador) {
    throw new Error('You must provide an url');
  }
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;
    const promise = await fetch(url);
    const result = await promise.json();
    return result;
  };

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
