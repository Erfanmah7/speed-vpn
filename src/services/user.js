import api from "../config/api";

//گرفتن مشخصات کاربر از جمله موجودی کیف پول و نقش برای دادن دسترسی
const getProfile = () => api.get("user/whoami").then((res) => res || false);

//گرفتن دیتای کالاها
// const getData = () => api.get("endpoint");

//گرفتن دیتای استانها
// const getCity = () => api.get("endpoint");

//ارسال درخواست کالا
// const addReg = (data) => api.post("endpoint", data);

export { getProfile };
