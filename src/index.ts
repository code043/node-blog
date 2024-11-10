import bcrypt from "bcrypt";

const registerPass = "123";
console.log("Registrando: ", registerPass);

const hashPass = bcrypt.hashSync(registerPass, 10);
console.log("Hash: ", hashPass);

const loginPass = "123";
console.log("Logando: ", loginPass);
console.log("Hash: ", hashPass);

console.log(
  bcrypt.compareSync(loginPass, hashPass)
    ? "Senha correta!"
    : "Senha incorreta!"
);

console.log("Running... ", new Date());
