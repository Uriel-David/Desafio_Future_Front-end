# Desafio_Future_Front-end
Desafio de programação como parte do processo seletivo.

## Pré-requisitos para pleno funcionamento do projeto
     O projeto consiste em uma Interface (desenvolvida com o framework Vue.js)
    onde o objetivo é consumir a API Marvel. Nesta interface, possui 3 funcionalidades:
    Listar todos os personagens, Visualizar os detalhes do personagem e "Feeling Lucky"
    no qual vai mostrar um personagem aleatório. Os pré-requisito do projeto é
    ter instalado algum gerenciador de repositório (NPM ou YARN) e o Vue.js 3.0.

## Processo de instalação do projeto
     Deverá realizar o 1º passo no arquivo que deseja instalar o projeto, os passos
    seguintes deverão ser realizados no arquivo gerado pelo 1º passo:

 - 1º passo: "git clone https://github.com/Uriel-David/Desafio_Future_Front-end.git"
 - 2º passo: "npm install" ou "yarn install"

## Observações quanto a estrutura da interface e sua configuração
     O projeto está concentrado principamente na pasta src, onde contém
    as principais funcionalidades, rotas e interfaces. Os principais arquivos
    são: components, router, store e views e na raíz possui o ficheiro marvel.js.

 - marvel.js (ficheiro): Contém 2 constantes para armazenar a PUBLIC_KEY e a PRIVATE_KEY da API Marvel.
 - components (arquivo): Contém 3 ficheiros Character.vue, Characters.vue e FeelingLucky.vue, responsáveis pelas funcionalidades da interface.
 - router (arquivo): Contém 1 ficheiro index.js responsável por todas as rotas da interface.
 - store (arquivo): Contém 1 ficheiro index.js responsável por construir funções e variáveis globais no projeto.
 - views (arquivo): Contém 2 ficheiros FeelingLucky.vue e Home.vue são responsáveis pela visualização do conteúdo.

     Sobre a PUBLIC_KEY e PRIVATE_KEY, caso deseje trocar por outra, apenas será necessário
    troca-las no referido arquivo anteriormente.

## Informações para teste da interface
     Apenas será necessário usar o comando "npm run serve" ou "yarn run serve" para compilar
    e torna online o servidor, logo em seguida pode acessar "http://localhost:8080/" (sendo essa a URL padrão para acesso no host local).
    Sendo assim possível navegar na interface e utilizar todas as suas funcionalidades.
