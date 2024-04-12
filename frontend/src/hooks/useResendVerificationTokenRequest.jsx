import { useState } from 'react'

export const useResendVerificationTokenRequest = () => {
    let countdownTime = 60;

    const [isRequested, setIsRequested] = useState(false);
    const [counter, setCounter] = useState(countdownTime);


    const countDownTimer = () => {
        var countdownInterval = setInterval(() => {
            setCounter(countdownTime--);

            if (countdownTime <= 0) {
                clearInterval(countdownInterval);
            }
        }, 1000);
    }

    const resendVerificationToken = async () => {
        setIsRequested(true)

        countDownTimer();

        setTimeout(() => {
            setIsRequested(false);
        }, countdownTime * 1000);
    }

    return { counter, isRequested, resendVerificationToken }
}
