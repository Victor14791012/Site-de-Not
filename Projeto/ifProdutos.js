class Produto{

    constructor(nome,data_de_cadastro , descricao , preco){
    this.nome = nome ;
    this.data_de_cadastro = data_de_cadastro ;
    this.descricao = descricao ;
    this. preco =  preco
    
    }
    

    mostrarProduto() {
      let produto = document.createElement("div");
      produto.className = "col-xl-2 zoom m-2 text-center ";
      produto.id = "b";
      
      let nome2 = document.createElement("h2");
      nome2.textContent = this.nome;
      
      let resumo2 = document.createElement("p");
      resumo2.textContent = this.descricao;
      
      produto.appendChild(nome2);
      produto.appendChild(resumo2);
      
      document.getElementById("lista-produtos").appendChild(produto);
    }
    
}


    class ProdutoDestaque extends Produto {
        constructor(nome,data_de_cadastro , descricao , preco, imagem_destaque) {
          super(nome,data_de_cadastro , descricao , preco);
          this.imagem_destaque = imagem_destaque;
        }

      

        mostrarProdutoDestaque() {
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
        
         

        


        
    
          document.getElementById("lista-produtosDes").appendChild(produtoDestaque);
        }
        

          

          


}

let produto1 = new ProdutoDestaque("Notebook Samsung", "22-04-2023", " Core i5-1135G7 8GB 256GB SSD Tela Full HD 15.6 Windows 11 Book", 19.99, "https://m.media-amazon.com/images/I/51WG6cmUhyL._AC_SL1000_.jpg");
produto1.mostrarProdutoDestaque();


let produto3 = new Produto("Notizinho", "22-04-2023" ,  " Core ", 19.99);
produto3.mostrarProduto()
produto3.mostrarProduto()
produto3.mostrarProduto()
produto3.mostrarProduto()
produto3.mostrarProduto()
produto3.mostrarProduto()
