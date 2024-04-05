import Image from "next/image";
import Link from "next/link";
function Landing() {
  return (
    <div className="flex w-full md:flex-nowrap flex-wrap md:flex-row flex-col items-center justify-center gap-10 py-16 p-5 font-mainFont bg-gradient-to-l from-primary-BG-gr to-secondary-BG-gr rounded-lg mt-5">
      <div className="flex-shrink-0 flex justify-center md:w-72 w-full md:order-2 order-1">
        <Image
          src={"/assets/main.png"}
          width={300}
          height={300}
          alt="1"
          unoptimized
        />
      </div>
      <div className="space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 bg-primary-color rounded-full font-semibold text-xs text-primary-foreground animate-pulse py-1 px-2">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
                                        </svg> */}

            <span className="text-white">جشنــــواره تخفیف !</span>
          </span>
          <span className="font-semibold text-xs text-primary ">
            به زودی :)
          </span>
        </div>
        <h2 className="font-black sm:text-5xl text-3xl text-foreground">
          داستان برنامه‌نویس شدنت <br />
          از اینجا شروع میشه!
        </h2>
        <p className="sm:text-base text-sm text-muted">
          یادگیری برنامه‌نویسی آرزو نیست، فقط نیاز هست که تلاش و تمرین داشته
          باشید، بقیه‌اش با نابغه
        </p>
        <Link href={"/AllCourses"}>
          <div
            className="inline-flex items-center justify-center gap-1 h-11 bg-primary-color rounded-full text-primary-foreground transition-all hover:opacity-80 px-4 text-white"
          >
            <span className="font-semibold text-sm ">
              شروع یادگیری برنامه‌نویسی
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
