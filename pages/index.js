import Card from "../component/card"
import { useState,useEffect } from "react"

export default function Home() {
  const [courses,setCourses]=useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    const fetchData = async () => {
      const response = await fetch(
        `https://ecstatic-chaum-x5guwy1l.iran.liara.run/api/v1/course`,
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
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-w-[1280px] mx-auto gap-4">
        {loading&&<p>loading ...</p>}
        {courses?.length===0&&!loading&&<p>دوره ای وجود ندارد</p>}
        {courses?.length>0&&!loading&&courses.map(e=><Card key={e._id} image={e.photo} _id={e._id} teacher={e.user.fullName} title={e.title} description={e.description}/>)}
      </div>
    </>
  )
}
