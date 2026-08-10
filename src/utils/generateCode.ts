const CHARACTERS =
  "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";

export function generateCode(length = 7) {
  let code = "";

  for (let i = 0; i < length; i++) {
    code += CHARACTERS[
      Math.floor(Math.random() * CHARACTERS.length)
    ];
  }

  return code;
}