const AboutPage = () => {
    const ProfilePicture = "/profile3.JPG";
    const CV = "/resume_denis.pdf";

    return (
        <div className="flex flex-col max-sm:flex-col gap-8 mt-24">
            <div className="flex flex-col items-start w-full prose">
                <p
                    className="sm:text-start text-3xl font-semibold font-amaranth bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500
                     bg-clip-text text-transparent bg-auto animate-gradient"
                >
                    A glimpse into who i am
                </p>
            </div>
            <div className="flex flex-row max-sm:flex-col max-sm:gap-8">
                <div className="sm:basis-5/12 flex flex-col gap-8 justify-center items-center">
                    <div className="flex max-w-fit max-h-fit  justify-center ">
                        <img
                            src={ProfilePicture}
                            className=" border-0 rounded-3xl ring-2 border-pink-700 ring-purple-500 ring-offset-0.5 p-1 ring-offset-transparent max-sm:h-auto max-sm:w-1/3 sm:h-auto sm:w-28 max-[350px]:h-auto max-[350px]:w-2/4 "
                            alt="my picture"
                        />
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <div className="badge badge-primary badge-outline">
                            <p className="text-color-content text-center">
                                My Skill
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <div className="badge badge-md">PHP</div>
                            <div className="badge badge-md">Typescript</div>
                            <div className="badge badge-md">Javascript</div>
                            <div className="badge badge-md">React</div>
                            <div className="badge badge-md">Next.js</div>
                            <div className="badge badge-md">Laravel</div>
                            <div className="badge badge-md">Node js</div>
                        </div>
                        <button
                            className="btn"
                            onClick={() => {
                                window.open(CV);
                            }}
                        >
                            Download Resume
                        </button>
                    </div>
                </div>
                <div className="text-start max-sm:text-center sm:basis-7/12 gap-3 flex flex-col sm:pl-4">
                    <p className="text-color-content">
                        Hi! my name is Denis Prawira, a passionate web developer
                        with experience in various programming languages such as
                        Typescript, Javascript, React, Laravel, and Node.js. He
                        is driven by his love for user experience and interface
                        design, believing that a website or application should
                        look great while providing a seamless user experience.
                    </p>
                    <p className="text-color-content">
                        I'm committed to delivering exceptional results, whether
                        building a new website from scratch or improving an
                        existing one. He strives to write clean, efficient, and
                        scalable code that is not only functional but also easy
                        to maintain. His dedication to staying up-to-date with
                        the latest industry trends and technologies ensures that
                        he provides the best possible solutions for his clients.
                        With his skills and expertise, Denis is excited to
                        collaborate with clients to create amazing websites and
                        applications that exceed expectations.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
