import '../../styles/global.css'
import { useState, useEffect } from 'react'
import { HiHome, HiMenuAlt3, HiX, HiClipboardList, HiUserGroup, HiShoppingCart } from 'react-icons/hi'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // Detectar scroll para cambiar altura del header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const menuItems = [
        { href: "/#inicio", text: "Inicio", icon: HiHome },
        { href: "/menu", text: "Nuestro Menú", icon: HiClipboardList },
        { href: "/#findus", text: "Quienes Somos?", icon: HiUserGroup },
        { href: "https://www.pedidosya.com.ar/restaurantes/buenos-aires/burger-king-obelisco-a4cad619-85df-4ee4-9107-70ef92f21f8d-menu", text: "Pide Ya!", icon: HiShoppingCart }
    ]

    return (
        <>
            <header className={`z-40 bg-slate-900/30 fixed w-full flex justify-between items-center border-b border-white/30 px-4 lg:px-8 backdrop-blur-xl transition-all duration-500 ease-in-out ${
                isScrolled ? 'min-h-16 py-2' : 'min-h-24 py-4'
            }`}>
                {/* Logo */}
                <div className="flex-shrink-0">
                    <h1 className={`text-white transition-all duration-500 ease-in-out ${
                        isScrolled ? 'text-2xl lg:text-3xl' : 'text-3xl lg:text-4xl'
                    }`} style={{
                        fontFamily: 'Poppins-Bold',
                    }}>
                        BIG NIGGA <span style={{
                            fontFamily: 'Poppins-Bold',
                        }} className='text-orange-400'>BURGER</span>
                    </h1>
                </div>

                {/* Desktop Navigation */}
                <nav className='hidden lg:flex items-center space-x-8'>
                    {menuItems.map((item, index) => (
                        <a 
                            key={index}
                            className='nav-link text-sm text-white py-2 hover:text-orange-400 transition-colors duration-300 relative group' 
                            href={item.href}
                        >
                            <span className="flex items-center space-x-2">
                                <item.icon className="w-4 h-4" />
                                <span>{item.text}</span>
                            </span>
                            {/* Línea animada desde el centro */}
                            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    onClick={toggleMenu}
                    className='lg:hidden text-white hover:text-orange-400 transition-colors duration-300 p-2'
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <HiX className="w-6 h-6" />
                    ) : (
                        <HiMenuAlt3 className="w-6 h-6" />
                    )}
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
                {/* Backdrop */}
                <div 
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
                        isMenuOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                    onClick={toggleMenu}
                ></div>
                
                {/* Menu Panel */}
                <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl border-l border-orange-500/20 shadow-2xl transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    {/* Menu Header */}
                    <div className="flex items-center justify-between p-6 border-b border-orange-500/20">
                        <h2 className="text-xl text-white font-bold" style={{ fontFamily: 'Poppins-Bold' }}>
                            Menú
                        </h2>
                        <button 
                            onClick={toggleMenu}
                            className="text-white hover:text-orange-400 transition-colors duration-300 p-2"
                        >
                            <HiX className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <nav className="p-6">
                        <ul className="space-y-4">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <a 
                                        href={item.href}
                                        onClick={toggleMenu}
                                        className="mobile-nav-link flex items-center space-x-4 text-white hover:text-orange-400 py-3 px-4 rounded-lg transition-all duration-300 hover:bg-orange-500/10 hover:border-orange-500/30 border border-transparent group"
                                    >
                                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-300">
                                            <item.icon className="w-5 h-5 text-orange-400" />
                                        </div>
                                        <span className="text-lg font-medium" style={{ fontFamily: 'Poppins' }}>
                                            {item.text}
                                        </span>
                                        <div className="ml-auto w-2 h-2 rounded-full bg-orange-400/0 group-hover:bg-orange-400/60 transition-all duration-300"></div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Menu Footer */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-orange-500/20">
                        <div className="text-center">
                            <p className="text-sm text-gray-400 mb-2" style={{ fontFamily: 'Poppins' }}>
                                ¿Listo para ordenar?
                            </p>
                            <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 px-6 rounded-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25" style={{ fontFamily: 'Poppins-Bold' }}>
                                Pedir Ahora!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;