interface Props {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: Props) => {
  return (
    <div className="flex items-center gap-4 lg:gap-6">
      <div className="h-0.5 w-16 bg-primary-600 lg:w-32" />
      <p className="shrink-0 font-bad-script text-2xl md:text-3xl xl:text-4xl">
        {children}
      </p>
      <div className="h-0.5 w-16 bg-primary-600 lg:w-32" />
    </div>
  );
};

export default SectionTitle;
