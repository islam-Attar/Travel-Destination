import Header from "../header/Header"
import Tour from "../tour/Tour"
import Footer from "../footer/Footer"

export default function Home(props) {
    return (<>
        <Header />
        <Tour data2={props.data} />
        <Footer />
    </>
    )

}