import crypto from "crypto";
import bcrypt from "bcrypt";

export default class Password {
  constructor(private value: string) {
    if (!this.isValid()) {
      throw new Error("Invalid password");
    }
  }

  createHash(salt: number): Password {
    const generatedSalt = salt || crypto.randomBytes(20).toString("hex");
    this.setValue(bcrypt.hashSync(this.value, generatedSalt));
    return this;
  }
  isValid() {
    const minLength = 3;
    return this.value.length >= minLength;
  }

  compare(plainPassword: string) {
    return bcrypt.compareSync(plainPassword, this.value);
  }
  setValue(hash: string) {
    this.value = hash;
  }
  getValue() {
    return this.value;
  }
}
