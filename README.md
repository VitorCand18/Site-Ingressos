# e-Ticket

O **e-Ticket** é um sistema simples de compra de ingressos online, onde os usuários podem escolher o tipo de ingresso e a quantidade desejada. O sistema controla a disponibilidade de ingressos para diferentes tipos de lugares, como pista, cadeira superior e cadeira inferior, e realiza a atualização do estoque de ingressos ao fazer a compra.

## Funcionalidades

- **Escolha do tipo de ingresso**: O usuário pode escolher entre três tipos de ingressos:
  - Pista
  - Cadeira superior
  - Cadeira inferior

- **Controle de estoque**: Cada tipo de ingresso tem uma quantidade disponível, que é atualizada automaticamente quando o usuário compra um ingresso.

- **Validação de disponibilidade**: O sistema verifica se há ingressos disponíveis para o tipo selecionado antes de concluir a compra. Caso a quantidade solicitada seja maior do que a disponível, o usuário recebe uma mensagem de alerta informando que não há ingressos suficientes.

- **Interface simples e intuitiva**: O design do sistema permite que o usuário escolha rapidamente o tipo e a quantidade de ingressos desejados.

## Tecnologias Utilizadas

- **HTML**: Estrutura básica do site e do formulário de compra de ingressos.
- **CSS**: Estilização da página para uma apresentação mais agradável.
- **JavaScript**: Lógica de controle de estoque e interação com o formulário.
- **Fontes Google**: Utilização de fontes externas para melhorar o estilo do site.

## Como Funciona

1. O sistema inicia com um número fixo de ingressos para cada tipo:
   - Pista: 100 ingressos
   - Cadeira superior: 200 ingressos
   - Cadeira inferior: 400 ingressos

2. O usuário escolhe o tipo de ingresso e insere a quantidade desejada.

3. Ao clicar no botão **Comprar**, o sistema verifica se a quantidade de ingressos solicitada está disponível:
   - Se a quantidade estiver disponível, o número de ingressos disponíveis é atualizado.
   - Se a quantidade não estiver disponível, uma mensagem de alerta é exibida informando o usuário sobre a indisponibilidade.

4. O estoque de ingressos é atualizado conforme a compra.


