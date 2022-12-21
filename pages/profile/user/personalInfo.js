import ProfileMenu from "../../../component/profileMenu";
import PersonalInfo from "./../../../component/personalInfo";

const PersonalInfoPage=()=>{
    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-5 max-w-[1280px] mx-auto">
            <div>
                <ProfileMenu/>  
            </div>
            <div className="col-span-2">
                <PersonalInfo/>
            </div>
        </div>
    )
};

export default PersonalInfoPage;