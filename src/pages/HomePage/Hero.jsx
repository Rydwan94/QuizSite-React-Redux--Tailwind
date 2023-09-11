import { useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import illustrattion from '../../assets/images/Illusttration.png'
import { useRef } from 'react'

const Hero = () => {

  const ref = useRef(null)

  const isInView = useInView(ref)

  return (
    <section ref={ref} id="hero" className={`max-container flex justify-between max-xl:flex-col ${isInView && "animate-fade-down animate-delay-500"}`}>
        <div className='self-start px-4'>
            <h1 className="text-8xl font-allerta max-md:text-4xl">
                <span className='text-[#3A7CD9]'>Learn</span>
                <br />
                new concepts
                <br />
                each minute
            </h1>
            <p className='py-10 text-2xl'><span className='text-[#3A7CD9]'>|</span> Try yourself in a quiz!</p>
            <Link to='/questions '><button className='bg-gradient-to-r from-cyan-300 to-blue-500 font-monsterrat p-4 rounded-md text-white'>Start Solving</button></Link>
        </div>
        <div className='flex justify-center'>
            <img src={illustrattion} alt="Illustrattion" width={800} height={600} />
        </div>
    </section>
  )
}

export default Hero