در این پروژه یک صفحه محاسبه‌گر داریم که با توجه به ورودی‌های داده شده (در صورت معتبر بودن)، خروجی مناسبی را چاپ می‌کند. 
توضیحات فایل index.html:
در این فایل که در واقع فایل html صفحه اصلی است، مشخصات 3 نوع فرمول قرار داده شده است. این صفحه به کمک فایل style.css آراسته شده است و به کمک فایل script.js، صفحه پاسخگو است و فرمول ها را حساب می کند یا ارور لازم را نمایش میدهد.
توضحیات فایل های formulai.html:
این فایل ها صفحات دیگر وبسایت را تشکیل میدهند و از لحاظ هندل شدن استایل یا منطق مشابه صفحه اصلی هستند. 
توضیحات فایل style.css: 
این فایل، ویژگی های بصری صفحات را تنظیم میکند و به آنها جلوه میدهد. در این فایل بخش های مختلف صفحه با Selector انتخاب شده اند و استایل مجزای مخصوص به خود را دارند. 
توضیحات فایل script.js: 
این فایل مسئولیت مدیریت فرمول ها و محاسبه خروجی آن ها را برعهده دارد. 
در این فایل یک کلاس FormulaEvaluator وجود دارد. هر آیتم formula درون صفحه یک object از جنس FormulaEvaluator دارد که به تغییرات هر فیلد از آن، در آن واحد واکنش نشان دهد. 
در ابتدای امر یک EventListener اضافه می‌شود که در آن تابع initializeFormulas صدا زده می‌‌شود که برای هر آیتم formula یک شی FormulaEvaluator می‌سازد. 
کلاس FormulaEvaluator یک constructor دارد که در آن با داشتن formulaElement مواردی مانند عبارت (expression)، ورودی و خروجی مقدار دهی می‌شود و همچنین نتایج در همان لحظه ابتدایی به روز رسانی می‌شود و یک EventListener 
نیز برای آن قرار داده می‌شود تا با هر تغییری در ورودی، update صورت بگیرد. 
همچنین تعدادی تابع کمکی وجود دارد که برای هندل کردن مواردی مانند ورودی معتبر به کار می‌‎آیند.
