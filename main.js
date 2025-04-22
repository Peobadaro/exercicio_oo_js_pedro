// Classe abstrata
class ProdutoApple {
    constructor(nome, modelo, preco) {
      if (this.constructor === ProdutoApple) {
        throw new Error("Não é possível instanciar a classe abstrata ProdutoApple.");
      }
      this.nome = nome;
      this.modelo = modelo;
      this.preco = preco;
    }
  
    // Método abstrato
    exibirDetalhes() {
      throw new Error("O método exibirDetalhes() deve ser implementado nas subclasses.");
    }
  
    promocao(descontoPercentual) {
      const desconto = this.preco * (descontoPercentual / 100);
      const novoPreco = this.preco - desconto;
      console.log(`${this.nome} em promoção: de R$${this.preco.toFixed(2)} por R$${novoPreco.toFixed(2)}`);
    }
  }
  
  // Subclasse iPhone
  class iPhone extends ProdutoApple {
    constructor(modelo, preco, camera, cor) {
      super("iPhone", modelo, preco);
      this.camera = camera;
      this.cor = cor;
    }
  
    exibirDetalhes() {
      console.log(`📱 ${this.nome} ${this.modelo} - Cor: ${this.cor}, Câmera: ${this.camera}MP - Preço: R$${this.preco}`);
    }
  
    modoRetrato() {
      console.log("Modo retrato ativado com inteligência computacional.");
    }
  }
  
  // Subclasse MacBook
  class MacBook extends ProdutoApple {
    constructor(modelo, preco, chip, tela) {
      super("MacBook", modelo, preco);
      this.chip = chip;
      this.tela = tela;
    }
  
    exibirDetalhes() {
      console.log(`💻 ${this.nome} ${this.modelo} - Chip: ${this.chip}, Tela: ${this.tela} - Preço: R$${this.preco}`);
    }
  
    modoPerformance() {
      console.log("Modo desempenho ativado: máximo poder de processamento.");
    }
  }
  
  // Instâncias
  const iphone14 = new iPhone("14 Pro Max", 9899.00, 48, "Space Black");
  const macbookAir = new MacBook("Air M2", 10499.00, "M2", "13.6 polegadas");
  const macbookPro = new MacBook("Pro M3", 17999.00, "M3 Pro", "16 polegadas");
  
  // Demonstração
  console.log("\n📦 Produtos Apple:");
  iphone14.exibirDetalhes();
  macbookAir.exibirDetalhes();
  macbookPro.exibirDetalhes();
  
  console.log("\n🎯 Testando métodos exclusivos:");
  iphone14.modoRetrato();
  macbookPro.modoPerformance();
  
  console.log("\n💸 Aplicando promoções:");
  iphone14.promocao(10);
  macbookAir.promocao(5);
  
  // Tentando instanciar a classe abstrata (gera erro)
  try {
    const produto = new ProdutoApple("Genérico", "X", 2999);
  } catch (erro) {
    console.log("\n⚠️ Erro esperado:", erro.message);
  }
  