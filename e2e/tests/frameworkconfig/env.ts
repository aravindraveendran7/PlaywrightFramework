export class Env {
  public static readonly BASE_URL = process.env.URL ?? "";
  public static readonly USER_NAME = process.env.USERNAME ?? "";
  public static readonly PASSWORD = process.env.PASSWORD ?? "";
}
