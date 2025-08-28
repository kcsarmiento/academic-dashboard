class SubjectModel {
    constructor() {
        // Load subjects from localStorage or start empty
        this.subjects = JSON.parse(localStorage.getItem('subjects')) || [
            { id: 1, name: "Mathematics", code: "MATH101", credits: 3 },
            { id: 2, name: "English Literature", code: "ENG102", credits: 2 }
        ];
        this.nextId = this.subjects.length ? Math.max(...this.subjects.map(s => s.id)) + 1 : 1;
    }

    saveToStorage() {
        localStorage.setItem('subjects', JSON.stringify(this.subjects));
    }

    getSubjects() {
        return [...this.subjects];
    }

    getSubjectById(id) {
        return this.subjects.find(s => s.id === parseInt(id));
    }

    addSubject(subjectData) {
        const newSubject = {
            id: this.nextId++,
            name: subjectData.name,
            code: subjectData.code,
            credits: parseInt(subjectData.credits)
        };
        this.subjects.push(newSubject);
        this.saveToStorage();
        return newSubject;
    }

    updateSubject(id, subjectData) {
        const index = this.subjects.findIndex(s => s.id === parseInt(id));
        if (index !== -1) {
            this.subjects[index] = { ...this.subjects[index], ...subjectData, credits: parseInt(subjectData.credits) };
            this.saveToStorage();
            return this.subjects[index];
        }
        return null;
    }

    deleteSubject(id) {
        const index = this.subjects.findIndex(s => s.id === parseInt(id));
        if (index !== -1) {
            const removed = this.subjects.splice(index, 1)[0];
            this.saveToStorage();
            return removed;
        }
        return null;
    }
}
