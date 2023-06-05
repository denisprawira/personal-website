import { useState, useEffect, useRef } from "react";
import AboutPage from "@/app/pages/AboutPage";
import HomePage from "@/app/pages/HomePage";
import ProjectPage from "@/app/pages/ProjectPage";
import ContactPage from "@/app/pages/ContactPage";
import Home from "../page";

type NavbarProps = {
    theme: boolean;
    setTheme: (theme: boolean) => void;
};

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
    const homeRef = useRef(null);
    const projectRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const [navExpand, setNavExpand] = useState(false);

    const CV = "/resume_denis.pdf";

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 640 && setNavExpand(false)
        );
    }, []);

    const scrollToSection = (ref: any) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className="drawer z-10">
                <input
                    onChange={() => setNavExpand((navExpand) => !navExpand)}
                    checked={navExpand}
                    id="my-drawer-3"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col">
                    <div className="z-10 w-full navbar bg-base-100/10 backdrop-blur-[1px] ">
                        <div className="w-11/12  max-w-screen-lg box-border m-auto">
                            <div className="flex justify-start flex-1 pr-2 mr-2">
                                <img
                                    src="/logo.svg"
                                    width={40}
                                    height={40}
                                    alt="Website Logo"
                                    className="sm:h-10 sm:w-10 max-sm:h-7 max-sm:w-7"
                                ></img>
                            </div>
                            <div className="flex justify-end inline-flex hidden sm:inline-flex">
                                <ul className="menu menu-horizontal">
                                    <li>
                                        <a
                                            onClick={() =>
                                                scrollToSection(homeRef)
                                            }
                                            className="text-color-content"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() =>
                                                scrollToSection(projectRef)
                                            }
                                            className="text-color-content"
                                        >
                                            Project
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() =>
                                                scrollToSection(aboutRef)
                                            }
                                            className="text-color-content"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() =>
                                                scrollToSection(contactRef)
                                            }
                                            className="text-color-content"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                                <button
                                    className="btn btn-md btn-square mx-2"
                                    onClick={() => setTheme(!theme)}
                                >
                                    {theme ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                d="M256 73.1L150 0 126.7 126.7 0 150 73.1 256 0 362l126.7 23.3L150 512l106-73.1L362 512l23.3-126.7L512 362 438.9 256 512 150 385.3 126.7 362 0 256 73.1zM352 256c0-53-43-96-96-96s-96 43-96 96s43 96 96 96s96-43 96-96zm32 0c0 70.7-57.3 128-128 128s-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128z"
                                                fill="#b3c5ef"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            viewBox="0 0 384 512"
                                        >
                                            <path
                                                d="M287.6 41.2c-82.8 21.2-144 96.5-144 186c0 106 85.8 192 191.5 192c16.8 0 33.1-2.2 48.6-6.2c-40.6 41.4-97.2 67-159.8 67C100.3 480 0 379.7 0 256S100.3 32 224 32c22.1 0 43.5 3.2 63.6 9.2z"
                                                fill="#d1d1d1"
                                            />
                                        </svg>
                                    )}
                                </button>
                                {/* <a href="./assets/resume.pdf" download={"resume.pdf"}> */}
                                {/* onClick={()=>{window.open(process.env.PUBLIC_URL + "/assets/resume_denis.pdf")}} */}
                                <button
                                    className="btn btn-md ml-2"
                                    onClick={() => {
                                        window.open(CV);
                                    }}
                                >
                                    Resume
                                </button>
                                {/* </a> */}
                            </div>
                            <div className="flex-none sm:hidden">
                                <label
                                    htmlFor="my-drawer-3"
                                    className="btn btn-square btn-ghost"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block w-6 h-6 stroke-current"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        ></path>
                                    </svg>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-11/12 mx-auto max-w-screen-lg box-border px-2">
                        <div ref={homeRef}>
                            <HomePage></HomePage>
                        </div>

                        <div ref={projectRef}>
                            <ProjectPage></ProjectPage>
                        </div>

                        <div ref={aboutRef}>
                            <AboutPage></AboutPage>
                        </div>

                        <div ref={contactRef}>
                            <ContactPage></ContactPage>
                        </div>
                    </div>
                </div>
                <div className="drawer-side ">
                    <label
                        htmlFor="my-drawer-3"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-60 bg-base-100 flex gap-2">
                        <div className="flex justify-end">
                            <button
                                className="btn btn-sm btn-square btn-outline "
                                onClick={() =>
                                    setNavExpand((navExpand) => !navExpand)
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <li>
                            <a
                                onClick={() => {
                                    scrollToSection(homeRef);
                                    setNavExpand(!navExpand);
                                }}
                                className="text-color-content"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => {
                                    scrollToSection(projectRef);
                                    setNavExpand(!navExpand);
                                }}
                                className="text-color-content"
                            >
                                Project
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => {
                                    scrollToSection(aboutRef);
                                    setNavExpand(!navExpand);
                                }}
                                className="text-color-content"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => {
                                    scrollToSection(contactRef);
                                    setNavExpand(!navExpand);
                                }}
                                className="text-color-content"
                            >
                                Contact
                            </a>
                        </li>
                        <div className="flex justify-between w-full gap-2">
                            <button
                                className="btn w-1/2 shrink"
                                onClick={() => {
                                    window.open(CV);
                                }}
                            >
                                Resume
                            </button>
                            <button
                                className="btn btn-square  w-1/2 shrink"
                                onClick={() => setTheme(!theme)}
                            >
                                {theme ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            d="M256 73.1L150 0 126.7 126.7 0 150 73.1 256 0 362l126.7 23.3L150 512l106-73.1L362 512l23.3-126.7L512 362 438.9 256 512 150 385.3 126.7 362 0 256 73.1zM352 256c0-53-43-96-96-96s-96 43-96 96s43 96 96 96s96-43 96-96zm32 0c0 70.7-57.3 128-128 128s-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128z"
                                            fill="#b3c5ef"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        viewBox="0 0 384 512"
                                    >
                                        <path
                                            d="M287.6 41.2c-82.8 21.2-144 96.5-144 186c0 106 85.8 192 191.5 192c16.8 0 33.1-2.2 48.6-6.2c-40.6 41.4-97.2 67-159.8 67C100.3 480 0 379.7 0 256S100.3 32 224 32c22.1 0 43.5 3.2 63.6 9.2z"
                                            fill="#d1d1d1"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
