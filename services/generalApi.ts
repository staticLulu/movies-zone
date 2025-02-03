import { BaseHttp } from "./baseHttp";

interface RoleParams {
  [key: string]: string | number | boolean; // Adjust this type as needed for the params structure
}

class GeneralApi {
  protected baseHttp: BaseHttp;

  constructor() {
    this.baseHttp = new BaseHttp();
  }

  getImageUrl(id?: string): string | undefined {
    if (!id) return undefined;
    return this.baseHttp.baseUrl + "/files/" + id;
  }

  async getRoles(token: string, params: RoleParams): Promise<any> {
    return this.baseHttp.getRequest<any>("/roles", params, "get", token);
  }
}

export const generalApi = new GeneralApi();
