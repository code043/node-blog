import crypto from "crypto";
import bcrypt from "bcrypt";

export default class Password {
  constructor(readonly value: string, readonly salt: number) {
    if (!this.isValid()) {
      throw new Error("Invalid password");
    }
  }

  createHash(password: string, salt?: number) {
    const generatedSalt = salt || crypto.randomBytes(20).toString("hex");
    return bcrypt.hashSync(password, generatedSalt);
  }
  isValid() {
    const minLength = 3;
    return this.value.length >= minLength;
  }

  compare(plainPassword: string) {
    return bcrypt.compareSync(plainPassword, this.value);
  }

  getValue() {
    return this.value;
  }
}
