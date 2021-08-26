enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

const person = {
    // const person: {
    //     name: string;
    //     age: number;
    //     hobbies: any[];
    //     role: [number, string];
    // } = {
    name: "Oleg",
    age: 27,
    hobbies: ["sports", "cooking", 6],
    roleTuple: [2, "author"], //Tuples are a sort of list but with a limited set of items
    role: Role.ADMIN, //Tuples are a sort of list but with a limited set of items
};

person.roleTuple.push("admin");
// person.role[1] = 10;

console.log(person.name);
if (person.role === Role.AUTHOR) {
    console.log("is read only");
}
