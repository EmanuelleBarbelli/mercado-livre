const produtos = [
     {
        titulo: "Relógio",
        preco: "R$ 320",
        imagem: "relogio.jfif",
        oferta: "OFERTA DO DIA",
        frete: "Chegará grátis amanhã",
      },

      {
        titulo: "Bola de volei",
        preco: "R$ 29,99",
        imagem: "bola de volei.jfif",
        oferta: "OFERTA DO DIA",
        frete: "Chegará grátis amanhã",
      },

      {
        titulo: "Fone",
        preco: "R$ 102",
        imagem: "fone.png",
        oferta: "OFERTA DO DIA",
        frete: "Chegará grátis amanhã",
      },

    {
        titulo: "Perfume",
        preco: "R$ 220",
        imagem: "perfume.png",
        oferta: "OFERTA DO DIA",
        frete: "Chegará grátis amanhã",
      },
      {
        titulo: "Tenis",
        preco: "R$ 500",
        imagem: "tenis.jpg",
        oferta: "OFERTA DO DIA",
        frete: "Chegará grátis amanhã",
      },
      {
        titulo: "Corset",
        preco: "R$ 60",
        imagem: "corset.jfif",
        oferta: "OFERTA DO DIA",
        frete: "Chegará grátis amanhã",
      }
    ];

    const divProdutos = document.getElementById("produtos1");

    for(let i = 0; i < produtos.length; i++) {
      divProdutos.innerHTML += `
        <div class="produto">
          <img src="${produtos[i].imagem}" alt="${produtos[i].titulo}">
          <span class="oferta">${produtos[i].oferta}</span>
          <div class="titulo">${produtos[i].titulo}</div>
          <div class="preco">${produtos[i].preco}</div>
          <div class="frete"><p class="texto">${produtos[i].frete}</p><img style="width:40px; height:20px; margin-left: 10px"  src="Imagens/full.png"></div>
        </div>
      `;
    }

