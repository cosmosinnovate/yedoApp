export function GenerateOtp(): number {
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return Number(randomNum.toString().padStart(6, '0'));
}
