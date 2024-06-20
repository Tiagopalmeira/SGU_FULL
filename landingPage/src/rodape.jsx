import { FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './CSS/rodape.css'
function Rodape() {
  return (
    <footer className="rodape">
      <div className="redes-sociais">
        <ul>
          <li>
            <a href="https://www.instagram.com">Instagram</a>
            <FaInstagram className="icone" />
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=SEUNUMERO">WhatsApp</a>
            <FaWhatsapp className="icone" />
          </li>
          <li>
            <a href="https://www.linkedin.com">LinkedIn</a>
            <FaLinkedin className="icone" />
          </li>
          <li>
            <a href="mailto:seuemail@gmail.com">Gmail</a>
            <FaEnvelope className="icone" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Rodape;
