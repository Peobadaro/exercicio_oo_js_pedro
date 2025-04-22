// Classe base (abstração)
class Produto {
    constructor(nome, preco, descricao) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }

    exibirDetalhes() {
        return `
            <div class="product-card">
                <h2>${this.nome}</h2>
                <p>${this.descricao}</p>
                <p class="price">R$ ${this.preco.toFixed(2)}</p>
            </div>
        `;
    }
}

// Classe herdeira 1
class DispositivoEletronico extends Produto {
    constructor(nome, preco, descricao, memoria, processador) {
        super(nome, preco, descricao);
        this.memoria = memoria;
        this.processador = processador;
    }

    exibirDetalhes() {
        return `
            <div class="product-card">
                <h2>${this.nome}</h2>
                <p>${this.descricao}</p>
                <p>Memória: ${this.memoria}</p>
                <p>Processador: ${this.processador}</p>
                <p class="price">R$ ${this.preco.toFixed(2)}</p>
            </div>
        `;
    }
}

// Classe herdeira 2
class Acessorio extends Produto {
    constructor(nome, preco, descricao, compatibilidade) {
        super(nome, preco, descricao);
        this.compatibilidade = compatibilidade;
    }

    exibirDetalhes() {
        return `
            <div class="product-card">
                <h2>${this.nome}</h2>
                <p>${this.descricao}</p>
                <p>Compatível com: ${this.compatibilidade}</p>
                <p class="price">R$ ${this.preco.toFixed(2)}</p>
            </div>
        `;
    }
}

// Criando instâncias
const macbook = new DispositivoEletronico(
    "MacBook Pro",
    19999.99,
    "O notebook mais potente da Apple",
    "16GB",
    "M2 Pro"
);

const iphone = new DispositivoEletronico(
    "iPhone 15 Pro",
    9999.99,
    "O smartphone mais avançado da Apple",
    "256GB",
    "A17 Pro"
);

const airpods = new Acessorio(
    "AirPods Pro",
    2499.99,
    "Fones de ouvido sem fio com cancelamento ativo de ruído",
    "iPhone, iPad, Mac"
);

// Exibindo os produtos na página
const container = document.getElementById('products-container');
const produtos = [macbook, iphone, airpods];

produtos.forEach(produto => {
    container.innerHTML += produto.exibirDetalhes();
}); 