const JoinUs = () => {
  return (
    <section className="mx-auto flex w-11/12 flex-col items-center justify-center gap-10 py-10">
      <div className="flex items-center gap-4 lg:gap-6">
        <div className="h-0.5 w-16 bg-primary-600 lg:w-96" />
        <p className="shrink-0 font-bad-script text-2xl md:text-3xl xl:text-4xl">
          Приклучи се
        </p>
        <div className="h-0.5 w-16 bg-primary-600 lg:w-96" />
      </div>

      <h3 className="text-3xl">
        Стани дел од семејството{" "}
        <span className="text-primary-600">Јади домашно</span>
      </h3>
    </section>
  );
};

export default JoinUs;
