import Vector from '../../assets/images/Vector.png'
import bookIcon from '../../assets/icons/bookIcon.png'
import boxIcon from '../../assets/icons/boxIcon.png'
import filmIcon from '../../assets/icons/filmIcon.png'

const Features = () => {
  return (
    <section className="relative pt-96 pb-40">
        <div className='flex justify-center mb-40 px-4'>
            <img className='absolute left-0 top-20' src={Vector} alt="vector" width={400} height={400} />
            <h2 className='text-4xl font-allerta self-end  max-md:text-4xl'>
                Quizyy comes with 
                <br />
                amazing <span className='text-[#3A7CD9]'>features</span> like:
            </h2>
        </div>
        <div className='max-container flex justify-center flex-wrap gap-9 max-lg:px-4 '>
            <div className='min-w-[300px] flex-1 shadow-xl p-4 rounded-xl'>
                <img src={bookIcon} alt="bookIcon" />
                <h3 className='py-4 font-allerta text-2xl font-bold'>3d Coverage</h3>
                <p className='text-lg font-monsterrat text-slate-400 leading-8 '>3 dimensional coverage of all questions related to a perticular topic</p>
            </div>
            <div className='min-w-[300px] flex-1 shadow-xl p-4 rounded-xl'>
                <img src={boxIcon} alt="boxIcon" />
                <h3 className='py-4 font-allerta text-2xl font-bold'>Plenty of subjescts</h3>
                <p className='text-lg font-monsterrat text-slate-400 leading-8 '>Plenty of subjects to choose from for e.g. Computer languages, Engineering subjects etc.</p>
            </div>
            <div className='min-w-[300px] flex-1 shadow-xl p-4 rounded-xl'>
                <img src={filmIcon} alt="filmIcon" />
                <h3 className='py-4 font-allerta text-2xl font-bold'>Detailed solutions</h3>
                <p className='text-lg font-monsterrat text-slate-400 leading-8 '>Detailed explaination of a solution is provided to get depper understanding of a topic</p>
            </div>
        </div>
    </section>
  )
}

export default Features