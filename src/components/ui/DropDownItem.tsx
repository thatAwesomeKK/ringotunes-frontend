import React from "react";
import { IconType } from "react-icons";

interface Props {
    Icon: IconType;
    MenuName?: string;
    active?: boolean;
  }

function DropDownItem({ Icon, MenuName, active }: Props) {
  return (
    <div
      className={`flex items-center cursor-pointer ${
        active ? "bg-slate-100" : "bg-slate-50"
      } hover:bg-slate-200 py-3 px-3 rounded-lg space-x-3 overflow-hidden`}
    >
      <div>
        <Icon className="h-7 w-7" />
      </div>
      <h2 className="font-semibold text-lg text-gray-400 whitespace-nowrap">
        {MenuName}
      </h2>
    </div>
  );
}

export default DropDownItem;
