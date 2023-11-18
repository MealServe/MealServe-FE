import HttpClient from '../network/http';

export default class AuthService {
  constructor(private http: HttpClient) {}

  async signup(
    email: string,
    password: string,
    address: string,
    phone: string,
    isOwner: boolean
  ) {
    return await this.http.fetch('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        address,
        phone,
        isOwner,
      }),
    });
  }

  async login(email: string, password: string) {
    const data = await this.http.fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    // console.log(data);
    return data;
  }

  // async logout() {
  //   return this.http.fetch('/auth/logout', {
  //     method: 'POST',
  //   });
  // }
}
