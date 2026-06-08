// ============================================================
// APP.JS - Mundo JJ — integrado ao JSON Server
// ============================================================

const API = 'http://localhost:3000';

// ============================================================
// UTILITÁRIOS DE SESSÃO
// ============================================================
function getUsuarioLogado() {
    const dados = sessionStorage.getItem('usuarioLogado');
    return dados ? JSON.parse(dados) : null;
}

function atualizarMenu() {
    const usuario = getUsuarioLogado();
    const menuLogin     = document.getElementById('menu-login');
    const menuLogout    = document.getElementById('menu-logout');
    const menuFavoritos = document.getElementById('menu-favoritos');
    const menuCadastro  = document.getElementById('menu-cadastro');

    if (usuario) {
        if (menuLogin)     menuLogin.style.display     = 'none';
        if (menuLogout)    menuLogout.style.display    = 'block';
        if (menuFavoritos) menuFavoritos.style.display = 'block';
        if (menuCadastro)  menuCadastro.style.display  = usuario.admin ? 'block' : 'none';
    } else {
        if (menuLogin)     menuLogin.style.display     = 'block';
        if (menuLogout)    menuLogout.style.display    = 'none';
        if (menuFavoritos) menuFavoritos.style.display = 'none';
        if (menuCadastro)  menuCadastro.style.display  = 'none';
    }
}

function logout() {
    sessionStorage.removeItem('usuarioLogado');
    window.location.href = 'index.html';
}

// ============================================================
// FAVORITOS
// ============================================================
async function getFavoritos() {
    const usuario = getUsuarioLogado();
    if (!usuario) return [];
    const res = await fetch(`${API}/favoritos?usuarioId=${usuario.id}`);
    return await res.json();
}

async function isFavorito(tecnicaId) {
    const usuario = getUsuarioLogado();
    if (!usuario) return false;
    const res = await fetch(`${API}/favoritos?usuarioId=${usuario.id}&tecnicaId=${tecnicaId}`);
    const lista = await res.json();
    return lista.length > 0 ? lista[0] : null;
}

