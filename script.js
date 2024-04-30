let titulo = document.createElement("h1");

titulo.id = "titulo";
titulo.innerText = "loja de mangás";

let body = document.querySelector("body");

body.appendChild(titulo);


let produto = document.createElement("div");

produto.innerHTML = `
  <div>
    <h2>Berserk</h2>
    <img src "675322682667996.webp" alt="berserk">
    <p></p>
    <p id="precoManga">R$ 39.00</p>
  </div>
`;

body.appendChild(produto)