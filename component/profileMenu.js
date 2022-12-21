import Link from "next/link";
import { useRouter } from "next/router";

const ProfileMenu=()=>{
    const router=useRouter();
    const path=router.asPath.split("/");
    return(
        <div className="card mb-5">
            <Link href="/profile/user/personalInfo" className={`flex link items-center ${path[path.length-1]==="personalInfo"&&"active"}`}><img src="/icons/person2.svg" className="w-8 ml-4"/>مشخصات من</Link>
            <Link href="/profile/user" className={`flex link items-center ${path[path.length-1]==="user"&&"active"}`}><img src="/icons/school.svg" className="w-8 ml-4"/>دوره های من</Link>
            <Link href="/profile/user/createCourse" className={`flex link items-center ${path[path.length-1]==="createCourse"&&"active"}`}><img src="/icons/playlist_add.svg" className="w-8 ml-4"/>افزودن دوره</Link>
            <p className="link flex items-center"><img src="/icons/logout.svg" className="w-8 ml-4"/>خروج از حساب کاربری</p>
        </div>
    );
};

export default ProfileMenu;