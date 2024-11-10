export interface UserData {
  fullName: string;
  username: string;
  email: string;
  password: string;
  image?: string;
  id?: string;
}
export default class User implements UserData {
  fullName: string;
  username: string;
  email: string;
  password: string;
  image?: string | undefined;
  id?: string | undefined;
  constructor(
    fullName: string,
    username: string,
    email: string,
    password: string,
    image: string | undefined
  ) {
    this.fullName = fullName;
    this.username = username;
    this.email = email;
    this.password = password;
    this.image = image;
  }
  verifyEmail() {
    if (this.isValidEmail(this.email)) {
      throw new Error("Invalid email");
    }
  }
  verifyPassword() {
    if (this.isValidPassword(this.email)) {
      throw new Error("Invalid password");
    }
  }
  private isValidPassword(password: string): boolean {
    return password.length >= 2;
  }
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  createDefaultImage() {
    if (!this.image) {
      this.image =
        "https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png";
    }
  }
}
