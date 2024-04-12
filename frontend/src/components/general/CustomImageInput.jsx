import PropTypes from 'prop-types';
import { MdCloudUpload } from "react-icons/md";

const CustomImageInput = ({
    placeholder,
    className,
    image,
    name,
    ...rest
}) => {
    return (
        <div
            className={`h-40 w-60 flex items-center justify-center bg-gray-100 cursor-pointer rounded-lg ${className}`}
            onClick={() => document.querySelector(`.${name}`).click()}
        >
            {image ? (
                <div className="h-44 p-5">
                    <img
                        src={URL.createObjectURL(image)}
                        alt=""
                        className="h-full w-full rounded-lg"
                    />
                </div>
            ) : (
                <div className='text-center px-8'>
                    <div className='flex justify-center items-center mb-3'>
                        <MdCloudUpload className='text-3xl' />
                    </div>
                    <p className='text-sm'>{placeholder}</p>
                </div>
            )}
            <input
                accept={"image/*"}
                className={name}
                name={name}
                type={"file"}
                hidden
                {...rest}
            />
        </div>
    )
}

CustomImageInput.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.any,
    className: PropTypes.string,
}

export default CustomImageInput