import PropTypes from 'prop-types';
import { Box, Center, Select, Textarea } from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import KenyaFlag from '../../assets/svg/KenyaFlag';

const CustomInput = ({
    icon,
    placeholder = "Search...",
    type = "text",
    name,
    width,
    handleEyeClick,
    isDisabled,
    ...rest
}) => {
    return (
        <Box
            display={"flex"}
            gap={"3"}
            alignItems={"center"}
            bg={"white"}
            borderWidth={"1px"}
            overflow={"hidden"}
            borderRadius={"md"}
            borderColor={"#EBEEF3"}
            px={"2"}
            fontSize={"sm"}
            width={width ? width : "full"}
        >
            {name === "phoneNumber" ? <KenyaFlag /> : icon}

            <input
                placeholder={placeholder}
                className={`px-1 border-0 outline-none focus:outline-none h-10 flex-grow text-sm`}
                type={type}
                name={name}
                disabled={isDisabled}
                {...rest}
            />
            {(name === "passwordConfirmation" || name === "password") && (
                <Center
                    className="cursor-pointer"
                    w={"10"}
                    h={"full"}
                    onClick={() => {
                        if (type === "password") {
                            handleEyeClick("text");
                        } else {
                            handleEyeClick("password");
                        }
                    }}
                >
                    {type === "password" ? (
                        <AiFillEyeInvisible className="text-2xl text-secondary_color" />
                    ) : (
                        <AiFillEye className="text-2xl text-secondary_color" />
                    )}
                </Center>
            )}
        </Box>
    )
}

export const CustomSelect = ({
    placeholder,
    name,
    width,
    children,
    ...rest
}) => {
    return (
        <Box
            display={"flex"}
            gap={"3"}
            alignItems={"center"}
            width={width ? width : "full"}
            borderWidth={"1px"}
            overflow={"hidden"}
            height={"10"}
            borderRadius={"md"}
            fontSize={"sm"}
            borderColor={"#EBEEF3"}
        >
            <Select
                variant='unstyled'
                placeholder={placeholder}
                borderWidth={0}
                width={"full"}
                bg={"white"}
                fontSize={"small"}
                my={"0"}
                mx={"2"}
                name={name}
                {...rest}
            >
                {children}
            </Select>
        </Box>
    );
}

export const CustomTextArea = ({
    placeholder,
    name,
    ...rest
}) => {
    return (
        <Textarea
            fontSize={"medium"}
            placeholder={placeholder}
            focusBorderColor={"#EBEEF3"}
            resize={'vertical'}
            size={'lg'}
            px={"3"}
            name={name}
            {...rest}
        />
    )
}

CustomTextArea.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
}

CustomSelect.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.node,
    width: PropTypes.string,
}

CustomInput.propTypes = {
    icon: PropTypes.element,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    width: PropTypes.string,
    handleEyeClick: PropTypes.func,
    isDisabled: PropTypes.bool,
}


export default CustomInput