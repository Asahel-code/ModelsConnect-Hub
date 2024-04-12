import PropTypes from 'prop-types';
import { Steps } from 'antd';

const Stepper = ({ steps, currentStep, setCurrentStep }) => {
    return (
        <Steps
            direction="vertical"
            initial={0}
            size={"small"}
            onChange={(current) => setCurrentStep(current)}
            current={currentStep}
            items={steps}
        />
    )
}

Stepper.propTypes = {
    steps: PropTypes.array,
    currentStep: PropTypes.number,
    setCurrentStep: PropTypes.func
}

export default Stepper