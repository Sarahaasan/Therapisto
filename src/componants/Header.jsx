import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {House,UserRound,Bot,FileText,Search,CalendarCheck,} from "lucide-react";
import logo from "../assets/images/logo.png";


const NAV_LINKS = [
  { label: "الرئيسية", href: "/", icon: House },
  { label: "دليل الأطباء النفسيين", href: "/doctors", icon: UserRound },
  { label: "الطبيب الذكي (AI)", href: "/assistant", icon: Bot },
  { label: "مقياس الحالة النفسية", href: "/assessment", icon: FileText },
  { label: "الموسوعة النفسية", href: "/encyclopedia", icon: Search },
  // { label: "مساحة المعالج", href: "/therapist", icon: UserRound },
];

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077B5]";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

 
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);


  const handleClick = (e) => {
    if (!loggedIn) {
      e.preventDefault();
      toast.warn("سجّل الدخول أولاً للمتابعة");
    }
  };

  return (
    <div>
      <nav
        dir="rtl"
        className={`fixed inset-x-0 top-0 z-40 w-full border-b pb-1.5 border-[#E2E8F0] backdrop-blur-md transition-all duration-300 ${
          scrolled ? "bg-white/85 shadow-sm" : "bg-white"
        }`}
      >
        <div className="flex w-full items-center justify-between gap-3 px-6 py-3 ">

      
          <Link to="/" className={`flex shrink-0 items-center gap-2 rounded-lg ${focus}`}>
            <img
              src={logo}
              alt="Therapisto AI"
              className="h-12 w-12 shrink-0 rounded-full border-2 border-[#A7F3D0]  object-cover"
            />

            <div className="flex flex-col leading-tight">
              <div className="flex items-center gap-2">
                <span className="whitespace-nowrap text-2xl font-black text-[#0F4C5C]">
                  ثيرابيستو
                </span>

            
                <span
                  dir="ltr"
                  className=" whitespace-nowrap rounded-full border border-[#34D399] bg-[#A7F3D0]/50 px-2 py-0.5 text-[10px] font-semibold text-[#0F4C5C] 2xl:block"
                >
                  Therapisto AI
                </span>
              </div>

              <span className=" whitespace-nowrap text-[11px] text-slate-500 2xl:block">
                مساعدك النفسي الذكي ونخبة المعالجين المتخصصين
              </span>
            </div>
          </Link>

      
          <div className="hidden items-center gap-1 xl:flex">
            {NAV_LINKS.map(({ label, href, icon: Icon }) => (
              <NavLink
                key={href}
                to={href}
                end={href === "/"}
                onClick={href === "/" ? undefined : handleClick}
                className={({ isActive }) =>
                  `group flex items-center gap-2 whitespace-nowrap rounded-xl px-2.5 py-2 text-[13px] font-semibold transition-colors duration-200 2xl:px-3 2xl:text-sm ${focus} ${
                    isActive
                      ? "bg-[#0F4C5C] text-white shadow-sm"
                      : "text-[#1F2A44] hover:bg-[#D1FAE5]/50 hover:text-[#0F4C5C]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                 
                    <Icon
                      className={`hidden h-[18px] w-[18px] min-[1400px]:block ${
                        isActive ? "text-[#A7F3D0]" : "text-[#10B981]"
                      }`}
                    />
                    <span>{label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

        
          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            <Link
              to="/login"
              className={`whitespace-nowrap rounded-xl border border-[#0F4C5C] px-3 py-2 text-[13px] font-semibold text-[#0F4C5C] transition-colors duration-200 hover:bg-[#0F4C5C] hover:text-white 2xl:px-4 2xl:text-sm ${focus}`}
            >
              تسجيل الدخول
            </Link>

            <Link
              to="/doctors"
              onClick={handleClick}
              className={`animate-float-y flex items-center gap-2 whitespace-nowrap rounded-xl bg-[#0F4C5C] px-3 py-2.5 text-[13px] font-bold text-white shadow-md transition-colors duration-200 hover:bg-[#0B3A47] 2xl:px-4 2xl:text-sm ${focus}`}
            >
              <CalendarCheck className="h-5 w-5 text-[#34D399]" />
              احجز جلسة الآن
            </Link>
          </div>

        
          <button
            onClick={() => setIsOpen(true)}
            className={`rounded-lg p-2 text-[#0F4C5C] hover:bg-[#D1FAE5]/50 xl:hidden ${focus}`}
            aria-label="فتح القائمة"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      
      {isOpen && (
        <div dir="rtl" className="fixed inset-0 z-[60] xl:hidden">

         
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[#0B3A47]/50"
          />

         
          <div className="absolute right-0 top-0 flex h-full w-72 max-w-[85vw] flex-col overflow-y-auto border-l border-[#E2E8F0] bg-white p-5 shadow-xl">

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={logo}
                  alt="Therapisto AI"
                  className="h-9 w-9 shrink-0 rounded-full border-2 border-[#A7F3D0] bg-[#D1FAE5]/40 object-cover"
                />

                <span className="text-2xl font-black text-[#0F4C5C]">
                  ثيرابيستو
                </span>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className={`rounded-lg p-2 text-2xl leading-none text-[#0F4C5C] hover:bg-[#D1FAE5]/50 ${focus}`}
                aria-label="إغلاق القائمة"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href, icon: Icon }) => (
                <NavLink
                  key={href}
                  to={href}
                  end={href === "/"}
                  onClick={(e) => {
                    setIsOpen(false);
                    if (href !== "/") handleClick(e);
                  }}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-3 py-3 text-base font-semibold transition-colors ${focus} ${
                      isActive
                        ? "bg-[#0F4C5C] text-white"
                        : "text-[#1F2A44] hover:bg-[#D1FAE5]/50"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={`h-5 w-5 ${
                          isActive ? "text-[#A7F3D0]" : "text-[#10B981]"
                        }`}
                      />
                      {label}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-[#E2E8F0] pt-6">
              <Link
                to="/doctors"
                onClick={(e) => {
                  setIsOpen(false);
                  handleClick(e);
                }}
                className={`flex items-center justify-center gap-2 rounded-xl bg-[#0F4C5C] px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-[#0B3A47] ${focus}`}
              >
                <CalendarCheck className="h-5 w-5 text-[#34D399]" />
                احجز جلسة الآن
              </Link>

              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className={`rounded-xl border border-[#0F4C5C] px-5 py-2.5 text-center text-sm font-semibold text-[#0F4C5C] hover:bg-[#0F4C5C] hover:text-white ${focus}`}
              >
                تسجيل الدخول
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;