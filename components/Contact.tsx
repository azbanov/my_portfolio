import React from "react";
import userData from "@/constants/data";
import Link from "next/link";

export default function Contact() {
  return (
    <section>
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Contact
        </h1>
      </div>
      <div className="rounded-md shadow-md bg-blue-300 dark:bg-blue-500 p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-gray-50 font-semibold text-2xl">
                Get in touch, let&apos;s talk.
              </h1>
              <p className="font-light text-base text-gray-200 mt-2">
                Fill in the details and I&apos;ll get back to you as soon as I can.
              </p>
            </header>
            <div className="icons-container inline-flex flex-col my-20">
              <Link
                href={userData.socialLinks.telegramm}
                className="flex flex-row items-center space-x-6 rounded-md border border-blue-300 dark:border-blue-500 hover:border hover:border-blue-500 dark:hover:border-blue-300 p-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill h-5 w-5 text-blue-500 dark:text-blue-300"
                  viewBox="0 0 30 30"
                >
                  <path d="M25.1543,3.98438c-0.32506,0.01434 -0.62791,0.10902 -0.89453,0.2168c-0.24975,0.10046 -1.204,0.50974 -2.70703,1.1543c-1.50434,0.64512 -3.49626,1.50031 -5.62109,2.41406c-4.24968,1.8275 -9.02743,3.88464 -11.47461,4.9375c-0.09202,0.03958 -0.41311,0.14215 -0.75391,0.4082c-0.3408,0.26605 -0.70312,0.81735 -0.70312,1.43164c0,0.49534 0.23607,0.98744 0.5332,1.28125c0.29714,0.29381 0.61154,0.43894 0.88086,0.54883c0.97717,0.39871 4.00778,1.63891 4.58008,1.87305c0.20141,0.61698 1.29835,3.97253 1.55273,4.79492c0.16769,0.5427 0.32732,0.8826 0.53516,1.15234c0.10392,0.13487 0.22471,0.25307 0.37109,0.3457c0.05851,0.03702 0.12266,0.06554 0.1875,0.0918l0.00391,0.00195c0.01494,0.006 0.02782,0.01618 0.04297,0.02148c0.02858,0.01 0.0477,0.0112 0.08594,0.01953c0.15232,0.04919 0.30611,0.08008 0.44336,0.08008c0.58516,0 0.94336,-0.32227 0.94336,-0.32227l0.02149,-0.01562l3.00977,-2.60352l3.65039,3.45313c0.0514,0.07268 0.53074,0.73047 1.58789,0.73047c0.6277,0 1.12563,-0.31497 1.44531,-0.65039c0.31968,-0.33542 0.51885,-0.6878 0.60352,-1.13086v-0.00195c0.07919,-0.41867 3.44336,-17.68945 3.44336,-17.68945l-0.00586,0.02344c0.09848,-0.44951 0.12429,-0.86814 0.01563,-1.28125c-0.10867,-0.41311 -0.39499,-0.80864 -0.75,-1.02148c-0.35497,-0.2128 -0.70229,-0.27801 -1.02734,-0.26367zM24.9668,6.07422c-0.0048,0.02919 0.00359,0.01451 -0.00391,0.04883l-0.00195,0.01172l-0.00195,0.01172c0,0 -3.3225,17.04989 -3.44531,17.69922c0.00899,-0.04904 -0.0321,0.04846 -0.07422,0.10742c-0.05955,-0.04105 -0.18164,-0.09375 -0.18164,-0.09375l-0.01953,-0.02148l-4.98633,-4.7168l-3.52539,3.04688l1.04883,-4.19922c0,0 6.55617,-6.78664 6.95117,-7.18164c0.318,-0.316 0.38477,-0.42616 0.38477,-0.53516c0,-0.146 -0.07609,-0.25195 -0.24609,-0.25195c-0.153,0 -0.35875,0.14875 -0.46875,0.21875c-1.4331,0.91354 -7.72466,4.58039 -10.54492,6.2207c-0.44819,-0.18342 -3.5619,-1.45798 -4.61719,-1.88867c0.00799,-0.0035 0.00536,-0.00226 0.01367,-0.00586c2.44782,-1.05314 7.22358,-3.11026 11.47266,-4.9375c2.12454,-0.91362 4.11797,-1.76946 5.62109,-2.41406c1.47998,-0.63467 2.50833,-1.07147 2.625,-1.11914z"></path>
                </svg>
                <p className="text-gray-50 font-light text-sm !ml-5">
                  {userData.telegrammUsername}
                </p>
              </Link>
              <Link
                href={`mailto:${userData.email}`}
                className="flex flex-row items-center space-x-6 rounded-md border border-blue-300 dark:border-blue-500 hover:border hover:border-blue-500 dark:hover:border-blue-300 p-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill h-4 w-4 text-blue-500 dark:text-blue-300"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                <p className="text-gray-50 font-light text-sm">
                  {userData.email}
                </p>
              </Link>
              <Link
                href={userData.addressMapPoint}
                className="flex flex-row items-center space-x-6 rounded-md border border-blue-300 dark:border-blue-500 hover:border hover:border-blue-500 dark:hover:border-blue-300 p-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pin-fill h-4 w-4 text-blue-500 dark:text-blue-300"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
                </svg>
                <p className="text-gray-50 font-light text-sm">
                  {userData.address}
                </p>
              </Link>
            </div>
            <div className="social-icons flex flex-row space-x-8">
              <Link
                href={userData.socialLinks.facebook}
                className="h-10 w-10 rounded-full hover:bg-blue-500 dark:hover:bg-blue-300 flex items-center justify-center cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  className="text-gray-50"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <Link
                href={userData.socialLinks.twitter}
                className="h-10 w-10 rounded-full hover:bg-blue-500 dark:hover:bg-blue-300 flex items-center justify-center cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  className="text-gray-50"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <Link
                href={userData.socialLinks.instagram}
                className="h-10 w-10 rounded-full hover:bg-blue-500 dark:hover:bg-blue-300 flex items-center justify-center cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  className="text-gray-50"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                    fill="currentColor"
                  />
                  <path
                    d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <form className="form rounded-lg bg-white p-4 flex flex-col">
            <label htmlFor="name" className="text-sm text-gray-600 mx-4">
              {" "}
              Your Name
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="name"
            />
            <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
              Email
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="email"
            />
            <label
              htmlFor="message"
              className="text-sm text-gray-600 mx-4 mt-4"
            >
              Message
            </label>
            <textarea
              rows={4}
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="message"
            />
            <button
              type="submit"
              className="bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
