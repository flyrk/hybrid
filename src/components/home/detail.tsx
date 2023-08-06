export const DetailModule = () => {
  return (
    <div className="relative w-full h-full overflow-hidden m-0 px-16 flex items-center bg-white shadow-custom-light">
      <div className="relative w-1/4 h-full">
        <div className="z-10 absolute left-0 top-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
            <path d="M65.2156 24.3928C72.4401 39.7139 65.8766 57.9909 50.5554 65.2155C35.2343 72.4401 16.9573 65.8765 9.73271 50.5553C2.50812 35.2342 9.07169 16.9572 24.3929 9.73263C39.714 2.50804 57.991 9.07161 65.2156 24.3928Z" fill="white" stroke="url(#paint0_linear_340_799)" strokeWidth="13"/>
            <defs>
              <linearGradient id="paint0_linear_340_799" x1="15.288" y1="4.54369" x2="49.3075" y2="111.778" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E6359F"/>
                <stop offset="0.141969" stopColor="#F15E2B"/>
                <stop offset="0.245461" stopColor="#F15E2B"/>
                <stop offset="0.46875" stopColor="#F5A61D"/>
                <stop offset="0.6875" stopColor="#FFDC5F"/>
                <stop offset="0.916667" stopColor="#09ADEA"/>
                <stop offset="1" stopColor="#8F3A98"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute left-8 top-10 w-4/5 border border-orange-sub-100 rounded-lg py-10 px-10">
          <h2 className="bg-gradient-btn bg-clip-text text-transparent text-4xl">我们是谁？</h2>
          <p className="text-xl mt-6">Hybrid Fashion 时尚双擎™️是福瑞购科技（深圳）投入千万级研发、行业顶尖团队领衔、拥有自主知识产权的数字模特换装AIGC大模型应用平台，为时尚行业社交媒体、电商平台、品牌与商家提供可定制、高度拟真的数字模特+服饰穿搭一站式图片素材库解决方案。</p>
        </div>
      </div>
      <div className="flex flex-col h-full mt-24">
        <div className="flex items-center my-6 relative
          after:content-[''] after:bg-orange-sub-100 after:absolute after:h-px after:-bottom-6 after:left-32 after:right-0">
          <h2 className="bg-gradient-btn bg-clip-text text-transparent text-3xl font-bold mr-5">便捷的托管式服务</h2>
          <p className="text-xl font-light text-stone-700 w-96">仅需等待物流人员上门揽件样衣，由平台完成全流程生产并交付 ，全程便捷无忧</p>
        </div>
        <div className="flex items-center my-6 relative
          after:content-[''] after:bg-orange-sub-100 after:absolute after:h-px after:-bottom-6 after:left-48 after:right-0">
          <p className="text-xl font-light text-stone-700 w-96 mr-5">哪怕只做一套衣服也没问题，您无需为没有实际用到的资源和得到的服务付费</p>
          <h2 className="bg-gradient-btn bg-clip-text text-transparent text-3xl font-bold">按需付费/按量计费</h2>
        </div>
        <div className="flex items-center my-6 relative
          after:content-[''] after:bg-orange-sub-100 after:absolute after:h-px after:-bottom-6 after:left-32 after:right-0">
          <h2 className="bg-gradient-btn bg-clip-text text-transparent text-3xl font-bold mr-5">专业的一站式服务</h2>
          <p className="text-xl font-light text-stone-700 w-96">Hybrid Fashion专业的服务团队+一体化的解决方案，只对您的结果指标负责</p>
        </div>
        <div className="flex items-center my-6">
          <p className="text-xl font-light text-stone-700 w-96 mr-5">领先的AI技术算法模型、可靠的云服务、庞大的数据集保障卓越的交付品质</p>
          <h2 className="bg-gradient-btn bg-clip-text text-transparent text-3xl font-bold">卓越高效的交付</h2>
        </div>
      </div>
      <div className="ml-4 w-[30%] h-[92%] bg-detail-product overflow-hidden bg-contain bg-no-repeat">
      </div>
      <footer className="bg-gradient-foot flex items-center justify-between absolute bottom-0 left-0 right-0">
          <div className="text-6xl font-bold text-white ml-16 mt-12 mb-8">
            <p className="mb-4">准备好了吗？</p>
            <p>属于你的AI之旅即将开启</p>
          </div>
          <div className="font-bold">
            <button className="bg-white rounded-md py-4 px-10 text-center"><span className="bg-gradient-btn bg-clip-text text-transparent">立即预约获取限时折扣</span></button>
            <button className="bg-white rounded-md py-4 px-10 text-center ml-6 mr-20">联系我们</button>
          </div>
        </footer>
    </div>
  );
};