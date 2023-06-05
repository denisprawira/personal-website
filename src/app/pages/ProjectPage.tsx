import Card from "@/app/components/Card";

const ProjectPage = () => {
    return (
        <div className="flex flex-col max-sm:flex-col max-sm:justify-center max-sm:gap-8 gap-8 [@media(max-width:260px)]:mt-[6rem]">
            <div className="flex flex-col items-start w-full prose">
                <p
                    className="sm:text-start text-3xl font-semibold font-amaranth bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500
                     bg-clip-text text-transparent bg-auto animate-gradient"
                >
                    Some Things i've built
                </p>
            </div>
            <div className="flex flex-row flex-wrap max-sm:flex-col gap-[1%] gap-y-3 justify-around">
                <Card />
            </div>
        </div>
    );
};

export default ProjectPage;
