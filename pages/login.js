import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {Notyf} from "notyf";
import { useDispatch} from 'react-redux';
import {loginActions} from "./../store/store";
import UseValidation from "./../hooks/useValidation";



export default function login() {
  // const notyf=new Notyf();
  const dispatch=useDispatch();
  const [errorMessage,setErrorMessage]=useState("");
  const router=useRouter();
  const {error:emailError,touch:emailTouch,chengeHandler:emailChengeHandler,touchHandler:emailTouchHandler,value:emailValue}=UseValidation(value=>!value.trim().includes("@"));
  const {error:passwordError,touch:passwordTouch,chengeHandler:passwordChengeHandler,touchHandler:passwordTouchHandler,value:passwordValue}=UseValidation(value=>value.trim().length<8);
  const submitLoginForm = async (e) => {
    e.preventDefault();
      try {
        const response = await fetch("http://127.0.0.1:4000/api/v1/user/login", {
          method: "POST",
          credentials:"include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email:emailValue, password:passwordValue }),
        });
        const result=await response.json(); 
        if(result.status!=="success") throw new Error(result.message);
        setErrorMessage("");
        // notyf.success("ورود با موفقیت انجام شد");
        dispatch(loginActions.login());
        router.replace("/");
      } catch (err) {
        setErrorMessage(err.message)
      }
  };

  return (
    <div className="w-full  flex justify-center items-center">
      <form className="w-[400px] card py-12 px-6" onSubmit={submitLoginForm}>
        <div className={`form-input ${emailError&&emailTouch&&"invalid"} ${!emailError&&emailTouch&&"valid"}`}>
          <label>ایمیل</label>
          <input type="email" placeholder="ایمیل" onChange={emailChengeHandler} value={emailValue} onBlur={emailTouchHandler}/>
          {/* <small>ایمیل را به درستی وارد کنید</small> */}
        </div>
        <div className={`form-input ${passwordError&&passwordTouch&&"invalid"} ${!passwordError&&passwordTouch&&"valid"}`}>
          <label>پسورد</label>
          <input type="password" placeholder="پسورد" onChange={passwordChengeHandler} value={passwordValue} onBlur={passwordTouchHandler} />
          {/* <small></small> */}
        </div>
        <button className={`btn btn-primary ${(emailError||passwordError)&&"disable"} mt-4`}>ورود</button>
        <div className="error-message mt-4">{errorMessage}</div>
        <span className="text-sm mt-6">
          ثبت نام نکرده اید؟{" "}
          <Link href="/signup"><span className="font-semibold">ایجاد حساب کاربری</span></Link>
        </span>
      </form>
    </div>
  );
}
