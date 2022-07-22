import {
  GiCheeseWedge,
  GiWrappedSweet,
  GiCoconuts,
  GiChickenOven,
  GiCannedFish,
  GiCoolSpices,
} from "react-icons/gi";
import { SiGitea } from "react-icons/si";
import { CgGlassAlt } from "react-icons/cg";

export const tabListMenu = [
  {
    name: "مواد غذایی",
    tabListSubMenu: [
      {
        name: "لبنیات",
        icon: <GiCheeseWedge size={20} className="text-gray-600"  />,
        listProduct: [
          {
            title: "بستنی",
            subListProduct: [
              {
                name: "بستنی چوبی",
              },
              {
                name: "بستنی قیفی",
              },
            ],
          },
          {
            title: "پنیر",
            subListProduct: [
              {
                name: "پنیر و پخت و پز",
              },
              {
                name: "پنیر صبحانه",
              },
            ],
          },
          {
            title: "شیر",
            subListProduct: [
              {
                name: "شیر پر چرب",
              },
              {
                name: "شیر طمع دار",
              },
            ],
          },
          {
            title: "کره",
            subListProduct: [
              {
                name: "کره حیوانی",
              },
              {
                name: "کره گیاهی",
              },
            ],
          },
          {
            title: "کشک",
            subListProduct: [
              {
                name: "کشک لیوانی",
              },
              {
                name: "کشک شیشه ای",
              },
              {
                name: "کشک پاکتی",
              },
            ],
          },
          {
            title: "دوغ",
            subListProduct: [
              {
                name: "دوغ بدون گاز",
              },
              {
                name: "دوغ گازدار",
              },
              {
                name: "کشک پاکتی",
              },
            ],
          },
          {
            title: "خامه",
            subListProduct: [
              {
                name: "خامه ساده",
              },
              {
                name: "خامه شکلاتی",
              },
              {
                name: "خامه میوه ای",
              },
            ],
          },
        ],
      },
      {
        name: "آجیل و خشکبار",
        icon: <GiCoconuts size={20} className="text-gray-600"  />,
        listProduct: [
          {
            title: "آجیل",
            subListProduct: [
              {
                name: "آجیل مخلوط",
              },
              {
                name: "خلال",
              },
              {
                name: "نخودچی",
              },
              {
                name: "پسته",
              },
              {
                name: "گردو",
              },
              {
                name: "بادام هندی",
              },
              {
                name: "آجیل شیرین ",
              },
            ],
          },
          {
            title: "پنیر",
            subListProduct: [
              {
                name: "پنیر و پخت و پز",
              },
              {
                name: "پنیر صبحانه",
              },
            ],
          },
          {
            title: "شیر",
            subListProduct: [
              {
                name: "شیر پر چرب",
              },
              {
                name: "شیر طمع دار",
              },
            ],
          },
        ],
      },
      {
        name: "پروتئینی",
        icon: <GiChickenOven size={20} className="text-gray-600"  />,
        listProduct: [
          {
            title: "گوشت",
            subListProduct: [
              {
                name: "چنجه گوسفندی",
              },
              {
                name: "دست گوسفندی",
              },
              {
                name: "شقه گوسفندی",
              },
              {
                name: "دنده ی گوسفندی",
              },
              {
                name: "چربی گوسفندی",
              },
              {
                name: "مخلوط گوسندی",
              },
              {
                name: "قلوه گاه گوسفندی",
              },
              {
                name: "گردن گوسفندی",
              },
              {
                name: "ران گوسفندی",
              },
              {
                name: "ماهیچه ی گوسفندی",
              },
              {
                name: "سر دست گوسفندی",
              },
              {
                name: "فیله گوسفندی",
              },
            ],
          },
          {
            title: "گوشت مرغ",
            subListProduct: [
              {
                name: "پا مرغ",
              },
              {
                name: "ساق مرغ",
              },
              {
                name: "فیله مرغ",
              },
              {
                name: "جوجه کباب",
              },
              {
                name: "ران و سینه مرغ",
              },
              {
                name: "گوشت چرخ کرده مرغ",
              },
              {
                name: "مرغ کامل",
              },
              {
                name: "کتف و بال و گردن",
              },
              {
                name: "ران مرغ",
              },
              {
                name: "مرغ خرد شده",
              },
              {
                name: "سینه مرغ",
              },
            ],
          },
          {
            title: "ماهی و میگو",
            subListProduct: [
              {
                name: "ماهی تازه",
              },
              {
                name: "ماهی",
              },
              {
                name: "میگو",
              },
            ],
          },
        ],
      },
      {
        name: "غذای آماده و کنسروجات",
        icon: <GiCannedFish size={20} className="text-gray-600"  />,
        listProduct: [
          {
            title: "کنسرو میوه",
            subListProduct: [
              {
                name: "کمپوت",
              },
            ],
          },
          {
            title: "غذای کنسروی",
            subListProduct: [
              {
                name: "کنسرو جوجه",
              },
              {
                name: "کنسرو لوبیاچیتی با قارچ",
              },
              {
                name: "کنسرو مایه ماکارونی",
              },
              {
                name: "کنسرو عدسی",
              },
              {
                name: "کنسرو نخود آبگشتی",
              },
              {
                name: "کنسرو خوراک بادمجان",
              },
              {
                name: "کنسرو لوبیا چیتی",
              },
              {
                name: "سایر غذا های کنسروی",
              },
            ],
          },
          {
            title: "کنسرو تن ماهی و غذای دریایی",
            subListProduct: [
              {
                name: "کنسرو ماهی",
              },
              {
                name: "کنسرو تن ماهی",
              },
            ],
          },
          {
            title: "کنسرو سبزیجات",
            subListProduct: [
              {
                name: "کنسرو بلال",
              },
              {
                name: "کنسرو قارچ",
              },
              {
                name: "کنسرو سبزی سرخ شده",
              },
              {
                name: "کنسرو نخود فرنگی",
              },
              {
                name: "کنسرو نخود فرنگی",
              },
              {
                name: "کنسرو گوجه",
              },
              {
                name: "کنسرو زیتون",
              },
              {
                name: "کنسرو مخلوط سبزیجات",
              },
              {
                name: "کنسرو ذرت",
              },
              {
                name: "سایر کنسروها",
              },
            ],
          },
          {
            title: "خورشت آماده",
            subListProduct: [
              {
                name: "خورشت فسنجان",
              },
              {
                name: "خورشت قیمه",
              },
              {
                name: "خورشت قورمه",
              },
            ],
          },
          {
            title: "غذای آماده",
            subListProduct: [
              {
                name: "حلیم",
              },
              {
                name: "آش",
              },
              {
                name: "حلوا",
              },
              {
                name: "سوپ و آش",
              },
            ],
          },
          {
            title: "کباب",
            subListProduct: [
              {
                name: "کباب لقمه",
              },
              {
                name: "کباب ترکی",
              },
              {
                name: "لقمه گوشت",
              },
            ],
          },
          {
            title: "غذای آماده سرد",
            subListProduct: [
              {
                name: "سالاد سبزیجات",
              },
            ],
          },
        ],
      },
      {
        name: "شیرینی و تنقلات",
        icon: <GiWrappedSweet size={20} className="text-gray-600"  />,
        listProduct: [
          {
            title: "تخمه و مغزهای طعم دار",
            subListProduct: [
              {
                name: "تخمه کدو",
              },
              {
                name: "فندق",
              },
              {
                name: "تخمه آفتابگردان",
              },
              {
                name: "بادام زمینی",
              },
              {
                name: "مغز چند تخمه",
              },
              {
                name: "تخمه ژاپنی",
              },
              {
                name: "مغز بادام",
              },
              {
                name: "تخمه هنداونه",
              },
            ],
          },
          {
            title: "دسر و ژله",
            subListProduct: [
              {
                name: "دسر",
              },
              {
                name: "ژله",
              },
            ],
          },
          {
            title: "کیک , کلوچه و شیرینی",
            subListProduct: [
              {
                name: "کلوچه",
              },
              {
                name: "کیک",
              },
              {
                name: "شیرینی",
              },
            ],
          },
          {
            title: "تافی و شکلات",
            subListProduct: [
              {
                name: "نی شیر",
              },
              {
                name: "شکلات",
              },
              {
                name: "پشمک",
              },
              {
                name: "شکلات صبحانه",
              },
              {
                name: "تافی",
              },
            ],
          },
          {
            title: "آبنبات و پاستیل",
            subListProduct: [
              {
                name: "پولکی",
              },
              {
                name: "آبنیات",
              },
              {
                name: "پاستیل",
              },
              {
                name: "شکلات صبحانه",
              },
              {
                name: "تافی",
              },
            ],
          },
          {
            title: "لواشک و آلوچه",
            subListProduct: [
              {
                name: "لواشک",
              },
              {
                name: "تمبر",
              },
              {
                name: "آلوچه و قره قروت",
              },
             
            ],
          },
          {
            title: "آدامس و خوشبوکننده دهان",
            subListProduct: [
              {
                name: "خوشبو کننده دهان",
              },
              {
                name: "آدامس",
              },
             
             
            ],
          },
          {
            title: "اسنک و چیپس و پفک",
            subListProduct: [
              {
                name: "اسنک",
              },
              {
                name: "چیپس",
              },
              {
                name: "کورن فلکس",
              },
              {
                name: "پاپ کورن",
              },
              
            ],
          },
        ],
      },
      {
        name: "چاشنی و ادویه جات",
        icon: <GiCoolSpices size={20} className="text-gray-600"  />,
        listProduct: [
          {
            title: "سس",
            subListProduct: [
              {
                name: "سس باربیکو",
              },
              {
                name: "سس فلفل",
              },
              {
                name: "سس سیب زمینی",
              },
              {
                name: "سس سالاد و ساندویچ",
              },
              {
                name: "سس کنجد",
              },
              {
                name: "سس فرانسوی",
              },
              {
                name: "سس هزارجزیره",
              },
              {
                name: "سس ماست",
              },
              {
                name: "سس مایونز",
              },
              {
                name: "سس انار",
              },
              {
                name: "سس سالسا",
              },
              {
                name: "سس خردل",
              },
              
            ],
          },
          {
            title: "آبلیمو،آبغوره و سرکه",
            subListProduct: [
              {
                name: "آبغوره",
              },
              {
                name: "سرکه",
              },
              {
                name: "آبلیمو",
              },
            ],
          },
          {
            title: "رب",
            subListProduct: [
              {
                name: "رب گوجه",
              },
              {
                name: "رب انار",
              },
            ],
          },
          {
            title: "چاشنی",
            subListProduct: [
              {
                name: "پودر سوخاری",
              },
              {
                name: "گرده غوره",
              },
              {
                name: "قطره خوراکی",
              },
              {
                name: "چاشنی خوراک",
              },
              {
                name: "چاشنی مخلوط",
              },
              {
                name: "سبته دانه",
              },
              {
                name: "دانه چیا",
              },
              {
                name: "کتان",
              },
              {
                name: "کینوا",
              },
              {
                name: "چاشنی سالاد",
              },
              {
                name: "پودر نارگیل",
              },
            ],
          },
          {
            title: "ادویه",
            subListProduct: [
              {
                name: "پودر زنجبیل",
              },
              {
                name: "جوز هندی",
              },
              {
                name: "تخم گشنیز",
              },
              {
                name: "پودر پیاز",
              },
              {
                name: "گل محمدی",
              },
              {
                name: "سایر ادویه جات",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "نوشیدنی و دمنوش ها",
    tabListSubMenu: [
      {
        name: "نوشیدنی های گرم",
        icon: <SiGitea size={20} className="text-gray-600"  />,
        listProduct: [
          {
            title: "پودر نوشیدنی گرم",
            subListProduct: [
              {
                name: "کافی میت",
              },
              {
                name: "پودر کاکائو",
              },
              {
                name: "پودر قهوه",
              },
              {
                name: "شکلات داغ",
              },
              {
                name: "کافی میکس",
              },
            ],
          },

          {
            title: "چای و دمنوش",
            subListProduct: [
              {
                name: "چای ترش",
              },
              {
                name: "چای ماسالا",
              },
              {
                name: "چای سیاه",
              },
              {
                name: "چای سبز",
              },
              {
                name: "دمنوش ها",
              },
            ],
          },
        ],
      },
      {
        name: "نوشیدنی های سرد",
        icon: <CgGlassAlt size={20} className="text-gray-600"  />,
        listProduct: [
          {
            title: "نوشیدنی بدون گاز",
            subListProduct: [
              {
                name: "پودر نوشیدنی سرد",
              },
              {
                name: "آب مغدنی",
              },
              {
                name: "شربت",
              },
              {
                name: "آبمیوه",
              },
              
            ],
          },
          {
            title: "عرقیات گیاهی",
            subListProduct: [
              {
                name: "نوشیدنی گیاهی",
              },
              {
                name: "عرقیات",
              },
            ],
          },
          {
            title: "نوشیدنی گازدار",
            subListProduct: [
              {
                name: "نوشیدنی انرژی زا",
              },
              {
                name: "نوشابه",
              },
              {
                name: "ماءالشعیر",
              },
              {
                name: "آبمیوه گازدار",
              },
            ],
          },
        ],
      },
    ],
  },
];

// <li></li>
// <li></li>
// <li></li>
// <li>آرایش بهداشتی</li>
// <li>میوه و سبزیجات</li>
// <li>ابزار و ملزومات</li>
// <li>لوازم التحریر و اداری</li>
// <li>مادر و کودک</li>
// <li>پوشاک</li>
