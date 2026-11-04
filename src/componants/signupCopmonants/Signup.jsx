import { Link } from "react-router-dom";
import { Stethoscope, UserRound, } from "lucide-react";

import logo from "../../assets/images/logo.png";

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077B5] focus-visible:ring-offset-2";

const Signup = () => {
  return (
    <section
      dir="rtl"
      className="flex min-h-[70vh] items-center justify-center bg-[#D1FAE5]/30 px-4 py-12"
    >
      <div className="w-full max-w-4xl">

       
        <div className="mb-10 flex flex-col items-center text-center">
          <img
            src={logo}
            alt="Therapisto AI"
            className="h-16 w-16 rounded-full border-2 border-[#A7F3D0] object-cover"
          />

          <h1 className="mt-4 text-3xl font-black text-[#0F4C5C]">
            إنشاء حساب جديد
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            اختر نوع الحساب الذي يناسبك للبدء
          </p>
        </div>

       
        <div className="grid gap-6 md:grid-cols-2">


          <Link
            to="/signup/doctor"
            className={` h-fit group flex flex-col rounded-2xl bg-[#0F4C5C] p-8 text-white shadow-lg transition-shadow duration-200 hover:shadow-xl ${focus}`}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
              <Stethoscope className="h-7 w-7 text-[#34D399]" />
            </span>

            <h2 className="mt-5 text-2xl font-black">حساب طبيب / معالج</h2>

            <p className="mt-2 text-sm leading-7 text-slate-200">
              للأطباء والمعالجين النفسيين الراغبين في الوصول إلى المزيد من
              العملاء وإدارة جلساتهم بسهولة.
            </p>

            <span className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#0F4C5C]   ">
              إنشاء حساب طبيب
             
            </span>
          </Link>

          {/* CLIENT */}
          <Link
            to="/signup/client"
            className={`h-fit group flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-lg transition-all duration-200 hover:border-[#34D399] hover:shadow-xl ${focus}`}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#D1FAE5]">
              <UserRound className="h-7 w-7 text-[#10B981]" />
            </span>

            <h2 className="mt-5 text-2xl font-black text-[#0F4C5C]">
              حساب عميل
            </h2>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              للأفراد الباحثين عن دعم نفسي واستشارات مع نخبة من الأطباء
              والمعالجين المعتمدين.
            </p>

            <span className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-[#0F4C5C] px-4 py-3 text-sm font-bold text-white transition-colors group-hover:bg-[#0B3A47]">
              إنشاء حساب عميل
            
            </span>
          </Link>
        </div>

        {/* LOGIN LINK */}
        <p className="mt-8 text-center text-sm text-slate-600">
          لديك حساب بالفعل؟{" "}
          <Link
            to="/login"
            className="rounded font-bold text-[#0F4C5C] underline-offset-4 transition-colors hover:text-[#10B981] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077B5]"
          >
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;