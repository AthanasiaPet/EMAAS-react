import Hero from '../components/Hero'
import MissionStrip from '../components/MissionStrip'
import About from '../components/About'
import Goals from '../components/Goals'
import CTA from '../components/CTA'

function Home() {
    return (
        <div>
            <Hero />
            <MissionStrip />
            <About />
            <Goals />
            <CTA />
        </div>
    )
}

export default Home