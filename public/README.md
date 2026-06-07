🥋 Mundo JJ
Site dedicado ao ensino e divulgação do Jiu-Jitsu, trazendo técnicas e novidades do universo da luta.

👤 Dados do Aluno
Aluno: Luiz Felipe de Souza Damasceno
Curso: Sistemas de Informação
Turma: Noite 
Matrícula: 1651358

📄 Descrição do Projeto
O Mundo JJ é uma plataforma acadêmica dedicada ao ensino e divulgação do Jiu-Jitsu. O site apresenta técnicas da arte marcial de forma dinâmica, com informações detalhadas sobre cada uma delas.
O projeto foi desenvolvido com HTML, CSS, Bootstrap e JavaScript puro, sem uso de frameworks. Os dados são armazenados em uma estrutura JSON no arquivo app.js e montados dinamicamente nas páginas via JavaScript.

🖥️ Telas do Projeto

![Foto 1 HomePage](./img/fotoHomePage1.png)
![Foto 2 HomePage](./img/fotoHomePage2.png)
![Foto 3 HomePage](./img/fotoHomePage3.png)
![Foto 1 Detalhes](./img/fotoDetalhes1.png)
![Foto 2 Detalhes](./img/fotoDetalhes2.png)
![Print 1 DashBoard](./img/printdashboard.png)
![Print 2 DashBoard](./img/printdashboard1.png)

🗂️ Estrutura do Projeto
/public
  index.html
  detalhe.html
  app.js
  styles.css
  /img
    ...imagens das técnicas



📦 Estrutura JSON
javascriptconst dados = {
  "tecnicas": [
    {
      "id": 1,
      "nome": "Arm Lock",
      "descricao": "Finalização clássica que hiperextende o cotovelo do adversário.",
      "conteudo": "O Arm Lock, também chamado de Juji-Gatame, é uma das finalizações mais tradicionais do Jiu-Jitsu...",
      "categoria": "Finalização",
      "dificuldade": "Intermediário",
      "destaque": true,
      "data": "10-01-2025",
      "imagem_principal": "img/armlock.png",
      "fotos": [...]
    },
    {
      "id": 2,
      "nome": "Arco e Flecha",
      "descricao": "Estrangulamento poderoso aplicado com a lapela do kimono.",
      "categoria": "Estrangulamento",
      "dificuldade": "Avançado",
      "destaque": true,
      ...
    },
    {
      "id": 3,
      "nome": "Kimura",
      "descricao": "Chave de ombro altamente eficaz, homenagem ao lendário Masahiko Kimura.",
      "categoria": "Finalização",
      "dificuldade": "Iniciante",
      "destaque": false,
      ...
    },
    {
      "id": 4,
      "nome": "Mata Leão",
      "descricao": "Estrangulamento pelas costas, uma das finalizações mais conhecidas.",
      "categoria": "Estrangulamento",
      "dificuldade": "Iniciante",
      "destaque": true,
      ...
    },
    {
      "id": 5,
      "nome": "Triangle Choke",
      "descricao": "Estrangulamento feito com as pernas, formando um triângulo ao redor do pescoço.",
      "categoria": "Estrangulamento",
      "dificuldade": "Intermediário",
      "destaque": false,
      ...
    },
    {
      "id": 6,
      "nome": "Omoplata",
      "descricao": "Chave de ombro aplicada com as pernas, direto da guarda.",
      "categoria": "Finalização",
      "dificuldade": "Avançado",
      "destaque": true,
      ...
    },
    {
      "id": 7,
      "nome": "Raspagem de Tesoura",
      "descricao": "Varredura clássica da guarda fechada para inverter a posição.",
      "categoria": "Raspagem",
      "dificuldade": "Iniciante",
      "destaque": false,
      ...
    },
    {
      "id": 8,
      "nome": "Guilhotina",
      "descricao": "Estrangulamento frontal aplicado com o braço ao redor do pescoço.",
      "categoria": "Estrangulamento",
      "dificuldade": "Intermediário",
      "destaque": false,
      ...
    }
  ]
}

🚀 Como executar

Clone o repositório
Abra o arquivo index.html no navegador ou use o Live Server do VS Code
Clique em qualquer técnica para ver os detalhes


🛠️ Tecnologias utilizadas

HTML5
CSS3
JavaScript (puro, sem frameworks)
Bootstrap 5
Font Awesome