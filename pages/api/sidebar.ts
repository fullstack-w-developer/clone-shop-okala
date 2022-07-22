import { getListMenuSidebarApi } from "./../../utils/API";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      getListMenuSidebar(req, res);
      break;
  }
}

const getListMenuSidebar = (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const menuListSidebar = [
    {
      title: "مواد غذایی",
      names: [
        {
          name: "لبنیات",
          path: "/test",
        },
        {
          name: "آجیل و خشکبار",
          path: "/test1",
        },
        {
          name: "پروتئینی",
          path: "/test2",
        },
        {
          name: "غذای آماده و کنسروجات",
          path: "/test3",
        },
        {
          name: "شیرینی و تنقلات",
          path: "/test4",
        },
        {
          name: "چاشنی و ادویه جات",
          path: "/test5",
        },
      ],
    },
    {
      title: "نوشیدنی و دمنوش ها",
      names: [
        {
          name: "لبنیات",
          path: "/test",
        },
        {
          name: "آجیل و خشکبار",
          path: "/test1",
        },
        {
          name: "پروتئینی",
          path: "/test2",
        },
        {
          name: "غذای آماده و کنسروجات",
          path: "/test3",
        },
        {
          name: "شیرینی و تنقلات",
          path: "/test4",
        },
        {
          name: "چاشنی و ادویه جات",
          path: "/test5",
        },
      ],
    },
    {
      title: "خواربار",
      names: [
        {
          name: "لبنیات",
          path: "/test",
        },
        {
          name: "آجیل و خشکبار",
          path: "/test1",
        },
        {
          name: "پروتئینی",
          path: "/test2",
        },
        {
          name: "غذای آماده و کنسروجات",
          path: "/test3",
        },
        {
          name: "شیرینی و تنقلات",
          path: "/test4",
        },
        {
          name: "چاشنی و ادویه جات",
          path: "/test5",
        },
      ],
    },
    {
      title: "آرایشی بهداشتی",
      names: [
        {
          name: "لبنیات",
          path: "/test",
        },
        {
          name: "آجیل و خشکبار",
          path: "/test1",
        },
        {
          name: "پروتئینی",
          path: "/test2",
        },
        {
          name: "غذای آماده و کنسروجات",
          path: "/test3",
        },
        {
          name: "شیرینی و تنقلات",
          path: "/test4",
        },
        {
          name: "چاشنی و ادویه جات",
          path: "/test5",
        },
      ],
    },
    {
      title: "میوه و سبزیجات",
      names: [
        {
          name: "لبنیات",
          path: "/test",
        },
        {
          name: "آجیل و خشکبار",
          path: "/test1",
        },
        {
          name: "پروتئینی",
          path: "/test2",
        },
        {
          name: "غذای آماده و کنسروجات",
          path: "/test3",
        },
        {
          name: "شیرینی و تنقلات",
          path: "/test4",
        },
        {
          name: "چاشنی و ادویه جات",
          path: "/test5",
        },
      ],
    },
    {
      title: "لوازم التحریر و اداری",
      names: [
        {
          name: "لبنیات",
          path: "/test",
        },
        {
          name: "آجیل و خشکبار",
          path: "/test1",
        },
        {
          name: "پروتئینی",
          path: "/test2",
        },
        {
          name: "غذای آماده و کنسروجات",
          path: "/test3",
        },
        {
          name: "شیرینی و تنقلات",
          path: "/test4",
        },
        {
          name: "چاشنی و ادویه جات",
          path: "/test5",
        },
      ],
    },
    {
      title: "مادر و کودک",
      names: [
        {
          name: "لبنیات",
          path: "/test",
        },
        {
          name: "آجیل و خشکبار",
          path: "/test1",
        },
        {
          name: "پروتئینی",
          path: "/test2",
        },
        {
          name: "غذای آماده و کنسروجات",
          path: "/test3",
        },
        {
          name: "شیرینی و تنقلات",
          path: "/test4",
        },
        {
          name: "چاشنی و ادویه جات",
          path: "/test5",
        },
      ],
    },
    {
      title: "پوشاک",
      names: [
        {
          name: "لبنیات",
          path: "/test",
        },
        {
          name: "آجیل و خشکبار",
          path: "/test1",
        },
        {
          name: "پروتئینی",
          path: "/test2",
        },
        {
          name: "غذای آماده و کنسروجات",
          path: "/test3",
        },
        {
          name: "شیرینی و تنقلات",
          path: "/test4",
        },
        {
          name: "چاشنی و ادویه جات",
          path: "/test5",
        },
      ],
    },
  ];
  res.status(200).json({ menuListSidebar });
};
