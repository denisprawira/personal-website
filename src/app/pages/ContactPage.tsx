import emailjs from "@emailjs/browser";
import { count } from "console";
import { useEffect, useState } from "react";

const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isSent, setIsSent] = useState(true);
    const [response, setResponse] = useState("");
    const [countdown, setCountDown] = useState(5);
    const [isSuccess, setIsSuccess] = useState(0);
    const [isSubmit, setIsSubmit] = useState(false);

    const serviceId: string = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId: string = process.env.NEXT_PUBLIC_TEMPLATE_MESSAGE!;
    const apiKey: string = process.env.NEXT_PUBLIC_API_KEY!;

    console.log("service id : " + serviceId);
    console.log("template id : " + templateId);
    console.log("api key : " + apiKey);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (isSent && countdown > 0) {
            timer = setTimeout(() => {
                setCountDown(countdown - 1);
            }, 1000);
        } else if (countdown === 0 && isSent === true) {
            setIsSent(!isSent);
            setIsSuccess(0);
            // setIsResponseVisible(false); // Reset the visibility of the response message
        }

        return () => clearTimeout(timer);
    }, [isSent, countdown, isSubmit]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmit(true);
        emailjs
            .send(
                serviceId,
                templateId,
                {
                    from_name: name,
                    from_email: email,
                    subject_email: subject,
                    message: message,
                },
                apiKey
            )
            .then(() => {
                setIsSent(true);
                setIsSuccess(1);
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
                setIsSubmit(false);
                setResponse(
                    "Thank you for sending a message to me. I will get back to you soon :)"
                );

                setCountDown(5); // Reset the countdown
            })
            .catch((error: any) => {
                setIsSubmit(false);
                setResponse(
                    "An error occurred while sending the email. Please try again later."
                );
                setIsSuccess(2);
                //setIsResponseVisible(true); // Show the response message
                setCountDown(5); // Reset the countdown
            });
    };

    return (
        <div
            id="contact-section"
            className="flex flex-col max-sm:flex-col max-sm:justify-center max-sm:gap-8 gap-8 mt-24 mb-24"
        >
            <div className="flex flex-col items-start w-full prose">
                <p
                    className="sm:text-start text-3xl font-semibold font-amaranth bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500
                     bg-clip-text text-transparent bg-auto animate-gradient"
                >
                    Get in touch with me
                </p>
                <p
                    className={` ${
                        isSuccess === 1 ? "text-green-500" : "text-red-500"
                    } ${isSuccess !== 0 ? "" : "hidden"}`}
                >
                    {response}
                </p>
            </div>
            <div className="flex flex-row flex-wrap max-sm:flex-col gap-[1%] gap-y-3 justify-around">
                <form
                    onSubmit={handleSubmit}
                    className="form-control w-full max-w-screen-lg flex flex-col gap-6"
                >
                    <div className="flex flex-col sm:flex-row gap-6 ">
                        <div className=" w-full flex flex-col items-start ">
                            <label className="label">
                                <span className="label-text text-color-content">
                                    Your Name
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full max-w-screen-lg"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="w-full flex flex-col justify-center">
                            <label className="label">
                                <span className="label-text text-color-content">
                                    Email Address
                                </span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="input input-bordered w-full max-w-screen-lg"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-color-content">
                                Subject Message
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter subject message"
                            className="input input-bordered w-full max-w-screen-lg"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-color-content">
                                Enter Message
                            </span>
                        </label>
                        <textarea
                            placeholder="Enter your message"
                            className="textarea textarea-bordered textarea-lg w-full max-w-screen-lg"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className={`btn btn-active sm:max-w-fit ${
                            isSubmit === true ? "loading" : ""
                        }`}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
