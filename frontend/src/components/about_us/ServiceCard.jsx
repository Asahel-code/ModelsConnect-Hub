import PropTypes from "prop-types";

const ServiceCard = ({ icon, title }) => {
    return (
        <div className='rounded-md shadow-lg w-full'>
            <div className='ml-1 h-4 rounded-full w-1/4' />
            <div className='px-8 pt-12 pb-6'>
                <div className='w-20 h-20 rounded-full bg-primary_color flex justify-center items-center'>
                    {icon}
                </div>
                <div className="pt-5">
                    <p className="font-bold text-lg">{title}</p>
                </div>
            </div>
        </div>
    )
}

ServiceCard.propTypes = {
    icon: PropTypes.node,
    title: PropTypes.string
}


export default ServiceCard