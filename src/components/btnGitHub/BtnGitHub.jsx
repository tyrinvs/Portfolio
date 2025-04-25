import gitHubIcon from "./gitHub-black.svg";
import "./style.scss";

function BtnGitHub({link}) {
    return(
        <a href={link} target="_blank" rel="noreferrer" className="btn__outline">
            <img src={gitHubIcon} alt="GitHub Icon"/>
            GitHub
        </a>
    );
}

export default BtnGitHub;