import ProfileMenu from "../../../component/profileMenu";
import CreateCourse from "./../../../component/createCourse"

const CreateCoursePage=()=>{
    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-5 max-w-[1280px] mx-auto">
            <div>
                <ProfileMenu/>  
            </div>
            <div className="col-span-2"><CreateCourse/></div>
        </div>
    )
};

export default CreateCoursePage;