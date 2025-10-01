// Pega todos os checkboxes de categoria e idade
const filtrosCategoria = document.querySelectorAll('.filtro-categoria');
const filtrosIdade = document.querySelectorAll('.filtro-idade');
const produtos = document.querySelectorAll('.produto');

// Função para filtrar os produtos
function filtrar() {
    let categoriasSelecionadas = [];
    let idadesSelecionadas = [];

    // Ver quais categorias estão marcadas
    filtrosCategoria.forEach(f => {
        if (f.checked) categoriasSelecionadas.push(f.value);
    });

    // Ver quais idades estão marcadas
    filtrosIdade.forEach(f => {
        if (f.checked) idadesSelecionadas.push(f.value);
    });

    // Mostrar ou esconder produtos
    produtos.forEach(produto => {
        let categoria = produto.dataset.categoria;
        let idade = produto.dataset.idade;

        // Regra: produto aparece se bater com algum filtro OU se não tiver filtro marcado
        let categoriaOk = categoriasSelecionadas.length === 0 || categoriasSelecionadas.includes(categoria);
        let idadeOk = idadesSelecionadas.length === 0 || idadesSelecionadas.includes(idade);

        if (categoriaOk && idadeOk) {
            produto.style.display = "block";
        } else {
            produto.style.display = "none";
        }
    });
}

// Adiciona evento nos checkboxes
filtrosCategoria.forEach(f => f.addEventListener('change', filtrar));
filtrosIdade.forEach(f => f.addEventListener('change', filtrar));
