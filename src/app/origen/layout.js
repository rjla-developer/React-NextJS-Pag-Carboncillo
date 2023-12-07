import Footer from "@/assets/components/footer/Footer";
import Navbar from "@/assets/components/navbar/Navbar";

 
export default function Layout({ children }) {
  return (
    <>
      <Navbar styleNavbar="black" />
      {children}
    </>
  )
}