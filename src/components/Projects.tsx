export default function Projects() {
  return (
    <div>
      <div className="mx-auto max-w-prose">
        <div className="px-4 mt-20">
          <div className="text-3xl subpixel-antialiased font-medium text-gray-900 ">
            My latest projects
          </div>
          <ul>
            <li>
              <div className="py-5 bg-white border-b border-gray-200">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Echoview
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  A user access management application used to manage what
                  employee's have access to client instances. This application
                  was built to upgrade a legacy system used at the company to
                  allow adminstrators to better manage and control users within
                  the application.
                </p>
                <ul className="flex justify-around mt-1 text-sm text-gray-500 ">
                  <li>React</li>
                  <li>Typescript </li>
                  <li>Go</li>
                  <li>GraphQL</li>
                  <li>MySQL</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="py-5 bg-white border-b border-gray-200">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Lightweight Asset Manager
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  A lightweight asset management full stack application that
                  allows a user to keep track of what items are currently in and
                  out of stock as well as the status of an item. This was also
                  my first project implementing single-sign on with Okta.
                </p>
                <ul className="flex justify-around mt-1 text-sm text-gray-500 ">
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>Go</li>
                  <li>GraphQL</li>
                  <li>MongoDB</li>
                  <li>Microsoft SQL Server</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="py-5 bg-white border-b border-gray-200">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Personal Site
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  It's the website you are currently on right now! It's nothing
                  crazy but it's something that I wanted to build to be able to
                  post some of the work I've done, and to make it easier to
                  learn more about me :)
                </p>
                <ul className="flex justify-around mt-1 text-sm text-gray-500 ">
                  <li>React</li>
                  <li>Typescript </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
