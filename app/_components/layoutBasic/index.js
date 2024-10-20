
import Header from "../Header";
import Footer from "../Footer";

export default function LayoutBasic({children}) {
    return (
        <>
            <Header/>
            {children}
            <Footer />
        </>
    )
}