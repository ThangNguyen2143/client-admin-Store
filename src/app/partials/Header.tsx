"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header() {
  const { data: session } = useSession();
  const route = useRouter();

  // if (!session) route.push("/api/auth/signin");
  if (!session || !session.user) {
    return <a href="/api/auth/signin">Please Sign in</a>;
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </div>
        <div className="flex-none gap-2">
          <label className="btn-circle swap swap-rotate">
            <input type="checkbox" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="swap-on w-8 rounded-full"
              viewBox="0 0 64 64"
            >
              <path
                fill="#2a5f9e"
                d="M22 60.3V46.5l-10.3 7.6c2.9 2.7 6.4 4.8 10.3 6.2m20 0c3.9-1.4 7.4-3.5 10.3-6.2L42 46.4zM3.7 42c.3 1 .7 1.9 1.2 2.9L8.8 42zm51.5 0l3.9 2.9c.4-.9.8-1.9 1.2-2.9z"
              ></path>
              <path
                fill="#fff"
                d="M23.5 38H2.6c.3 1.4.7 2.7 1.1 4h5.1l-3.9 2.9c.8 1.7 1.7 3.2 2.8 4.7L18 42h4v2l-11.7 8.6l1.4 1.4L22 46.5v13.8c1.3.5 2.6.8 4 1.1V38zm37.9 0H38v23.4c1.4-.3 2.7-.7 4-1.1V46.5L52.3 54c1.4-1.3 2.6-2.7 3.8-4.2L45.4 42h6.8l6.1 4.5c.3-.5.6-1.1.8-1.6L55.2 42h5.1c.4-1.3.8-2.6 1.1-4"
              ></path>
              <path
                fill="#ed4c5c"
                d="M7.7 49.6c.8 1.1 1.6 2.1 2.5 3.1L22 44.1v-2h-4zM45.5 42l10.7 7.8c.4-.5.7-1 1.1-1.5c.1-.1.1-.2.2-.2c.3-.5.7-1.1 1-1.6L52.2 42z"
              ></path>
              <path
                fill="#2a5f9e"
                d="M42 3.7v13.8l10.3-7.6C49.4 7.2 45.9 5.1 42 3.7m-20 0c-3.9 1.4-7.4 3.5-10.3 6.2L22 17.6zM60.3 22c-.3-1-.7-1.9-1.2-2.9L55.2 22zM8.8 22l-3.9-2.9c-.4 1-.8 1.9-1.2 2.9z"
              ></path>
              <path
                fill="#fff"
                d="M40.5 26h20.8c-.3-1.4-.7-2.7-1.1-4h-5.1l3.9-2.9c-.8-1.7-1.7-3.2-2.8-4.7L46 22h-4v-2l11.7-8.6l-1.4-1.4L42 17.5V3.7c-1.3-.5-2.6-.8-4-1.1V26zM2.6 26H26V2.6c-1.4.3-2.7.7-4 1.1v13.8L11.7 10c-1.4 1.3-2.6 2.7-3.8 4.2L18.6 22h-6.8l-6.1-4.5c-.3.5-.6 1.1-.8 1.6L8.8 22H3.7c-.4 1.3-.8 2.6-1.1 4"
              ></path>
              <g fill="#ed4c5c">
                <path d="M56.3 14.4c-.8-1.1-1.6-2.1-2.5-3.1L42 19.9v2h4zM18.5 22L7.9 14.2c-.4.5-.7 1-1.1 1.5c-.1.1-.1.2-.2.2c-.3.5-.7 1.1-1 1.6l6.1 4.5z"></path>
                <path d="M61.4 26H38V2.6c-1.9-.4-3.9-.6-6-.6s-4.1.2-6 .6V26H2.6c-.4 1.9-.6 3.9-.6 6s.2 4.1.6 6H26v23.4c1.9.4 3.9.6 6 .6s4.1-.2 6-.6V38h23.4c.4-1.9.6-3.9.6-6s-.2-4.1-.6-6"></path>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="swap-off w-8 rounded-full"
              viewBox="0 0 512 512"
            >
              <defs>
                <clipPath id="flagVn1x10">
                  <path fillOpacity="0.7" d="M177.2 0h708.6v708.7H177.2z" />
                </clipPath>
              </defs>
              <g
                fillRule="evenodd"
                clipPath="url(#flagVn1x10)"
                transform="translate(-128)scale(.72249)"
              >
                <path fill="#da251d" d="M0 0h1063v708.7H0z" />
                <path
                  fill="#ff0"
                  d="m661 527.5l-124-92.6l-123.3 93.5l45.9-152l-123.2-93.8l152.4-1.3L536 129.8L584.3 281l152.4.2l-122.5 94.7z"
                />
              </g>
            </svg>
          </label>
          <div className="dropdown dropdown-end dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge indicator-item badge-primary badge-xs"></span>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] w-72 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <div className="alert shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 shrink-0 stroke-info"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <div>
                    <h3 className="font-bold">New message!</h3>
                    <div className="text-xs">You have 1 unread message</div>
                  </div>
                  <button className="btn btn-sm">See</button>
                </div>
              </li>
              <li>
                <div className="alert shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 shrink-0 stroke-info"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <div>
                    <h3 className="font-bold">New message!</h3>
                    <div className="text-xs">You have 1 unread message</div>
                  </div>
                  <button className="btn btn-sm">See</button>
                </div>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <div className="avatar">
                <div className="skeleton w-12 rounded-full">
                  {/*eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    alt="Avatar user"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-lg font-bold">
                  {session?.user.name || "You failed"}
                </div>
                <div className="text-sm font-light text-secondary-content">
                  Administator
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <Link href={"/api/auth/signout"}>Sign Out</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="img-header min-h-32 rounded-b-lg bg-cover"></div>
    </div>
  );
}

export default Header;
