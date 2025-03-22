export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex flex-col justify-start md:flex-row md:justify-center">
      <div className="w-full h-1/4 md:min-w-[70%]"></div>
      <div className="h-screen w-full flex flex-1 items-center justify-center gap-12 p-4">
        {children}
      </div>
    </div>
  );
}
