import Header from "./header";
import Footer from "./footer";
const Layer=(props)=>{
    return(
        <div className="">
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
};
export default Layer;