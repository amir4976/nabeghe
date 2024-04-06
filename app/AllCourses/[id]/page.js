import InfoBlock from "@/components/coursePage/InfoBlock";
import Image from "next/image";
import React from "react";
import { IoTime } from "react-icons/io5";
import { RiApps2Fill } from "react-icons/ri";
import { FaCircleInfo } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import Link from "next/link";
import DotedTitle from "@/components/DotedTitle";
import Footer from "@/components/Footer";
import MiniBarLeftSide from "@/components/coursePage/MiniBar";

function page() {
  return (
    <div className=" max-w-7xl m-auto ">
    <div className="w-full flex  justify-center items-start mx-auto p-4 font-mainFont gap-5 max-md:flex-col">

      {/* ---------------------------------------------------------------------------------------------------- */}

      {/* course cover  */}
      <div className="flex w-8/12 max-md:w-full flex-col">
        <div className="course-image relative w-full rounded-3xl overflow-hidden">
          <Image
            alt="course-cover"
            width={900}
            height={400}
            src={"/assets/02.jpg"}
          />
        </div>
        {/* course cover end */}

      {/* ---------------------------------------------------------------------------------------------------- */}

        {/* course info */}
        <div className=" bg-gradient-to-t from-primary-BG-gr to-secondary-BG-gr w-[98%] h-fit rounded-b-3xl p-5 flex-col flex ">
          <span className="text-yellow-400/35 text-xs ">0% تکمیل شده</span>
          <span className="  font-bold text-2xl py-2">
            دوره پروژه محوره react{" "}
          </span>
          <p className="text-sm text-gray-500">
            ساخت وبسایت فروشگاهی با React عنوان دوره پروژه محور react در نابغه
            است که قصد داریم در قالب این دوره react را در قالب پروژه به شما
            آموزش دهیم.
          </p>
        </div>


      {/* ---------------------------------------------------------------------------------------------------- */}

        {/* course info */}
        <div className="grid grid-cols-8 gap-5 mt-5">
          <InfoBlock title={"مدت دوره"} value={"14:54"} icon={<IoTime />} />
          <InfoBlock title={"تعداد جلسات"} value={"99"} icon={<RiApps2Fill />} />
          <InfoBlock title={"نوع دوره"} value={"ویژه"} icon={<FaCircleInfo />} />
          <InfoBlock title={"شرکت کنندگان"} value={"122 دانشجو"} icon={<HiUserGroup />} />
        </div>
        {/* end course info */}






      {/* ---------------------------------------------------------------------------------------------------- */}


        {/* coures Nav scroll bar */}
        <div className="flex justify-start sticky top-[80px] z-40 w-full max-md:w-full max-sm:text-sm">
          <div className="flex p-1 sticky rounded-full bg-[#161616] mt-5">
            <Link
              href={"#interduce-course"}
              className="p-2 px-6  rounded-full ml-1 scrolls"
            >
              معرقی
            </Link>
            <Link
              href={"#CoureseChapters"}
              className="p-2 px-6  rounded-full ml-1"
            >
              سرفصل ها
            </Link>
            <Link
              href={"#comments"}
              className="p-2 px-6  activeLinkCourePage rounded-full ml-1"
            >
              کامنت ها
            </Link>
          </div>
        </div>
        {/* end coures Nav scroll bar */}




      {/* ---------------------------------------------------------------------------------------------------- */}


        {/* interduce course */}
        <div
          className="interduce-course scroll-smooth mt-5"
          id="interduce-course"
        >
          <DotedTitle title={"معرقی دوره"} />
          <p className="text-gray-500">
            بدون شک در حال حاضر یکی از پرکاربردترین فریمورک‌های جاوا اسکریپتی که
            می‌توانید در دنیای وب پیدا بکنید React است. زمانی که یک فریمورک در
            زمینه‌های مختلف کاربرد داشته باشد نیز در نهایت باعث خواهد شد که
            فرصت‌های شغلی بسیار زیادی داشته باشد. اما آیا فکر می‌کنید برای قبول
            شدن در یک فرصت شغلی مناسب، تمام موارد لازم را در اختیار دارید؟ اگر
            حس می‌کنید در رابطه با این قضیه مطمئن نیستید و شک دارید، بهتر است با
            این دوره آموزشی همراه باشید.
          </p>
          <p className="title text-3xl font-bold my-5">
            دوره آموزشی پروژه محور react و next
          </p>
          <div className="course-image relative w-full rounded-3xl overflow-hidden" >
          <Image
            alt="course-cover"
            width={900}
            height={400}
            src={"/assets/02.jpg"}
          />
        </div>

          <p className="py-5 text-gray-500">
          زمانی که شما با موضوعات مختلف یک ابزار آشنایی پیدا کردید، یک نکته مهم که باید در نظر داشته باشید این است که چگونه با کنار هم قرار دادن ویژگی‌های مختلف خواهید توانست یک پروژه واقعی را ایجاد کنید. این موضوع دقیقا هدفی است که یک آموزش پروژه محور دنبال می‌کند. در یک آموزش پروژه محور در ابتدا شما به صورت مستقیم یا غیر مستقیم با مفاهیم اولیه آشنا شده و سپس فرایند یادگیری موضوعات جدید را در خلال ایجاد پروژه شروع خواهید کرد.
          </p>
          <p className="py-5 text-gray-500">
         منظور از غیر مستقیم بودن یادگیری مفاهیم اولیه این است که در برخی از وبسایت‌های آموزشی از جمله وبسایت آموزشی نابغه ما دوره‌های مقدماتی را پیشتر ضبط کرده و از شما انتظار داریم که ابتدا آن‌ها را به خوبی نگاه کرده و یاد گرفته باشید. به همین دلیل است که ما در پایان نوشته‌های مربوط به هر دوره یک قسمت اختصاصی به نام «پیش‌نیازها» را ایجاد کرده و در آنجا خواهیم گفت که برای یادگیری این دوره آموزشی نیاز خواهید داشت چه پیش‌نیازهایی را در ابتدا طی کنید.
          </p>
        </div>

      {/* ---------------------------------------------------------------------------------------------------- */}







        {/* course chapters */}
        <DotedTitle title={'سر فصل ها'}/>
        <div className="" id="CoureseChapters">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni temporibus tenetur, laudantium dolorum illo tempore molestias laborum, error possimus, blanditiis necessitatibus fugiat assumenda voluptate aspernatur incidunt exercitationem ipsam neque cupiditate consectetur. Ad, veritatis ea! Sequi labore cupiditate soluta eaque totam recusandae accusamus ratione voluptates ex libero quae, unde alias? Optio delectus praesentium magni facere voluptas perferendis aliquam sint vitae ullam! Magnam cum saepe unde quidem quae totam reiciendis ratione praesentium ipsa facere eaque, veritatis eum, illum blanditiis, enim expedita officiis cupiditate vero numquam sint! Ducimus harum inventore minima tempora consequuntur porro consectetur quia tenetur ea fugiat dolores dolor adipisci ipsam voluptatibus, repellat eum repellendus odio similique voluptate neque cumque autem corporis. Sequi odit unde consequatur assumenda repellendus ipsam officia, nisi fuga architecto provident exercitationem asperiores dignissimos sed neque quam omnis cupiditate labore rem aut voluptate, quisquam, mollitia modi. Debitis accusantium enim iure placeat ut dolorum eius, tempora quia sunt voluptatem, veniam explicabo distinctio aliquid laborum aut minus cum dolorem repellendus illum neque. Ratione dolore hic ipsum! Reiciendis dignissimos, accusantium ullam ipsa quaerat, molestias voluptatibus, quasi dolorum nam illo dicta ea iusto soluta pariatur architecto. Distinctio quo et voluptatibus ratione, quis libero doloribus quas in consequatur architecto tempora consectetur, nemo similique obcaecati! Consequatur earum, quas blanditiis nostrum repellendus ducimus commodi ratione veniam a vel dolore aliquid exercitationem, temporibus, sed totam consectetur. Corrupti, ipsum quis assumenda explicabo praesentium optio saepe at. Tempore qui error itaque alias officiis consequuntur, fugiat asperiores doloremque repellat nulla voluptate ab distinctio nihil nemo est a at! Molestiae officiis ea a? Commodi consequatur voluptatibus non facere vel aut tempora blanditiis, ad qui molestias eveniet in animi dolorum excepturi! Sapiente laboriosam hic impedit neque doloribus odit rem autem vitae ex maiores, magnam, debitis cum, minima sequi iste eius. Illum vero iste nobis consequatur esse nam adipisci voluptatem quisquam corporis sapiente qui alias, doloribus reprehenderit veritatis voluptatum eveniet soluta et cupiditate corrupti at necessitatibus distinctio pariatur eligendi. Esse reprehenderit quisquam autem itaque sapiente. Possimus, voluptas ut? Ea quod earum inventore quae porro odit itaque nemo et repudiandae? Maxime voluptatem unde labore accusamus. Sit voluptatem impedit unde adipisci, qui accusantium doloremque aspernatur libero quam! Accusamus, placeat quasi et corrupti sed veritatis dolorum perspiciatis necessitatibus maxime? Placeat numquam omnis sunt eius, nulla quidem veniam quia repudiandae voluptate dignissimos velit expedita deleniti aperiam ipsam suscipit beatae sed atque aut deserunt sequi vitae possimus, in animi corrupti? Quis numquam tempora ipsam aliquid rem minus odio totam autem repellendus architecto fugiat earum consequatur dolorum nam et enim pariatur molestiae rerum, voluptate harum. Velit illum sapiente nulla. Deserunt facere eius aspernatur dolores iure, voluptatum fugit doloribus deleniti, quod, impedit tempore natus saepe expedita exercitationem. Et odio provident eum, neque itaque aliquid corporis sequi, vel, a amet quidem quae nulla quos alias. Sed porro velit dolorem recusandae possimus voluptate voluptatibus tempore ut impedit nihil ipsa, illo eveniet numquam, dolores voluptas? Ducimus, sunt nobis? Libero placeat sint maxime consequuntur architecto adipisci! Consequuntur quos facilis, eum est voluptatibus delectus nihil. At eius consequatur dolores modi eveniet odit officia vero unde reiciendis aliquam! Ex itaque fuga est commodi voluptas corporis distinctio totam architecto. Adipisci sunt obcaecati facere incidunt distinctio a placeat similique odio reiciendis tempore nulla accusamus unde corrupti vero quam nostrum veritatis fuga, recusandae voluptatum at doloribus ipsa mollitia? Ipsam optio saepe rerum harum accusamus perspiciatis exercitationem corrupti, eos recusandae nisi! Iure dignissimos est ut voluptatem vel doloremque totam ea illo rerum quidem beatae sunt deserunt velit consectetur quisquam eaque eum, tempora sed recusandae modi! Nihil repellendus, veniam quasi esse est harum sapiente sit. Necessitatibus obcaecati dignissimos saepe quae nostrum quidem dolorem cum numquam quia nam quaerat, magnam beatae, quasi nulla, unde placeat possimus ratione similique earum officia. Minima officiis corporis omnis, recusandae eos provident nisi dolor inventore voluptatum asperiores dolores libero delectus repudiandae quo necessitatibus, placeat tempore! Tenetur deserunt deleniti rerum non magni. Architecto ea nam dolorem velit sit perspiciatis praesentium rerum quasi nesciunt voluptatibus doloremque, at repudiandae eveniet odit aliquam optio accusamus ratione a unde vel facere incidunt dolorum reprehenderit? Eos quod quisquam iusto repudiandae tempora recusandae deleniti a facilis dolore corrupti illo veniam ut impedit laudantium esse nisi, soluta quo nulla error! Explicabo temporibus neque modi sunt nihil maiores delectus totam nemo voluptas tenetur perspiciatis omnis velit asperiores, pariatur eius molestiae numquam magni quam, incidunt quia libero praesentium tempora dolore. Praesentium, amet iure. Quibusdam, assumenda id delectus veniam minima repellendus optio, voluptatibus tempora itaque recusandae, error qui deserunt excepturi? Temporibus, expedita! Possimus corrupti laborum voluptatibus enim quam non suscipit dignissimos sequi sunt, harum odit voluptatem magnam consequatur, debitis, labore aut exercitationem deserunt voluptas! Dolores veniam perferendis nobis quas, error nemo fugit culpa velit iusto cum eaque quidem ab blanditiis provident corrupti quis molestiae rerum quos voluptatem incidunt fuga. Rerum magni veritatis necessitatibus ea aliquam id ducimus ex illo temporibus, quas eum neque doloribus perferendis quod voluptatum adipisci? Commodi, debitis? Voluptatem culpa ipsum ducimus, sint nihil, odio exercitationem omnis, aperiam error alias nam at eveniet delectus. Quasi laudantium esse eaque rem beatae corporis ducimus non quam mollitia dignissimos accusamus sapiente, sint cum officiis dicta similique provident aperiam minus vero, dolorem voluptatem doloremque incidunt, deleniti dolor. Repellat facilis iste ut repudiandae, doloremque aspernatur hic rem explicabo autem asperiores vitae corporis enim beatae excepturi amet eius necessitatibus cumque, et nihil fugit perferendis deleniti consectetur veritatis? Nisi nemo hic error dolore nulla? Recusandae ipsam tempore obcaecati quo repellat eos asperiores, mollitia vero aspernatur nulla ratione ullam amet molestiae eius itaque impedit sit saepe! Veniam architecto corrupti totam incidunt quo excepturi, alias, autem provident ea beatae id accusamus perferendis animi consequatur a ut voluptatem reiciendis eius, eligendi repellat quae consectetur inventore asperiores. Vitae itaque dolor accusantium maxime, architecto deserunt eaque ullam soluta minus nesciunt id delectus nam quisquam nostrum minima natus eveniet illum inventore ex vero rem quis tempore iste? Aperiam culpa, et officiis incidunt qui, blanditiis id consectetur quisquam beatae quia architecto veritatis placeat perspiciatis cum at. Tempore, temporibus, quas eius recusandae labore mollitia deserunt, omnis dolor rem esse incidunt architecto possimus nisi molestias asperiores similique suscipit corporis vitae!
        </div>
        {/* end course chapters */}



      {/* ---------------------------------------------------------------------------------------------------- */}







        {/* commetns */}
        <DotedTitle title={'دیدگاه ها و پرسش ها'}/>
          <div className="" id="comments">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aperiam veniam rerum, tenetur omnis corrupti, modi in reiciendis totam obcaecati quod eum pariatur culpa ab, delectus sint alias. Aspernatur, commodi! Voluptatem debitis sunt corrupti ut eveniet eligendi placeat eaque, facere repudiandae, minus accusantium assumenda molestiae necessitatibus, laboriosam impedit at voluptatum esse tempore dolore dolorem perferendis. Inventore dignissimos quae nam. Velit error dolorum sunt atque obcaecati totam officiis unde nulla itaque dolores, sit eaque fugiat voluptates eligendi vel quia? Aspernatur aperiam eaque atque excepturi consequuntur non asperiores fuga perspiciatis sed quos, eius possimus omnis iure. Esse neque sequi repellat, quae odio eum provident velit. Nisi, libero? Dolore quidem fugiat veniam rem natus assumenda praesentium ipsum, neque quisquam officiis aperiam nesciunt. Officiis qui accusantium inventore in, doloribus dolorum odio iste a ullam adipisci accusamus amet, possimus nesciunt! Itaque sunt facere rerum nulla voluptatum libero consectetur quae! Aperiam molestiae dolor, iusto sint voluptatem ipsa non sapiente, accusantium sed dolorem, corporis nisi voluptate culpa. Expedita iusto consequuntur libero! Voluptate, laudantium? Est excepturi provident debitis laboriosam animi commodi, deserunt accusantium placeat modi dicta eveniet impedit saepe ea repudiandae maiores quos veniam quia quo voluptas reiciendis voluptate officiis nulla aspernatur beatae! Repellendus, nihil facilis sed, minima autem officia magni molestiae quam a, exercitationem tempore odit tenetur deleniti numquam? Ullam ipsum ipsam amet soluta debitis voluptatum provident? Similique sit tenetur saepe perspiciatis, corporis voluptatibus repellat deserunt eaque optio eligendi architecto quia voluptate laboriosam, necessitatibus blanditiis, est eveniet repellendus nulla quisquam. Aliquid, error rerum sit dolorum amet debitis earum labore repellat sed voluptatibus voluptatum. Tempora eaque ipsam est quam reiciendis ex reprehenderit laudantium, amet sapiente exercitationem labore velit, optio iste blanditiis cum ratione facilis temporibus repellat dolore. Non nobis aliquam autem expedita ex! Ipsam nisi delectus esse nobis consequatur sunt error nihil incidunt laudantium illo quisquam aut commodi, enim aliquam ducimus placeat quia molestias dolores officiis rerum inventore. Perspiciatis repudiandae est fuga omnis aliquam. Impedit eos mollitia reiciendis soluta sapiente officiis dignissimos, esse magnam nesciunt, tenetur dolorum maxime eius. Suscipit voluptatum, in quasi inventore doloribus temporibus consequatur. Qui illum mollitia rerum inventore vitae perspiciatis atque. Voluptas, esse tempora possimus ipsum ex sit eos magnam inventore quam. Ratione nostrum cupiditate temporibus voluptates labore quo laborum omnis molestiae nihil ipsum nemo quod exercitationem recusandae velit, ab excepturi facilis! Sunt nisi dicta, mollitia molestiae sed accusantium dolore repellendus nemo commodi incidunt sint eveniet. Adipisci, quisquam odio est non quod suscipit facilis nulla ut, omnis velit tenetur, accusamus atque voluptates nesciunt corporis odit neque exercitationem voluptate minus vitae blanditiis ratione quae? Corporis minima, reprehenderit sequi optio necessitatibus quaerat illum ab eos. Soluta praesentium dolores ex dolore nostrum maiores consectetur accusamus eaque. Debitis similique possimus sapiente repellendus quisquam eveniet, libero excepturi animi iure nisi eius corrupti perferendis et laudantium necessitatibus iusto dicta vel obcaecati laborum nemo illum labore accusantium? Recusandae exercitationem non tempora deleniti, mollitia sint molestias! Ab nesciunt veritatis minima quia iure numquam libero fugit, non mollitia, ducimus nobis dolorem dignissimos, corrupti culpa quos delectus magni nemo incidunt? Cum, pariatur cumque adipisci quasi natus, libero nihil earum quae optio eveniet iure veritatis reprehenderit fuga consequatur magnam! Officiis itaque labore quasi quidem dolorem consequuntur eos! Qui, quaerat saepe obcaecati ipsa fugit quidem eveniet! Nisi, doloribus perspiciatis exercitationem, molestias similique voluptatum distinctio voluptates magni omnis vero vitae facere tempore! Natus earum voluptatibus cumque et excepturi quisquam, explicabo praesentium cupiditate ipsam optio, facere nostrum odio quasi, voluptates totam ex aliquid voluptatem. Quos in, architecto expedita ducimus iure dicta! Aliquid, nobis ab cupiditate non sunt nemo necessitatibus porro debitis accusantium. Aliquid neque quidem reprehenderit illum saepe delectus sint magni obcaecati quis? Sit assumenda incidunt consequatur explicabo ab! Numquam modi repellat explicabo incidunt cumque reiciendis voluptatem. Eaque repellendus minus neque blanditiis voluptatum nisi eligendi a voluptas atque obcaecati, sequi ipsum! Fuga doloremque sint qui commodi placeat totam a eligendi numquam. Ea omnis nemo laudantium vel eveniet quam alias suscipit est quidem blanditiis, sed optio. Quaerat, culpa quod. Culpa alias debitis odit perspiciatis? Doloremque fugiat maiores, accusamus omnis repellat cumque at reprehenderit? Error porro a ut modi. Ut excepturi rerum sequi, beatae dicta vel reprehenderit corrupti earum accusantium minima repellendus cupiditate saepe fugit eum, placeat vero eos. Eligendi dolorum laborum, doloribus, totam reprehenderit placeat ab possimus soluta dicta error in fugiat ea repellat voluptas amet quam consequuntur atque eveniet, esse laudantium non odit! Suscipit aspernatur, accusantium ipsum nam animi pariatur soluta incidunt ipsa veritatis voluptatibus. Consectetur odit quam dolores voluptatibus, aut voluptatem earum voluptates, ipsum debitis magni sed mollitia in tempora ducimus magnam quidem optio distinctio dignissimos assumenda libero! Quidem quasi laboriosam perferendis, quos eius est voluptates consectetur ex assumenda aspernatur tempore dolorem magnam. Consectetur recusandae inventore provident autem! Nesciunt libero odio rem sed iusto quisquam, et ducimus, pariatur neque, nam dolores autem voluptate odit laboriosam voluptates. Neque sapiente qui perferendis nesciunt dolorum natus facere esse autem reprehenderit assumenda totam eveniet rem aspernatur, quibusdam nisi a aliquam dolores deleniti nam. Architecto, at officiis, quo explicabo deserunt eos, sapiente in nemo fuga debitis non ipsum nisi labore! Rerum sit dignissimos minus nobis inventore fugit nemo voluptatem et veritatis natus voluptas qui, aperiam eum dolorem? Aliquam, possimus. Alias nulla voluptate assumenda aliquid modi deserunt tempore mollitia est, quam fugit ducimus maxime qui omnis temporibus officiis consectetur, accusantium dolores, iure quod nisi cum accusamus voluptatum possimus dolore? Voluptas libero deserunt reprehenderit accusamus magnam minus, harum quaerat eaque numquam ex ratione voluptates, modi a pariatur iure atque nisi ducimus saepe exercitationem optio ipsam illum nam incidunt aliquid! Quaerat nulla velit illo autem voluptate amet saepe nemo, minima numquam dolorem est, magni mollitia totam libero. Voluptatibus aliquid adipisci libero ad commodi, eos quam minus non incidunt reprehenderit tempora iste ipsum amet quaerat ea nihil consequatur cumque voluptates mollitia facilis aperiam culpa rem. Eius doloremque doloribus sint nihil corporis consectetur delectus atque? Asperiores at nulla optio accusamus? Delectus illo rem, perspiciatis impedit quidem ab adipisci. Obcaecati nulla sunt dolore dicta iusto dolorum ipsa in! Provident ipsum commodi porro, quam doloribus atque, doloremque eveniet tenetur laborum debitis veritatis quisquam repellat magni, corrupti a culpa nihil?
          </div>
        {/* end commetns */}
      </div>

      {/* ---------------------------------------------------------------------------------------------------- */}
      {/* mini bar left side */}
        <MiniBarLeftSide/>



      </div>
    <Footer/>
    </div>
  );
}

export default page;
