export default function Header() {
  return (
    <header className="flex justify-between px-4 pt-4 pb-1">
      <a href="#about">
        <div className="px-2 py-1 border-2 border-blue-600 border-solid hover:cursor-pointer">
          <p className="text-lg subpixel-antialiased font-medium text-blue-600 uppercase">
            jalvay.dev
          </p>
        </div>
      </a>
      <ul className="flex gap-10">
        <li>
          <a
            className="subpixel-antialiased font-medium text-blue-600"
            href="#about"
          >
            About Me
          </a>
        </li>
        <li>
          <a
            className="subpixel-antialiased font-medium text-blue-600"
            href="#skills"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            className="subpixel-antialiased font-medium text-blue-600"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="subpixel-antialiased font-medium text-blue-600"
            href="#interests"
          >
            Interests
          </a>
        </li>
      </ul>
    </header>
  );
}
