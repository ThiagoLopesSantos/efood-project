# 🍔 Efood — Projeto React com Checkout Completo

> Desenvolvido por **Thiago Lopes**

Aplicação de delivery semelhante ao iFood, desenvolvida com **React + TypeScript**, integrando formulários de entrega e pagamento, carrinho global com **Redux Toolkit**, validações com **Formik + Yup**, e integração com API real via **RTK Query**.

---

## 📋 Sumário
1. [Visão Geral](#-visão-geral)
2. [Tecnologias Usadas](#-tecnologias-usadas)
3. [Estrutura de Pastas](#-estrutura-de-pastas)
4. [Fluxo do Usuário](#-fluxo-do-usuário)
5. [Integração com a API `/checkout`](#-integração-com-a-api-checkout)
6. [Como Rodar Localmente](#-como-rodar-localmente)
7. [Principais Arquivos e Responsabilidades](#-principais-arquivos-e-responsabilidades)
8. [Gerenciamento de Estado Global](#-gerenciamento-de-estado-global)
9. [Formulários e Validação](#-formulários-e-validação)
10. [Persistência do Carrinho](#-persistência-do-carrinho)
11. [Comportamentos Importantes](#-comportamentos-importantes)
12. [Testando o Endpoint `/checkout`](#-testando-o-endpoint-checkout)
13. [O que Eu Aprendi](#-o-que-eu-aprendi)
14. [Próximos Passos / Melhorias](#-próximos-passos--melhorias)

---

## 🚀 Visão Geral

O **Efood** é um mini e-commerce de delivery onde o usuário pode:
- Visualizar restaurantes (home);
- Acessar o cardápio de um restaurante;
- Adicionar itens ao carrinho global;
- Realizar o checkout completo em etapas (itens → entrega → pagamento → sucesso);
- Integrar com API real para finalizar o pedido;
- Visualizar os dados retornados da API após o pedido.

O foco principal foi aplicar **Redux Toolkit**, **RTK Query**, **Formik**, **Yup**, e boas práticas de componentização.

---

## 🧠 Tecnologias Usadas

| Categoria | Tecnologias |
|------------|--------------|
| Framework | React + TypeScript |
| Estado Global | Redux Toolkit |
| API | RTK Query |
| Formulários | Formik + Yup |
| Estilos | Styled Components |
| Persistência | redux-persist |
| Deploy | Vercel |
| Utilitários | framer-motion, utils de formatação e totalização |

---

## 📁 Estrutura de Pastas (resumida)

```
src/
  components/
    Cart/
      index.tsx
      cartSteps/
        CartItems.tsx
        DeliveryForm.tsx
        PaymentForm.tsx
        SuccessMessage.tsx
  pages/
    Home.tsx
    ItemDetail.tsx
  services/
    api.ts
  store/
    reducers/
      cart.ts
    index.ts
  utils/
    totalPrice.ts
    priceConvert.ts
```

---

## 🧭 Fluxo do Usuário

1. **Home**: lista de restaurantes (dados da API).  
2. **Restaurante**: mostra o cardápio e adiciona itens ao carrinho.  
3. **Carrinho (Modal)**:  
   - Step 1 → Itens + total  
   - Step 2 → Formulário de entrega  
   - Step 3 → Formulário de pagamento  
   - Step 4 → Confirmação do pedido (dados da API)  
4. **Concluir** → Limpa o carrinho e fecha o modal.  

---

## 🌐 Integração com a API `/checkout`

### Endpoint configurado em `src/services/api.ts`:

```ts
purchase: builder.mutation<any, PurchasePayload>({
  query: (payload) => ({
    url: 'checkout',
    method: 'POST',
    body: payload
  })
})
```

### Estrutura do `PurchasePayload`

```ts
{
  products: [{ id: number, price: number }],
  delivery: {
    receiver: string,
    address: {
      decription: string,
      city: string,
      zipCode: string,
      number: number,
      complement: string
    }
  },
  payment: {
    card: {
      name: string,
      number: string,
      code: number,
      expires: {
        month: number,
        year: number
      }
    }
  }
}
```

### Exemplo de chamada no `Cart`:
```ts
const response = await purchase(payload).unwrap()
setOrderData(response)
setCurrentStep(4)
dispatch(clearCart())
```

---

## 🧑‍💻 Como Rodar Localmente

```bash
# 1. Clonar o projeto
git clone <url-do-repo>
cd efood

# 2. Instalar dependências
npm install
# ou
yarn

# 3. Rodar o projeto
npm run dev

# 4. Build de produção
npm run build

# 5. Deploy (Vercel)
# Ao dar push na main, a Vercel faz o deploy automático
```

---

## 🧩 Principais Arquivos e Responsabilidades

| Arquivo | Responsabilidade |
|----------|------------------|
| `Cart/index.tsx` | Controla o modal e as etapas do checkout |
| `DeliveryForm.tsx` | Formulário de entrega (Formik + Yup) |
| `PaymentForm.tsx` | Formulário de pagamento (Formik + Yup) |
| `SuccessMessage.tsx` | Exibe os dados do pedido após a API |
| `cart.ts` | Slice global do carrinho (add, remove, clear, open, close) |
| `api.ts` | RTK Query (endpoints + mutation `purchase`) |
| `totalPrice.ts` | Soma dos preços dos produtos |
| `priceConvert.ts` | Formata valores em reais (BRL) |

---

## 🗃️ Gerenciamento de Estado Global

- Utilizado **Redux Toolkit** para simplificar reducers e actions.  
- Carrinho global em `cart.ts` com persistência via `redux-persist`.  
- **RTK Query** para consumir API e realizar o `POST /checkout`.

---

## 🧾 Formulários e Validação

- **Formik** gerencia o estado dos campos, validação e submit.
- **Yup** define o schema de cada etapa (entrega e pagamento).
- Erros são exibidos apenas após o campo ser tocado (`touched`).

---

## 💾 Persistência do Carrinho

Configurada com **redux-persist** para manter o carrinho mesmo após recarregar a página.

```ts
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}
```

---

## ⚙️ Comportamentos Importantes

- **Voltar**: o usuário pode navegar entre etapas sem perder o que digitou.  
- **Concluir**: ao finalizar, o carrinho é limpo e o modal é fechado.  
- **Validação**: só avança de etapa quando o formulário é válido.  
- **Resposta da API**: exibida no `SuccessMessage` com os dados do pedido.

---

## 🧪 Testando o Endpoint `/checkout`

Teste manual com **curl**:

```bash
curl -X POST "https://api-ebac.vercel.app/api/efood/checkout" -H "Content-Type: application/json" -d '{
  "products":[{"id":1,"price":29.9}],
  "delivery":{
    "receiver":"Thiago Lopes",
    "address":{
      "decription":"Rua Exemplo, 123",
      "city":"São Paulo",
      "zipCode":"01234-567",
      "number":123,
      "complement":"Apt 1"
    }
  },
  "payment":{
    "card":{
      "name":"Thiago Lopes",
      "number":"4242424242424242",
      "code":123,
      "expires":{"month":12,"year":25}
    }
  }
}'
```

---

## 📘 O que Eu Aprendi

Durante este projeto aprendi e pratiquei:

- Criação e organização de **slices** no Redux Toolkit.  
- Uso de **RTK Query** para requisições e mutations.  
- Como integrar **Formik + Yup** em formulários complexos.  
- Manter estado de formulários entre etapas de checkout.  
- Persistir dados do carrinho com **redux-persist**.  
- Estruturar um fluxo completo de checkout com modal em steps.  
- Configurar e realizar **deploy automático na Vercel**.

---

## 🔮 Próximos Passos / Melhorias

- Adicionar **tratamento de erro** e **loading** nos formulários.  
- Implementar **testes unitários** e de integração.  
- Melhorar **acessibilidade** no modal (focus trap, aria-labels).  
- Adicionar **animações suaves** entre etapas (Framer Motion).  
- Permitir **persistência também dos dados de entrega e pagamento**.

---

## ✅ Conclusão

Este projeto consolida conceitos essenciais de **frontend moderno**:  
gerenciamento de estado global, integração com API, validação de formulários, e UX fluída em múltiplas etapas.

> “O aprendizado não está só em terminar o código, mas em entender cada parte dele.” — *Thiago Lopes*
