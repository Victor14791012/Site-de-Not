class Produto {
  constructor(nome, data_de_cadastro, descricao, preco) {
    if (!nome || !data_de_cadastro || !descricao || preco === undefined) {
      throw new Error("Faltam informações para criar o produto");
    }

    this.nome = nome;
    this.data_de_cadastro = data_de_cadastro;
    this.descricao = descricao;
    this.preco = preco;
  }

  mostrarProduto() {
    try {
      let produto = document.createElement("div");
      produto.className = "col-xl-2 zoom m-2 text-center";
      produto.id = "b";

      let nome2 = document.createElement("h2");
      nome2.textContent = this.nome;

      let resumo2 = document.createElement("p");
      resumo2.textContent = this.descricao;

      produto.appendChild(nome2);
      produto.appendChild(resumo2);

      const listaProdutos = document.getElementById("lista-produtos");
      if (!listaProdutos) {
        throw new Error("Elemento 'lista-produtos' não encontrado");
      }

      listaProdutos.appendChild(produto);
    } catch (error) {
      console.log("Erro ao exibir o produto:");
    }
  }
}

class ProdutoDestaque extends Produto {
  constructor(nome, data_de_cadastro, descricao, preco, imagem_destaque) {
    super(nome, data_de_cadastro, descricao, preco);
    if (!imagem_destaque) {
      throw new Error("Faltam informações para criar o produto destaque");
    }
    this.imagem_destaque = imagem_destaque;
  }

  mostrarProdutoDestaque() {
    try {
      let produtoDestaque = document.createElement("div");
      produtoDestaque.className = "col-xl-2 m-2 banner text-center";
      produtoDestaque.id = "a";

      let imagem = document.createElement("img");
      imagem.className = "img-fluid";
      imagem.src = this.imagem_destaque;
      imagem.alt = this.nome;

      let nome = document.createElement("h2");
      nome.textContent = this.nome;

      let resumo = document.createElement("p");
      resumo.className = "resto col-xl-2 m-2 banner text-center";
      resumo.textContent = this.descricao;

      produtoDestaque.appendChild(imagem);
      produtoDestaque.appendChild(nome);
      produtoDestaque.appendChild(resumo);

      const listaProdutosDes = document.getElementById("lista-produtosDes");
      if (!listaProdutosDes) {
        throw new Error("Elemento 'lista-produtosDes' não encontrado");
      }

      listaProdutosDes.appendChild(produtoDestaque);
    } catch (error) {
      console.log("Erro ao exibir o produto em destaque:");
    }
  }
}


let produto1 = new ProdutoDestaque("Notebook Samsung", "22-04-2023", " Core i5-1135G7 8GB 256GB SSD Tela Full HD 15.6 Windows 11 Book", 19.99, "https://m.media-amazon.com/images/I/51WG6cmUhyL._AC_SL1000_.jpg");
produto1.mostrarProdutoDestaque();



let notebook1 = new Produto("Notebook Samsung",  "22-04-2023", "Core i5-1135G7 8GB 256GB SSD Tela Full HD 15.6 Windows 11 Book", 19.99);
notebook1.mostrarProduto();

let notebook2 = new Produto("Notebook Dell", "22-04-2023", "Core i7-1165G7 16GB 512GB SSD Tela Full HD 15.6 Windows 11", 24.99);
notebook2.mostrarProduto();

let notebook3 = new Produto("Notebook HP", "22-04-2023", "AMD Ryzen 5 4500U 8GB 256GB SSD Tela HD 15.6 Windows 11", 17.99);
notebook3.mostrarProduto();

let notebook4 = new Produto("Notebook Galaxy Book3 Ultra", "22-04-2023", "Processador Intel Core, tela 3K AMOLED, placa de vídeo NVIDIA, armazenamento variável", 99.99);
notebook4.mostrarProduto();

let notebook5 = new Produto("Notebook Samsung Notebook 9 Pro", "22-04-2023", "2 em 1 com tela sensível ao toque, processador Intel Core i7 de 8ª geração, 13.3 FHD LED touchscreen ", 99.99);
notebook5.mostrarProduto();
