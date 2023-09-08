const InfoCard = ({ number, title, text }) => {
  return (
    <div className="flex flex-col shadow-xl p-4 rounded-xl  min-w-[200px] max-w-[450px] hover:scale-95 transition-all">
      <h2 className="text-4xl font-allerta py-3">
        {number}<span className="text-[#3A7CD9] text-4xl ">.</span>
        <br />
        <span className="py-3">{title}</span>
      </h2>
      <p className="text-lg font-monsterrat text-slate-400 leading-8 ">{text}</p>
    </div>
  );
};

export default InfoCard;
