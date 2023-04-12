export class Util {
  static generateOtp(): number {
    return Math.floor(10000 + Math.random() * 900000);
  }

  static response(success: boolean, message: string, data: any) {
    return { success, message, data };
  }
}
