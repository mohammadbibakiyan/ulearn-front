import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {Notyf} from "notyf";
import { useDispatch} from 'react-redux';
import {loginActions} from "./../store/store";
import UseValidation from "../hooks/useValidation";

let notyf;
export default function SignIn(){
    const dispatch=useDispatch();
    const [errorMessage,setErrorMessage]=useState("");
    const router=useRouter();
    const {error:nameError,touch:nameTouch,chengeHandler:nameChengeHandler,touchHandler:nameTouchHandler,value:nameValue}=UseValidation(value=>value.trim().length<3);
    const {error:emailError,touch:emailTouch,chengeHandler:emailChengeHandler,touchHandler:emailTouchHandler,value:emailValue}=UseValidation(value=>!value.trim().includes("@"));
    const {error:passwordError,touch:passwordTouch,chengeHandler:passwordChengeHandler,touchHandler:passwordTouchHandler,value:passwordValue}=UseValidation(value=>value.trim().length<8);
    const {error:passwordConfirmError,touch:passwordConfirmTouch,chengeHandler:passwordConfirmChengeHandler,touchHandler:passwordConfirmTouchHandler,value:passwordConfirmValue}=UseValidation(value=>value.trim().length<8||value!==passwordValue);
  
    useEffect(()=>{
      notyf=new Notyf();
    },[])

    const submitSignupForm=async(e)=>{
      e.preventDefault();
      try {
        const response = await fetch("https://ulearnbackend.onrender.com/api/v1/user/signup", {
          method: "POST",
          credentials:"include",
          headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email:emailValue, password:passwordValue, fullName:nameValue, passwordConfirm:passwordConfirmValue }),
        });
        const result=await response.json(); 
        if(result.status!=="success") throw new Error(result.message);
        setErrorMessage("");
        notyf.success("ثبت نام با موفقیت انجام شد");
        dispatch(loginActions.login());
        router.replace("/");
      } catch (err) {
        setErrorMessage(err.message)
      }
    };
  
    return (
    <div className="w-full  flex justify-center items-center">
      <form className="w-[400px] card py-12 px-6" onSubmit={submitSignupForm}>
        <div className={`form-input ${nameError&&nameTouch&&"invalid"} ${!nameError&&nameTouch&&"valid"}`}>
          <label>نام و نام خانوادگی</label>
          <input placeholder="نام و نام خانوادگی" onChange={nameChengeHandler} value={nameValue} onBlur={nameTouchHandler}/>
          <small></small>
        </div>
        <div className={`form-input ${emailError&&emailTouch&&"invalid"} ${!emailError&&emailTouch&&"valid"}`}>
          <label>ایمیل</label>
          <input placeholder="ایمیل" onChange={emailChengeHandler} value={emailValue} onBlur={emailTouchHandler}/>
          <small></small>
        </div>
        <div className={`form-input ${passwordError&&passwordTouch&&"invalid"} ${!passwordError&&passwordTouch&&"valid"}`}>
          <label>پسورد</label>
          <input type="password" placeholder="پسورد" onChange={passwordChengeHandler} value={passwordValue} onBlur={passwordTouchHandler}/>
          <small></small>
        </div>
        <div className={`form-input ${passwordConfirmError&&passwordConfirmTouch&&"invalid"} ${!passwordConfirmError&&passwordConfirmTouch&&"valid"}`}>
          <label>تایید پسورد</label>
          <input type="password" placeholder="تایید پسورد" onChange={passwordConfirmChengeHandler} value={passwordConfirmValue} onBlur={passwordConfirmTouchHandler}/>
          <small></small>
        </div>
        <button className={`btn btn-primary ${(emailError||nameError||passwordError||passwordConfirmError)&&"disable"} mt-4`}>ثبت نام</button>
        <div className="error-message mt-4">{errorMessage}</div>
        <span className="text-sm mt-6">
          از قبل حساب دارید؟{" "}
          <Link href="/login"><span className="font-semibold">وارد شوید</span></Link>
        </span>
      </form>
    </div>
  );
};
