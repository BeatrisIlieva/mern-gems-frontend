// export const EMAIL_PATTERN = /^[A-Za-z0-9]+@+[a-z]+\.[a-z]{2,4}$/;

export const EMAIL_PATTERN =
  /^[A-Za-z0-9\u4e00-\u9fff._%+-]+@[A-Za-z0-9\u4e00-\u9fff.-]+\.[A-Za-z\u4e00-\u9fff]{2,4}$/u;

export const EMAIL_ERROR_MESSAGE = {
  English: "* Please enter a valid email address",
  Chinese: "* 请输入有效的电子邮件地址",
  Bulgarian: "* Моля, въведете валиден имейл",
};

export const EMAIL_ALREADY_EXISTS_ERROR_MESSAGE = {
  English: "* This email address is already registered",
  Chinese: "* 此电子邮件地址已被注册",
  Bulgarian: "* Вече съществува потребител с този емайл",
};

export const INVALID_CREDENTIALS_ERROR_MESSAGE = {
  English:
    "* We couldn't find an account matching the email and password you entered",
  Chinese: "* 我们找不到与您输入的电子邮件和密码匹配的账户",
  Bulgarian:
    "* Не съществува потребител, регистриран с въведените имейл или парола",
};
