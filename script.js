// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições!

// const getSavedCartItems = require('./helpers/getSavedCartItems');

// const saveCartItems = require('./helpers/saveCartItems');

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!
const cartContainer = document.querySelector('.cart__items');
/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(
    createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'),
  );

  return section;
};

const productList = async () => {
  const products = document.querySelector('.items');
  const array = await fetchProducts('computador');
  array.results.forEach((element) =>
    products.appendChild(createProductItemElement(element)));
  // console.log(array);
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
// const getIdFromProductItem = (product) =>
//   product.querySelector('span.item_id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const cartItemClickListener = (event) => { // função que remove os itens do carrinho
  event.target.remove();
  saveCartItems(cartContainer.innerHTML);
};
const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
 
const createItem = async () => {
  const buttons = document.querySelectorAll('.item__add');// recupera o botão
  // console.log(buttons);
  buttons.forEach((button) => { // para cada botão adiciona um evento de clique
    // console.log('button');
    button.addEventListener('click', async (event) => {
      const itemId = event.target.parentNode.firstChild; // identifica o alvo que é o endpoint da API
      const data = await fetchItem(itemId.innerText); // conecta o endpoint com a API e insere o texto na página
      // console.log(data);
      cartContainer.appendChild(createCartItemElement(data));// coloca o evento como filho da <ol> e chama a função que cria os filhos (<li>) e passa como argumento a variável que contém o endpoint.
      // console.log(createCartItemElement(data).innerHTML);
      saveCartItems(cartContainer.innerHTML);// adiciona as ol's dentro do lacalSotrage
    });
  });
};

// const cartItems = document.querySelectorAll('.cart__item');
//   cartItems.forEach((item) => {
//     item.addEventListener('click', cartItemClickListener);
//   });

const emptyCart = () => {
  emptyBtn = document.querySelector('.empty-cart');
  emptyBtn.addEventListener('click', () => {
    cartContainer.innerText = '';
  });
};
emptyCart();

const removeLoadingMessage = () => {
  const removeLoading = document.querySelector('.loading');
  removeLoading.remove();
};

window.onload = async () => {
  await productList();
  await createItem();
  removeLoadingMessage();
  cartContainer.innerHTML = getSavedCartItems();// salva as ol's dentro do localStorage
  // localStorage resolvido com a ajuda do Sérgio Francisco - Summer
  // preciso fazer um querySelectorAll para pegar todas as li's
  // criando um laço de repetição eu irei reatribuir os eventos ( o mesmo evento de remoção do carrinho)
  const cartItems = document.querySelectorAll('.cart__item'); // recupera as li's para serem removidas do localStorage.
  cartItems.forEach((item) => { // percorre todas as li's
    item.addEventListener('click', cartItemClickListener); // adiciona o evento em cada li. Tudo dentro do onload para ser feito quando a página é carregada.
  });// Feito com a orientação do Josiel Costa
};
