import Image from "next/image";
import Link from "next/link";

function Landing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 py-10 p-5 font-mainFont bg-gradient-to-l from-primary-BG-gr to-secondary-BG-gr rounded-lg mt-5">
      <div className="space-y-2 order-2 md:order-1 gap-5 flex flex-col">
        <div className="flex flex-wrap items-center gap-2 ">
          <span className="inline-flex items-center gap-1 bg-primary-color rounded-full font-semibold text-xs text-primary-foreground animate-pulse py-1 px-2">
            <span className="text-white">جشنــــواره تخفیف !</span>
          </span>
          <span className="font-semibold text-xs text-primary ">به زودی :)</span>
        </div>
        <h2 className="font-black sm:text-5xl text-4xl text-foreground text-white">
          داستان برنامه‌نویس شدنت <br /> از اینجا شروع میشه!
        </h2>
        <p className="sm:text-base text-sm text-muted ">
          یادگیری برنامه‌نویسی آرزو نیست، فقط نیاز هست که تلاش و تمرین داشته باشید، بقیه‌اش با نابغه
        </p>
        <Link href={"/AllCourses"}>
          <div className="inline-flex items-center justify-center gap-1 h-11 bg-primary-color rounded-2xl text-primary-foreground transition-all hover:opacity-80 px-20 py-4   text-white">
            <span className="font-semibold text-sm ">شروع یادگیری برنامه‌نویسی</span>
          </div>
        </Link>
      </div>
      <div className="relative w-full h-full order-1 md:order-2">
        <Image
          src={"/assets/main.png"}
          width={500}
          height={500}
          alt="cover"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Landing;