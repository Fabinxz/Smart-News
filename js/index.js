const registerBtn = document.querySelector('#registerBtn');
const headerCategorias = document.querySelector(".header");
const form = document.querySelector('.boxForm');
let noticias = [];
let categorias = [];
let categoriaForm = ""

fetch("https://ifsp.ddns.net/webservices/noticiario/noticias")
.then(resposta => {
if (!resposta.ok) {
throw new Error("Houve algum erro");
}
return resposta.json();
})  
.then(dados => {
console.log(dados);
noticias = dados;

})
.catch(erro => {
console.error("Erro encontrado: ", erro);
});

fetch("https://ifsp.ddns.net/webservices/noticiario/categorias")
.then(resposta => {
if (!resposta.ok) {
throw new Error("Houve algum erro");
}
return resposta.json();
})  
.then(dados => {
console.log(dados);
categorias = dados;

let botoesNav = "";
for(let i = 0; i < categorias.length; i++){
    botoesNav += `<li><button class="nav" id="button${categorias[i]["nome"]}">${categorias[i]["nome"]}</button></li>`;
    categoriaForm += `<option>${categorias[i]["nome"]}`

}

headerCategorias.innerHTML = `<nav id="nav" class="navbar navbar-dark px-5 pt-3">
<a class="navbar-brand">
<button id="logoButton" type="button">
  <img src="assets/logo.png" height="55" class="d-inline-block align-top mt-3" alt="">
</button>
</a>
<ul class="nav justify-content-center nav-pills" id="categorias" >
    ${botoesNav}
</ul>
</nav>`

let btnJogos = document.querySelector('.nav');
btnJogos.addEventListener('click', showNotices);
let btnLogo = document.querySelector('#logoButton');
btnLogo.addEventListener('click', showIndex);

  function criarCategoria(event){
    event.preventDefault();
    form.classList.add('hide');
    setTimeout(()=>{
    form.innerHTML= `
    <form class="m-0">
	  <div class="form-group">
      <label class="text-light" for="categoria">Categoria</label>
      <select class="form-select" id="categoria">
        <option selected>Selecione a categoria...</option>
        ${categoriaForm}
      </select>
    </div>
  
    <div class="form-group mt-2">
      <label class="text-light" for="titulo">Título</label>
      <input type="text" class="form-control" id="titulo" placeholder="Digite o título da notícia" maxlength="25">
    </div>
  
    <div class="form-group mt-2">
      <label class="text-light" for="autor">Subtítulo</label>
      <input type="text" class="form-control" id="autor" placeholder="Digite o nome do autor"  maxlength="50">
    </div>
                
    <div class="form-group mt-2">
      <label class="text-light" for="texto">Descrição</label>
      <textarea class="form-control" id="texto" placeholder="Digite a descrição da notícia" maxlength="200"></textarea>
    </div>
                
    <button type="button" id="registerConfirm">Cadastrar</button>
    <button type="button" id="registerClear">Resetar</button>
  </form>`
  form.classList.remove('hide');
    }, 300);
  }

  registerBtn.addEventListener('click', criarCategoria);
})

function showNotices(event) {
  event.preventDefault(); 

  let smartDiv = document.querySelector('.smartImg');

  let newSmartDiv = document.createElement('div');
  newSmartDiv.classList.add('smartImg');
  
  setTimeout(()=>{
    newSmartDiv.innerHTML = `
    <img src="assets/shadow.png" class="backsmartphone">
    <img src="assets/smartphoneremove.png" class="smartphone">
  `;
  newSmartDiv.classList.remove('hide');
    }, 0);

  smartDiv.parentNode.replaceChild(newSmartDiv, smartDiv);
  
  smartDiv = newSmartDiv;
}

function showIndex(event) {
  event.preventDefault();
  
  let smartDivremove = document.querySelector('.smartImg');

  let newSmartDivremove = document.createElement('div');
  newSmartDivremove.classList.add('smartImg');

  setTimeout(()=>{
    newSmartDivremove.innerHTML = `
    <img src="assets/shadow.png" class="backsmartphone">
    <img src="assets/smartphone.png" class="smartphone">
  `;
    }, 0);

  smartDivremove.parentNode.replaceChild(newSmartDivremove, smartDivremove);

  smartDivremove = newSmartDivremove;
}


