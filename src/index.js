const respostaElemento = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const botaoPerguntar = document.querySelector("#botaoPerguntar")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim."
]

// qnd clicar em fazer pergunta
function fazerPergunta() {
  //se nao tiver valor, avisa e para
  if(inputPergunta.value == ""){
    alert("Digite sua pergunta")
    return
  }

  botaoPerguntar.setAttribute("disabled", true)
  //passa a pergunta feita para uma div abaixo da resposta
  const pergunta  = "<div>" + inputPergunta.value + "</div>"

  //gera numero aleatório 
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

//passa o elemento para html
respostaElemento.innerHTML = respostas[numeroAleatorio]

respostaElemento.style.opacity = 1;
//sumir a resposta apos um tempo
setTimeout(function() {
  respostaElemento.style.opacity = 0;
  botaoPerguntar.removeAttribute("disabled")
}, 3000)
}