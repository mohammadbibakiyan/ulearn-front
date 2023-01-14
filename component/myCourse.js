import { useEffect, useState } from "react";
import Card from "./../component/card"

const MyCourse=()=>{
    const [courses,setCourses]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const fetchData = async () => {
          const response = await fetch(
            `https://ecstatic-chaum-x5guwy1l.iran.liara.run/api/v1/user/myCourse`,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
            }
          );
          const result = await response.json();
          setCourses(result.data);
        }
        fetchData().catch((err)=>console.log(err))
        setLoading(false);
      },[])

    return(
        <>
            <div className="max-w-[1280px] mx-auto card p-4 mb-5">
                <h3 className="text-xl text-[#31344b]">دوره های من</h3>
                <hr className="mb-10"/>
                <div className="grid  grid-cols-1 lg:grid-cols-2  gap-4">
                    {loading&&<p>... loading</p>}
                    {courses?.myCourse?.length===0&&!loading&&<p className="text-sm">شما تا کنون دوره ای ثبت نکرده اید</p>}
                    {courses?.myCourse?.length>0&&!loading&&courses.myCourse.map(e=><Card key={e._id} image={e.photo} _id={e._id} teacher={e.user.fullName} title={e.title} description={e.description}/>)}
                </div>
            </div>
            <div className="max-w-[1280px] mx-auto card p-4 mb-5">
                <h3 className="text-xl text-[#31344b]">دوره های ثبت نام شده</h3>
                <hr className="mb-10"/>
                <div className="grid grid-cols-1  lg:grid-cols-2  gap-4">
                    {loading&&<p>... loading</p>}
                    {courses?.RegisteredCourses?.length===0&&!loading&&<p className="text-sm">شما تا کنون در دوره ای شرکت نکرده اید</p>}
                    {courses?.RegisteredCourses?.length>0&&!loading&&courses.RegisteredCourses.map(e=><Card key={e._id} image={e.photo} _id={e._id} teacher={e.user.fullName} title={e.title} description={e.description}/>)}
                </div>
            </div>
        </>
    )
};
export default MyCourse;