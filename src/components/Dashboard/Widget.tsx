import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";
interface Props {
  name: string;
  analytic: number;
  Icon: IconType;
  color: string;
  iconColor: string;
  link?: string
}

const Widget = ({ name, analytic, Icon, color, iconColor, link }: Props) => {
  return (
    <div className="flex flex-col justify-between shadow-xl bg-slate-50 rounded-lg h-48 p-4 w-80">
      <div className="flex justify-between">
        <h1 className="font-medium text-2xl text-slate-400">{name}</h1>
        <Icon className={`${color} h-10 w-10 p-2 rounded-lg ${iconColor}`} />
      </div>
      {analytic !== null ? (
        <>
          <h2 className="font-light text-6xl">{analytic}</h2>
        </>
      ) : (
        <h2 className="font-light text-6xl bg-slate-200 text-slate-200 w-fit animate-pulse rounded-lg">
          0
        </h2>
      )}
      {link ? (
        <>
          <Link href={link}>
            <a className="text-slate-400 font-medium">View</a>
          </Link>
        </>
      ): <>
        <div>  </div>
      </>}
    </div>
  );
};



export default Widget;
