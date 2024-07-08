export class FetchError extends Error {
    constructor(message, status, name = "") {
      super(message);
      this.status = status;
      this.name = name;
    }
  }
  