import { AbstractControl } from '@angular/forms';
import { Renderer2 } from '@angular/core';
import { environment } from '../../environments/environment';

export function getBaseLocation() {
  const paths: string[] = location.pathname.split('/').splice(1, 1);
  const basePath: string = (paths && paths[0]) || 'my-account'; // Default: my-account
  return '/' + basePath;
}

export function isEmptyString(str) {
  if (!str) {
    return true;
  }
  return str.replace(/\s/g, '') === '' ? true : false;
}

export function isEmail(str) {
  // tslint:disable-next-line:max-line-length
  const regex: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(str);
}

export function isPhoneNumber(str) {
  if (str.startsWith('84')) {
    str = str.replace(/84/, '0');
  }
  if (str.startsWith('+84')) {
    str = str.replace(/\+84/, '0');
  }
  if (str.substring(1, 0) === '0') {
    // const regex: RegExp = /(09|01[2|6|8|9])+([0-9]{8})\b/g;
    const regex: RegExp = /^([0-9]{10,11})$/g;
    if (!regex.test(str)) {
      return false;
    }
    return true;
  }
  return false;
}

export function isPhoneNumberAllow9Numbers(str) {
  if (str.startsWith('84')) {
    str = str.replace(/84/, '0');
  }
  if (str.startsWith('+84')) {
    str = str.replace(/\+84/, '0');
  }
  if (str.substring(1, 0) === '0') {
    // const regex: RegExp = /(09|01[2|6|8|9])+([0-9]{8})\b/g;
    const regex: RegExp = /^([0-9]{9,11})$/g;
    if (!regex.test(str)) {
      return false;
    }
    return true;
  }
  return false;
}

export function toCamelCase(str: string = '') {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

export class PasswordValidation {
  static MatchPassword(AC: AbstractControl) {
    const password = AC.get('newPassword').value; // to get value in input tag
    const confirmPassword = AC.get('rePassword').value; // to get value in input tag
    if (password !== confirmPassword) {
      AC.get('rePassword').setErrors({ MatchPassword: true });
    } else {
      return null;
    }
  }
}

export function convertToUnsignString(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');

  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  str = str.replace(/Đ/g, 'D');
  return str;
}

export function convertToSeachString(str) {
  str = str.toLowerCase();
  str = convertToUnsignString(str);
  str = str.replace(/ /g, '');
  return str;
 }

export function containsUnicode(str) {
  if (!str) {
    return false;
  }
  for (let i = 0, n = str.length; i < n; i++) {
    if (str.charCodeAt(i) > 255) { return true; }
  }
  return false;
}


export function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
export function dateObjectToString({ day, month, year }) {
  if (!day || !month || !year) {
    return '';
  }
  const d = day < 10 ? '0' + day : day;
  const m = month < 10 ? '0' + month : month;
  return d + '-' + m + '-' + year;
}

export function convertMinMaxWhenSend(input) { // handle cho currencyMask khi không set (Gửi: rỗng =>  -1, nhận: -1 => rỗng)
  return input === null || input === undefined ? -1 : input;
}

export function convertMinMaxWhenReceive(input) { // handle cho currencyMask khi không set (Gửi: rỗng =>  -1, nhận: -1 => rỗng)
  return input === -1 || input === undefined ? null : input;
}

export function convertAmountWhenSend(input) { // handle cho currencyMask khi không set (Gửi: rỗng =>  0, nhận: 0 => rỗng)
  return input === null || input === undefined ? 0 : input;
}

export function convertAmountWhenReceive(input) { // handle cho currencyMask khi không set (Gửi: rỗng =>  0, nhận: 0 => rỗng)
  return input === 0 || input === undefined ? null : input;
}

export function isContainSpecialCharacter(str) {
  const regex: RegExp = /\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\""|\;|\:/g;
  return regex.test(str);
}
