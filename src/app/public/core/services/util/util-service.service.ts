import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilServiceService {

  constructor() { }

  /**
   * Check if is a valid email
   * @param email | user email
   * @return | true == valid | false == invalid
   */
  onCheckEmail(email: string): boolean {
    const validateEmail =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email);
    return validateEmail;
  }

  /**
   * Check validations on current password type string
   * => 8 Characters
   * => Has uppercase
   * => Has number
   * @param password | Password to check in string
   * @return true => Password valid | false => password invalid
   */
  onCheckPassword(password: string): boolean {
    const hasUpperCase = /[A-Z]+/.test(password);
    const hasNumber = /[0-9]+/.test(password);
    const characters = password.length >= 8 ? true : false;
    return hasNumber && characters && hasUpperCase;
  }

}
