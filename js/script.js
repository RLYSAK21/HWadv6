const students = [{
    name: "Tanya", course: 3, subjects: {
        math: [4, 4, 3, 4], algorithms: [3, 3, 3, 4, 4, 4], data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor", course: 4, subjects: {
        physics: [5, 5, 5, 3], economics: [2, 3, 3, 3, 3, 5], geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton", course: 2, subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5], english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

// TASK 1
function convertKeyToTrueForm(key) {
    const removedSlash = key.replace("_", " ");
    return removedSlash[0].toUpperCase() + removedSlash.slice(1).toLowerCase();
}

function getSubjects(students) {
    return students.map((student) =>
        Object.keys(student.subjects).map((subject) =>
            convertKeyToTrueForm(subject)
        )
    );
};
console.log(getSubjects(students));
// TASK 2
function getAverageMark(students) {
    let result = Object.values(students.subjects).reduce((a, b) => [...a, ...b]);
    let averageMark = (result.reduce((a, b) => a + b) / result.length).toFixed(2);
    return averageMark
}
console.log(getAverageMark(students[0]));
// TASK 3
const studentInfo = students.map((student) => {
    return {
        course: student.course,
        name: student.name,
        highestGrade: getAverageMark(student)
    };
});
console.log(studentInfo[0]);
// TASK 4
function namesInCorrectOrder(students) {
    return students.map((student) => student.name).sort();
};
console.log(namesInCorrectOrder(students));
// TASK 5
const highestGrades = students.map((student) => {
    return {
        name: student.name,
        highestGrade: getAverageMark(student)
    };
});

const bestStudent = highestGrades.sort((a, b) => {
    return b.highestGrade - a.highestGrade;
});
console.log(bestStudent[0].name, "оцінка -", bestStudent[0].highestGrade);
// TASK 6
function checkName(name) {
    let allInfo = {};
    name = name.toLowerCase().split("");
    name.forEach((v) => (allInfo[v] = (allInfo[v]) ? ++allInfo[v] : 1));
    return allInfo
}
console.log(checkName("RomanmanrrrOOOmmm"));