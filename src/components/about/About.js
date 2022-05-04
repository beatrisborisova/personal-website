import './About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function About() {
    return (
        <div className="contact-page">
            <h2>About me</h2>
            <p className='personal-intro'>
                Hi, I'm Betty. I'm a Front-End developer interested in <b>React.js</b>.
            </p>
            <div className='other-technologies'>
                <p>Other technologies I'm experienced in:</p>
                <ul className='other-skills-ul'>
                    <li>JavaScript</li>
                    <li>HTML &amp; CSS</li>
                    <li>Typescript</li>
                    <li>Angular</li>
                </ul>
            </div>
            <div className="personal-image-wrapper">
                <img src='personal-photo.jpg' alt='personal' />
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
                    <li className="contacts-li">
                        <a href="mailto:beatrisborisovaa@gmail.com"
                            id='mail'><FontAwesomeIcon icon={faEnvelope} /></a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default About;