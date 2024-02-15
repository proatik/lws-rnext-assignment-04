const FeatureNewsSkeleton = () => {
  return (
    <div className="grid grid-cols-12 col-span-12 gap-4">
      <div className="box-border relative col-span-12 p-2 border min-h-64 lg:col-span-4">
        <div className="grid gap-1">
          <div className="h-6 animate-pulse bg-slate-100/70"></div>
          <div className="h-6 max-w-[85%] animate-pulse bg-slate-100/70"></div>
          <div className="h-6 max-w-[95%] animate-pulse bg-slate-100/70"></div>
        </div>
        <div className="absolute top-0 left-0 grid w-full h-full place-items-center">
          <p className="z-10 font-mono text-3xl text-center font text-slate-600">
            News not available
          </p>
        </div>
        <div className="grid gap-1 mt-4">
          <div className="h-5 max-w-[97%] animate-pulse bg-slate-100/60 delay-150"></div>
          <div className="h-5 animate-pulse bg-slate-100/60"></div>
          <div className="h-5 max-w-[95%] animate-pulse bg-slate-100/60 delay-150"></div>
          <div className="h-5 animate-pulse bg-slate-100/60"></div>
          <div className="h-5 max-w-[90%] animate-pulse bg-slate-100/60 delay-150"></div>
          <div className="h-5 max-w-[98%] animate-pulse bg-slate-100/60 "></div>
          <div className="h-5 max-w-[80%] animate-pulse bg-slate-100/60 delay-150"></div>
          <div className="h-5 max-w-[90%] animate-pulse bg-slate-100/60 "></div>
          <div className="h-5 max-w-[98%] animate-pulse bg-slate-100/60 delay-150"></div>
          <div className="h-5 max-w-[80%] animate-pulse bg-slate-100/60 "></div>
        </div>
      </div>
      <div className="h-64 col-span-12 border lg:col-span-8">
        <div className="box-border relative w-full h-full bg-slate-100/60">
          <div className="absolute -bottom-6 -left-[1px] box-border h-4 w-2/4 border">
            <div className="z-10 w-full h-full animate-pulse bg-slate-100/60"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureNewsSkeleton;
