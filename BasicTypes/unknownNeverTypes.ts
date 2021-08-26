let userName: string;
let userInput: unknown;

userInput = 5;
userInput = "ac";
userInput = { name: "asdf" };
userInput = [1, 2];

if (typeof userInput === "string") {
    userName = userInput;
}

function generateError(message: string, errorCode: number): never {
    throw { message, errorCode };
}

const result = generateError("an error occured", 404);
console.log(result);

