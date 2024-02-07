import Image from "next/image";
import Nav from "./components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-full">
      <div className="lg:flex lg:flex-row flex-col justify-center my-20 lg:my-40 lg:mx-20 mx-10 ">
        <div className="lg:w-1/3 w-full mb-10 lg:mb-0 gap-2 flex-col flex">
          <p className="text-5xl font-bold">Jesus Alvarez</p>
          <p className="text-xl ">Software Developer</p>
          <div className="flex mt-1 gap-2">
            <Link
              className="hover:cursor-pointer shadow-lg"
              href="https://www.linkedin.com/in/jalvaydev/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </Link>
            <Link
              className="hover:cursor-pointer shadow-lg"
              href="https://github.com/jalvaydev"
            >
              <svg
                height="24"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="24"
                fill="currentColor"
                data-view-component="true"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="">
          <p className="text-xl font-bold">Experience</p>

          <div className="max-w-prose flex flex-col gap-5 ">
            <div className="">
              <div className="flex lg:flex-row flex-col justify-between">
                <p className="font-bold">Ideagen</p>
                <p className="font-semibold ">Junior Developer</p>
                <p className="font-semibold">10/2022 - 07/2023</p>
              </div>
              <div>
                <ul>
                  <li>
                    – Migrated a React frontend from JavaScript to TypeScript in
                    order to improve code maintainability, readability, and
                    early error detection.
                  </li>
                  <li>
                    – Implemented multiple Single Sign-On (SSO) login options
                    for a web application.
                  </li>
                  <li>
                    – Refactored web application to utilize paging to increase
                    performance and reduce load times.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex justify-between lg:flex-row flex-col">
                <div className="font-bold">ProcessMAP</div>
                <div className="font-semibold ">Junior Developer</div>
                <div className="font-semibold">08/2021 - 10/2022</div>
              </div>
              <div>
                <ul>
                  <li>
                    - Developed an access management application used by
                    internal users to access customer websites, replacing an
                    existing legacy system. Improved user experience and
                    performance.
                  </li>
                  <li>
                    – Developed several proof-of-concept applications including:
                    a microfrontend (single-spa) application, inventory
                    management, announcement creator and component, and others.
                  </li>
                  <li>
                    – Developed and maintained a authentication and
                    authorization system, ensuring compliance with security
                    standards and protecting sensitive data.
                  </li>
                  <li>
                    - Deployed and provided support for a production application
                    running through Docker. Wrote bash scripts to facilitate
                    efficient Docker management.
                  </li>
                  <li>
                    - Collaborated effectively with a globally distributed team
                    to achieve project objectives.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <div className="">
            <p className="text-xl font-bold">Education</p>
            <div className="max-w-prose flex flex-col gap-5 ">
              <div className="">
                <div className="flex justify-between lg:flex-row flex-col">
                  <p className="font-bold ">
                    Bachelor of Art (B.A.), Computer Science
                  </p>
                  <p className="font-semibold">08/2018 - 07/2020</p>
                </div>
                <p>Florida International University, GPA 3.41</p>
              </div>
            </div>
          </div>
          <br />
          <div className="">
            <p className="text-xl font-bold">Projects</p>
            <div className="max-w-prose flex flex-col gap-5 ">
              <div className="">
                <p className="font-bold ">Echoview</p>
                <p className="font-semibold">
                  TypeScript, React, Go, GraphQL, Docker, MySQL
                </p>
                <p>
                  Full stack web application that is used to manage employee
                  access to client instances. Features implemented include:
                  extensive logging of employee actions, approval system for
                  granting user requests, and others.
                </p>
              </div>
              <div>
                <p className="font-bold ">Broadview</p>
                <p className="font-semibold">
                  TypeScript, React, Go, Docker, MySQL
                </p>
                <p>
                  Full stack web application that allows users to create and
                  manage announcements that are displayed on consumer
                  applications. Examples of announcements include maintance
                  updates, and version changes. Features implemented include:
                  script that runs on client site to recieve and display
                  announcements, announcement creation system, and others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
