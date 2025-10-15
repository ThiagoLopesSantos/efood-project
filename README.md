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

