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
function montarCarrossel() {
    const container = document.getElementById("carrossel-destaques");
    if (!container) return;

    const destaques = dados.tecnicas.filter(tecnica => tecnica.destaque === true);

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
// FUNÇÃO: montarCards()
// ============================================================
function montarCards() {
    const container = document.getElementById("lista-tecnicas");
    if (!container) return;

    const cards = dados.tecnicas.map(tecnica => {
        return `
            <div class="col-6 col-md-4 col-lg-3 mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="${tecnica.imagem_principal}" 
                         class="card-img-top" 
                         alt="${tecnica.nome}"
                         style="height: 180px; object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${tecnica.nome}</h5>
                        <p class="card-text flex-grow-1">${tecnica.descricao}</p>
                        <div class="mb-2">
                            <span class="badge bg-secondary me-1">${tecnica.categoria}</span>
                            <span class="badge bg-dark">${tecnica.dificuldade}</span>
                        </div>
                        <a href="detalhe.html?id=${tecnica.id}" class="btn btn-danger btn-sm mt-auto">
                            Ver técnica
                        </a>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = cards.join("");
}


// ============================================================
// FUNÇÃO: montarDetalhe()
// ============================================================
// Monta a página de detalhe de uma técnica específica
//
// Passo a passo:
// 1. Lê o ?id= da URL usando URLSearchParams
// 2. Busca a técnica no JSON pelo id
// 3. Se não encontrar, exibe mensagem de erro
// 4. Monta o HTML com as informações gerais (5+ campos)
//    e injeta no div#detalhe-tecnica
// 5. Monta a galeria de fotos e injeta no div#galeria-fotos
// ============================================================

function montarDetalhe() {
    const containerDetalhe = document.getElementById("detalhe-tecnica");
    const containerGaleria = document.getElementById("galeria-fotos");
    if (!containerDetalhe || !containerGaleria) return;

    // Passo 1: lê o parâmetro "id" da URL
    // Ex: detalhe.html?id=3 → params.get("id") retorna "3"
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id")); // converte para número com parseInt()

    // Passo 2: busca a técnica no array pelo id
    // .find() retorna o primeiro item que satisfaz a condição, ou undefined
    const tecnica = dados.tecnicas.find(t => t.id === id);

    // Passo 3: se não encontrou a técnica, exibe erro
    if (!tecnica) {
        containerDetalhe.innerHTML = `
            <div class="alert alert-danger">
                Técnica não encontrada. <a href="index.html">Voltar para a home</a>
            </div>
        `;
        return;
    }

    // Passo 4: monta o HTML com as informações gerais da técnica
    // São 7 informações distintas, atendendo o mínimo de 5 exigido
    containerDetalhe.innerHTML = `
        <div class="row">

            <!-- Coluna da imagem principal -->
            <div class="col-md-4 mb-3">
                <img src="${tecnica.imagem_principal}" 
                     alt="${tecnica.nome}" 
                     class="img-fluid rounded shadow">
            </div>

            <!-- Coluna das informações -->
            <div class="col-md-8">

                <!-- 1. Nome da técnica -->
                <h3>${tecnica.nome}</h3>

                <!-- 2. Descrição curta -->
                <p class="lead">${tecnica.descricao}</p>

                <!-- 3. Conteúdo detalhado -->
                <p>${tecnica.conteudo}</p>

                <hr>

                <!-- 4. Categoria -->
                <p><strong>Categoria:</strong> 
                    <span class="badge bg-secondary">${tecnica.categoria}</span>
                </p>

                <!-- 5. Dificuldade -->
                <p><strong>Dificuldade:</strong> 
                    <span class="badge bg-dark">${tecnica.dificuldade}</span>
                </p>

                <!-- 6. Data de cadastro -->
                <p><strong>Cadastrado em:</strong> ${tecnica.data}</p>

                <!-- 7. Destaque -->
                <p><strong>Técnica em destaque:</strong> 
                    ${tecnica.destaque ? 
                        '<span class="text-success">✔ Sim</span>' : 
                        '<span class="text-muted">Não</span>'}
                </p>

            </div>
        </div>
    `;

    // Passo 5: monta a galeria de fotos associadas
    // percorre o array tecnica.fotos e cria um card para cada foto
    const fotos = tecnica.fotos.map(foto => {
        return `
            <div class="col-6 col-md-4 col-lg-3 mb-3">
                <div class="card h-100 shadow-sm">
                    <img src="${foto.imagem}" 
                         class="card-img-top" 
                         alt="${foto.titulo}"
                         style="height: 160px; object-fit: cover;">
                    <div class="card-body">
                        <p class="card-text text-center">${foto.titulo}</p>
                    </div>
                </div>
            </div>
        `;
    });

    containerGaleria.innerHTML = fotos.join("");
}


// ============================================================
// Chama as funções quando o arquivo é carregado
// O if/else garante que cada função rode só na página certa:
// - index.html  → montarCarrossel() e montarCards()
// - detalhe.html → montarDetalhe()
// ============================================================
if (document.getElementById("carrossel-destaques")) {
    montarCarrossel();
    montarCards();
} else {
    montarDetalhe();
}