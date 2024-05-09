import PropTypes from "prop-types";
import { useState } from "react";
import { Box, Text, useToast } from "@chakra-ui/react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaCaretDown } from "react-icons/fa";
import useUserStore from "../utils/zustand/Store";
import { Link, useNavigate } from "react-router-dom";
import { toastProps } from '../utils/toastProps';

const TopNav = ({ username, avatar, toggleSideBar, links }) => {

    const toast = useToast();
    const navigate = useNavigate();

    const [showDropDown, setShowDropDown] = useState(false);
    const removeToken = useUserStore((state) => state.removeToken)

    const logout = () => {
        removeToken();
        toast({
            ...toastProps,
            title: "Success",
            description: "Logged out successfully",
            status: "success",
        });
        navigate("/");
    }

    return (
        <div className="py-2 bg-white flex justify-between">
            <button
                className={"hover:text-black p-1 rounded-md focus:outline-none"}
                onClick={() => toggleSideBar()}
            >
                <HiMiniBars3BottomLeft className="text-3xl" />
            </button>

            <div className="flex items-center gap-2">
                <button
                    className={
                        "hover:bg-zinc-100 p-2 rounded-full focus:outline-none relative"
                    }
                >
                </button>
                <Box className="relative">
                    <Box display={"flex"} gap={4} alignItems={"center"}>
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-secondary_color rounded-full flex justify-center items-center">
                                <span className="uppercase text-md  font-[1000] text-faded_yellow">{avatar}</span>
                            </div>
                            <Text className="text-md">Hi, <span className="text-primary_color font-semibold text-sm">{username}</span></Text>
                        </div>
                        <button onClick={() => (setShowDropDown((prev) => (!prev)))}>
                        <FaCaretDown className="text-xl" />
                        </button>

                    </Box>
                    {showDropDown && (
                        <Box boxShadow='sm' bg='white' textColor={"black"} className="absolute w-[120px] lg:right-2">
                            <Box>
                                {links.map((link, index) => (
                                    <Link key={index} to={link.to}>
                                        <Box className="px-4 py-2 hover:bg-gray-100 hover:text-primary_color hover:font-medium text-sm capitalize">
                                            {link.name}
                                        </Box>
                                    </Link>
                                ))}
                            </Box>
                            <Box
                                cursor={"pointer"}
                                className="px-4 py-2 hover:text-primary_color hover:bg-gray-100 text-sm border-t font-bold"
                                onClick={() => logout()}
                            >
                                logout
                            </Box>
                        </Box>
                    )}
                </Box>
            </div>
        </div>
    )
}

TopNav.propTypes = {
    toggleSideBar: PropTypes.func.isRequired,
    links: PropTypes.array.isRequired,
    username: PropTypes.string,
    avatar: PropTypes.string
}

export default TopNav;
