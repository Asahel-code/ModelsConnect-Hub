const convertDateTimeFormart = require("./timeFormat");


const verifyAccountTemplate = (otp) => {
    return `
    Verify your account
    Your OTP is: ${otp} 
    Expires in: 1 hour 
    `;
};

const fogortPasswordTemplate = (otp) => {
    return `
    Your reset password is: ${otp}
    Expires in: 1 hour 
    `;
};

const modelBookingNotificationTemplate = (dates) => {
    return `
    Congrat, you got a gig,
    From: ${convertDateTimeFormart(dates.startDate)} to: ${convertDateTimeFormart(dates.endDate)}.
    Login to check the requirement and location 
    `;
}



module.exports = {
    verifyAccountTemplate,
    fogortPasswordTemplate,
    modelBookingNotificationTemplate
}