import Image from "next/image";
import { TitleInfo } from "./title_info";
import { useState } from "react";

export const SecondModule = () => {
  const [step, setStep] = useState(0);
  const [selectImg, setSelectImg] = useState('A');
  const [isCorrect, setIsCorrect] = useState(false);

  const handleClickImg = (imgType: string) => {
    setSelectImg(imgType);
    if (imgType === 'C') {
      setIsCorrect(true);
    }
  };

  const handleClick = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden m-0 pt-20 px-20 flex justify-center items-center bg-gradient-radial shadow-custom-light">
      <div className="flex items-center">
        <TitleInfo title="AI模特和真实模特能一样吗" />
      </div>
      <div className="rounded-t-4rem border border-gray-400 bg-white w-1/2 h-full ml-12 overflow-hidden">
        <div className="rounded-t-4rem border border-gray-200 bg-gray-200 mt-4 mx-4 h-full relative z-20">
          <div className="relative border-b border-gray-300 flex justify-center items-center h-[4.5rem]">
            <h2 className="font-sans text-2xl not-italic font-medium">Hybrid Fashion</h2>
            <div className="absolute right-8 top-6 text-black font-inter text-xl font-medium tracking-widest">...</div>
          </div>
          <div className="h-[calc(100%-10.5rem)] w-full flex flex-col justify-end overflow-hidden" onClick={handleClick}>
            <div className="flex items-center justify-end mb-5 gap-x-2 mx-5">
              <div className="bg-green-500 px-4 py-4 rounded-md text-black font-inter text-xl font-normal tracking-tighter">相比于真实拍摄，效果上有什么区别？</div>
              <div className="w-16 h-16 flex-shrink-0 rounded-sm bg-[url('/assets/headimg_1.png')] bg-light-gray bg-center bg-cover"></div>
            </div>
            {
            (step === 1 || step === 2) &&
            <div className="flex items-start justify-start mb-5 gap-x-2 mx-5">
              <div className="w-16 h-16 flex-shrink-0 rounded-sm bg-[url('/assets/headimg_2.png')] bg-light-gray bg-center bg-cover"></div>
              <div className="bg-white px-4 py-4 rounded-md text-black font-inter text-xl font-normal tracking-tighter">
                <h3 className="text-2xl">请问以下三张图片哪一张是真人拍摄？</h3>
                <div className="flex items-center mt-2">
                  <div className="flex flex-col items-center mr-3" onClick={() => handleClickImg('A')}>
                    <Image width={120} height={320} alt="photo_a" className="rounded-[0.6rem]" src="/assets/select_1.png" />
                    <div className="rounded-[1.35rem] bg-indigo-600 shadow-md mt-2 px-9 py-1 text-white font-bold">A</div>
                  </div>
                  <div className="flex flex-col items-center mr-3" onClick={() => handleClickImg('B')}>
                    <Image width={120} height={320} alt="photo_a" className="rounded-[0.6rem]" src="/assets/select_2.png" />
                    <div className="rounded-[1.35rem] bg-indigo-600 shadow-md mt-2 px-9 py-1 text-white font-bold">B</div>
                  </div>
                  <div className="flex flex-col items-center" onClick={() => handleClickImg('C')}>
                    <Image width={120} height={320} alt="photo_a" className="rounded-[0.6rem]" src="/assets/select_3.png" />
                    <div className="rounded-[1.35rem] bg-indigo-600 shadow-md mt-2 px-9 py-1 text-white font-bold">C</div>
                  </div>
                </div>
              </div>
            </div>
            }
            {
            step === 2 && 
            <div className="flex items-center justify-end mb-5 gap-x-2 mx-5">
              <div className="bg-green-500 px-4 py-4 rounded-md text-black font-inter text-xl font-normal tracking-tighter">图{selectImg}是真人图片</div>
              <div className="w-16 h-16 flex-shrink-0 rounded-sm bg-[url('/assets/headimg_1.png')] bg-light-gray bg-center bg-cover"></div>
            </div>
            }
            {
            step === 2 && isCorrect && (
              <div>
                <div className="flex items-center justify-start mb-5 gap-x-2 mx-5">
                  <div className="w-16 h-16 flex-shrink-0 rounded-sm bg-[url('/assets/headimg_2.png')] bg-light-gray bg-center bg-cover"></div>
                  <div className="bg-white px-4 py-4 rounded-md text-black font-inter text-xl font-normal tracking-tighter">恭喜你答对了！</div>
                </div>
                <div className="flex items-center justify-start mb-5 gap-x-2 mx-5">
                  <div className="w-16 h-16 flex-shrink-0 rounded-sm bg-[url('/assets/headimg_2.png')] bg-light-gray bg-center bg-cover"></div>
                  <div className="bg-white px-4 py-4 rounded-md text-black font-inter text-xl font-normal tracking-tighter">有94.64%用户选择错误</div>
                </div>
                <div className="flex items-center justify-start mb-5 gap-x-2 mx-5">
                  <div className="w-16 h-16 flex-shrink-0 rounded-sm bg-[url('/assets/headimg_2.png')] bg-light-gray bg-center bg-cover"></div>
                  <div className="bg-white px-4 py-4 rounded-md text-black font-inter text-xl font-normal tracking-tighter">数字模特与真人模特拍摄效果已无显著差异</div>
                </div>
                <div className="flex items-center justify-start mb-5 gap-x-2 mx-5">
                  <div className="w-16 h-16 flex-shrink-0 rounded-sm bg-[url('/assets/headimg_2.png')] bg-light-gray bg-center bg-cover"></div>
                  <div className="bg-white px-4 py-4 rounded-md text-black font-inter text-xl font-normal tracking-tighter">Ai时代已经到来...</div>
                </div>
              </div>
            )
            }
          </div>
          <div className="border-t border-gray-300 bg-gray-foot p-[0.8rem] gap-x-2 flex items-center">
            <div className="w-14 h-14 flex-shrink-0 bg-gray-300 rounded-full"></div>
            <div className="bg-white flex-shrink-0 rounded-sm w-[70%] h-[3.5rem]"></div>
            <div className="w-14 h-14 flex-shrink-0 bg-gray-300 rounded-full"></div>
            <div className="w-14 h-14 flex-shrink-0 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};