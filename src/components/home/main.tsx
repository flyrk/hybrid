import { useState } from 'react';
import Image from "next/image";
import styles from '~/styles/main.module.css';
import { TitleInfo } from './title_info';
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
    <div className={"w-28 h-28 rounded-full border-2 border-gray-sub relative flex " + (extclass || '') }>
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

  const [features] = useState([{
    numbers: '60%+',
    title: '节省巨额费用',
    list: [
      '模特聘请',
      '场地妆造',
      '摄影后期',
    ]
  }, {
    numbers: '90%+',
    title: '缩短交付周期',
    list: [
      '预约排期',
      '驻场监工',
      '延期交付',
    ]
  }]);

  return (
    <div className="relative w-full h-full overflow-hidden m-0 flex justify-start items-center p-20">
      <div className="flex flex-col ">
        <div className="flex items-center">
          <h2 className="text-black not-italic text-5xl font-bold">
            Hybrid Fashion
          </h2>
          <div className="relative rounded-lg bg-gradient-to-b from-yellow-text to-orange-text bg-clip-text
            border-orange-main border
            text-transparent text-5xl flex justify-center items-center w-24.25 h-15.25 mx-8">
            AI
          </div>
          <h2 className="text-black not-italic text-5xl">
            数字模特换装平台
          </h2>
        </div>
        <div className="text-gray-text text-4xl mt-8">
          让每件衣服都有合适的模特
        </div>
        <div className="flex mt-6">
          <div>
            <div className="text-black-text text-2xl font-medium">
            <p>千万级研发、顶尖团队领衔、自主知识产权</p>
            <p>为时尚行业提供可定制、高度拟真的</p>
            <p>数字模特+服饰穿搭一站式图片素材库解决方案</p>
            </div>
            <div className="mt-24">
              <TitleInfo title="让每张图片更有创造力" />
              <div className={styles.mainFooter}>
                { features.map((feature, index) => (
                  <div key={index} className={'flex mt-7 ' + (index > 0 ? 'ml-7' : '') }>
                    <div className="flex flex-col items-center mr-7">
                      <h2 className="hb-main_numbers font-bold text-6xl">{feature.numbers}</h2>
                      <style jsx>{`
                        .hb-main_numbers {
                          background: linear-gradient(178deg, #F9BD39 15.63%, #F41E1E 52.60%, #F49E1E 80.73%);
                          background-clip: text;
                          -webkit-background-clip: text;
                          -webkit-text-fill-color: transparent;
                        }
                      `}</style>
                      <p className="text-black-sub text-4xl font-bold">{feature.title}</p>
                    </div>
                    <div>
                      { feature.list.map((item, index) => (
                        <div key={index} className="flex items-center mb-1">
                          <span className="text-gray-text font-light text-2xl inline-block mr-1">{item}</span> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                            <rect width="28.7479" height="28.7479" fill="none"/>
                            <path d="M14.0204 13.0386L14.374 13.3921L14.7275 13.0386L18.6742 9.09191L19.656 10.0737L15.7093 14.0204L15.3558 14.374L15.7093 14.7275L19.656 18.6742L18.6742 19.656L14.7275 15.7093L14.374 15.3558L14.0204 15.7093L10.0737 19.656L9.09191 18.6742L13.0386 14.7275L13.3921 14.374L13.0386 14.0204L9.09191 10.0737L10.0737 9.09191L14.0204 13.0386ZM2.89566 14.374C2.89566 8.0261 8.0261 2.89566 14.374 2.89566C20.7218 2.89566 25.8522 8.0261 25.8522 14.374C25.8522 20.7218 20.7218 25.8522 14.374 25.8522C8.0261 25.8522 2.89566 20.7218 2.89566 14.374ZM4.29132 14.374C4.29132 19.9325 8.81538 24.4566 14.374 24.4566C19.9325 24.4566 24.4566 19.9325 24.4566 14.374C24.4566 8.81538 19.9325 4.29132 14.374 4.29132C8.81538 4.29132 4.29132 8.81538 4.29132 14.374Z" stroke="#F08686"/>
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start">
            <MainPhoto url="/assets/home_main_l.png" name="home_left" width={82} height={119} extclass="justify-center items-center" style={ {marginLeft: '10px'} } />
            <MainPhoto url="/assets/home_main_m.png" name="home_middle" width={82} height={119} extclass="justify-center items-center mt-2"  />
            <MainPhoto url="/assets/home_main_r.png" name="home_right" width={82} height={99} extclass="justify-center items-center mt-2" />
          </div>
        </div>
      </div>
      <div className={styles.mainLeft}>
      </div>
    </div>
  );
};