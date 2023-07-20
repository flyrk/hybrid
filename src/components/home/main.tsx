// import { useEffect, useState, useCallback } from 'react';
import Image from "next/image";
// import debounce from 'lodash/debounce';

interface MainPhotoProps {
  url: string;
  name: string;
  width: number;
  height: number;
  extclass?: string;
  style?: Record<string, string>;
}
export const MainPhoto: React.FC<MainPhotoProps> = ({ url, name, width, height, extclass, style }) => {
  return (
    <div className={"w-61.5 h-61.5 rounded-full border border-white mr-7.1 relative flex " + (extclass || '') }>
      {
        style ? (
        <Image src={url} width={width} height={height} alt={name} style={style} />)
        : (<Image src={url} width={width} height={height} alt={name} />)
      }
    </div>
  );
};

export const MainModule: React.FC = () => {
  // const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  // const handleScroll = useCallback(() => {
  //   const st = window.pageYOffset || document.documentElement.scrollTop;
  //   if (Math.abs(st - lastScrollTop) >= 30) {
  //     if (st > lastScrollTop){
  //       console.log("Scrolled Down more than 30px");
  //     } else {
  //       console.log("Scrolled Up more than 30px");
  //     }
  //     setLastScrollTop(st <= 0 ? 0 : st);
  //   }
  // }, [lastScrollTop]);  // Debounce time

  // const debouncedHandleScroll = debounce(handleScroll, 200);

  // useEffect(() => {
  //   window.addEventListener('scroll', debouncedHandleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', debouncedHandleScroll);
  //   };
  // }, [debouncedHandleScroll]);


  return (
    <div className="relative w-full h-full overflow-hidden m-0 flex flex-col justify-center items-center">
      <div className="p-10 flex items-center">
        <h2 className="text-white not-italic text-5xl">
          Hybrid Fashion
        </h2>
        <div className="rounded-lg bg-gradient-to-b from-green-basic to-blue-basic text-black text-5xl flex justify-center items-center w-24.25 h-15.25 mx-8">
          AI
        </div>
        <h2 className="text-white not-italic text-5xl">
          数字模特换装平台
        </h2>
      </div>
      <div className="bg-clip-text bg-gradient-to-b from-blue-back-100 via-green-back via-99% to-blue-back text-transparent text-4xl">
        让每件衣服都有合适的模特
      </div>
      <div className="flex items-center justify-center mt-12">
        <MainPhoto url="/assets/home_main_l.png" name="home_left" width={191} height={228} extclass="justify-center items-center" style={ {marginLeft: '10px'} } />
        <MainPhoto url="/assets/home_main_m.png" name="home_middle" width={261} height={318} extclass="justify-center items-start" style={ {marginTop: '-28px'} } />
        <MainPhoto url="/assets/home_main_r.png" name="home_right" width={171} height={228} extclass="justify-center items-center" />
      </div>
    </div>
  );
};