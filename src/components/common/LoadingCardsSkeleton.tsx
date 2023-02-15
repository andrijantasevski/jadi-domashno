const LoadingCardsSkeleton = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="h-56 w-full animate-pulse rounded-lg bg-gray-300 transition duration-300 ease-in-out"
        ></div>
      ))}
    </div>
  );
};

export default LoadingCardsSkeleton;
