// Array de objetos representando os produtos disponíveis
const produtos = [
    {
      nome: "Hambúrguer",
      descricao: "Pão com gergelim, hambúrguer de carne bovina, alface, tomate, queijo e molho especial.",
      preco: 12.50,
      imagem: "https://meucarrinho.delivery/media/4698/hamburguer.jpg"
    },
    {
      nome: "Batata frita",
      descricao: "Batata cortada em palitos, crocante e sequinha.",
      preco: 7.00,
      imagem: "https://meucarrinho.delivery/media/4221/batata-frita.jpg"
    },
    {
      nome: "Refrigerante Coca-Cola",
      descricao: "Refrigerante à base de cola.",
      preco: 5.00,
      imagem: "https://meucarrinho.delivery/media/4166/coca-cola-lata-350ml.jpg"
    },
    {
      nome: "Hot Dog",
      descricao: "cooked sausage, hot dog bun, ketchup, mustard, chopped onion",
      preco: 12.50,
      imagem: "https://meucarrinho.delivery/media/4698/hamburguer.jpg"
    }
  ];
  
  // Função para renderizar os produtos na página
  function renderizarProdutos() {
    const listaProdutos = document.querySelector("#produtos ul");
    listaProdutos.innerHTML = ""; // Limpa a lista de produtos
    
    // Loop pelos produtos e cria um item na lista para cada um
    produtos.forEach((produto) => {
      const itemProduto = `
        <li>
          <figure>
            <img src="${produto.imagem}" alt="${produto.nome}">
            <figcaption>
              <h3>${produto.nome}</h3>
              <p>${produto.descricao}</p>
              <p>R$ ${produto.preco.toFixed(2)}</p>
              <button onclick="adicionarAoCarrinho(${produto.preco})">Adicionar ao carrinho</button>
            </figcaption>
          </figure>
        </li>
      `;
      listaProdutos.innerHTML += itemProduto;
    });
  }
  
  // Função para adicionar um produto ao carrinho
  function adicionarAoCarrinho(precoProduto) {
    const valorTotal = document.querySelector("#valor-total");
    const valorAtual = parseFloat(valorTotal.textContent.replace("R$ ", ""));
    const novoValor = valorAtual + precoProduto;
    valorTotal.textContent = `R$ ${novoValor.toFixed(2)}`;
  }
  
  // Chama a função de renderizar os produtos para exibi-los na página
  renderizarProdutos();