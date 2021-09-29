const names: Array<string | number> = [];

const promise: Promise<string> = new Promise((res, rej) => {
    setTimeout(() => {
        res("This is done");
    }, 2000);
});

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

console.log();

const mergedObj = merge({ name: "one" }, { age: 39 });
// const mergedObj1 = merge({ name: "one" }, 30);

console.log(mergedObj.name);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = `Got 1 element`;
    } else if (element.length > 1) {
        descriptionText = `Got ${element.length} element`;
    }
    return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(""));
console.log(countAndDescribe(["one", "two"]));

//keyof
function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return "Value: " + obj[key];
}
console.log(extractAndConvert({ name: "Oleg" }, "name"));

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Oleg");
textStorage.addItem("Sashs");
textStorage.removeItem("Oleg");
console.log(textStorage.getItems());




//partial built in utility type set type when all of interfaces fields are optional (Hover over courseGoal)
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description= description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}


//readonly (not allows to change properties)

const namess: Readonly<string[]> = ['Oleg', 'Sports']

// namess.push('Sasha')
// namess.pop('Sasha')