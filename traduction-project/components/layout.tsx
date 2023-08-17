import Footer from "./Footer";
import NavBar from "./Navbar";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return(
        <>
            <NavBar/>
            <main>{children}</main>
            <Footer/>
        </>
    );
}
export default Layout;