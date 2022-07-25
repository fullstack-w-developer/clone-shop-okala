import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import IconButton from "@mui/material/IconButton";
import DescriptionCollapse from "./DescriptionCollapse";

const Collapse = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div
        onClick={() => setShow(!show)}
        className="flex gap-5 py-7  justify-center items-center"
      >
        <p className="text-sm text-[#777E82]">
          فروشگاه اُکالا، بزرگترین سوپرمارکت آنلاین ایران
        </p>
        <IconButton>
          <IoIosArrowDown className="w-6 h-6 text-[#777E82]" />
        </IconButton>
      </div>

      {show && <DescriptionCollapse />}
    </div>
  );
};

export default Collapse;
