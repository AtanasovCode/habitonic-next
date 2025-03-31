export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex flex-col justify-start gap-3 md:flex-row">
      <div className="w-full min-h-[45dvh] bg-primary md:min-h-full md:min-w-[75%]"></div>
      <div className="w-full flex flex-col items-center justify-center p-8 relative">
        <h1 className="font-bold text-3xl mb-4 lg:mb-0 lg:absolute lg:top-[10%]">Habitonic</h1>
        {children}
      </div>
    </div>
  );
}
