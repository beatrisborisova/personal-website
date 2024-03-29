import './About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function About() {
    return (
        <div className="contact-page">
            <div className="content">
                <h2>About me</h2>
                <p className='personal-intro'>
                    Hi, I'm Betty. I'm a Front&#8209;End Developer interested in <b>React.js</b> and I'm currently working at Amdocs Bulgaria.
                </p>
                <div className='personal-intro-more-info'>
                    <p>I started my jurney in programming two years ago and I found that Frond-End development makes me feel very exited.</p>
                    <p>I finished Software University JavaScript Web Development Track and I graduated Technical University Sofia.</p>
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
                <div className='other-technologies'>
                    <p>Technologies I'm experienced in:</p>
                    <ul className='other-skills-ul'>
                        <li className='png-image-wrapper'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'><img src='js.png' alt='Javascript' /></a></li>
                        <li className='png-image-wrapper'><a href='https://developer.mozilla.org/en-US/docs/Web/CSS'><img src='css.png' alt='CSS' /></a></li>
                        <li className='png-image-wrapper'><a href='https://sass-lang.com/documentation/'><img src='sass.png' alt='SASS' /></a></li>
                        <li className='png-image-wrapper'><a href='https://tailwindcss.com/'><img src='tailwind.png' alt='Tailwind' /></a></li>
                        <li className='png-image-wrapper'><a href='https://reactjs.org/'><img src='logo512.png' alt='React' /></a></li>
                        <li className='png-image-wrapper'><a href='https://angular.io/docs'><img src='angular.png' alt='Angular' /></a></li>
                        <li className='png-image-wrapper'><a href='https://www.typescriptlang.org/docs/'><img src='typescript.png' alt='Typescript' /></a></li>
                        <li className='png-image-wrapper'><a href='https://nodejs.org/en/docs/'><img src='nodejs.png' alt='Node.js' /></a></li>
                        <li className='png-image-wrapper'><a href='https://expressjs.com/'><img src='expressjs.png' alt='Express.js' /></a></li>
                        <li className='png-image-wrapper'><a href='https://www.mongodb.com/docs/'><img src='mongodb.png' alt='MongoDB' /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;