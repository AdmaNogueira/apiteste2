import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react'
import './Home.css'
import celeste1 from '../assets/celeste1.png'
import celeste2 from '../assets/celeste2.png'
import celeste3 from '../assets/celeste3.png'
import lista from '../assets/lista.png'
import adolescentes from '../assets/adolescentes.png'
import celestecolegio from '../assets/celestecolegio.png'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={celeste1}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={celeste2}
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={celeste3}
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <section>
        <img className="listaImg"
        src={lista}
        />
      </section>
      <section className="section2">
        <div className="missao">
        <h1>NOSSA MISSÃO</h1>
        <p>Atuar na formação integral do cidadão, possibilitando a construção e reconstrução de conhecimentos indispensáveis para sua inserção social, como sujeito atuante e comprometido na transformação da comunidade em que está inserido.</p>
        </div>       
        <img className="adolescentesImg"
        src={adolescentes}
        />
      </section>
      <section className="section3">
      <div className="content">
        <div className="texto">
         <h2>Venha para o <span>Colégio Celeste!</span></h2>
         <p>
         </p>
        <button type="button" className="button" class="btn btn-outline-dark">Saiba mais</button>
        <button type="button" className="button" class="btn btn-outline-dark">Unidades</button>
        <button type="button" className="button" class="btn btn-outline-dark">Cadastro</button>
       </div>
      <div>
        <img className="section3Img" 
        src={celestecolegio}
        />
      </div>
      </div>
      </section>
    </div>
  )
}




export default Home
