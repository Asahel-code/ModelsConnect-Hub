import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
// import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
    // const toast = useToast();
    // const navigate = useNavigate();
    const { pathname } = useLocation();

    const [openNav, setOpenNav] = useState(false);
    const [show, setShow] = useState(false);
    // const [showDropDown, setShowDropDown] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    const navbarStyling = "fixed w-full top-0 left-0 z-[99]";

    // const logout = () => {
    //     navigate("/");
    // }



    const userNavList = (
        <Box className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Link to="/" className="hover:text-primary_color hover:font-medium text-md">
                Home
            </Link>
            <Link to="/about" className="hover:text-primary_color hover:font-medium text-md">
                About us
            </Link>

            <Link to="/contact" className="hover:text-primary_color hover:font-medium text-md">
                Contact us
            </Link>
            <Box>
                {/* {user?.token
                    ? (
                        <Box
                            className="relative"
                            onMouseEnter={() => setShowDropDown(true)}
                            onMouseLeave={() => setShowDropDown(false)}
                        >
                            <Box display={"flex"} gap={0.5} alignItems={"center"} >
                                <Text className="text-md">{user?.username}</Text>
                                <RiArrowDropDownLine className="text-4xl" />
                            </Box>
                            {showDropDown && (
                                <Box boxShadow='sm' rounded='md' bg='white' className="absolute w-[180px] lg:right-2">
                                    {user?.isAdmin && (
                                        <Link to="/admin/dashboard">
                                            <Box className="px-4 py-2 hover:bg-gray-100 hover:text-primary_color hover:font-medium text-md">
                                                Admin Dashboard
                                            </Box>
                                        </Link>
                                    )}
                                    {user?.isLandLord && (
                                        <Box>
                                            <Link to="/landlord/dashboard">
                                                <Box className="px-4 py-2 hover:bg-gray-100 hover:text-primary_color hover:font-medium text-md">
                                                    Landlord Dashboard
                                                </Box>
                                            </Link>
                                            <Link to="/landlord/profile">
                                                <Box className="px-4 py-2 hover:bg-gray-100 hover:text-primary_color hover:font-medium text-md">
                                                    Profile
                                                </Box>
                                            </Link>
                                        </Box>
                                    )}

                                    {(!user?.isLandLord && !user?.isAdmin) && (
                                        <Link to="/my_booking_history">
                                            <Box className="px-4 py-2 hover:bg-gray-100 hover:text-primary_color hover:font-medium text-md">
                                                My Booking
                                            </Box>
                                        </Link>
                                    )}
                                    <Box
                                        cursor={"pointer"}
                                        className="px-4 py-2 hover:text-primary_color hover:bg-gray-100 text-md border-t-2 font-bold"
                                        onClick={() => logout()}
                                    >
                                        logout
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    ) : (
                        <Box className="flex md:gap-2 flex-col md:flex-row">
                            <Box className="p-1 font-normal">
                                <Link to="/login" className="hover:text-primary_color hover:font-medium text-md flex items-center">
                                    <span className="capitalize">login</span>
                                </Link>
                            </Box>
                            <Box className="p-1 font-normal">
                                <Link to="/register" className="hover:text-primary_color hover:font-medium text-md flex items-center">
                                    <span className="capitalize">register</span>
                                </Link>
                            </Box>
                        </Box>
                    )
                } */}
            </Box>
        </Box>
    );

    return (
        <Box className={show || pathname != "/" ? `${navbarStyling} bg-white text-black` : `${navbarStyling} bg-black text-white`}>
            <div className="mx-3 h-10 flex items-center justify-between py-8">
                {/* Logo */}
                <Link className="mr-4" to="/">
                    <h2 className="text-primary_color font-bold cursor-pointer text-xl md:text-3xl">ModelsConnect Hub.</h2>
                </Link>
                {/* Other links */}
                <div className="hidden lg:block">{userNavList}</div>
                {!openNav && (<Box
                    className="ml-auto h-6 w-6 text-inherit hover:scale-105 transition-all lg:hidden cursor-pointer"
                    onClick={() => setOpenNav(!openNav)}
                >
                    <BiMenuAltRight className="text-3xl" />
                </Box>
                )}
            </div>
            {openNav &&
                <Box
                    className="fixed top-0 right-0 w-60 h-full px-5 pt-4 bg-white text-black z-[99]"
                    style={{
                        transform: "translateX(-0%)",
                        transition: "transform 0.10s ease",
                    }}
                >
                    <button
                        className="flex items-end focus:outline-none ml-auto h-6 w-6 text-gray hover:scale-105 transition-all"
                        onClick={() => setOpenNav(!openNav)}
                    >
                        <RxCross2 className="text-3xl" />
                    </button>
                    {userNavList}
                </Box>
            }
        </Box>
    );
}

export default Header