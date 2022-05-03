import './About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function About() {
    console.log('view changed');
    return (
        <div className="contact-page">
            <h2>Contact me</h2>
            <p>
                Hi, I'm Betty. Some cool text here. Some cool text here. Some cool text here. Some cool text here. Some cool text here. Some cool text here. Some cool text here. Some cool text here.
            </p>
            <div className="personal-image-wrapper">
                <img src='personal-photo.jpg' alt='personal'/>
            </div>
            <div>
                <ul>
                    <li className="contacts-li">
                        <a href="https://github.com/beatrisborisova" id='github'><FontAwesomeIcon icon={faGithub} /></a>
                    </li>
                    <li className="contacts-li">
                        <a href="https://bg.linkedin.com/in/beatris-borisova-8656b3177"
                        id='linkedin'><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About;