async function toggleFavorito(tecnicaId, btnEl) {
    const usuario = getUsuarioLogado();
    if (!usuario) {
        alert('Você precisa estar logado para favoritar!');
        window.location.href = 'login.html';
        return;
    }

    const fav = await isFavorito(tecnicaId);
    if (fav) {
        await fetch(`${API}/favoritos/${fav.id}`, { method: 'DELETE' });
        btnEl.innerHTML = '<i class="fa-regular fa-heart"></i>';
        btnEl.classList.remove('favoritado');
    } else {
        await fetch(`${API}/favoritos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ usuarioId: usuario.id, tecnicaId: tecnicaId })
        });
        btnEl.innerHTML = '<i class="fa-solid fa-heart text-danger"></i>';
        btnEl.classList.add('favoritado');
    }
}

// ============================================================
// MONTAR CARROSSEL
// ============================================================
async function montarCarrossel() {
    const container = document.getElementById('carrossel-destaques');
    if (!container) return;

    const res = await fetch(`${API}/tecnicas`);
    const tecnicas = await res.json();
    const destaques = tecnicas.filter(t => t.destaque === true);

    const slides = destaques.map((tecnica, index) => {
        const classeAtiva = index === 0 ? 'active' : '';
        return `
            <div class="carousel-item ${classeAtiva}">
                <img src="${tecnica.imagem_principal}"
                     class="d-block w-100"
                     alt="${tecnica.nome}"
                     style="max-height:400px; object-fit:cover;"
                     onerror="this.src='img/placeholder.png'">
                <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                    <h5>${tecnica.nome}</h5>
                    <p>${tecnica.descricao}</p>
                    <a href="detalhe.html?id=${tecnica.id}" class="btn btn-light btn-sm">Ver detalhes</a>
                </div>
            </div>
        `;
    });

    const indicadores = destaques.map((_, index) => {
        const classeAtiva = index === 0 ? 'active' : '';
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
            <div class="carousel-indicators">${indicadores.join('')}</div>
            <div class="carousel-inner">${slides.join('')}</div>
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
// MONTAR CARDS COM PESQUISA E FAVORITOS
// ============================================================
let todasTecnicas = [];

async function montarCards(filtro = '') {
    const container = document.getElementById('lista-tecnicas');
    if (!container) return;

    if (todasTecnicas.length === 0) {
        const res = await fetch(`${API}/tecnicas`);
        todasTecnicas = await res.json();
    }

    const usuario = getUsuarioLogado();
    let favoritosIds = [];
    if (usuario) {
        const favs = await getFavoritos();
        favoritosIds = favs.map(f => f.tecnicaId);
    }

    const termo = filtro.toLowerCase().trim();
    const tecnicas = termo
        ? todasTecnicas.filter(t =>
            t.nome.toLowerCase().includes(termo) ||
            t.descricao.toLowerCase().includes(termo))
        : todasTecnicas;

    if (tecnicas.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-4">
                <p class="text-muted">Nenhuma técnica encontrada para "<strong>${filtro}</strong>".</p>
            </div>`;
        return;
    }

    const cards = tecnicas.map(tecnica => {
        const ehFav = favoritosIds.includes(tecnica.id);
        const iconeCoracao = ehFav
            ? '<i class="fa-solid fa-heart text-danger"></i>'
            : '<i class="fa-regular fa-heart"></i>';

        return `
            <div class="col-6 col-md-4 col-lg-3 mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="${tecnica.imagem_principal}"
                         class="card-img-top"
                         alt="${tecnica.nome}"
                         style="height:180px; object-fit:cover;"
                         onerror="this.src='img/placeholder.png'">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${tecnica.nome}</h5>
                        <p class="card-text flex-grow-1">${tecnica.descricao}</p>
                        <div class="mb-2">
                            <span class="badge bg-secondary me-1">${tecnica.categoria}</span>
                            <span class="badge bg-dark">${tecnica.dificuldade}</span>
                        </div>
                        <div class="d-flex gap-2 mt-auto">
                            <a href="detalhe.html?id=${tecnica.id}" class="btn btn-danger btn-sm flex-grow-1">
                                Ver técnica
                            </a>
                            <button class="btn btn-outline-secondary btn-sm btn-favorito"
                                    data-id="${tecnica.id}"
                                    title="Favoritar">
                                ${iconeCoracao}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = cards.join('');

    // Eventos dos botões de favorito
    document.querySelectorAll('.btn-favorito').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            const id = btn.dataset.id;
            await toggleFavorito(id, btn);
        });
    });
}

// ============================================================
// PESQUISA
// ============================================================
function iniciarPesquisa() {
    const input = document.getElementById('input-pesquisa');
    const btn   = document.getElementById('btn-pesquisa');
    if (!input || !btn) return;

    btn.addEventListener('click', () => montarCards(input.value));
    input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') montarCards(input.value);
        if (input.value === '') montarCards('');
    });
}

// ============================================================
// MONTAR DETALHE
// ============================================================
async function montarDetalhe() {
    const containerDetalhe = document.getElementById('detalhe-tecnica');
    const containerGaleria = document.getElementById('galeria-fotos');
    if (!containerDetalhe || !containerGaleria) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const res = await fetch(`${API}/tecnicas/${id}`);
    if (!res.ok) {
        containerDetalhe.innerHTML = `
            <div class="alert alert-danger">
                Técnica não encontrada. <a href="index.html">Voltar para a home</a>
            </div>`;
        return;
    }

    const tecnica = await res.json();
    const fav = await isFavorito(tecnica.id);
    const iconeCoracao = fav
        ? '<i class="fa-solid fa-heart text-danger"></i>'
        : '<i class="fa-regular fa-heart"></i>';

    containerDetalhe.innerHTML = `
        <div class="row">
            <div class="col-md-4 mb-3">
                <img src="${tecnica.imagem_principal}"
                     alt="${tecnica.nome}"
                     class="img-fluid rounded shadow"
                     onerror="this.src='img/placeholder.png'">
            </div>
            <div class="col-md-8">
                <div class="d-flex align-items-center gap-3 mb-2">
                    <h3 class="mb-0">${tecnica.nome}</h3>
                    <button class="btn btn-outline-secondary btn-favorito" data-id="${tecnica.id}" title="Favoritar">
                        ${iconeCoracao}
                    </button>
                </div>
                <p class="lead">${tecnica.descricao}</p>
                <p>${tecnica.conteudo}</p>
                <hr>
                <p><strong>Categoria:</strong> <span class="badge bg-secondary">${tecnica.categoria}</span></p>
                <p><strong>Dificuldade:</strong> <span class="badge bg-dark">${tecnica.dificuldade}</span></p>
                <p><strong>Cadastrado em:</strong> ${tecnica.data}</p>
                <p><strong>Técnica em destaque:</strong>
                    ${tecnica.destaque
                        ? '<span class="text-success">✔ Sim</span>'
                        : '<span class="text-muted">Não</span>'}
                </p>
            </div>
        </div>
    `;

    // Evento favorito no detalhe
    const btnFav = document.querySelector('.btn-favorito');
    if (btnFav) {
        btnFav.addEventListener('click', async () => {
            await toggleFavorito(tecnica.id, btnFav);
        });
    }

    const fotos = tecnica.fotos.map(foto => `
        <div class="col-6 col-md-4 col-lg-3 mb-3">
            <div class="card h-100 shadow-sm">
                <img src="${foto.imagem}"
                     class="card-img-top"
                     alt="${foto.titulo}"
                     style="height:160px; object-fit:cover;"
                     onerror="this.src='img/placeholder.png'">
                <div class="card-body">
                    <p class="card-text text-center">${foto.titulo}</p>
                </div>
            </div>
        </div>
    `);
    containerGaleria.innerHTML = fotos.join('');
}

// ============================================================
// PÁGINA DE FAVORITOS
// ============================================================
async function montarFavoritos() {
    const container = document.getElementById('lista-favoritos');
    if (!container) return;

    const usuario = getUsuarioLogado();
    if (!usuario) {
        container.innerHTML = `
            <div class="col-12 text-center py-4">
                <p class="text-muted">Você precisa estar <a href="login.html">logado</a> para ver seus favoritos.</p>
            </div>`;
        return;
    }

    const favs = await getFavoritos();
    if (favs.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-4">
                <p class="text-muted">Você ainda não tem técnicas favoritas. <a href="index.html">Explorar técnicas</a></p>
            </div>`;
        return;
    }

    const cards = await Promise.all(favs.map(async fav => {
        const res = await fetch(`${API}/tecnicas/${fav.tecnicaId}`);
        if (!res.ok) return '';
        const tecnica = await res.json();
        return `
            <div class="col-6 col-md-4 col-lg-3 mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="${tecnica.imagem_principal}"
                         class="card-img-top"
                         alt="${tecnica.nome}"
                         style="height:180px; object-fit:cover;"
                         onerror="this.src='img/placeholder.png'">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${tecnica.nome}</h5>
                        <p class="card-text flex-grow-1">${tecnica.descricao}</p>
                        <div class="mb-2">
                            <span class="badge bg-secondary me-1">${tecnica.categoria}</span>
                            <span class="badge bg-dark">${tecnica.dificuldade}</span>
                        </div>
                        <div class="d-flex gap-2 mt-auto">
                            <a href="detalhe.html?id=${tecnica.id}" class="btn btn-danger btn-sm flex-grow-1">
                                Ver técnica
                            </a>
                            <button class="btn btn-outline-secondary btn-sm btn-favorito favoritado"
                                    data-id="${tecnica.id}"
                                    data-favid="${fav.id}"
                                    title="Remover favorito">
                                <i class="fa-solid fa-heart text-danger"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }));

    container.innerHTML = cards.join('');

    document.querySelectorAll('.btn-favorito').forEach(btn => {
        btn.addEventListener('click', async () => {
            await toggleFavorito(btn.dataset.id, btn);
            await montarFavoritos(); // Recarrega a lista
        });
    });
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================
document.addEventListener('DOMContentLoaded', async () => {
    atualizarMenu();

    const pagina = window.location.pathname;

    if (document.getElementById('carrossel-destaques')) {
        await montarCarrossel();
        await montarCards();
        iniciarPesquisa();
    }

    if (document.getElementById('detalhe-tecnica')) {
        await montarDetalhe();
    }

    if (document.getElementById('lista-favoritos')) {
        await montarFavoritos();
    }

    // Logout
    const btnLogout = document.getElementById('btn-logout');
    if (btnLogout) {
        btnLogout.addEventListener('click', (e) => {
            e.preventDefault();
            logout();
        });
    }
});