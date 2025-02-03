import axios, { AxiosInstance, AxiosResponse } from "axios";

interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

export class BaseHttp {
  baseUrl: string;
  apiClient: AxiosInstance;

  constructor() {
    this.baseUrl = process.env.API_URL + "/v1";
    this.apiClient = axios.create({ baseURL: this.baseUrl });
  }

  async postRequest<T>(
    path: string,
    data: Record<string, unknown>,
    method: "put" | "patch" | "post" = "post",
    token?: string
  ): Promise<T> {
    let res: AxiosResponse<ApiResponse<T>>;
    const headers = {
      Authorization: `Bearer ${token || ""}`,
    };

    switch (method) {
      case "put":
        res = await this.apiClient.put<ApiResponse<T>>(path, data, { headers });
        break;
      case "patch":
        res = await this.apiClient.patch<ApiResponse<T>>(path, data, { headers });
        break;
      default:
        res = await this.apiClient.post<ApiResponse<T>>(path, data, { headers });
    }

    const result = res.data;
    if (result.code === 1) {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  }

  async getRequest<T>(
    path: string,
    params?: Record<string, unknown>,
    method: "get" | "delete" = "get",
    token?: string
  ): Promise<T> {
    let res: AxiosResponse<ApiResponse<T>>;
    const option = {
      headers: {
        Authorization: `Bearer ${token || ""}`,
      },
      params,
    };

    switch (method) {
      case "delete":
        res = await this.apiClient.delete<ApiResponse<T>>(path, option);
        break;
      default:
        res = await this.apiClient.get<ApiResponse<T>>(path, option);
    }

    const result = res.data;
    if (result.code === 1) {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  }
}
