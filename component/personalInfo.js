import { useEffect, useState } from "react";

const PersonalInfo=()=>{
    const [info,setInfo]=useState(null);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const fetchData = async () => {
          const response = await fetch(
            `http://127.0.0.1:4000/api/v1/user/myPersonalInfo`,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
            }
          );
          const result = await response.json();
          setInfo(result.data);
        }
        fetchData().catch((err)=>console.log(err))
        setLoading(false);
      },[]);
    return(
        <div className="max-w-[1280px] mx-auto card p-4 mb-5 text-[#31344b]">
                <h3 className="text-xl text-[#31344b]">اطلاعات کاربری</h3>
                <hr className="mb-10"/>
                <div>
                    {loading&&<p>... loading</p>}
                    {!info===0&&!loading&&<p className="text-sm">اطلاعات کاربری یافت نشد</p>}
                    {info&&!loading&&<div className="grid gap-5 grid-cols1 md:grid-cols-2">
                        <div>
                            <p className="text-sm mb-1">نام و نام خانوادگی :</p>
                            <p>{info.fullName}</p>  
                        </div>  
                        <div>
                            <p className="text-sm mb-1">ایمیل :</p>
                            <p>{info.email}</p>  
                        </div>    
                        <div>
                            <p className="text-sm mb-1">مهارت ها :</p>
                            <p>{info?.skils?.map(e=><p>{e}</p>)||"مهارتی ثبت نشده است"}</p>  
                        </div>    
                        <div>
                            <p className="text-sm mb-1">معرفی :</p>
                            <p>{info.bio||"متن معرفی ثبت نشده است"}</p>  
                        </div>    
                    </div>}
                </div>
            </div>
    )
};

export default PersonalInfo;