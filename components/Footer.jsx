import Link from 'next/link'
import FooterCategories from './FooterCategories'
;import Logo from './Logo'
import Image from 'next/image'

export function Footer(){
    return (
        <footer className="pb-12 px-12">
            <FooterCategories />
            <div className="flex flex-col lg:flex-row md:justify-between items-center gap-4 mb-16">
                <Link href="/"><Logo /></Link>
                <div className="flex items-center justify-center gap-4 flex-wrap md:flex-nowrap">
                    <Link href="/" className="font-semibold">For designers</Link>
                    <Link href="/" className="font-semibold">Hire talent</Link>
                    <Link href="/" className="font-semibold">Inspiration</Link>
                    <Link href="/" className="font-semibold">Advertising</Link>
                    <Link href="/" className="font-semibold">Blog</Link>
                    <Link href="/" className="font-semibold">About</Link>
                    <Link href="/" className="font-semibold">Careers</Link>
                    <Link href="/" className="font-semibold">Support</Link>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/">
                        <Image width={18} height={18} alt="Twitter icon"  src="/images/twitter-icon.svg" />
                    </Link>
                    <Link href="/">
                        <Image width={18} height={18} alt="Facebook icon"  src="/images/facebook-icon.svg" />
                    </Link>
                    <Link href="/">
                        <Image width={18} height={18} alt="Instagram icon"  src="/images/instagram-icon.svg" />
                    </Link>
                    <Link href="/" >
                        <Image width={18} height={18} alt="Pintrest icon"  src="/images/pintrest-icon.svg" />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                    <p className="text-sm text-gray-500">© 2025 Dribbble</p>
                    <Link href="/" className="text-sm text-gray-500">Terms</Link>
                    <Link href="/" className="text-sm text-gray-500">Privacy</Link>
                    <Link href="/" className="text-sm text-gray-500">Cookies</Link>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-sm text-gray-500" >Jobs</Link>
                    <Link href="/" className="text-sm text-gray-500" >Designers</Link>
                    <Link href="/" className="text-sm text-gray-500" >Freelancers</Link>
                    <Link href="/" className="text-sm text-gray-500" >Tags</Link>
                    <Link href="/" className="text-sm text-gray-500" >Places</Link>
                    <Link href="/" className="text-sm text-gray-500" >Resources</Link>
                </div>
            </div>
        </footer>
    )
}