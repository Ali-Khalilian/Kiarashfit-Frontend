import React from "react";
import ImportanceCard from "../importanceCard/ImportanceCard";

const ImportanceSection = () => {
  return (
    <section id="importances">
      <div className="container">
        <div className="row">
          <ImportanceCard
            title="برنامه تمرینی"
            text="همه ورزشکاران برای به نتیجه رسیدن نیاز به برنامه تمرینی دارند ، اولین مزیت داشتن برنامه تمرینی ، مشخص بودن هدف و داشتن نظم است ، در تناسب آنلاین برنامه های تمرینی با توجه به شرایط ورزشکار ، نسبت به سابقه و حتی شرایط زندگی تنظیم می شود."
          />

          <ImportanceCard
            title="اهمیت تغذیه"
            text="تلاش های شما در باشگاه به تغذیه ختم و هدف اصلی شما در رژیم غذایی تعیین می شود ، شما هرچقدر هم از برنامه تمرینی خوبی پیروی کنید، اگر در تغذیه خود مشکل داشته باشید نمی توانید به اهداف خود دست پیدا کنید."
          />

          <ImportanceCard
            title="برنامه مکمل"
            text="مکمل ها تکمیل کننده رژِیم غذایی هستند ، آنجا که ورزشکار نمیتواند نیازش را از غذا تامین کنه ، مکمل ها به میدان می آیند و اثر خود را به می گذارند ، ما زمانی به ورزشکاران مکمل پیشنهاد میکنیم که تمایل به مصرف داشته باشند."
          />
        </div>
      </div>
    </section>
  );
};

export default ImportanceSection;