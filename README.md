# Desafio frontend Conta Azul

LiveDemo: [Desafio frontend](https://determined-chandrasekhar-54b75c.netlify.com/)

#### Etapas de desenvolvimento:
1. Criação de branchs com cada feature da aplicação com o PR de cada uma para a branch master.
2. Ordem das branchs no repositório: {
    __Master__: Estrutura inicial,
    __Main__: Estilização global,
    __Header__: Component de header,
    __Loader__: Component de loader,
    __CardList__: Tela principal e container dos cards.
    __Card__: Cards individuais,
    __Api__: Requisição para api web,
    __ErrorRequest__: Tratamento de erros nos cards caso a request esteja errada,
    __AutoRequest__: Efetuar requisições automaticamente a cada 10 minutos,
    __Readme__: Criação de readme,
    __Test__: testes da aplicação,
    }
3. A aplicação foi desenvolvida utilizando: {
    __React__: Familiaridade com a linguagem,
    __Styled-components__: Estilização com sintax parecida com Sass,
    __Axios__: Efetuar as requisições.
    __Jest__: Efetuar os testes 
}

#### Usar aplicação

Debug:

1. No terminal navegue até sua pasta de preferência e `git clone https://github.com/hnrqsss/conta-azul-desafio.git`
2. Pelo terminal acesse o repositório baixado `cd conta-azul-desafio/`
3. Renomear arquivo `.exemple.env` para `.env`
4. No arquivo `.env` preencher o campo `REACT_APP_OPEN_WEATHER_KEY` com sua chave de ativação da api [OpenWeather](https://openweathermap.org/). Caso não tenha segue minha chave de exemplo: `8322ff92976f796ee84c0e74b1cf8ae2`
5. No termimal execute o comando `yarn --frozen-lockfile`
6. No termimal execute o comando `yarn start`

Prod:

1. No terminal navegue até sua pasta de preferência e `git clone https://github.com/hnrqsss/conta-azul-desafio.git`
2. Pelo terminal acesse o repositório baixado `cd conta-azul-desafio/`
3. Renomear arquivo `.exemple.env` para `.env`
4. No arquivo `.env` preencher o campo `REACT_APP_OPEN_WEATHER_KEY` com sua chave de ativação da api [OpenWeather](https://openweathermap.org/). Caso não tenha segue minha chave de exemplo: `8322ff92976f796ee84c0e74b1cf8ae2`
5. No termimal execute o comando `yarn --frozen-lockfile`
6. No termimal execute o comando `yarn build` caso esteja com o servidor rodando a alicação pare e execute o comando.
7. Com isso os aquivos de build estão gerados para deploy da aplicação.

#### Tests

`yarn test`