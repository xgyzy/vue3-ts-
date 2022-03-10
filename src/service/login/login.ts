import HyRequest from '../index'
import { IAccount } from './type'
enum LoginApi {
  AccountLogin = '/login'
}
export function accountLoginRequest(account: IAccount) {
  return HyRequest.post({
    url: LoginApi.AccountLogin
  })
}
