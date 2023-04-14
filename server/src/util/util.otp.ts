export function GenerateOtp(): number {
  return Math.floor(10000 + Math.random() * 900000);
}
