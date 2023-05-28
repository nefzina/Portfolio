import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import "../sass/description.scss";
import Pdf from "../assets/AmaniNEFZI_DevFullStack_2023.pdf"

export default function Description() {
  return (
    <div className="description">
      <h1>Amani NEFZI</h1>
      <h2>Full Stack Web Developer</h2>
      <p>Click on the plane to open my CV</p>
      <a href = {Pdf} target = "_blank">
        <FontAwesomeIcon icon={faPaperPlane} />
      </a>
      <div id="progressBar"></div>
      <p id='progress'>In progress ...</p>
    </div>
  );
}
