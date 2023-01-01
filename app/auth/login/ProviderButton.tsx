import React from "react";
import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  Provider: string;
  bgColor: string;
}

const hover = (color: string) => {
  return `hover:${color}/90`;
};

const ProviderButton = ({ Icon, Provider, bgColor }: Props) => {
  return (
    <button
      className={`flex items-center justify-center ${bgColor} ${hover(
        bgColor
      )} focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg overflow-hidden p-2 space-x-1 cursor-pointer w-60`}
    >
      <Icon className="h-7 w-7 text-white" />
      <p className="text-white font-semibold">Sign In With {Provider}</p>
    </button>
  );
};

export default ProviderButton;
