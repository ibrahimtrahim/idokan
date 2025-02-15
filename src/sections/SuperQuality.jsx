import { shoe8 } from "../assets/images"
import { Button } from "../components"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      <h2 className='font-palanquin capitalize text-4xl font-bold lg:max-w-lg dark:text-white'>
          We Provide You 
          <span className='text-coral-red'> Idokan </span><span className='text-coral-red'>Quality </span>Shoes.
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Idokan shoes are the embodiment of Agadir’s rich cultural heritage, handcrafted by skilled Moroccan artisans. Made from premium leather and featuring intricate designs, they blend traditional craftsmanship with modern comfort. 
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
        Each pair of Idokan shoes tells a story of heritage and artistry, offering both elegance and lasting comfort for those who appreciate authentic Moroccan footwear. Step into tradition with Idokan.
        </p>
        <div className="mt-11">
          <Button label='View Details' />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="Idokan2" width={570} height={522} className="object-contain" />
      </div>
    </section>
  )
}

export default SuperQuality