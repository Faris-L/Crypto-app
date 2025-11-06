import Header from "../Header/header";
import Footer from "../Footer/footer";
import { Outlet } from "react-router-dom";
import { LayoutWrapper,Main } from "./pagelayout.styled";

const PageLayout =  () =>{
    return(
        <LayoutWrapper >
            <Header/>
            <Main>
                <Outlet/>
            </Main>
            <Footer/>
        </LayoutWrapper>
    )
}
export default PageLayout;