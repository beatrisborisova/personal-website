 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
    console.log('view changed');
    return (
        <div className="contact-page">
            <h2>Contact me</h2>
            <div>
                <ul>
                    <li>
                    <FontAwesomeIcon icon="fa-brands fa-github" /> Github
                    
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About;