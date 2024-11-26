function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    //VARIAVEL CONTAINER BUSCADA PELO ID 'container'
    let cartao = document.createElement('article')
    //VARIAVEL CARTAO QUE CRIA <ARTICLE> NO HTML
    cartao.className = 'cartao'
    //CRIA CLASSE "cartao" para o elemento criado
    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `//inner.HTML insere texto no HTML via JAVASCRIPT
    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    //criação da função viraCartao
    //ao virar o cartão a resposta invisivel ficará invisivel por causa do !
    //ao clicar no cartao ele adiciona o método active p/ ativar o clic na resposta
    cartao.addEventListener('click', viraCartao)
    container.appendChild(cartao)
    //adiciona um evento de escuta para o clic do cartao
    //ao clicar cirar um item "filho(appendChild)" no cartao
}

perguntas.js
criaCartao(
    'Programação',
    'O que é Python?',
    'O Python é uma linguagem de programação'
)

criaCartao(
    'Esportes',
    'Qual é será o melhor time da série B de 2025?',
    'Clube do Remo de Belém do Pará'
)

criaCartao(
    'Programação',
    'O que é uma função?',
    'Uma função é um bloco de código que executa alguma tarefa'
)

criaCartao(
    'Lingua inglesa',
    'Como se diz oi em Inglês?',
    'Oi em ingles é HI (RAI)'
)

criaCartao(
    'Programação',
    'O que é um seletor root?',
    'Um seletor onde podemos criar variáveis no CSS'
)

criaCartao(
    'Ciências',
    'Qual a velocidade da luz?',
    '300 MIL KM por Segundo'
)

criaCartao(
    'Física',
    'Qual a aceleração da gravidade?',
    'Aproximadamente 9,8m/s'
)

criaCartao(
    'Programação',
    'Qual o nome do bloco do Scratch que verifica condições?',
    'SE / ENTÃO / SENÃO'
)

criaCartao(
    'Lingua Inglesa',
    'Como se diz a frase: "dia do pagamento" ?',
    'Pay day'
)

criaCartao(
    'Lingua Xucreza',
    'Como se diz "Black Friday" em Xucrês ?',
    'Blaquifridái'
)

criaCartao(
    'Lingua Espanhola',
    'Como se diz "menino" em Espanhol ?',
    'Tico'
)

criaCartao(
    'Geografia',
    'Onde fica a Ilha do Marajó  ?',
    'localizado no estado do Pará'
)

index.html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/style.css">
    <title>Flashcarda</title>
</head>
<body>
    <main>
        <section id="container">
<!--            <article class="cartao">
                <div class="cartao__conteudo">
                    <h3>Programação</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>O que é CSS?</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>O CSS é uma linguagem de estilização</p>
                    </div>
                </div>
            </article>
            <article class="cartao">
                <div class="cartao__conteudo">
                    <h3>Programação</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>O que é JavaScript?</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>O JS é uma linguagem de programação de alto nível.</p>
                    </div>
                </div>
            </article>
            <article class="cartao">
                <div class="cartao__conteudo">
                    <h3>Programação 2.0</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>0 que é Python?</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>0 Py é uma linguagem de programação de alto nível também</p>
                    </div>
                </div>
            </article>
            <article class="cartao"></article>
                <div class="cartao__conteudo">
                    <h3>História</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>Quem foram os bolcheviques?</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>Era uma mílicia que lutando por interesses alheios na revolução Russa</p>
                    </div>
                </div>
            </article> -->
        </section>
    </main>
    <footer>
        <p>Projeto desenvolvido pela Alura, sem fins lucrativos</p>
    </footer>
    <script src="app.js"></script>
    <script src="perguntas.js"></script>
</body>
</html>

style.css
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap&#39;);

:root {
    --text-color: #2469bd;
    --card-front-color: #e3e30f;
    --card-back-color: #010f01;
}

body {
    background: url('img/bg-desktop.webp');
    font-family: Bai Jamjuree;
}

#container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 4rem;
    gap: 3rem;
}

.cartao {
    margin: 1rem 1rem;
    height: 20rem;
    flex-grow: 1;
    flex-basis: calc(33% - 6rem);
}

.cartao__conteudo {
    background-color: var(--card-front-color);
    text-align: center;
    /* background-color: aquamarine; */
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms ease-in-out;
}

.cartao__conteudo h3 {
    color: var(--text-color);
    border: 1px solid var(--text-color);
    text-align: left;
    padding: 0.5rem;
    position: absolute;
    margin: 0.6rem;
    border-radius: 0.6rem;
    font-size: 1vw;
    backface-visibility: hidden;
}

.cartao__conteudo p {
    margin-top: 1rem;
    padding: 2rem;
    margin-top: 4rem;
}

.cartao__conteudo__pergunta p {
    color: var(--text-color);
    font-weight: 500;
}

.cartao__conteudo__resposta p {
    color: var(--card-back-color);
    font-weight: 700;
}

.cartao.active .cartao__conteudo {
    transform: rotateY(180deg);
}

.cartao__conteudo__pergunta,
.cartao__conteudo__resposta {
    backface-visibility: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
}

.cartao__conteudo__resposta {
    transform: rotateY(180deg);
}

footer {
    background-color: black;
    color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 2rem;
}

footer p {
    text-align: center;
    font-size: 0.6rem;
    margin-top: 0.5rem;
}

footer {
    background-color: black;
    color: white;
    bottom:0;
    position:fixed;
    width:100%;
}

footer p{
    text-align: center;
    font-size: 0.6rem;
    height: 2rem;
    margin-top: 0.5rem;
}