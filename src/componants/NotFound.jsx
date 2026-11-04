import { Link, useNavigate } from "react-router-dom";
import { House, Compass, ArrowRight } from "lucide-react";

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077B5] focus-visible:ring-offset-2";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section
      dir="rtl"
      className="flex min-h-[70vh] items-center justify-center bg-[#D1FAE5]/30 px-4 py-12"
    >
      <div className="w-full max-w-lg rounded-2xl border border-[#E2E8F0] bg-white p-8 text-center shadow-lg sm:p-12">

        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D1FAE5]">
          <Compass className="h-8 w-8 text-[#10B981]" />
        </span>

        <h1 className="mt-6 text-7xl font-black text-[#0F4C5C]">404</h1>

        <h2 className="mt-4 text-2xl font-black text-[#0F4C5C]">
          الصفحة غير موجودة
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها. ربما تم نقلها أو
          أن الرابط غير صحيح.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className={`flex items-center justify-center gap-2 rounded-xl bg-[#0F4C5C] px-6 py-3 text-sm font-bold text-white shadow-md transition-colors duration-200 hover:bg-[#0B3A47] ${focus}`}
          >
            <House className="h-5 w-5 text-[#34D399]" />
            العودة للرئيسية
          </Link>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className={`flex items-center justify-center gap-2 rounded-xl border border-[#0F4C5C] px-6 py-3 text-sm font-semibold text-[#0F4C5C] transition-colors duration-200 hover:bg-[#0F4C5C] hover:text-white ${focus}`}
          >
            <ArrowRight className="h-4 w-4" />
            الصفحة السابقة
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;