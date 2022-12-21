import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import {Notyf} from "notyf";

let notyf;
const CoursesDetail=()=>{
    const router=useRouter();
    const [course,setCourse]=useState();
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
      if(router.isReady){
        const fetchData = async () => {
        const response = await fetch(
          `http://127.0.0.1:4000/api/v1/course/${router.query.id}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          }
        );
        const result = await response.json();
        setCourse(result.data);
      }
      fetchData().catch((err)=>console.log(err))
      setLoading(false);}
    },[router.isReady]);

    useEffect(()=>{
        notyf=new Notyf();
    },[])
    const registrationHandler=async()=>{
        try{
            const response = await fetch(`http://127.0.0.1:4000/api/v1/course/${router.query.id}/registration`, {
                method: "POST",
                credentials:"include",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const result=await response.json(); 
            console.log(result);
            if(result.status!=="success") throw new Error(result.message);
            notyf.success("ثبت نام در دوره با موفقیت انجام شد");
        }catch(err){
            notyf.error(err.message)
            console.log(err.message);
        }
    }

    return(
        <>
            {loading&&<p>loading ...</p>}
            {course&&!loading&&<div className="max-w-[1280px] mx-auto">
                <h1 className="mb-8 mt-12 text-lg">{course.title}</h1>
                <div className="card p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 course-details-title">
                        <div className="md:col-span-2 flex">
                            <img src={`${course.photo}`} className="w-20 h-20 rounded-full ml-5"/>
                            <div className="flex flex-col gap-3">
                                <h2>مدرس این دوره: <span>{course?.user?.fullName}</span></h2>
                                <div className="flex items-center gap-2"><img src="/icons/clock.svg" className="w-5 h-5"/><span>شروع از:</span><span>{new Intl.DateTimeFormat("fa-IR", {month: "long",day: "numeric",year: "numeric",}).format(new Date(course.startOfCourse))}</span></div>
                                <div className="flex items-center gap-2"><img src="/icons/money.svg" className="w-5 h-5"/><span>هزینه دوره: </span><span>{course.price} تومان</span></div>
                            </div>
                        </div>
                        <div className="justify-self-end"><button className="btn btn-primary" onClick={registrationHandler}>ثبت نام در دوره</button></div>
                    </div>
                    <hr/>
                    <div>
                        <h2 className="mb-3 course-details-title">جزئیات دوره</h2>
                        <div className="course-details-body">
                            <div className="flex items-center gap-2"><img src="/icons/calendar.svg" className="w-5 h-5"/><div>تعداد جلسات: </div><span>{course.numberOfSessions} جلسه</span></div>
                            {/* <div className="flex items-center gap-2"><img src="/icons/history.svg" className="w-5 h-5"/><div>طول دوره: </div><span>105 ساعت</span></div> */}
                            <div className="flex items-center gap-2"><img src="/icons/event_available.svg" className="w-5 h-5"/><div>روز های برگزاری: </div><span>{course.daysOfHolding}</span></div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <p className="mb-3 course-details-title">توضیحات دوره</p>
                        <p className="course-details-body">{course.description}</p>
                    </div>
                    <div className="mt-10">
                        <p className="mb-3 course-details-title">سرفصل های دوره</p>
                        <div className="course-details-body">
                            {course?.topic.split("\n").map((e,i)=><p key={i} className="flex items-center"><img src="/icons/radio_button.svg" className="w-3 h-3 ml-2"/>{e}</p>)}
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
}
export default CoursesDetail;