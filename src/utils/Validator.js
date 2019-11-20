/**
 * 判断是否为正整数
 * @param number
 * @return {boolean}
 */
export function PositiveIntegerValidator(number) {
  const regex = /^[1-9]\d*$/;
  return regex.test(number);
}

/**
 * URL的合法性
 * @param url 待检查的URL
 * @returns {boolean} true=合法，false=不合法
 */
export function URLValidator(url) {
  const regex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/+($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return regex.test(url);
}

/**
 * 判断字符串是否是小写字母
 * @param str 待检查的字符串
 * @returns {boolean} true=是小写字母，false=不是
 */
export function LowerCaseValidator(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/**
 * 判断字符串是否是大写字母
 * @param str 待检查的字符串
 * @returns {boolean} true=是大写字母，false=不是
 */
export function UpperCaseValidator(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/**
 * 判断字符串是否是大小写字母
 * @param str 待检查的字符串
 * @returns {boolean} true=是大小字母，false=不是
 */
export function AlphabetsValidator(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/**
 * 1.判断字符串是否为数字
 * 2.判断数字是否为两位以内的小数
 * @param number
 * @return {boolean}
 */
export function NumberValidator(number) {
  const re = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
  return re.test(number);
}

/**
 * 匹配正整数、小数点后两位小数的正数
 * @param number
 * @returns {boolean}
 */
export function amountValidator(number) {
  const amountRegex = /^[+]?(\d+)$|^[+]?(\d+\.\d{0,2})$/;
  return amountRegex.test(number);
}
