# Nome do Seu Projeto

Descrição curta do seu projeto.

## Sumário

- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Sobre

Um aplicativo front-end que consome a API OpenWeatherMap para fornecer informações em tempo real sobre o clima de cidades selecionadas. Ele exibe dados como temperatura, descrição do clima, umidade e uma representação gráfica do estado atual.

## Funcionalidades

- **Consulta de Clima:**
  - Os usuários podem inserir o nome de uma cidade na caixa de pesquisa.
  - Ao clicar no botão "Buscar Clima", o aplicativo consome a API OpenWeatherMap para obter informações em tempo real sobre o clima da cidade.
  - As informações exibidas incluem:
    - Nome da cidade.
    - Temperatura atual em graus Celsius.
    - Descrição do estado do tempo.
    - Umidade em percentagem.
    - Ícone representando as condições climáticas.
  - Se a cidade não for encontrada ou ocorrer um erro na API, um alerta será exibido para informar ao usuário.

- **Interface Amigável:**
  - O layout é responsivo e amigável, proporcionando uma boa experiência de usuário em dispositivos móveis e desktop.

- **Feedback de Erro:**
  - Se a cidade não for válida ou ocorrer um erro durante a busca, um alerta amigável é exibido para informar o usuário sobre o problema.

- **Tratamento de Erros na API:**
  - O aplicativo trata possíveis erros na resposta da API para garantir uma experiência de usuário mais estável.

## Instalação

Passos para instalar o seu projeto. Por exemplo:

```bash
git clone https://github.com/seu-username/seu-projeto.git
cd seu-projeto
