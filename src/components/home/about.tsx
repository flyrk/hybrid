export const AboutModule = () => {
  return (
    <div className="relative w-full h-full overflow-hidden m-0 px-16 flex flex-col items-center bg-gray-400 shadow-custom-light">
      <div className="absolute left-12 right-12 bottom-0 top-28 bg-gray-400 bg-about-product overflow-hidden bg-contain bg-no-repeat">
      </div>
      <div className="text-white text-2xl mt-12">
        <p>Hybrid Fashion 时尚双擎™️是福瑞购科技（深圳）投入千万级研发、行业顶尖团队领衔、拥有自主知识产权的数字模特换装AIGC大模型</p>
        <p>应用平台，为时尚行业社交媒体、电商平台、品牌与商家提供可定制、高度拟真的数字模特+服饰穿搭一站式图片素材库解决方案。</p>
      </div>
      <h2 className="absolute my-0 mx-auto top-[30%] left-[44%] text-white text-4xl font-bold">我们是谁？</h2>
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