import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

import logo from "../assets/images/logo.png";

const QUICK_LINKS = [
  { label: "الرئيسية", href: "/" },
  { label: "دليل الأطباء النفسيين", href: "/doctors" },
  { label: "المساعد النفسي الذكي (AI)", href: "/assistant" },
  { label: "مقياس الحالة والضغوط", href: "/assessment" },
  { label: "مساحة الطبيب المعالج", href: "/therapist" },
];

const SPECIALTIES = [
  { label: "اضطرابات القلق ونوبات الهلع", href: "/encyclopedia" },
  { label: "العلاج السلوكي المعرفي (CBT)", href: "/encyclopedia" },
  { label: "الاستشارات الزوجية والأسرية", href: "/doctors" },
  { label: "طب نفس الأطفال والمراهقين", href: "/doctors" },
];

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077B5] rounded";

const LinkColumn = ({ title, items, onLinkClick }) => (
  <div>
    <h3 className="mb-4 text-sm font-bold text-[#34D399]">{title}</h3>

    <ul className="flex flex-col gap-2.5">
      {items.map(({ label, href }) => (
        <li key={label}>
          <Link
            to={href}
            onClick={href === "/" ? undefined : onLinkClick}
            className={`text-sm text-slate-200 transition-colors duration-200 hover:text-[#A7F3D0] ${focus}`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleClick = (e) => {
    if (!loggedIn) {
      e.preventDefault();
      toast.warn("سجّل الدخول أولاً للمتابعة", { toastId: "login-required" });
    }
  };

  return (
    <footer dir="rtl" className="w-full bg-[#073441]">
      <div className="mx-auto grid max-w-350 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.1fr_1.1fr] lg:gap-8">

       
        <div>
          <Link
            to="/"
            className={`inline-flex items-center gap-3 ${focus}`}
          >
            <img
              src={logo}
              alt="Therapisto AI"
              className="h-12 w-12 shrink-0 rounded-full border-2 border-[#A7F3D0] bg-white object-cover"
            />

            <span className="whitespace-nowrap text-xl font-black text-white">
              ثيرابيستو <span className="text-[#34D399]">|</span>{" "}
              <span dir="ltr">Therapisto</span>
            </span>
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
            منصة الصحة النفسية الأولى المعتمدة لربط الأفراد بنخبة الأطباء
            والمعالجين النفسيين، وتقديم الدعم الذكي بخصوصية وسريّة تامة.
          </p>
        </div>

     
        <LinkColumn
          title="الوصول السريع"
          items={QUICK_LINKS}
          onLinkClick={handleClick}
        />

     
        <LinkColumn
          title="التخصصات العلاجية"
          items={SPECIALTIES}
          onLinkClick={handleClick}
        />

       
        <div>
          <h3 className="mb-4 text-sm font-bold text-[#34D399]">
            الأمان والخصوصية
          </h3>

          <div className="rounded-xl border border-[#1E6A73] bg-[#0F4C5C]/50 p-4">
            <p className="text-sm leading-6 text-slate-200">
              تشفير تام لجميع البيانات والجلسات. ملتزمون بأعلى معايير السرية
              والأخلاقيات الطبية.
            </p>
          </div>

          <p className="mt-6 text-xs leading-6 text-slate-400">
            © {new Date().getFullYear()} ثيرابيستو HealthTech. جميع الحقوق
            محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;