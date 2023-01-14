import { useEffect, useState } from "react";
import {Notyf} from "notyf";
const categories= [
    {
        _id: "6393934a82b1b44a2d639f38",
        title: "برنامه نویسی",
        children: [
            {
                _id: "639393d482b1b44a2d639f39",
                parent: "6393934a82b1b44a2d639f38",
                title: "Reactjs",
                children: [],
                id: "639393d482b1b44a2d639f39"
            },
            {
                _id: "639394af82b1b44a2d639f3c",
                parent: "6393934a82b1b44a2d639f38",
                title: "nodejs",
                children: [],
                id: "639394af82b1b44a2d639f3c"
            },
            {
                _id: "6393971e82b1b44a2d639f44",
                parent: "6393934a82b1b44a2d639f38",
                title: "PHP",
                children: [],
                id: "6393971e82b1b44a2d639f44"
            }
        ],
        id: "6393934a82b1b44a2d639f38"
    },
    {
        _id: "6393946282b1b44a2d639f3b",
        title: "دروس دانشگاهی",
        children: [
            {
                _id: "6393966d82b1b44a2d639f42",
                parent: "6393946282b1b44a2d639f3b",
                title: "رشته مهندسی کامپیوتر",
                children: [],
                id: "6393966d82b1b44a2d639f42"
            },
            {
                _id: "6393968482b1b44a2d639f43",
                parent: "6393946282b1b44a2d639f3b",
                title: "رشته مهندسی برق",
                children: [],
                id: "6393968482b1b44a2d639f43"
            },
            {
                _id: "6393973682b1b44a2d639f45",
                parent: "6393946282b1b44a2d639f3b",
                title: "علوم پایه",
                children: [],
                id: "6393973682b1b44a2d639f45"
            }
        ],
        id: "6393946282b1b44a2d639f3b"
    },
    {
        _id: "6393950382b1b44a2d639f3d",
        title: "طراحی",
        children: [
            {
                _id: "6393956d82b1b44a2d639f3e",
                parent: "6393950382b1b44a2d639f3d",
                title: "photoshop",
                children: [],
                id: "6393956d82b1b44a2d639f3e"
            },
            {
                _id: "639395b582b1b44a2d639f3f",
                parent: "6393950382b1b44a2d639f3d",
                title: "illustrator",
                children: [],
                id: "639395b582b1b44a2d639f3f"
            },
            {
                _id: "6393960782b1b44a2d639f40",
                parent: "6393950382b1b44a2d639f3d",
                title: "adobe xd",
                children: [],
                id: "6393960782b1b44a2d639f40"
            },
            {
                _id: "6393963082b1b44a2d639f41",
                parent: "6393950382b1b44a2d639f3d",
                title: "figma",
                children: [],
                id: "6393963082b1b44a2d639f41"
            }
        ],
        id: "6393950382b1b44a2d639f3d"
    }
];

let notyf;
const CreateCourse=()=>{
    const [categoryIndex,setCategoryIndex]=useState(0);
    
    useEffect(()=>{
        notyf=new Notyf();
    },[])

    const categoryChange=(event)=>{
        const index=categories.findIndex(e=> e._id==event.target.value);
        setCategoryIndex(index)
    };
    const submitAddCourseForm=async(event)=>{
        event.preventDefault();
        const courseData=Object.fromEntries([...new FormData(event.target)]);
        const data=new FormData();
        for (let pair of Object.entries(courseData)) {
            data.append(`${pair[0]}`,pair[1]);
        }
        try{const response = await fetch(
            `http://127.0.0.1:4000/api/v1/course`,
            {
              method: "POST",
              body: data,
              credentials: "include",
            }
          );
          const result = await response.json();
          if(result.status!=="success") throw new Error(result.message);
          notyf.success("دوره با موفقیت افزوده شد")
        }catch(err){
            notyf.error(err.message)
        }
    };
    return(
        <div className="max-w-[1280px] mx-auto card p-4">
            <h2 className="text-xl text-[#31344b]">افزودن دوره</h2>
            <hr className="mb-10"/>
            <form onSubmit={submitAddCourseForm} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className={`form-input`}>
                    <label>عنوان دوره</label>
                    <input type="text" placeholder="عنوان دوره" name="title"/>
                </div>
                <div className={`form-input`}>
                    <label htmlFor="category">دسته بندی</label>
                    <select name="" id="category" onChange={categoryChange}>
                        {categories.map(e=><option key={e._id} value={e._id}>{e.title}</option>)}
                    </select>
                </div>
                <div className={`form-input`}>
                <label htmlFor="sub_category">/</label>
                    <select name="category" id="sub_category">
                        {categories[categoryIndex].children.map(e=><option key={e._id} value={e._id}>{e.title}</option>)}
                    </select>
                </div>

                <div className={`form-input`}>
                    <label>قیمت دوره (تومان)</label>
                    <input type="number" min={0} step="1000" placeholder=" قیمت دوره" defaultValue={0} name="price"/>
                </div>
                <div className={`form-input`}>
                    <label>زمان شروع دوره</label>
                    <input type="date" placeholder="زمان شروع دوره" name="startOfCourse"/>
                </div>
                <div className={`form-input`}>
                    <label>تعداد جلسات</label>
                    <input type="text" placeholder="تعداد جلسات" name="numberOfSessions"/>
                </div>

                <div className={`form-input`}>
                    <label>زمان برگزاری</label>
                    <input type="text" name="daysOfHolding" placeholder="مثال: شنبه ها (10-12)"/>
                </div>

                <div className={`form-input col-start-1`}>
                    <label>نحوه برگزاری</label>
                    <div className="flex items-center gap-3">
                        <input type="radio" id="presence" name="MethodOfHolding" value="presence"/>
                        <label htmlFor="presence">حضوری</label>
                    </div>
                    <div className="flex items-center gap-3">
                        <input type="radio" id="virtual" name="MethodOfHolding" value="virtual"/>
                        <label htmlFor="virtual">مجازی</label>
                    </div>
                </div>
                <div className={`form-input`}>
                    <label>شماره، لینک کلاس</label>
                    <input type="text" placeholder="شماره، لینک کلاس" name="locationOfHolding"/>
                </div>

                <div className={`form-input lg:col-span-2`}>
                    <label> سرفصل های دوره</label>
                    <textarea placeholder="مثال : آشنایی با ابزار های ایمنی &#10;  آشنایی با معماری های کد نویسی" name="topic"/>
                </div>
                <div className={`form-input`}>
                    <label>عکس دوره</label>
                    <label htmlFor="photo"><img src="/icons/camera.svg" className="btn rounded-full w-16"/></label>
                    <input className="hidden" type="file" id="photo" name="photo" placeholder="عکس"/>
                </div>

                <div className={`form-input col-span-full`}>
                    <label> توصیف دوره</label>
                    <textarea placeholder="توصیف کلی در خصوص دوره" name="description"/>
                </div>
                <button className="btn btn-primary col-span-full place-self-end min-w-[400px]">ثبت دوره</button>
            </form>
        </div>
    )
};

export default CreateCourse;