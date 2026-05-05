// ============================================================
// APP.JS - Arquivo principal de dados e lógica do Mundo JJ
// ============================================================

const dados = {
  "tecnicas": [
    {
      "id": 1,
      "nome": "Arm Lock",
      "descricao": "Finalização clássica que hiperextende o cotovelo do adversário.",
      "conteudo": "O Arm Lock, também chamado de Juji-Gatame, é uma das finalizações mais tradicionais do Jiu-Jitsu. A técnica consiste em prender o braço do adversário entre as coxas e aplicar pressão sobre o cotovelo, forçando a hiperextensão da articulação. Pode ser aplicado a partir de diversas posições, como a guarda, a montada e o cem quilos.",
      "categoria": "Finalização",
      "dificuldade": "Intermediário",
      "destaque": true,
      "data": "2025-01-10",
      "imagem_principal": "assets/img/armlock.png",
      "fotos": [
        { "id": 1, "titulo": "Arm Lock pela guarda",    "imagem": "assets/img/armlock.png" },
        { "id": 2, "titulo": "Arm Lock pela montada",   "imagem": "assets/img/armlock.png" },
        { "id": 3, "titulo": "Finalização do Arm Lock", "imagem": "assets/img/armlock.png" }
      ]
    },
    {
      "id": 2,
      "nome": "Arco e Flecha",
      "descricao": "Estrangulamento poderoso aplicado com a lapela do kimono.",
      "conteudo": "O Arco e Flecha é um dos estrangulamentos mais eficientes do Jiu-Jitsu com kimono. A técnica utiliza a lapela do adversário para criar pressão nas artérias do pescoço. Geralmente é aplicado a partir das costas do oponente, usando as pernas para controlar o corpo e os braços para tracionar a lapela. É considerada uma das finalizações mais elegantes da arte.",
      "categoria": "Estrangulamento",
      "dificuldade": "Avançado",
      "destaque": true,
      "data": "2025-01-15",
      "imagem_principal": "assets/img/Arco e Flecha.png",
      "fotos": [
        { "id": 1, "titulo": "Pegada da lapela",             "imagem": "assets/img/Arco e Flecha.png" },
        { "id": 2, "titulo": "Posicionamento das pernas",    "imagem": "assets/img/Arco e Flecha.png" },
        { "id": 3, "titulo": "Finalização do Arco e Flecha", "imagem": "assets/img/Arco e Flecha.png" }
      ]
    },
    {
      "id": 3,
      "nome": "Kimura",
      "descricao": "Chave de ombro altamente eficaz, homenagem ao lendário Masahiko Kimura.",
      "conteudo": "O Kimura é uma chave articular que atua no ombro do adversário. A pegada característica envolve o pulso do oponente com uma mão e a própria mão com a outra, formando uma figura de 4. A técnica recebeu o nome do judoca japonês Masahiko Kimura, que a utilizou para vencer Hélio Gracie em 1951. Pode ser aplicado de diversas posições como a guarda fechada, half-guard e o lado.",
      "categoria": "Finalização",
      "dificuldade": "Iniciante",
      "destaque": false,
      "data": "2025-01-20",
      "imagem_principal": "assets/img/Kimura.png",
      "fotos": [
        { "id": 1, "titulo": "Pegada do Kimura",    "imagem": "assets/img/Kimura.png" },
        { "id": 2, "titulo": "Kimura pela guarda",  "imagem": "assets/img/Kimura.png" },
        { "id": 3, "titulo": "Aplicação do Kimura", "imagem": "assets/img/Kimura.png" }
      ]
    },
    {
      "id": 4,
      "nome": "Mata Leão",
      "descricao": "Estrangulamento pelas costas, uma das finalizações mais conhecidas.",
      "conteudo": "O Mata Leão, conhecido em inglês como Rear Naked Choke (RNC), é um dos estrangulamentos mais eficazes e reconhecidos nas artes marciais. É aplicado a partir do controle das costas do adversário, onde um braço envolve o pescoço e a mão se apoia no bíceps do outro braço, que por sua vez pressiona a cabeça do oponente. O estrangulamento atua nas artérias carótidas, causando inconsciência rapidamente.",
      "categoria": "Estrangulamento",
      "dificuldade": "Iniciante",
      "destaque": true,
      "data": "2025-01-25",
      "imagem_principal": "assets/img/Mata leão.png",
      "fotos": [
        { "id": 1, "titulo": "Tomada das costas",        "imagem": "assets/img/Mata leão.png" },
        { "id": 2, "titulo": "Encaixe do Mata Leão",     "imagem": "assets/img/Mata leão.png" },
        { "id": 3, "titulo": "Finalização do Mata Leão", "imagem": "assets/img/Mata leão.png" }
      ]
    },
    {
      "id": 5,
      "nome": "Triangle Choke",
      "descricao": "Estrangulamento feito com as pernas, formando um triângulo ao redor do pescoço.",
      "conteudo": "O Triangle Choke, ou Triângulo, é um estrangulamento aplicado com as pernas. Uma perna cruza sobre o pescoço do adversário enquanto a outra passa por baixo, prendendo um dos braços do oponente junto ao pescoço. A pressão das coxas sobre as artérias do pescoço causa o estrangulamento. É uma técnica muito versátil, podendo ser aplicada a partir da guarda, da montada e de outras posições.",
      "categoria": "Estrangulamento",
      "dificuldade": "Intermediário",
      "destaque": false,
      "data": "2025-02-01",
      "imagem_principal": "assets/img/armlock.png",
      "fotos": [
        { "id": 1, "titulo": "Abertura para o triângulo", "imagem": "assets/img/armlock.png" },
        { "id": 2, "titulo": "Encaixe das pernas",        "imagem": "assets/img/armlock.png" },
        { "id": 3, "titulo": "Finalização do Triângulo",  "imagem": "assets/img/armlock.png" }
      ]
    },
    {
      "id": 6,
      "nome": "Omoplata",
      "descricao": "Chave de ombro aplicada com as pernas, direto da guarda.",
      "conteudo": "O Omoplata é uma técnica única que utiliza as pernas para aplicar uma chave de ombro no adversário. A partir da guarda, uma perna gira sobre o ombro do oponente enquanto o corpo roda para o lado, criando pressão na articulação do ombro. Além de ser uma finalização, o Omoplata também pode ser usado como varredura ou para criar outros ataques encadeados.",
      "categoria": "Finalização",
      "dificuldade": "Avançado",
      "destaque": true,
      "data": "2025-02-10",
      "imagem_principal": "assets/img/Kimura.png",
      "fotos": [
        { "id": 1, "titulo": "Setup do Omoplata", "imagem": "assets/img/Kimura.png" },
        { "id": 2, "titulo": "Rotação do corpo",  "imagem": "assets/img/Kimura.png" },
        { "id": 3, "titulo": "Pressão no ombro",  "imagem": "assets/img/Kimura.png" }
      ]
    },
    {
      "id": 7,
      "nome": "Raspagem de Tesoura",
      "descricao": "Varredura clássica da guarda fechada para inverter a posição.",
      "conteudo": "A Raspagem de Tesoura é uma das primeiras varreduras ensinadas no Jiu-Jitsu. A partir da guarda fechada, o praticante posiciona uma perna no quadril do adversário e a outra atrás do joelho, criando um movimento de tesoura que desequilibra e derruba o oponente, invertendo as posições. É a base para entender o conceito de raspagens no Jiu-Jitsu.",
      "categoria": "Raspagem",
      "dificuldade": "Iniciante",
      "destaque": false,
      "data": "2025-02-15",
      "imagem_principal": "assets/img/Arco e Flecha.png",
      "fotos": [
        { "id": 1, "titulo": "Posição inicial da tesoura", "imagem": "assets/img/Arco e Flecha.png" },
        { "id": 2, "titulo": "Movimento de tesoura",       "imagem": "assets/img/Arco e Flecha.png" },
        { "id": 3, "titulo": "Inversão de posição",        "imagem": "assets/img/Arco e Flecha.png" }
      ]
    },
    {
      "id": 8,
      "nome": "Guilhotina",
      "descricao": "Estrangulamento frontal aplicado com o braço ao redor do pescoço.",
      "conteudo": "A Guilhotina é um estrangulamento frontal aplicado envolvendo o pescoço do adversário com um braço. Pode ser finalizada de diversas formas: com os pés no chão, dentro da guarda fechada ou com a guarda alta. É muito utilizada quando o adversário tenta uma queda de soco ou abaixa a cabeça descuidadamente. Existe também a variação Arm-in Guilhotina, ainda mais poderosa.",
      "categoria": "Estrangulamento",
      "dificuldade": "Intermediário",
      "destaque": false,
      "data": "2025-02-20",
      "imagem_principal": "assets/img/Mata leão.png",
      "fotos": [
        { "id": 1, "titulo": "Encaixe da Guilhotina",     "imagem": "assets/img/Mata leão.png" },
        { "id": 2, "titulo": "Guilhotina na guarda",      "imagem": "assets/img/Mata leão.png" },
        { "id": 3, "titulo": "Finalização da Guilhotina", "imagem": "assets/img/Mata leão.png" }
      ]
    }
  ]
};


