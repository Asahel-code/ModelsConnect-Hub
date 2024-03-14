import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const FooterSection = () => {


    const footerAboutLinks = [
        {
            display: "Home",
            path: "/",
        },
        {
            display: "About us",
            path: "/about",
        },
        {
            display: "Contact us",
            path: "/contact",
        },
    ];


    let datenow = new Date();


    return (
        <div className="bg-secondary_color border-t-[1px]">
            <div className="pt-5 px-4 pb-8 md:px-10 md:pt-8 ">
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 sm:gap-10">
                        <div>
                            <div className="mb-4">
                                <Link to="/">
                                    <h2 className="text-primary_color text-xl font-bold">ModelsConnect Hub.</h2>
                                </Link>
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="flex space-x-6  text-gray-200">
                                    <div className="hover:text-white cusor-pointer">
                                        <Link to="https://www.facebook.com" target="_blank">
                                            <BsFacebook />
                                        </Link>
                                    </div>

                                    <div className="hover:text-white cursor-pointer">
                                        <Link to="https://www.instagram.com" target="_blank">
                                            <BsInstagram />
                                        </Link>
                                    </div>

                                    <div className="hover:text-white cursor-pointer">
                                        <Link to="https://www.twitter.com" target="_blank">
                                            <BsTwitter />
                                        </Link>
                                    </div>
                                </div>
                                <Text className="text-gray-200" fontSize={"sm"}>&copy; {datenow.getFullYear()} ModelsConnect Hub.</Text>
                            </div>
                        </div>

                        <div>
                            <div className="text-primary_color font-bold text-lg capitalize mb-3">Links</div>
                            <div className="flex flex-col gap-2">
                                {footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link className="text-gray-200 hover:text-white text-sm hover:font-medium" to={item.path}>{item.display}</Link>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="text-primary_color font-bold text-lg capitalize mb-3">Contact us</div>
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-2 text-gray-200">
                                    <h6 className="font-semibold">Address#</h6>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm">Mountain Mall, Thika road</p>
                                    </div>

                                </div>
                                <div className="flex gap-2 text-gray-200">
                                    <h6 className="font-semibold">Mobile#</h6>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm">+2547 73 707 710 <span className="font-bold text-md">/</span> +2547 27 001 100</p>
                                    </div>
                                </div>


                                <div className="flex gap-2 text-gray-200">
                                    <h6 className="mb-2 font-semibold">Email#</h6>
                                    <Link className="text-sm" to="mailto:support@modelsconnecthub.co.ke">support@modelsconnecthub.co.ke</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FooterSection