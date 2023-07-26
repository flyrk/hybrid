import Image from "next/image";
import { TitleInfo } from "./title_info";

export const SecondModule = () => {
  return (
    <div className="relative w-full h-full overflow-hidden m-0 pt-20 px-20 flex justify-center items-center bg-gradient-radial shadow-custom-light">
      <div className="flex items-center">
        <TitleInfo title="AI模特和真实模特能一样吗" />
      </div>
      <div className="rounded-t-4rem border border-gray-400 bg-white w-1/2 h-full ml-12">
        <div className="rounded-t-4rem border border-gray-200 bg-gray-200 m-4 h-full relative">
          <div className="border-b border-gray-300 flex justify-center items-center h-[4.5rem]">
            <h2 className="font-sans text-2xl not-italic font-medium">Hybrid Fashion</h2>
          </div>
          <div className=""></div>
          <div className="border-t border-gray-300 bg-gray-foot h-[6rem] absolute bottom-0 left-0 right-0"></div>
        </div>
      </div>
    </div>
  );
};