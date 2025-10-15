# Efood - Plataforma de Pedidos Online

## Visão Geral

O **Efood** é uma aplicação web de pedidos online desenvolvida em **React** com **TypeScript** e **Redux Toolkit**, que permite aos usuários explorar restaurantes, visualizar cardápios, adicionar produtos ao carrinho, preencher informações de entrega e pagamento, e finalizar pedidos com confirmação da API.  

O projeto foi pensado para simular um sistema real de e-commerce de alimentos, com foco em boas práticas de estado global, formulários complexos e integração com API.

---

## Tecnologias Utilizadas

- **React** (com hooks e roteamento via React Router)
- **TypeScript**
- **Redux Toolkit** (com **Redux Persist** para manter o carrinho mesmo ao atualizar a página)
- **Redux Toolkit Query (RTK Query)** para integração com API
- **Formik + Yup** para validação de formulários
- **React Input Mask** para máscaras em campos de formulário (CEP, cartão, CVV)
- **Styled Components** para estilização
- **React Spinners** para loaders

---

## Estrutura do Projeto

```
src/
├─ components/
│  ├─ Button/
│  ├─ Cart/
│  │  ├─ cartSteps/
│  │  │  ├─ CartItems.tsx
│  │  │  ├─ DeliveryForm.tsx
│  │  │  ├─ PaymentForm.tsx
│  │  │  └─ SuccessMessage.tsx
│  │  └─ Cart.tsx
│  ├─ Item/
│  ├─ ItemList.tsx
│  ├─ Product/
│  ├─ ProductList.tsx
│  └─ Tag/
├─ models/
│  ├─ Item.ts
│  └─ product.ts
├─ services/
│  └─ api.ts
├─ store/
│  ├─ reducers/
│  │  └─ cart.ts
│  └─ index.ts
├─ Container/
│  ├─ Footer.tsx
│  ├─ Header.tsx
│  └─ Main.tsx
├─ utils/
│  ├─ formErrorMessage.ts
│  ├─ priceConvert.ts
│  └─ totalPrice.ts
├─ pages/
│  ├─ Home.tsx
│  └─ ItemDetail.tsx
├─ routes.tsx
└─ App.tsx
```

---

## Funcionalidades Implementadas

### 1. Listagem de Restaurantes e Produtos
- A página **Home** lista restaurantes usando o endpoint `getRestaurantsList`.
- Cada restaurante possui um card com informações básicas e link para detalhamento.
- A página **ItemDetail** mostra o cardápio completo do restaurante selecionado com os produtos.

### 2. Carrinho de Compras
- Adicionar/remover produtos do carrinho.
- Controla quantidade de produtos por item.
- Carrinho lateral com overlay e botão para abrir/fechar.
- Total do pedido calculado automaticamente (`getTotalPrice`).
- Persistência do estado do carrinho com **Redux Persist**, mantendo os itens mesmo após atualizar a página.

### 3. Formulário de Entrega
- Criado com **Formik + Yup**.
- Campos validados: nome, endereço, cidade, CEP (com máscara), número e complemento.
- Mantém os valores preenchidos mesmo ao voltar para o carrinho.

### 4. Formulário de Pagamento
- Campos validados: nome no cartão, número, CVV e validade (mês/ano).
- Máscaras aplicadas para melhorar UX.

### 5. Confirmação de Pedido
- Ao clicar em "Finalizar pedido", os dados de entrega e pagamento são enviados via **RTK Query mutation** para `POST /checkout`.
- Exibe tela de **SuccessMessage** com o `orderId` retornado pela API.

### 6. Integração com API
- Endpoints criados com **Redux Toolkit Query**:
  - `getRestaurantsList` → lista restaurantes.
  - `getProductList` → detalhe de restaurante específico.
  - `purchase` → finaliza pedido e retorna ID do pedido.

---

## Aprendizados e Insights

1. **Gerenciamento de Estado Global**
   - Uso de Redux Toolkit para controlar o carrinho, mantendo a lógica centralizada e reutilizável.
   - Persistência do estado com Redux Persist para melhor experiência do usuário.

2. **Formulários Complexos**
   - Aplicação prática de Formik e Yup para validação, incluindo campos opcionais e máscaras de entrada.
   - Tratamento de erros e feedback ao usuário com mensagens específicas.

3. **Integração com API**
   - RTK Query simplifica chamadas de API, cache e gerenciamento de estado de dados.
   - Estrutura de payloads e tipagem TypeScript garante segurança e consistência.

4. **UX e Interatividade**
   - Modais para visualização de produtos.
   - Mensagens de confirmação detalhadas.
   - Carrinho lateral com overlay para foco no conteúdo principal.

5. **Boas práticas**
   - Componentização clara.
   - Tipagem rigorosa com TypeScript.
   - Separação de responsabilidades entre componentes, utils e store.

---

## Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone <seu-repositorio>
cd efood
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm start
```

4. Acesse `http://localhost:3000`.

---

## Próximos Passos

- Implementar atualização do carrinho sem necessidade de reload da página.
- Melhorar testes unitários e de integração.
- Adicionar filtros e pesquisa de restaurantes/produtos.

---

## Conclusão

Este projeto reforçou habilidades de:

- React avançado (hooks, roteamento, modais);
- Redux Toolkit + Persist;
- Formik + Yup para formulários complexos;
- Integração com APIs REST;
- TypeScript para segurança de tipos.

A aplicação está pronta para uso e demonstra fluxo completo de e-commerce de alimentos, desde visualização do cardápio até pagamento e confirmação de pedido.

