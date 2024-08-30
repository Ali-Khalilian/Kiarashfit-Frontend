import * as Yup from "yup";

export const LoginSchema = Yup.object({
  mobile: Yup.string()
    .required("لطفا شماره همراه خود را وارد کنید")
    .matches(/^09[0-9]{9}$/, "معتبر نیست / 123456789-09"),
  password: Yup.string()
    .required("لطفا رمز عبور خود را وارد کنید")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "حد اقل یک حرف بزرگ و یک حرف کوچک لاتین و اعداد و کارکترهای خاص استفاده کنید"
    ),
});

const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
export const RegisterSchema = Yup.object({
  firstname: Yup.string()
    .matches(/^[\u0600-\u06FF\s]+$/, "لطفا فارسی وارد کنید")
    .required("لطفا نام خود را وارد کنید")
    .min(3, "حداقل حرف مجاز 3 است")
    .max(30, "حداکثر 30 حرف مجاز است")
    .matches(
      /^[ابپتثجچهخدذرزسشصظطضعغفقک@-_.:گلمنوهیژئي\s0-9a-zA-Z]+$/,
      "فقط از حروف فارسی و لاتین و اعداد و @ : - _ . استفاده کنید"
    ),
  lastname: Yup.string()
    .matches(/^[\u0600-\u06FF\s]+$/, "لطفا فارسی وارد کنید")
    .required("لطفا نام خانوادگی خود را وارد کنید")
    .min(3, "حداقل حرف مجاز 3 است")
    .max(30, "حداکثر 30 حرف مجاز است")
    .matches(
      /^[ابپتثجچهخدذرزسشصظطضعغفقک@-_.:گلمنوهیژئي\s0-9a-zA-Z]+$/,
      "فقط از حروف فارسی و لاتین و اعداد و @ : - _ . استفاده کنید"
    ),
  mobile: Yup.string()
    .required("لطفا شماره همراه خود را وارد کنید")
    .matches(/^09[0-9]{9}$/, "معتبر  نیست / 123456789-09  "),

  email: Yup.string()
    .nullable()
    .trim()
    .test("is-email-or-empty", "فرمت ایمیل درست نیست", (value) => {
      if (value === null || value === undefined || value === "") {
        return true;
      }
      return Yup.string()
        .email("فرمت ایمیل درست نیست")
        .matches(emailRegex, "فرمت ایمیل درست نیست")
        .isValidSync(value);
    }),

  password: Yup.string()
    .required("لطفا رمز عبور خود را وارد کنید")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "حد اقل یک حرف بزرگ و یک حرف کوچک لاتین و اعداد و کارکترهای خاص استفاده کنید"
    ),
  confirmPassword: Yup.string()
    .required("لطفا رمز عبور خود را تکرار کنید")
    .oneOf([Yup.ref("password"), ""], "با رمز عبور مطابقت ندارد"),
});

export const EmailSchema = Yup.object({
  email: Yup.string()
    .required("لطفا ایمیل را وارد کنید")
    .email("فرمت ایمیل درست نیست"),
  subject: Yup.string().required("لطفا موضوع خود را وارد کنید"),
  description: Yup.string().required("لطفا متن خود را وارد کنید"),
});

const supportFormats = ["image/jpeg", "image/png"];
const fileSize = 3 * 1024 * 1024; // 3MB
export const ArticleSchema = Yup.object({
  articleImage: Yup.mixed()
    .nullable()
    .test(
      "fileSize",
      "حجم فایل بالای 3 مگ میباشد",
      (value) => !value || (value && value.size <= fileSize)
    )
    .test(
      "fileFormat",
      "فرمت فایل باید jpeg یا png باشد",
      (value) => !value || (value && supportFormats.includes(value.type))
    ),

  title: Yup.string()
    .required("لطفا عنوان را وارد کنید")
    .max(50, "عنوان طولانی است"),
  introduction: Yup.string().required("لطفا مقدمه خود را وارد کنید"),
  description: Yup.string().required("لطفا متن خود را وارد کنید"),
});

export const BodySchema = Yup.object({
  bodyImage: Yup.mixed()
    .nullable()
    .test(
      "fileSize",
      "حجم فایل بالای 3 مگ میباشد",
      (value) => !value || (value && value.size <= fileSize)
    )
    .test(
      "fileFormat",
      "فرمت فایل باید jpeg یا png باشد",
      (value) => !value || (value && supportFormats.includes(value.type))
    ),

  title: Yup.string()
    .required("لطفا عنوان را وارد کنید")
    .max(40, "عنوان طولانی است"),
});

export const PlanSchema = Yup.object({
  firstname: Yup.string()
    .matches(/^[\u0600-\u06FF\s]+$/, "لطفا فارسی وارد کنید")
    .required("لطفا نام را وارد کنید")
    .min(3, "حداقل حرف مجاز 3 است")
    .max(30, "حداکثر 30 حرف مجاز است"),
  lastname: Yup.string()
    .matches(/^[\u0600-\u06FF\s]+$/, "لطفا فارسی وارد کنید")
    .required("لطفا نام خانوادگی را وارد کنید")
    .min(3, "حداقل حرف مجاز 3 است")
    .max(30, "حداکثر 30 حرف مجاز است"),
  mobile: Yup.string()
    .required("لطفا شماره همراه خود را وارد کنید")
    .matches(/^09[0-9]{9}$/, "معتبر  نیست / 123456789-09  "),
  email: Yup.string()
    .required("لطفا ایمیل را وارد کنید")
    .email("فرمت ایمیل درست نیست"),
  hight: Yup.number()
    .required("لطفا قد را وارد کنید")
    .min(100, "حداقل قد 100 سانتی متر است")
    .max(999, "حداکثر 3 رقم مجاز میباشد"),
  weight: Yup.number()
    .required("لطفا وزن را وارد کنید")
    .min(1, "حداقل وزن 1 کیلوگرم میباشد")
    .max(999, "حداکثر 3 رقم مجاز میباشد"),
  age: Yup.number()
    .required("لطفا سن را وارد کنید")
    .min(10, "حداقل سن 10 سال میباشد"),
  workout: Yup.number()
    .required("لطفا تعداد جلسات را وارد کنید")
    .min(1, "حداقل  1 جلسه مجاز میباشد")
    .max(6, "حداکثر 6 جلسه مجاز میباشد"),
  history: Yup.string()
    .matches(/^[\u0600-\u06FF\s]+$/, "لطفا فارسی وارد کنید")
    .required("لطفا سابقه تمرینی خود را وارد کنید"),
  illness: Yup.string()
    .matches(/^[\u0600-\u06FF\s]+$/, "لطفا فارسی وارد کنید")
    .required("لطفا سابقه بیماری را وارد کنید"),
  goal: Yup.string()
    .matches(/^[\u0600-\u06FF\s]+$/, "لطفا فارسی وارد کنید")
    .required("لطفا هدف خود را وارد کنید"),
  description: Yup.string()
    .matches(/^[\u0600-\u06FF\s]+$/, "لطفا فارسی وارد کنید")
    .required("لطفا اطلاعات را وارد کنید"),
  file1: Yup.mixed().required("لطفا عکس را وارد کنید"),
  file2: Yup.mixed().required("لطفا عکس را وارد کنید"),
  file3: Yup.mixed().required("لطفا عکس را وارد کنید"),
  checkRules: Yup.bool().oneOf([true], "شما باید با قوانین موافقت کنید"),
});
