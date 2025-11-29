
# Sistema de Gestão para Bicicletaria

Projeto desenvolvido para a disciplina **Métodos Ágeis, Protótipos de Alta Fidelidade e Telas Funcionais (2024-1)**, 
sob orientação do professor **Jesus Henrique Segantini**.

Esta primeira etapa (Sprint I) tem como foco a criação dos **protótipos funcionais** das três telas iniciais do 
sistema de gestão para uma bicicletaria, além da documentação dos principais requisitos do sistema.

---

## 🎯 Objetivo da Etapa 1 (Sprint I)

Implementar, em **HTML + CSS + JavaScript**, as telas:

1. **Tela 1 – Login**
2. **Tela 2 – Dashboard (Tela Principal com Menu)**
3. **Tela 3 – Cadastro de Produtos**

Além disso, a etapa contempla:

- Descrição dos principais requisitos funcionais e não funcionais (em PDF);
- Organização do projeto em estrutura de pastas;
- Preparação do repositório para versionamento no **GitHub**.

---

## 📚 Caso de Uso (Resumo)

O sistema de gestão foi projetado para atender as necessidades de uma **bicicletaria**, apoiando:

- Gerenciamento de produtos (bicicletas, peças, acessórios);
- Futuro controle de estoque e vendas;
- Futuro gerenciamento de ordens de serviço (consertos, trocas, manutenções).

Na Etapa 1, o foco está em preparar a base do sistema: acesso (login), visão geral (dashboard) e cadastro de produtos.

---

## ✅ Funcionalidades Implementadas na Etapa 1

### 1. Tela de Login (`login.html`)

- Campo para **usuário/e-mail**;
- Campo para **senha**;
- Validação simples dos campos (não permite login com campos vazios);
- Redirecionamento para o **Dashboard** em caso de preenchimento válido.

> Observação: não há autenticação real com back-end; trata-se de uma simulação, conforme escopo da disciplina.

---

### 2. Dashboard (`dashboard.html`)

- Tela principal exibida após o login;
- Possui **menu lateral** com links para:
  - Dashboard;
  - Cadastro de Produtos;
  - (Espaço reservado para futuras telas: Lista de Produtos, Carrinho, Estoque, Ordem de Serviços);
- Cartões de resumo explicando:
  - Módulo de Produtos;
  - Módulo de Vendas;
  - Módulo de Serviços.

---

### 3. Cadastro de Produtos (`cadastro-produto.html`)

Tela destinada ao registro dos produtos da bicicletaria, contendo os campos:

- **Descrição** (obrigatório);
- **Imagem (URL)**;
- **Preço de Venda** (obrigatório);
- **Preço de Custo** (obrigatório);
- **Fabricante**;
- **Categoria** (bicicleta, acessório, peça, etc.).

Regras básicas:

- Validação dos campos obrigatórios;
- Exibição de mensagem de erro em caso de preenchimento incorreto;
- Exibição de mensagem de sucesso quando o cadastro é concluído;
- Armazenamento dos produtos no `localStorage` para uso em etapas futuras (lista de produtos, vendas, etc.).

---

## 🛠 Tecnologias Utilizadas

- **HTML5** – estrutura das páginas e formulários;
- **CSS3** – estilização, layout com sidebar e responsividade básica;
- **JavaScript (ES6+)** – validações, interação com usuário e uso de `localStorage`;
- **localStorage** – armazenamento temporário dos produtos cadastrados;
- **ReportLab (Python)** – geração do PDF de requisitos (apenas para fins de documentação nesta entrega).

---

## 🚀 Como Executar o Projeto

1. Faça o download/clonagem do repositório.
2. Acesse a pasta `src/`.
3. Abra o arquivo **`login.html`** diretamente em um navegador (Chrome ou Edge).
4. Realize o fluxo:
   - Preencha os campos de login;
   - Acesse o Dashboard;
   - Navegue até o Cadastro de Produtos.

> Não é necessário servidor web ou banco de dados para executar esta etapa.

---

## 📄 Documentação de Requisitos

O arquivo **`docs/requisitos_bicicletaria_etapa1.pdf`** contém:

- Descrição textual da etapa;
- Lista dos **Requisitos Funcionais (RF)** relacionados às telas de Login, Dashboard e Cadastro de Produtos;
- Lista dos **Requisitos Não Funcionais (RNF)**, incluindo tecnologias, organização de código, usabilidade, compatibilidade de navegadores e versionamento.

---

## 🔮 Próximos Passos (Etapas Futuras)

Em etapas posteriores, poderão ser implementadas:

- Tela de **Lista de Produtos** com botão *Adicionar ao Carrinho*;
- Tela de **Carrinho de Vendas** com finalização e formas de pagamento;
- Tela de **Controle de Estoque** com itens vendidos;
- Tela de **Ordem de Serviços**, integrada ao carrinho para cobrança de serviços.