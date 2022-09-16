const fetchItem = async (ItemID) => {
  if (!ItemID) {
    throw new Error('You must provide an url');
  }
    const url = `https://api.mercadolibre.com/items/${ItemID}`;
    const promise = await fetch(url);
    const result = await promise.json();
    return result;
  };

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
