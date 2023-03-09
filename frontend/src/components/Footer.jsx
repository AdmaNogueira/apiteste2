import { Link } from "react-router-dom";
import './Footer.css'

import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <ul class="wrapper">
          <a href="https://github.com/Natanjfs" target="_blank" rel="noopener noreferrer">
              <li class="icon facebook">
                  <span class="tooltip">Natã</span>
                  <span></span>
              </li>
          </a>
          <a href="https://github.com/joanynha" target="_blank" rel="noopener noreferrer">
          <li class="icon twitter">
              <span class="tooltip">Mateus</span>
              <span><i class="fab fa-twitter"></i></span>
          </li>

          </a>
          <a href="https://github.com/LoboMurilo" target="_blank" rel="noopener noreferrer">
          <li class="icon instagram">
              <span class="tooltip">Murilo</span>
              <span><i class="fab fa-instagram"></i></span>
          </li>

          </a>
          <a href="https://github.com/AdmaNogueira" target="_blank" rel="noopener noreferrer">
          <li class="icon twitter">
              <span class="tooltip">Adma</span>
              <span><i class="fab fa-twitter"></i></span>
          </li>
          </a>

          <a href="https://github.com/Jhonatanpmp" target="_blank" rel="noopener noreferrer">
          <li class="icon twitter">
              <span class="tooltip">Jhonatan</span>
              <span><i class="fab fa-twitter"></i></span>
          </li>
          </a>
      </ul>        
    </footer>
    
  )
}

export default Footer