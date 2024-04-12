import PropTypes from 'prop-types';
import Certificate from '../../assets/svg/Certificate';

const CustomFileInput = ({
    placeholder,
    name,
    ...rest
}) => {
    return (
        <div className='w-full h-[70px] border border-zinc-200 rounded-xl flex items-center justify-between px-4'>
            <div className="flex items-center gap-3">
                <div className="flex items-center bg-faded_yellow p-3 rounded-lg">
                    <Certificate />
                </div>
                <p className='text-gray-400 text-sm'>{placeholder}</p>
            </div>

            <input
                accept=".pdf"
                className={name}
                name={name}
                type={"file"}
                hidden
                {...rest}
            />

            <button
                className={"rounded-lg w-24 h-8 border border-black hover:scale-105 transition-all"}
                onClick={() => document.querySelector(`.${name}`).click()}
            >
                Browse
            </button>
        </div>
    )
}

CustomFileInput.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.any,
    accept: PropTypes.string,
}

export default CustomFileInput