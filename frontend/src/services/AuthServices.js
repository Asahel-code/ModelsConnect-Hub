import AxiosUtility, { setAuthToken } from "./AxiosServices";

const login = async (data) => {
  const res = await AxiosUtility.post("/auth/", data);

  return res.data;
}

const registerClient = async (data) => {
  const res = await AxiosUtility.post("/register/client", data);

  return res.data;
}

const registerModel = async (data) => {
  const res = await AxiosUtility.post("/register/model", data);

  return res.data;
}

const registerStaff = async (data) => {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.post("/register/staff", data);

  return res.data;
}

const verifyAccount = async (data) => {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.post("/auth/verify_account", data);

  return res.data;
}

const resendVerificationToken = async () => {
  setAuthToken(AxiosUtility);
  const res = await AxiosUtility.get("/auth/resend_verification_token");

  return res.data;
}

const requestPasswordReset = async (data) => {
  const res = await AxiosUtility.post("/auth/password_reset_request", data);

  return res.data;
}

const resetPassword = async (data) => {
  const res = await AxiosUtility.post("/auth/reset_password", data);

  return res.data;
}

const AuthServices = {
  login,
  registerClient,
  registerModel,
  registerStaff,
  requestPasswordReset,
  resetPassword,
  verifyAccount,
  resendVerificationToken
};

export default AuthServices;