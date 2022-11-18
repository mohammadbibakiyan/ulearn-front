import { useState } from "react";

export default function login() {
  const [login,setLogin]=useState(true);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {login&&<form className="w-[400px] card py-12 px-6">
        <div className="form-input invalid">
          <label>ایمیل</label>
          <input type="email" placeholder="ایمیل"/>
          <small>ایمیل را به درستی وارد کنید</small>
        </div>
        <div className="form-input valid">
          <label>پسورد</label>
          <input type="password" placeholder="پسورد"/>
          <small></small>
        </div>
        <button className="btn btn-primary disable mt-4">ورود</button>
        <span className="text-sm mt-6">ثبت نام نکرده اید؟ <a className="font-semibold" onClick={()=>setLogin(false)}>ایجاد حساب کاربری</a></span>
      </form>}
      {!login&&<form className="w-[400px] card py-12 px-6">
        <div className="form-input">
          <label>نام و نام خانوادگی</label>
          <input placeholder="نام و نام خانوادگی"/>
          <small></small>
        </div>
        <div className="form-input">
          <label>ایمیل</label>
          <input placeholder="ایمیل"/>
          <small></small>
        </div>
        <div className="form-input">
          <label>پسورد</label>
          <input type="password" placeholder="پسورد"/>
          <small></small>
        </div>
        <div className="form-input">
          <label>تایید پسورد</label>
          <input type="password" placeholder="تایید پسورد"/>
          <small></small>
        </div>
        <button className="btn btn-primary mt-4">ثبت نام</button>
        <span className="text-sm mt-6">از قبل حساب دارید؟ <a className="font-semibold" onClick={()=>setLogin(true)}>وارد شوید</a></span>
      </form>}
    </div>
  );
}
