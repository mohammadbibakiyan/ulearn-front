const Footer=()=>{
    return(
        <footer className="footer mt-32 max-w-[1280px] mx-auto">
            <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p className="font-light mb-4">یولرن یک پلتفرم کاملا متفاوت در زمینه یادگیری و آموزش بوده تا بتواند برای دانشجویان فرصتی برای یادگیری و آمادگی برای ورورد به بازار کار پدید بیاورد. </p>
                    <div className="flex gap-2">
                        <div className="rounded-full btn-icon-social"><img src="./icons/instagram.svg"/></div>
                        <div className="rounded-full btn-icon-social"><img src="./icons/facebook.svg"/></div>
                        <div className="rounded-full btn-icon-social"><img src="./icons/twitter.svg"/></div>
                    </div>
                </div>
                <div>
                    <h5 className="mb-2">عضویت خبرگزاری</h5>
                    <form className="form-input flex flex-col gap-4">
                        <input type="email" placeholder="ایمیل"/>
                        <button className="btn">عضویت</button>
                    </form>
                    <p className="text-sm text-center">هرگز جزئیات شما به اشتراک گذاشته نخواهد شد</p>  
                </div>
            </div>
            <hr></hr>
            <p className="text-center text-xs">Copyright © Themesberg 2022. All rights reserved</p>
        </footer>
    )
};
export default Footer;