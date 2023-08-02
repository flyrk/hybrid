import Image from "next/image";

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

export const AboutModule = () => {
  return (
    <div className="relative w-full h-full overflow-hidden m-0 pt-20 px-20 flex flex-col items-center bg-gray-400 shadow-custom-light">
      <div className="m-20 w-full h-full bg-gray-400 bg-about-product bg-cover bg-center">
        <footer className="bg-gradient-foot flex items-center absolute h-28 bottom-0 left-0 right-0">
          <div>
            <p>准备好了吗</p>
            <p>准备好了吗</p>
          </div>
          <div>
            <button>立即预约获取限时折扣</button>
            <button>联系我们</button>
          </div>
        </footer>
      </div>
    </div>
  );
};