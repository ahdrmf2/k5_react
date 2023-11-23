import Logoimg from "./Logoimg";
import LogoP from "./LogoP";
import LogoA from "./LogoA";


function LogoHeader() {
    return (
        <header className="App-header">
            <Logoimg />
            <LogoP msg={"부산대학교"}/>
            <LogoP msg={"K-digital 5기"}/>
            <LogoP msg={"성빈"}/>
            <LogoA />
        </header>
    );
}

export default LogoHeader;