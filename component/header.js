import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Header=()=>{
    const router=useRouter();
    const login=useSelector(state=>state.login.auth);

    const loginHandler=()=>{
        if(login)router.replace("/profile/user");
        if(!login)router.replace("/login");
    }
    return(
        <div className="py-4 shadow-soft mb-8">
            <nav className="max-w-[1280px] mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/"><img src="/icons/logo.svg" className="btn" style={{width:"150px"}} alt="ulearn logo"/></Link>
                    <ul className="flex">
                        {/* <li className="nav-link"><a>آخرین دوره ها</a></li>
                        <li className="nav-link"><a>فرصت های شغلی</a></li>
                        <li className="nav-link"><a>راه های ارتباطی</a></li> */}
                    </ul>
                </div>
                <div className="flex gap-3">
                    {/* <Link href="/cart"><img src="/icons/cart.svg" className="btn w-12 btn-icon-only" alt="ulearn logo"/></Link> */}
                    <img onClick={loginHandler} src="/icons/person.svg" className="btn w-12 btn-icon-only" alt="ulearn logo"/>
                </div>
            </nav>
        </div>
    );
};
export default Header;