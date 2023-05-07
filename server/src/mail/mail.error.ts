export class EmailBounceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'EmailBounceError';
  }
}
