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

  createDefaultImage() {
    if (!this.image) {
      this.image =
        "https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png";
    }
  }
}
