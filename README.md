
# Sistema de Gestão para Bicicletaria

Projeto desenvolvido para a disciplina **Métodos Ágeis, Protótipos de Alta Fidelidade e Telas Funcionais (2024-1)**, 
sob orientação do professor **Jesus Henrique Segantini**.

O sistema simula um **Sistema de Gestão para Bicicletaria**, contemplando cadastro de produtos, lista de produtos, 
carrinho de vendas e, em etapas futuras, controle de estoque e ordens de serviço.

---

## 🎯 Etapas do Projeto

### ✅ Etapa 1 – Sprint 1
- Tela 1: **Login**
- Tela 2: **Dashboard (Tela Principal com Menu)**
- Tela 3: **Cadastro de Produtos**
- Documento de requisitos da Etapa 1 (RF e RNF).

### ✅ Etapa 2 – Sprint 2 (este repositório)
- Atualização das telas existentes, mantendo padrão visual e navegação.
- Tela 4: **Lista de Produtos** (exibe produtos cadastrados e permite adicionar ao carrinho).
- Tela 5: **Carrinho de Vendas** (lista itens selecionados, mostra total, permite remover e finalizar compra).
- Integração entre cadastro, lista de produtos e carrinho.
- Documento de requisitos da Etapa 2 (RF e RNF) em PDF.

---

## 🖥️ Telas Implementadas

### 1. Tela de Login (`login.html`)
- Campos: usuário/e-mail e senha.
- Validação de preenchimento.
- Redireciona para o **Dashboard** em caso de preenchimento válido.

### 2. Dashboard (`dashboard.html`)
- Menu lateral com acesso às telas:
  - Dashboard
  - Cadastro de Produtos
  - Lista de Produtos
  - Carrinho de Vendas
  - (Reservas para Estoque e Ordem de Serviço)
- Cards explicativos sobre módulos de Produtos, Vendas e Serviços.

### 3. Cadastro de Produtos (`cadastro-produto.html`)
Campos incluídos, conforme caso de uso:

- Descrição
- Imagem (URL)
- Preço de Venda
- Preço de Custo
- Fabricante
- Categoria

Funcionalidades:

- Validação dos campos obrigatórios.
- Armazenamento dos produtos em `localStorage` na chave `produtosBicicletaria`.
- Mensagens de sucesso/erro.
- Botão para limpar o formulário.

### 4. Lista de Produtos (`lista-produtos.html`)
Exibe os produtos cadastrados com:

- **Imagem**
- **Descrição**
- **Valor** (preço de venda formatado)
- **Botão “Adicionar ao Carrinho”**

Funcionalidades:

- Carrega os produtos do `localStorage`.
- Exibe os cards em um **grid responsivo**.
- Ao clicar em “Adicionar ao Carrinho”, o item é enviado para o carrinho (chave `carrinhoBicicletaria`).

### 5. Carrinho de Vendas (`carrinho.html`)
Exibe os itens adicionados ao carrinho em **tabela**, com:

- Item (descrição)
- Valor individual
- Botão para remover item
- Total da compra

Formulário adicional:

- Campo **Vendedor(a)** (opcional)
- Campo **Forma de pagamento** (Dinheiro, Cartão, Pix etc.)
- Botão **Finalizar Compra**

Ao finalizar a compra:

- Registra cada item vendido na chave `vendasBicicletaria` do `localStorage`, com:
  - Data da venda
  - Tipo de item (Produto)
  - Descrição
  - Vendedor(a)
  - Forma de pagamento
  - Valor
- Limpa o carrinho e atualiza a tela.

---

## 🛠 Tecnologias Utilizadas

- **HTML5** – marcação das páginas.
- **CSS3** – estilização (layout com sidebar, cards, formulários, tabelas).
- **JavaScript (ES6+)** – lógica de validação, integração entre telas, carrinho de compras.
- **localStorage** – armazenamento temporário de produtos, carrinho e vendas.

---

## 🚀 Como Executar o Projeto

1. Faça o download/clonagem do repositório.
2. Abra a pasta `src/` no VS Code.
3. Use a extensão **Live Server** (ou abra diretamente) para executar o arquivo **`login.html`**.
4. Fluxo sugerido para testes:
   - Acessar `login.html` → fazer login simulado;
   - Navegar até **Cadastro de Produtos** → cadastrar alguns itens;
   - Ir para **Lista de Produtos** → adicionar produtos ao carrinho;
   - Ir para **Carrinho de Vendas** → conferir itens, remover se necessário e finalizar compra.

---

## 📄 Documentação de Requisitos

O arquivo **`docs/requisitos_bicicletaria_etapa2.pdf`** contém os principais:

- **Requisitos Funcionais (RF13 a RF24)** focados em:
  - Lista de produtos;
  - Integração com o carrinho;
  - Estrutura e funcionamento do carrinho;
  - Registro de vendas.

- **Requisitos Não Funcionais (RNF11 a RNF17)** cobrindo:
  - Padrão visual;
  - Organização de código e pastas;
  - Persistência via `localStorage`;
  - Usabilidade e feedback;
  - Compatibilidade de navegadores;
  - Integração com GitHub.