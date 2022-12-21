import { useState } from "react";
import Card from "./../component/card"

const MyCourse=()=>{
    const [courses,setCourses]=useState([]);
    const [loading,setLoading]=useState(false);
    return(
        <>
            <div className="max-w-[1280px] mx-auto card p-4 mb-5">
                <h3 className="text-xl text-[#31344b]">دوره های من</h3>
                <hr className="mb-10"/>
                <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {loading&&<p>... loading</p>}
                    {courses?.length===0&&!loading&&<p className="text-sm">شما تا کنون دوره ای ثبت نکرده اید</p>}
                    {courses?.length>0&&!loading&&courses.map(e=><Card key={e._id} image={e.photo} _id={e._id} teacher={e.user.fullName} title={e.title} description={e.description}/>)}
                </div>
            </div>
            <div className="max-w-[1280px] mx-auto card p-4 mb-5">
                <h3 className="text-xl text-[#31344b]">دوره های ثبت نام شده</h3>
                <hr className="mb-10"/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {loading&&<p>... loading</p>}
                    {courses?.length===0&&!loading&&<p className="text-sm">شما تا کنون در دوره ای شرکت نکرده اید</p>}
                    {courses?.length>0&&!loading&&courses.map(e=><Card key={e._id} image={e.photo} _id={e._id} teacher={e.user.fullName} title={e.title} description={e.description}/>)}
                </div>
            </div>
        </>
    )
};
export default MyCourse;