import Image from "next/image";
import { useState } from "react";

interface IntroInfoProps {
  title: string;
  desc: string[];
  icon: string;
}
export const IntroInfo: React.FC<IntroInfoProps> = ({ title, desc, icon }) => {
  return (
    <div className="relative flex flex-col items-center w-1/4">
      <Image width={80} height={80} alt="icon" src={"/assets/icon_" + icon + ".svg"} />
      <h3 className="text-4xl font-bold mb-5">{title}</h3>
      {
        desc.map((text, idx) => (
          <p key={idx} className={"text-xl text-gray-sub-100 " + (!text ? 'h-7' : '')}>{text}</p>
        ))
      }
    </div>
  );
};

export const IntroductModule = () => {
  const [infos] = useState([{
    icon: 'clipboard',
    title: '预约报名',
    desc: [
      '2分钟填写报名表',
      '2天内工作人员与您联系'
    ]
  }, {
    icon: 'truck',
    title: '样衣上门揽件',
    desc: [
      '1天内我们将上门揽收样衣',
      ''
    ]
  }, {
    icon: 'clock',
    title: '等待交付',
    desc: [
      '72小时内',
      '精美模特图将发送到您的邮箱'
    ]
  }]);
  return (
    <div className="relative w-full h-full overflow-hidden m-0 pt-20 px-20 flex flex-col items-center bg-gradient-radial shadow-custom-light">
      <div className="flex flex-col items-center rounded-md w-full border border-orange-sub-100 p-10">
        <h2 className="hb-intro_title text-5xl font-bold">一站式托管服务</h2>
        <div className="flex items-start justify-around w-full mt-5">
          {
            infos.map((info, index) => (
                <IntroInfo key={index} icon={info.icon} title={info.title} desc={info.desc} />
            ))
          }
        </div>
      </div>
      <style jsx>{`
        .hb-intro_title {
          background: linear-gradient(180deg, #F41E1E 6.25%, #F49E1E 60.42%, #F9BD39 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
      <div className="flex w-full my-8 items-center flex-col text-4xl leading-snug">
        <p>填写表单审核通过后</p>
        <p>我们将<span className="text-red-500 font-extrabold">上门揽收</span>拍摄样衣</p>
        <p><span className="text-green-500 font-extrabold">72小时内</span>，即可收到精美的模特图</p>
      </div>
      <button className="rounded-md hb-intro_btn text-2xl font-extrabold py-4 px-16">立即预约</button>
      <style jsx>{`
        .hb-intro_btn {
          background: linear-gradient(179deg, #F49E1E 0%, #F9BD39 83.33%);
        }
      `}</style>
      {/* <div className="w-full items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="89" height="23" viewBox="0 0 89 23" fill="none">
          <path d="M44.5 23L89 -1.90735e-06H0L44.5 23Z" fill="#000"/>
        </svg>
      </div> */}
    </div>
  );
};