// ============================================================
// FUNÇÃO: montarCarrossel()
// ============================================================
// Monta o carrossel de destaques no index.html
//
// Passo a passo:
// 1. Pega o div#carrossel-destaques do HTML
// 2. Filtra as técnicas com destaque:true
// 3. Monta o HTML de cada slide
// 4. Monta os indicadores (bolinhas)
// 5. Injeta tudo dentro do div
// ============================================================

function montarCarrossel() {

    // Passo 1: pega o elemento alvo no HTML
    const container = document.getElementById("carrossel-destaques");

    // Passo 2: filtra só as técnicas com destaque:true
    // .filter() retorna um novo array só com os itens que atendem a condição
    const destaques = dados.tecnicas.filter(tecnica => tecnica.destaque === true);

    // Passo 3: monta o HTML de cada slide
    // .map() transforma cada item do array em uma string HTML
    // "index" é a posição do item (0, 1, 2...) — usado para marcar o primeiro como "active"
    const slides = destaques.map((tecnica, index) => {
        const classeAtiva = index === 0 ? "active" : "";
        return `
            <div class="carousel-item ${classeAtiva}">
                <img src="${tecnica.imagem_principal}" 
                     class="d-block w-100" 
                     alt="${tecnica.nome}"
                     style="max-height: 400px; object-fit: cover;">
                <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                    <h5>${tecnica.nome}</h5>
                    <p>${tecnica.descricao}</p>
                    <a href="detalhe.html?id=${tecnica.id}" class="btn btn-light btn-sm">Ver detalhes</a>
                </div>
            </div>
        `;
    });

    // Passo 4: monta os indicadores (bolinhas de navegação)
    // um botão para cada slide em destaque
    const indicadores = destaques.map((_, index) => {
        const classeAtiva = index === 0 ? "active" : "";
        return `
            <button type="button" 
                    data-bs-target="#carrossel" 
                    data-bs-slide-to="${index}" 
                    class="${classeAtiva}">
            </button>
        `;
    });

    // Passo 5: injeta o HTML completo do carrossel no container
    // .join("") une o array de strings em uma única string
    container.innerHTML = `
        <div id="carrossel" class="carousel slide" data-bs-ride="carousel">

            <div class="carousel-indicators">
                ${indicadores.join("")}
            </div>

            <div class="carousel-inner">
                ${slides.join("")}
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carrossel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#carrossel" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>

        </div>
    `;
}


// ============================================================
// Chama a função quando o arquivo é carregado
// ============================================================
montarCarrossel();