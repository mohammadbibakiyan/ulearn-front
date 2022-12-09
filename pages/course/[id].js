const CoursesDetail=()=>{
    const topic=["بررسی ابزارهای مدیریت پروژه","آموزش معماری تمیز","تکنیک های کد نویسی ","صفحه بندی پیشرفته  در پروژه","اصول لایه بندی پروژه","کار با api","استفاده از درگاه پرداخت زرین پال و بانک ملی","مدیریت کیفیت کدها","استفاده از ابزار های امنیتی در aps.net core"]

    return(
        <div className="max-w-[1280px] mx-auto">
            <h1 className="mb-8 mt-12 text-lg">کمپ آموزشی و پروژه محور Asp.Net Core (اجرای پروژه واقعی )</h1>
            <div className="card p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 course-details-title">
                    <div className="md:col-span-2 flex">
                        <img src="/images/1.jpg" className="w-20 h-20 rounded-full ml-5"/>
                        <div className="flex flex-col gap-3">
                            <h2>مدرس این دوره: <span>حسن خسروجردی</span></h2>
                            <div className="flex items-center gap-2"><img src="/icons/clock.svg" className="w-5 h-5"/><span>شروع از:</span><span>19/09/1401</span></div>
                            <div className="flex items-center gap-2"><img src="/icons/money.svg" className="w-5 h-5"/><span>هزینه دوره: </span><span>800,000 تومان</span></div>
                        </div>
                    </div>
                    <div className="justify-self-end"><button className="btn btn-primary">ثبت نام در دوره</button></div>
                </div>
                <hr/>
                <div>
                    <h2 className="mb-3 course-details-title">جزئیات دوره</h2>
                    <div className="course-details-body">
                        <div className="flex items-center gap-2"><img src="/icons/calendar.svg" className="w-5 h-5"/><div>تعداد جلسات: </div><span>35 جلسه</span></div>
                        <div className="flex items-center gap-2"><img src="/icons/history.svg" className="w-5 h-5"/><div>طول دوره: </div><span>105 ساعت</span></div>
                        <div className="flex items-center gap-2"><img src="/icons/event_available.svg" className="w-5 h-5"/><div>روز های برگزاری: </div><span>شنبه (17:00 الی 20:00)</span></div>
                    </div>
                </div>
                <div className="mt-10">
                    <p className="mb-3 course-details-title">توضیحات دوره</p>
                    <p className="course-details-body">ASP.NET Core چیست؟افرادی که تکنولوژی های مایکروسافت به ویژه asp.net را پی گیری می کنند یکی دو سال می شود که با شنیدن خبرهایی مانند “open source شدن دات نت”، “قابلیت اجرا بر روی غیر ویندوز مثل لینوکس و os x با سوالهایی مواجه می شوند.  این تغییرات موجب چه بهبودهایی در توسعه نرم افزار های تحت .net می شود؟ آیا مایکروسافت از تکنولوژی های قبلی پشتیبانی می کند یا باید سراغ تکنولوژی جدید بروم؟ برای پاسخ به سوالهایی از این دست شاید بهترین راه پس از آشنایی اولیه، انجام یک پروژه می باشد. قصد داریم در این آموزش به معرفی  asp.net core  بپردازیم.</p>
                </div>
                <div className="mt-10">
                    <p className="mb-3 course-details-title">سرفصل های دوره</p>
                    <div className="course-details-body">
                        {topic.map((e,i)=><p key={i} className="flex items-center"><img src="/icons/radio_button.svg" className="w-3 h-3 ml-2"/>{e}</p>)}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CoursesDetail;