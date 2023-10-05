const PageComponent = ({title, buttons = '', children}) => {
  return (
    <>
      <header className="bg-gray-700">
        <div className="flex justify-between items-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-lg md:text-3xl font-bold tracking-tight">{title}</h1>
          {buttons}
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </>
  );
};

export default PageComponent;
