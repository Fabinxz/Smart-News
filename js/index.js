let registerBtn = document.querySelector('#registerBtn');
let boxForm = document.querySelector('.boxForm');

function showForm(event) {
  event.preventDefault(); 

  boxForm.classList.add('hide');

  setTimeout(() => {
    boxForm.innerHTML =`<form class="m-0">
    <div class="form-group">
      <label class="text-light" for="categoria">Categoria</label>
      <select class="form-select" id="categoria">
        <option selected>Selecione a categoria...</option>
        <option value="1">Política</option>
        <option value="2">Economia</option>
        <option value="3">Cultura</option>
        <option value="4">Esportes</option>
        <option value="5">Jogos</option>
      </select>
    </div>
  
    <div class="form-group mt-2">
      <label class="text-light" for="titulo">Título</label>
      <input type="text" class="form-control" id="titulo" placeholder="Digite o título da notícia">
    </div>
  
    <div class="form-group mt-2">
      <label class="text-light" for="autor">Subtítulo</label>
      <input type="text" class="form-control" id="autor" placeholder="Digite o nome do autor">
    </div>
                
    <div class="form-group mt-2">
      <label class="text-light" for="texto">Descrição</label>
      <textarea class="form-control" id="texto" placeholder="Digite a descrição da notícia"></textarea>
    </div>
                
    <button type="button" id="registerConfirm">Cadastrar</button>
    <button type="button" id="registerClear">Resetar</button>
  </form>`

    boxForm.classList.remove('hide'); 
  }, 300);
} 

registerBtn.addEventListener('click', showForm);

/* ========================================================================================================================================================== */

let jogosBtn = document.querySelector('.botaoFodase');
let slider = document.querySelector('.slide-container');
let smartImage = document.querySelector('.smartImg');

function showNotices(event) {
  event.preventDefault(); 

  smartImage.remove();

    slider.innerHTML =`<div class="slide-content">
    <div class="card-wrapper swiper-wrapper">
        <div class="card swiper-slide">
            <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                    <img src="assets/fort.png" alt="" class="card-img">
                </div>
            </div>
            <div class="card-content">
                <h2 class="name">Fortnite</h2>
                <p class="description">O jogo tem um modo "Battle Royale" onde 100 jogadores lutam até que apenas um jogador ou equipe sobreviva.</p>
                <button class="button">Veja mais</button>
            </div>
        </div>

        <div class="card swiper-slide">
          <div class="image-content">
              <span class="overlay"></span>

              <div class="card-image">
                  <img src="assets/vava.webp" alt="" class="card-img">
              </div>
          </div>

          <div class="card-content">
              <h2 class="name">Valorant</h2>
              <p class="description">Valorant é um jogo eletrônico de tiro em primeira pessoa, desenvolvido pela Riot Games, duas equipes de cinco.</p>

              <button class="button">Veja mais</button>
          </div>
      </div>

        <div class="card swiper-slide">
            <div class="image-content">
                <span class="overlay"></span>
                <div class="card-image">
                    <img src="assets/fort.png" alt="" class="card-img">
                </div>
            </div>
            <div class="card-content">
                <h2 class="name">Fortnite</h2>
                <p class="description">O jogo tem um modo "Battle Royale" onde 100 jogadores lutam até que apenas um jogador ou equipe sobreviva.</p>
                <button class="button">Veja mais</button>
            </div>
        </div>

        <div class="card swiper-slide">
          <div class="image-content">
              <span class="overlay"></span>

              <div class="card-image">
                  <img src="assets/vava.webp" alt="" class="card-img">
              </div>
          </div>

          <div class="card-content">
              <h2 class="name">Valorant</h2>
              <p class="description">Valorant é um jogo eletrônico de tiro em primeira pessoa, desenvolvido pela Riot Games, duas equipes de cinco.</p>

              <button class="button">Veja mais</button>
          </div>
      </div>

      <div class="card swiper-slide">
        <div class="image-content">
            <span class="overlay"></span>
            <div class="card-image">
                <img src="assets/fort.png" alt="" class="card-img">
            </div>
        </div>
        <div class="card-content">
            <h2 class="name">Fortnite</h2>
            <p class="description">O jogo tem um modo "Battle Royale" onde 100 jogadores lutam até que apenas um jogador ou equipe sobreviva.</p>
            <button class="button">Veja mais</button>
        </div>
    </div>

    <div class="card swiper-slide">
      <div class="image-content">
          <span class="overlay"></span>

          <div class="card-image">
              <img src="assets/vava.webp" alt="" class="card-img">
          </div>
      </div>

      <div class="card-content">
          <h2 class="name">Valorant</h2>
          <p class="description">Valorant é um jogo eletrônico de tiro em primeira pessoa, desenvolvido pela Riot Games, duas equipes de cinco.</p>

          <button class="button">Veja mais</button>
      </div>
  </div>

  <div class="card swiper-slide">
    <div class="image-content">
        <span class="overlay"></span>
        <div class="card-image">
            <img src="assets/fort.png" alt="" class="card-img">
        </div>
    </div>
    <div class="card-content">
        <h2 class="name">Fortnite</h2>
        <p class="description">O jogo tem um modo "Battle Royale" onde 100 jogadores lutam até que apenas um jogador ou equipe sobreviva.</p>
        <button class="button">Veja mais</button>
    </div>
</div>

<div class="card swiper-slide">
  <div class="image-content">
      <span class="overlay"></span>

      <div class="card-image">
          <img src="assets/vava.webp" alt="" class="card-img">
      </div>
  </div>

  <div class="card-content">
      <h2 class="name">Valorant</h2>
      <p class="description">Valorant é um jogo eletrônico de tiro em primeira pessoa, desenvolvido pela Riot Games, duas equipes de cinco.</p>

      <button class="button">Veja mais</button>
  </div>
</div>  
    </div>
</div>

<div class="swiper-button-next swiper-navBtn"></div>
<div class="swiper-button-prev swiper-navBtn"></div>
<div class="swiper-pagination"></div>
</div>`
}

jogosBtn.addEventListener('click', showNotices);
