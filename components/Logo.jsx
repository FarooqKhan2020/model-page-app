// import LogoIcon from '../assets/images/icons/Logo.svg'
import LogoIcon from '../assets/images/logo/logo.png'

const Logo = () => {
    return (
        <div className='flex h-15 items-center gap-3 m-0 px-5 text-2xl font-light bg-stone-900 text-white'>
            {/* <LogoIcon className='w-8' /> */}
            <img src={LogoIcon} alt="VARIAM Logo" className='w-10 h-10 object-contain' />
            <span>
                <strong className='font-medium'>VARIAM </strong> 
            </span>
        </div>
    )
}

export default Logo
