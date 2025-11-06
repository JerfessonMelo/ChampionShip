NVC Championship – Frontend (React)

Como rodar

- Requisitos: Node 18+ e npm
- Entre na pasta do frontend: `cd frontend`
- Instalar dependências: `npm install`
- Rodar em desenvolvimento: `npm run dev` e abrir `http://localhost:5173`

O que está implementado

- Navegação com React Router (navbar fixa)
- Telas: Login, Cadastro, Campeonatos (home), Criar Campeonato, Criar Equipe, Ranking, Detalhe de Equipe, Detalhes Admin, Sorteio, Chaves (bracket) e Entrar no Campeonato
- Fluxo básico de autenticação (mock) usando `localStorage`
- Serviços mockados (`frontend/src/services/api.js`) simulando backend (create/list e associação de equipes ao campeonato)
- Estilo inspirado nos layouts fornecidos (tema escuro)
