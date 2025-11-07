import { Roboto, Source_Sans_3} from 'next/font/google'
import Header from '@/components/Header'
import './index.css'
import { Footer } from '@/components/Footer';


const sourceSerif = Source_Sans_3({
    subsets: ['latin'],
    weight: ['400', '600', '700'], 
    variable: '--font-source-serif',
    display: 'swap',
});

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '600', '700'], 
    variable: '--font-roboto',
    display: 'swap'
})


export default function Layout({children}){
    return(
        <html lang='en' dir='ltr'>
            <body className={sourceSerif.className}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}