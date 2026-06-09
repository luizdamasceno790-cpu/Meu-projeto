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
    const saudacao      = document.getElementById('saudacao-usuario');

    if (usuario) {
        if (menuLogin)     menuLogin.style.display     = 'none';
        if (menuLogout)    menuLogout.style.display    = 'block';
        if (menuFavoritos) menuFavoritos.style.display = 'block';
        if (menuCadastro)  menuCadastro.style.display  = usuario.admin ? 'block' : 'none';
        if (saudacao)      saudacao.textContent        = `Olá, ${usuario.nome.split(' ')[0]}`;
    } else {
        if (menuLogin)     menuLogin.style.display     = 'block';
        if (menuLogout)    menuLogout.style.display    = 'none';
        if (menuFavoritos) menuFavoritos.style.display = 'none';
        if (menuCadastro)  menuCadastro.style.display  = 'none';
        if (saudacao)      saudacao.textContent        = '';
    }
}

function logout() {
    sessionStorage.removeItem('usuarioLogado');
    window.location.href = 'index.html';
}

// ============================================================
// FAVORITOS — localStorage por usuário
// ============================================================
function getChaveFavoritos() {
    const usuario = getUsuarioLogado();
    return usuario ? `favoritos_${usuario.id}` : null;
}

function getFavoritosLocal() {
    const chave = getChaveFavoritos();
    if (!chave) return [];
    const dados = localStorage.getItem(chave);
    return dados ? JSON.parse(dados) : [];
}

function salvarFavoritosLocal(ids) {
    const chave = getChaveFavoritos();
    if (!chave) return;
    localStorage.setItem(chave, JSON.stringify(ids));
}

function isFavoritoLocal(tecnicaId) {
    return getFavoritosLocal().includes(String(tecnicaId));
}

function toggleFavoritoLocal(tecnicaId, btnEl) {
    const usuario = getUsuarioLogado();
    if (!usuario) {
        alert('Você precisa estar logado para favoritar!');
        window.location.href = 'login.html';
        return;
    }

    const id = String(tecnicaId);
    let favoritos = getFavoritosLocal();

    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(f => f !== id);
        btnEl.innerHTML = '<i class="fa-regular fa-heart"></i>';
        btnEl.classList.remove('favoritado');
    } else {
        favoritos.push(id);
        btnEl.innerHTML = '<i class="fa-solid fa-heart text-danger"></i>';
        btnEl.classList.add('favoritado');
    }

    salvarFavoritosLocal(favoritos);
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

    const favoritosIds = getFavoritosLocal();

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
        const ehFav = favoritosIds.includes(String(tecnica.id));
        const iconeCoracao = ehFav
            ? '<i class="fa-solid fa-heart text-danger"></i>'
            : '<i class="fa-regular fa-heart"></i>';

        return `
            <div class="col-6 col-md-4 col-lg-3 mb-4">
                <div class="card h-100 shadow-sm ${ehFav ? 'border-danger' : ''}">
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
                            ${ehFav ? '<span class="badge bg-danger">❤️ Favorito</span>' : ''}
                        </div>
                        <div class="d-flex gap-2 mt-auto">
                            <a href="detalhe.html?id=${tecnica.id}" class="btn btn-danger btn-sm flex-grow-1">
                                Ver técnica
                            </a>
                            <button class="btn btn-outline-secondary btn-sm btn-favorito ${ehFav ? 'favoritado' : ''}"
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

    document.querySelectorAll('.btn-favorito').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = btn.dataset.id;
            toggleFavoritoLocal(id, btn);
            // Atualiza borda e badge sem recarregar tudo
            const card = btn.closest('.card');
            const badge = btn.closest('.card-body').querySelector('.badge.bg-danger');
            if (btn.classList.contains('favoritado')) {
                card.classList.add('border-danger');
                if (!badge) {
                    btn.closest('.card-body').querySelector('.mb-2').insertAdjacentHTML(
                        'beforeend', '<span class="badge bg-danger">❤️ Favorito</span>');
                }
            } else {
                card.classList.remove('border-danger');
                if (badge) badge.remove();
            }
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
    const ehFav = isFavoritoLocal(tecnica.id);
    const iconeCoracao = ehFav
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

    const btnFav = document.querySelector('.btn-favorito');
    if (btnFav) {
        btnFav.addEventListener('click', () => {
            toggleFavoritoLocal(tecnica.id, btnFav);
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
// PÁGINA DE FAVORITOS — localStorage
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

    const favoritosIds = getFavoritosLocal();

    if (favoritosIds.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-4">
                <p class="text-muted">Você ainda não tem técnicas favoritas. <a href="index.html">Explorar técnicas</a></p>
            </div>`;
        return;
    }

    const cards = await Promise.all(favoritosIds.map(async id => {
        const res = await fetch(`${API}/tecnicas/${id}`);
        if (!res.ok) return '';
        const tecnica = await res.json();
        return `
            <div class="col-6 col-md-4 col-lg-3 mb-4">
                <div class="card h-100 shadow-sm border-danger">
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
        btn.addEventListener('click', () => {
            toggleFavoritoLocal(btn.dataset.id, btn);
            btn.closest('.col-6, .col-md-4, .col-lg-3').remove();
            if (document.querySelectorAll('.btn-favorito').length === 0) {
                container.innerHTML = `
                    <div class="col-12 text-center py-4">
                        <p class="text-muted">Você ainda não tem técnicas favoritas. <a href="index.html">Explorar técnicas</a></p>
                    </div>`;
            }
        });
    });
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================
document.addEventListener('DOMContentLoaded', async () => {
    atualizarMenu();

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

    const btnLogout = document.getElementById('btn-logout');
    if (btnLogout) {
        btnLogout.addEventListener('click', (e) => {
            e.preventDefault();
            logout();
        });
    }
});