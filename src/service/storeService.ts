import HttpClient from '../network/http';

export default class StoreService {
  constructor(private http: HttpClient) {}

  async getStores() {
    return this.http.fetch(`/stores`, {
      method: 'GET',
    });
  }

  async getStore(id: string) {
    return this.http.fetch(`/stores/${id}`, {
      method: 'GET',
    });
  }

  // 업장 정보 등록
  async addStore(name: string, address: string, tel: string) {
    return this.http.fetch('/stores', {
      method: 'POST',
      body: JSON.stringify({
        name,
        address,
        tel,
      }),
    });
  }

  // 업장 정보 업데이트
  async updateStore(
    storeId: string,
    name: string,
    address: string,
    tel: string
  ) {
    return this.http.fetch(`/stores/${storeId}`, {
      method: 'PUT',
      body: JSON.stringify({
        name,
        address,
        tel,
      }),
    });
  }

  // 업장 정보 삭제
  async deleteStore(storeId: string) {
    return this.http.fetch(`/stores/${storeId}`, {
      method: 'DELETE',
    });
  }

  // 메뉴 정보 등록
  async addMenu(name: string, price: number, image?: File) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price.toString());
    if (image) {
      formData.append('image', image);
    }
    return this.http.fetch('/stores/munus', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });
  }
  // 메뉴 정보 업데이트
  async updateMenu(menuId: string, name: string, price: number, image?: File) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price.toString());
    if (image) {
      formData.append('image', image);
    }
    return this.http.fetch(`/stores/munus/${menuId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });
  }

  // 메뉴 정보 삭제
  async deleteMenu(menuId: string) {
    return this.http.fetch(`/stores/munus/${menuId}`, {
      method: 'DELETE',
    });
  }

  // 주문 확인
  async getOrders() {
    return this.http.fetch(`/stores/orders`, {
      method: 'GET',
    });
  }
}
