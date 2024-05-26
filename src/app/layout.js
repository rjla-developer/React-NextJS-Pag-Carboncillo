import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

//CSS
import "../assets/styles/css/global.css";

//Components:
import Navbar from "@/assets/utils/components/navbar/Navbar";
/* import Navbar2 from '@/assets/components/navbar/Navbar2'; */
import ThemeProviderMUI from "@/assets/components/global/ThemeProviderMUI";
import Footer from "@/assets/utils/components/footer/Footer";

export const metadata = {
  title: "Carboncillo",
  description:
    "Servicios de marketing digital, optimizar campañas publicitarias, diseño de marca, creación de páginas web y posicionamiento en redes sociales.",
  keywords:
    "Marketing Digital en Morelos y Ciudad de México, Especialistas en Redes Sociales, Aumentar Clientes en Redes Sociales, Servicios de Publicidad en Línea, Marketing Digital, Publicidad en Google y Redes Sociales, Estrategias de Marketing en Línea, Servicios de Marketing Digital, Especialistas en Publicidad en Redes Sociales, Contratar Agencia de Marketing en Morelos, Consultoría de Marketing en Ciudad de México",

  formatDetection: {
    email: "carboncillomtk@gmail.com",
    telephone: "777 206 66 10",
  },

  authors: [
    {
      name: "rjla-developer",
      url: "https://www.linkedin.com/in/rjla-developer/",
    },
  ],
  creator: "rjla-developer",
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
        <ThemeProviderMUI>
          <Navbar styleNavbar="white"/>
          {children}
          <Footer />
        </ThemeProviderMUI>
      </body>
    </html>
  );
}
