import Link from 'next/link'

export default function Header() {
    return <header className="header">
        <div className="header__top">
            
        </div>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about-us">
            <a>About Us</a>
        </Link>
    </header>
}