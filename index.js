const registerBtn = document.querySelector('#registerBtn');

// Obtém o elemento que contém o conteúdo principal
const content = document.querySelector('.content');

// Cria uma função de manipulador de evento para o clique do botão
function showRegisterForm(event) {
  // Previne o comportamento padrão do clique em um link
  event.preventDefault();

  // Substitui o conteúdo do elemento 'content' pelo código HTML da caixa de formulário
  content.innerHTML = `
              <div class="info">
                <h2>A notícia que você procura está <span>aqui!</span></h2>
                <p>Estamos comprometidos em manter você sempre atualizado - acompanhe as notícias mais relevantes do dia em nosso site e esteja por dentro do que acontece no mundo.</p>
                <button type="button" id="registerBtn">Cadastrar uma Notícia</button>
                <div class="boxform">
                <form class="m-0">
                <div class="form-group">
                  <label class="text-light" for="categoria">Categoria</label>
                  <select class="form-select" id="categoria">
                    <option selected>Selecione a categoria...</option>
                    <option value="1">Política</option>
                    <option value="2">Economia</option>
                    <option value="3">Cultura</option>
                    <option value="4">Esporte</option>
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
                  <textarea class="form-control" id="texto" rows="3" placeholder="Digite a descrição da notícia"></textarea>
                </div>
                            
                <button type="button" id="registerConfirm">Cadastrar</button>
                <button type="button" id="registerClear">Resetar</button>
              </form>
                </div>
              </div>
              <div class="smartImg">
                <img src="assets/shadow.png" class="backsmartphone">
                <img src="assets/smartphone.png" class="smartphone">
              </div>
            </div>
        </section>
  `;
}

// Adiciona um evento de clique ao botão "Cadastrar uma Notícia"
registerBtn.addEventListener('click', showRegisterForm);