export default function Navigation() {
  return (
    <nav className="bg-[#15376e]">
        <div className="ml-8 relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="hidden h-8 w-auto lg:block"
                src="/images/logo.png"
                alt="Symphony"
              />
            </div>
          </div>
        </div>
    </nav>
  );
}
