const Shimmer = () => {
  return (
    <>
      {Array(10)
        .fill("")
        .map((e , index) => {
          return <div className="shimmer h-[200px] w-[200px] bg-slate-300 animate-pulse ml-5 mt-2" key= {index}></div>;
        })}
    </>
  );
};

export default Shimmer;
