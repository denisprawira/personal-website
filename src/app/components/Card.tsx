const Card = () => {
    return (
        <div className="flex flex-col h-auto w-[49%]  bg-color-car max-sm:w-full p-8 gap-4 rounded-lg transition duration-150 ease-out hover:ease-in hover:-translate-y-2">
            <div className="flex flex-col items-start prose">
                <h3 className="text-secondary">Featured Project</h3>
                <h2 className="text-secondary-focus">
                    Hepatitis Expert System Diagnosis
                </h2>
            </div>
            <p className="text-left text-color-content">
                SITI (Sistem Informasi Hepatitis) is an expert system for
                hepatitis diagnosis, utilizing forward and backward chaining. It
                assigns weights to symptoms based on their relevance,
                prioritizing dominant symptoms. It provides efficient and
                accurate decision-making, assisting healthcare professionals in
                managing hepatitis.
            </p>
            <div className="flex flex-row flex-wrap gap-4 ">
                <span className="badge badge-sm badge-secondary  p-2">
                    Typescript
                </span>
                <span className="badge badge-sm badge-secondary  p-2">
                    React
                </span>
                <span className="badge badge-sm badge-secondary  p-2">
                    Laravel
                </span>
                <span className="badge badge-sm badge-secondary  p-2">
                    next.js
                </span>
            </div>
            <div className="flex flex-row flex-wrap items-start gap-2  ">
                <button className="btn btn-sm">Live/Demo</button>
                <button className="btn btn-sm">Github</button>
            </div>
        </div>
    );
};

export default Card;
