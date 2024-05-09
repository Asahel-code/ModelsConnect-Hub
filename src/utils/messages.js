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

const modelBookingNotificationTemplate = (dates, description) => {
    return `
    Congrat, you got a gig,
    From: ${convertDateTimeFormart(dates.startDate)} to: ${convertDateTimeFormart(dates.endDate)}.
    Here a description of it: ${description}
    Login to check the requirement and location 
    `;
}



module.exports = {
    verifyAccountTemplate,
    fogortPasswordTemplate,
    modelBookingNotificationTemplate
}