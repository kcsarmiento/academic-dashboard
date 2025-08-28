class StudentModel {
    constructor() {
        // Load students from localStorage or use default
        this.students = JSON.parse(localStorage.getItem('students')) || [
            { id: 1, name: "John Doe", age: 20, grade: "A" },
            { id: 2, name: "Jane Smith", age: 19, grade: "B+" },
            { id: 3, name: "Mike Johnson", age: 21, grade: "A-" }
        ];

        this.nextId = this.students.length ? Math.max(...this.students.map(s => s.id)) + 1 : 1;
    }

    saveToStorage() {
        localStorage.setItem('students', JSON.stringify(this.students));
    }

    getStudents() {
        return [...this.students];
    }

    getStudentById(id) {
        return this.students.find(student => student.id === parseInt(id));
    }

    addStudent(studentData) {
        const newStudent = {
            id: this.nextId++,
            name: studentData.name,
            age: parseInt(studentData.age),
            grade: studentData.grade
        };
        this.students.push(newStudent);
        this.saveToStorage();
        return newStudent;
    }

    updateStudent(id, studentData) {
        const index = this.students.findIndex(student => student.id === parseInt(id));
        if (index !== -1) {
            this.students[index] = { ...this.students[index], ...studentData };
            this.saveToStorage();
            return this.students[index];
        }
        return null;
    }

    deleteStudent(id) {
        const index = this.students.findIndex(student => student.id === parseInt(id));
        if (index !== -1) {
            const removed = this.students.splice(index, 1)[0];
            this.saveToStorage();
            return removed;
        }
        return null;
    }
}
