import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Button from "../components/Button";

const ContactInfoItem = ({ title, children }) => (
    <div className="flex flex-col gap-2">
        <div className="text-xl font-bold">{title}</div>
        {children}
    </div>
);

const ContactFormField = ({ label, type, name, placeholder }) => (
    <>
        <label htmlFor={name} className="sr-only">{label}</label>
        <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            className="border border-[#e87726] rounded-md py-3 px-3 w-full placeholder:text-[#e87726] placeholder:text-sm"
        />
    </>
);

const Contact = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <section className="container">
                <div className="flex justify-center py-14 items-center gap-12 flex-col sm:flex-row">
                    <div className="w-full grid gap-8">
                        
                        <ContactInfoItem title="Head Office">
                            <address>34 N Franklin Ave STE 687 Unit 2105, Pinedale, WY - 82941, USA</address>
                        </ContactInfoItem>
                        <ContactInfoItem title="Contact Details :">
                            <div className="flex items-center gap-1">
                                <FaPhoneAlt color="#60a5fa" />
                                +1 409 404 0980
                            </div>
                            <div className="flex items-center gap-1">
                                <IoMdMail color="#fde047" />
                                dispatch.ezone@gmail.com
                            </div>
                        </ContactInfoItem>
                        
                    </div>
                    <div className="w-full">
                        <div className="flex flex-col gap-8">
                            <div>
                                <div className="p-2 font-bold text-2xl">
                                    Get In Touch With Us
                                </div>
                                <div>
                                    To better understand how we can help you grow your business.
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <ContactFormField label="Name" type="text" name="name" placeholder="Name*" />
                                <ContactFormField label="Email" type="text" name="email" placeholder="Email*" />
                                <ContactFormField label="Phone" type="text" name="phone" placeholder="Phone*" />
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className="h-full border border-[#e87726] rounded-md py-3 px-3 w-full placeholder:text-[#e87726] placeholder:text-sm"
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <Button text='send message' width={true} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
