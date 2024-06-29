import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';
import { Button, ThemeToggle } from '../components'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="">
                <img src={headerLogo} alt="Idokan Logo" width={130} height={29} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray hover:text-black dark:hover:text-white'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block'>
                <img src={hamburger} alt="hamburger" width={25} height={25}/>
            </div>
            <div className='flex justify-center items-center gap-2 max-lg:hidden'>
                <ThemeToggle />
                <Button label='Get Started' />
            </div>
        </nav>
    </header>
  )
}

export default Nav