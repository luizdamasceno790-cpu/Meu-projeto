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
      "data": "10-01-2025",
      "imagem_principal": "img/armlock.png",
      "fotos": [
        { "id": 1, "titulo": "Arm Lock pela guarda",    "imagem": "img/armLockGuarda.png" },
        { "id": 2, "titulo": "Arm Lock pela montada",   "imagem": "img/armlockMontada.png" },
        { "id": 3, "titulo": "Finalização do Arm Lock", "imagem": "img/armlock.png" }
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
      "data": "15-01-2026",
      "imagem_principal": "img/arco-e-flecha.png",
      "fotos": [
        { "id": 1, "titulo": "Pegada da lapela",             "imagem": "img/arco-e-flecha-PegadaLapela.png" },
        { "id": 2, "titulo": "Posicionamento das pernas",    "imagem": "img/arco-e-flecha-Pernas.png" },
        { "id": 3, "titulo": "Finalização do Arco e Flecha", "imagem": "img/arco-e-flecha.png" }
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
      "data": "22-03-2026",
      "imagem_principal": "img/Kimura.png",
      "fotos": [
        { "id": 1, "titulo": "Pegada do Kimura",    "imagem": "img/Kimura-Pegada.png" },
        { "id": 2, "titulo": "Kimura pela guarda",  "imagem": "img/Kimura-Guarda.png" },
        { "id": 3, "titulo": "Aplicação do Kimura", "imagem": "img/Kimura-F.png" }
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
      "data": "16-02-2026",
      "imagem_principal": "img/mata-leao.png",
      "fotos": [
        { "id": 1, "titulo": "Tomada das costas",        "imagem": "img/mata-leao-P.png" },
        { "id": 2, "titulo": "Encaixe do Mata Leão",     "imagem": "img/mata-leao-A.png" },
        { "id": 3, "titulo": "Finalização do Mata Leão", "imagem": "img/mata-leao-F.png" }
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
      "data": "03-05-2026",
      "imagem_principal": "img/triangulo.png",
      "fotos": [
        { "id": 1, "titulo": "Abertura para o triângulo", "imagem": "img/triangulo-A.png" },
        { "id": 2, "titulo": "Encaixe das pernas",        "imagem": "img/triangulo-P.png" },
        { "id": 3, "titulo": "Finalização do Triângulo",  "imagem": "img/triangulo-F.png" }
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
      "data": "07-04-2026",
      "imagem_principal": "img/omoplata.png",
      "fotos": [
        { "id": 1, "titulo": "Setup do Omoplata", "imagem": "img/omoplata-S.png" },
        { "id": 2, "titulo": "Rotação do corpo",  "imagem": "img/omoplata-R.png" },
        { "id": 3, "titulo": "Pressão no ombro",  "imagem": "img/omoplata-P.png" }
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
      "data": "15-03-2026",
      "imagem_principal": "img/tesourinha.png",
      "fotos": [
        { "id": 1, "titulo": "Posição inicial da tesoura", "imagem": "img/tesourinha-P.png" },
        { "id": 2, "titulo": "Movimento de tesoura",       "imagem": "img/tesourinha-R.png" },
        { "id": 3, "titulo": "Inversão de posição",        "imagem": "img/tesourinha-M.png" }
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
      "data": "20-02-2026",
      "imagem_principal": "img/guilhotina.png",
      "fotos": [
        { "id": 1, "titulo": "Encaixe da Guilhotina",     "imagem": "img/guilhotina-E.png" },
        { "id": 2, "titulo": "Guilhotina na guarda",      "imagem": "img/guilhotina-G.png" },
        { "id": 3, "titulo": "Finalização da Guilhotina", "imagem": "img/guilhotina-F.png" }
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
function montarDetalhe() {
    const containerDetalhe = document.getElementById("detalhe-tecnica");
    const containerGaleria = document.getElementById("galeria-fotos");
    if (!containerDetalhe || !containerGaleria) return;

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    const tecnica = dados.tecnicas.find(t => t.id === id);

    if (!tecnica) {
        containerDetalhe.innerHTML = `
            <div class="alert alert-danger">
                Técnica não encontrada. <a href="index.html">Voltar para a home</a>
            </div>
        `;
        return;
    }

    containerDetalhe.innerHTML = `
        <div class="row">
            <div class="col-md-4 mb-3">
                <img src="${tecnica.imagem_principal}" 
                     alt="${tecnica.nome}" 
                     class="img-fluid rounded shadow">
            </div>
            <div class="col-md-8">
                <h3>${tecnica.nome}</h3>
                <p class="lead">${tecnica.descricao}</p>
                <p>${tecnica.conteudo}</p>
                <hr>
                <p><strong>Categoria:</strong> 
                    <span class="badge bg-secondary">${tecnica.categoria}</span>
                </p>
                <p><strong>Dificuldade:</strong> 
                    <span class="badge bg-dark">${tecnica.dificuldade}</span>
                </p>
                <p><strong>Cadastrado em:</strong> ${tecnica.data}</p>
                <p><strong>Técnica em destaque:</strong> 
                    ${tecnica.destaque ? 
                        '<span class="text-success">✔ Sim</span>' : 
                        '<span class="text-muted">Não</span>'}
                </p>
            </div>
        </div>
    `;

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
// Chama as funções na página correta
// ============================================================
if (document.getElementById("carrossel-destaques")) {
    montarCarrossel();
    montarCards();
} else {
    montarDetalhe();
}