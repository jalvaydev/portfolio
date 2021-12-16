export default function Greeting() {
  let greeting = {
    title: "Hi, I'm Jesus!",
    body: "I'm a Full Stack Developer that is always working on web/mobile apps in React! I'm currently loving Typescript when I'm working on my frontend projects and working with Go when building my APIs!",
  };

  return (
    <div id="about" className="mx-auto max-w-prose">
      <div className="px-4 mt-20">
        <div className="text-4xl subpixel-antialiased font-medium text-gray-900 ">
          {greeting.title}
        </div>
        <div className="">
          <p className="text-xl text-gray-500 max-w-prose">{greeting.body}</p>
        </div>
      </div>
    </div>
  );
}
