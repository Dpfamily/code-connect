type Podruto = {
    preco: number;
    nome: string;
};

const carrinho: Podruto[] = [
    {
        nome: "Cabelo Jumbo",
        preco: 24.9,
    },
    {
        nome: "Cabelo Dread",
        preco: 14.9,
    },
];

carrinho.map((p) => {
    const elCarrinho = document.getElementById("carrinho");
    if (elCarrinho){
        elCarrinho.innerHTML 
    }
}
)