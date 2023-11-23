interface Options {
  method: string;
  // TODO: 이거 수정하기
  headers?: object;
  body?: string | FormData;
}

export default class HttpClient {
  constructor(private baseURL: string) {}

  async fetch(url: string, options: Options) {
    const response = await fetch(`${this.baseURL}${url}`, {
      ...options,
      credentials: 'include',
      headers: {
        // 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `${process.env.REACT_APP_BASE_URL}`,
        ...options.headers,
      },
    });

    let data;
    try {
      data = await response.json();
    } catch (error) {
      // console.error(error); // SyntaxError: Unexpected end of JSON input at HttpClient.fetch
    }

    if (response.status < 200 || response.status > 299) {
      const message =
        data && data.message ? data.message : 'Something went wrong';
      throw new Error(message);
    }

    // console.log(data);
    return data;
  }
}
