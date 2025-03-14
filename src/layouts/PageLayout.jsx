export const PageLayout = ({ children, title, className, is404 }) => {
  return (
    <main className="w-full h-full flex flex-col items-center text-center pt-36">
      <img
        width={64}
        height={64}
        className={is404 ? "grayscale" : ""}
        alt="Logo de ReactClothes"
        src="/reactclothes-logo.webp"
      />
      <h1 className="text-2xl font-bold text-[#0081a3]">
        ReactClothes, vestite con React!
      </h1>
      <h2 className={`text-xl font-bold ${is404 && "text-red-700"}`}>{title}</h2>
      <section className={(className ? className + " " : '') + 'p-12 w-full'}>{children}</section>
    </main>
  );
};
