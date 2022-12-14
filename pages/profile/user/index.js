import MyCourse from "./../../../component/myCourse";
import ProfileMenu from "../../../component/profileMenu";

const UserProfile=()=>{
    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-5 max-w-[1280px] mx-auto">
            <div>
                <ProfileMenu/>  
            </div>
            <div className="col-span-2"><MyCourse/></div>
        </div>
    )
};

export default UserProfile;