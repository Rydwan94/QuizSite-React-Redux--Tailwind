import { footerIcons } from "../../constants"
import brand from '../../assets/images/brand.png'

const Footer = () => {

    const iconsList = footerIcons.map(icon => (
        <img className="max-sm:w-6 max-sm:h-6" key={icon} src={icon} alt="icon" width={40} height={40} />
    ))
  return (
    <footer className="max-container flex justify-between px-4 py-10">
        <img className="max-sm:w-[150px]" src={brand} alt="brand" />
        <section className="flex basis-64 max-sm:basis-1/2 justify-between">
            {iconsList}
        </section>
    </footer>
  )
}

export default Footer