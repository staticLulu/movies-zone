import { IResponse } from "@/models/response.model";
import { BaseHttp } from "./baseHttp";

export class CrudBaseService<T> {
  protected basePath: string;
  protected baseHttp: BaseHttp;

  constructor(basePath: string) {
    this.basePath = basePath;
    this.baseHttp = new BaseHttp();
  }

  getAll(
    params?: Record<string, unknown>, 
    token?: string
  ): Promise<IResponse<T[]>> {
    return this.baseHttp.getRequest<IResponse<T[]>>(this.basePath, params, "get", token);
  }

  getOne(id: string, token?: string): Promise<IResponse<T>> {
    return this.baseHttp.getRequest<IResponse<T>>(
      `${this.basePath}/${id}`,
      undefined,
      "get",
      token
    );
  }

  post(data: Partial<T>, token?: string): Promise<IResponse<T>> {
    return this.baseHttp.postRequest<IResponse<T>>(this.basePath, data, "post", token);
  }

  put(id: string, data: Partial<T>, token?: string): Promise<IResponse<T>> {
    return this.baseHttp.postRequest<IResponse<T>>(
      `${this.basePath}/${id}`,
      data,
      "put",
      token
    );
  }

  patch(id: string, data: Partial<T>, token?: string): Promise<IResponse<T>> {
    return this.baseHttp.postRequest<IResponse<T>>(
      `${this.basePath}/${id}`,
      data,
      "patch",
      token
    );
  }

  delete(id: string, token?: string): Promise<IResponse<T>> {
    return this.baseHttp.getRequest<IResponse<T>>(
      `${this.basePath}/${id}`,
      undefined,
      "delete",
      token
    );
  }
}
