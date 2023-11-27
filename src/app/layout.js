import Navbar from '@/assets/components/navbar/Navbar';
import { Inter } from 'next/font/google';

//SCSS
import "../assets/styles/css/global.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Carboncillo",
  description:
    "Servicios de marketing digital, optimizar campañas publicitarias, diseño de marca, creación de páginas web y posicionamiento en redes sociales.",
  keywords: "Marketing Digital en Morelos y Ciudad de México, Especialistas en Redes Sociales, Aumentar Clientes en Redes Sociales, Servicios de Publicidad en Línea, Marketing Digital, Publicidad en Google y Redes Sociales, Estrategias de Marketing en Línea, Servicios de Marketing Digital, Especialistas en Publicidad en Redes Sociales, Contratar Agencia de Marketing en Morelos, Consultoría de Marketing en Ciudad de México",

  formatDetection: {
    email: "carboncillomtk@gmail.com",
    telephone: "55 611 966 86",
  },

  authors: [{ name: 'rjla-developer', url: 'https://www.linkedin.com/in/rjla-developer/' }],
  creator: 'rjla-developer',
  /* openGraph: {
    title: "Carboncillo",
    description: "Servicios de marketing digital, optimizar campañas publicitarias, diseño de marca, creación de páginas web y posicionamiento en redes sociales.",
    authors: ["rjla-developer"],
  }, */
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <Navbar />
        {children}
        
      </body>
    </html>
  )
}
