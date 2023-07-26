interface TitleInfoProps {
  title: string;
}
export const TitleInfo: React.FC<TitleInfoProps> = ({ title }) => {
  return (
    <div className="flex items-center">
      <div className="z-10">
        <svg className="w-24 h-24" xmlns="http://www.w3.org/2000/svg" width="125" height="124" viewBox="0 0 125 124" fill="none">
          <path d="M109.977 39.7417C122.381 66.0479 111.111 97.4291 84.8053 109.834C58.4991 122.238 27.1179 110.969 14.7134 84.6624C2.30886 58.3562 13.5784 26.975 39.8846 14.5705C66.1908 2.16599 97.572 13.4355 109.977 39.7417Z" fill="white" stroke="url(#paint0_linear_214_337)" stroke-width="18"/>
          <defs>
            <linearGradient id="paint0_linear_214_337" x1="25.5411" y1="7.57509" x2="81.9748" y2="185.462" gradientUnits="userSpaceOnUse">
              <stop stop-color="#E6359F"/>
              <stop offset="0.141969" stop-color="#F15E2B"/>
              <stop offset="0.245461" stop-color="#F15E2B"/>
              <stop offset="0.46875" stop-color="#F5A61D"/>
              <stop offset="0.6875" stop-color="#FFDC5F"/>
              <stop offset="0.916667" stop-color="#09ADEA"/>
              <stop offset="1" stop-color="#8F3A98"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="hb-main_info rounded-r-bl bg-orange-sub py-4 px-12 tracking-larger -ml-6 text-4xl font-monts leading-none font-bold whitespace-nowrap">{title}</div>
    </div>
  );
}