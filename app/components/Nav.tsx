export default function Nav() {
  return (
    <nav className="h-20 px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-20">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold hover:font-extrabold">
            Jesus Alvarez
          </a>
        </div>
        <div className="flex justify-end gap-5 text-2xl font-semibold w-100">
          <a href="/" className="text-end w-36 hover:font-bold">
            Home
          </a>
          <a href="/projects" className="text-center w-36 hover:font-bold">
            Projects
          </a>
          <a
            href="https://www.linkedin.com/in/jalvaydev/"
            className="text-start w-36 hover:font-bold"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
