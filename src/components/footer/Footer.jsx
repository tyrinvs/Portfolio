import gitHub from "./img/icons/gitHub.svg";
import "./style.scss";

function Footer() {
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://github.com/tyrinvs"><img src={gitHub} alt="Link"/></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;