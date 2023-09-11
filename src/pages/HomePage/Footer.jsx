import { useInView } from "framer-motion"

import { footerIcons } from "../../constants"
import brand from '../../assets/images/brand.png'
import { useRef } from "react"

const Footer = () => {

  const ref = useRef(null)
  const isInView = useInView(ref)

    const iconsList = footerIcons.map(icon => (
        <a key={icon.path} href={icon.path}><img className="max-sm:w-6 max-sm:h-6 mx-4 hover:transform hover:scale-105 transition-[transform]"  src={icon.img} alt="icon" width={40} height={0} /></a>
    ))
  return (
    <footer ref={ref} className={`max-container flex justify-between px-4 py-10 ${isInView && "animate-flip-down animate-delay-400"}`}>
        <img className="max-sm:w-[150px]" src={brand} alt="brand" />
        <section className="flex items-center basis-64 max-sm:basis-1/2">
            {iconsList}
        </section>
    </footer>
  )
}

export default Footer