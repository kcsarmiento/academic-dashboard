class TeacherModel {
    constructor() {
        // Load teachers from localStorage or start empty
        this.teachers = JSON.parse(localStorage.getItem('teachers')) || [
            { id: 1, name: "Mr. Smith", subject: "Math", department: "Science" },
            { id: 2, name: "Mrs. Johnson", subject: "English", department: "Arts" }
        ];
        this.nextId = this.teachers.length ? Math.max(...this.teachers.map(t => t.id)) + 1 : 1;
    }

    saveToStorage() {
        localStorage.setItem('teachers', JSON.stringify(this.teachers));
    }

    getTeachers() {
        return [...this.teachers];
    }

    getTeacherById(id) {
        return this.teachers.find(t => t.id === parseInt(id));
    }

    addTeacher(teacherData) {
        const newTeacher = {
            id: this.nextId++,
            name: teacherData.name,
            subject: teacherData.subject,
            department: teacherData.department
        };
        this.teachers.push(newTeacher);
        this.saveToStorage();
        return newTeacher;
    }

    updateTeacher(id, teacherData) {
        const index = this.teachers.findIndex(t => t.id === parseInt(id));
        if (index !== -1) {
            this.teachers[index] = { ...this.teachers[index], ...teacherData };
            this.saveToStorage();
            return this.teachers[index];
        }
        return null;
    }

    deleteTeacher(id) {
        const index = this.teachers.findIndex(t => t.id === parseInt(id));
        if (index !== -1) {
            const removed = this.teachers.splice(index, 1)[0];
            this.saveToStorage();
            return removed;
        }
        return null;
    }
}
