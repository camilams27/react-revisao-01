import React from 'react';
import './Galeria.css'

function galeriaImagens() {
  return (
      <div>
          <header>
              <p className="home">Home</p>
              <p className="perfil">Perfil</p>
          </header>
          <div className="container-titulo">
              <h1>Galeria de Imagens</h1>
              <p className="descricao">Aqui você encontra as imagens mais diversas.</p>
          </div>
            <div className="imagens">
                <div className="imagem">
                    <img src="https://thumbs.dreamstime.com/b/belle-mer-bleu-fonc%C3%A9-claire-64825699.jpg" alt="" />
                    <div className="container-desc-img">
                        <h4>Heading</h4>
                        <p className="desc-img"> This is a media card. You can use this section to describe the content.</p>
                        <p className="ver"><a href="#">VER</a></p>
                    </div>
                </div>
                <div className="imagem">
                    <img src="https://thumbs.dreamstime.com/b/belle-mer-bleu-fonc%C3%A9-claire-64825699.jpg" alt="" />
                    <div className="container-desc-img">
                        <h4>Heading</h4>
                        <p className="desc-img"> This is a media card. You can use this section to describe the content.</p>
                        <p className="ver"><a href="#">VER</a></p>
                    </div>
                </div>
                <div className="imagem">
                    <img src="https://thumbs.dreamstime.com/b/belle-mer-bleu-fonc%C3%A9-claire-64825699.jpg" alt="" />
                    <div className="container-desc-img">
                        <h4>Heading</h4>
                        <p className="desc-img"> This is a media card. You can use this section to describe the content.</p>
                        <p className="ver"><a href="#">VER</a></p>
                    </div>
                </div> 
            </div>

          <footer>
              <p className="titulo-footer">Galeria</p>
              <p className="desc-footer">As mais belas imagens <br/>
              Copyright &copy; Camila 2021 </p>
          </footer>
      </div>
  );
}

export default galeriaImagens;