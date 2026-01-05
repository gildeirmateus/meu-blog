---
title: 'Por que performance importa na Web?'
pubDate: 2023-11-05
description: 'Entenda como sites rápidos melhoram a experiência do usuário e ajudam no ranking do Google.'
state: 'SP'
author: 'Seu Nome'
tags: ["performance", "seo", "dicas"]
image:
  url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000"
  alt: "Monitor com código de programação"
---

## A velocidade é a nova estética

Você sabia que usuários abandonam sites que demoram mais de **3 segundos** para carregar? Ao construir este blog, escolhi tecnologias que priorizam a velocidade.

### O que deixa um site lento?

Geralmente, o excesso de JavaScript é o culpado. Frameworks antigos carregam "toneladas" de código que o usuário nem vai usar naquele momento.

> "A web deve ser rápida por padrão, não por exceção."

### Como melhorar?

1. **Imagens Otimizadas:** Use formatos como WebP.
2. **Código Limpo:** Evite bibliotecas desnecessárias.
3. **Static Site Generation (SSG):** Gere o HTML antes, no servidor (como estamos fazendo aqui no Astro), e não no celular do usuário.

## Exemplo de código

Se você é programador, veja como é simples criar uma variável em JavaScript:

```javascript
const velocidade = "rápida";
console.log(`Esta página é ${velocidade}!`);
