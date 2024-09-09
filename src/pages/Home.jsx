import Brand from "../components/Brand"
import Headline1 from "../components/Headline1"
import Hero from "../components/Hero"
import Jumbotron from "../components/Jumbotron"
import New from "../components/Newarrival"
import Warning from "../components/Warning"

export default function Home() {
    return (
        <div>
            <Warning />
            <Hero />
            <Brand />
            <New />
            <Headline1 />
            <Jumbotron />
        </div>
    )
};

