import { useState } from "react";
import { Link , useNavigate  } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";

import logo from "../assets/images/logo.png";

const inputClass =
  "w-full rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#1F2A44] placeholder:text-slate-400 transition-colors focus:border-[#10B981] focus:outline-none focus:ring-2 focus:ring-[#A7F3D0]";

const Login = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


//   handle submit 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password) {
      toast.error("أدخل البريد الإلكتروني وكلمة المرور");
      return;
    }
    toast.success( "تم تسجيل الدخول بنجاح! جاري تحويلك للصفحة الرئيسية..."  , { autoClose: 1500 });
    setTimeout(() => {
    navigate("/");
  }, 2000);
  };

  return (
    <section
      dir="rtl"
      className="flex min-h-[70vh] items-center justify-center bg-[#D1FAE5]/30 px-4 py-12"
    >
      <div className="w-full max-w-md rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-lg">

      
        <div className="mb-8 flex flex-col items-center text-center">
          <img
            src={logo}
            alt="Therapisto AI"
            className="h-16 w-16 rounded-full border-2 border-[#A7F3D0] object-cover"
          />

          <h1 className="mt-4 text-2xl font-black text-[#0F4C5C]">
            تسجيل الدخول
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            {/* مرحباً بعودتك إلى ثيرابيستو */}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

         
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-[#1F2A44]"
            >
              البريد الإلكتروني
            </label>

            <input
              id="email"
              type="email"
              dir="ltr"
              autoComplete="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </div>

        
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-[#1F2A44]"
            >
              كلمة المرور
            </label>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                dir="ltr"
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${inputClass} pr-12`}
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2 text-[#10B981] transition-colors hover:bg-[#D1FAE5]/60 hover:text-[#0F4C5C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077B5]"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          
          <button
            type="submit"
            className="w-full rounded-xl bg-[#0F4C5C] px-4 py-3 text-sm font-bold text-white shadow-md transition-colors duration-200 hover:bg-[#0B3A47] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077B5] focus-visible:ring-offset-2"
          >
            تسجيل الدخول
          </button>
        </form>

     
        <p className="mt-6 text-center text-sm text-slate-600">
          ليس لديك حساب؟{" "}
          <Link
            to="/signup"
            className="font-bold text-[#0F4C5C] underline-offset-4 transition-colors hover:text-[#10B981] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077B5] rounded"
          >
            أنشئ حساباً جديداً
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;