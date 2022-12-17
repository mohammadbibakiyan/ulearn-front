import Card from "../component/card"
import { useState,useEffect } from "react"
// const course=[
//   {
//     _id:1,
//     title:" آموزش برنامه نویسی پایتون",
//     teacher:"مدائنی",
//     description:"توسعه دهندگان حرفه ای به صفحه کلید خود تسلط دارند و به ندرت از موس استفاده می‌کنند. شما به عنوان یک توسعه دهنده حرفه ای باید بتوانید سریع و راحت کدهای خود را بالا و پایین کنید و آنچه را که می‌خواهید را پیدا کرده و تغییر دهید. حرفه ای ها از کلیدهای میانبر و ترفندها استفاده می‌کنند تا در زمان کمتری بیشترین کد را تولید کنند. و این دقیقا همان چیزی است که ما در این دوره به آن می‌پردازیم.",
//     image:"./images/1.jpg"
//   },
//   {
//     _id:2,
//     title:"آموزش برنامه نویسی جاوا",
//     teacher:"ترابی",
//     description:"در دوره آموزش سریع کدنویسی در ویژوال استودیو میانبرها و ترفندهایی را با شما به اشتراک می‌گذاریم که به شما کمک می‌کند کد را در زمان کمتری پیدا کنید، بنویسید و تغییر دهید، برنامه را سریع‌تر و بهتر کامپایل، اجرا و دیباگ کنید، به راحتی بین فایل‌ها و کلاس‌های خود پیمایش کنید، و در کل سرعت و بهره وری شما را افزایش خواهد داد.",
//     image:"./images/2.jpg"
//   },
//   {
//     _id:3,
//     title:"آموزش برنامه نویسی کاتلین",
//     teacher:"میرزایی",
//     description:"امروزه در بیشتر برنامه ها اندرویدی که از کیفیت بالایی برخوردار هستند ما شاهد استفاده های مختلفی از فایل های گوشی کاربر هستیم ، بعضی برنامه ها مثل پیام رسان ها عکس های گوشی رو میخونند و عکس انتخابی کاربر رو براش به سمت رور ارسال میکنند",
//     image:"./images/3.jpg"
//   }
// ]

export default function Home() {
  const [courses,setCourses]=useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    const fetchData = async () => {
      const response = await fetch(
        `http://127.0.0.1:4000/api/v1/course`,
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
