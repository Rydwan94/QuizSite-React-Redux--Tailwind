import illustrattion from '../../assets/images/Illusttration.png'

const Hero = () => {
  return (
    <section id="howItWorks" className="max-container flex justify-between max-xl:flex-col">
        <div className='self-start px-4'>
            <h1 className="text-8xl font-allerta max-md:text-4xl">
                <span className='text-[#3A7CD9]'>Learn</span>
                <br />
                new concepts
                <br />
                each minute
            </h1>
            <p className='py-10 text-2xl'><span className='text-[#3A7CD9]'>|</span> Try yourself in a quiz!</p>
            <button className='bg-gradient-to-r from-cyan-300 to-blue-500 font-monsterrat p-4 rounded-md text-white'>Start Solving</button>
        </div>
        <div className='flex justify-center animate-jump-in'>
            <img src={illustrattion} alt="Illustrattion" width={800} height={600} />
        </div>
    </section>
  )
}

export default Hero