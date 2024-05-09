import PropTypes from 'prop-types';

const Breadcrumb = ({ title, icon, subtitle }) => {
    return (
        <div className="flex items-center gap-1 text-gray-600">
            <div className="text-lg">
                {icon}
            </div>
            <div className='text-sm'>
                {"->"}
            </div>
            <div className="flex items-end">
                <p className="text-sm">
                    {title}
                </p>
                &nbsp;
                {subtitle && (<div className='text-sm'>
                    {"/"}
                </div>)}
                &nbsp;
                {subtitle && (
                    <p className="text-sm">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    )
}

Breadcrumb.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    subtitle: PropTypes.any
}

export default Breadcrumb