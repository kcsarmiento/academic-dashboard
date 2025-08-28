class StudentController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Bind view events
        this.view.bindAddStudent(this.handleAddStudent.bind(this));
        this.view.bindEditStudent(this.handleEditStudent.bind(this));
        this.view.bindDeleteStudent(this.handleDeleteStudent.bind(this));
        this.view.bindCancelEdit(this.handleCancelEdit.bind(this));

        // Display initial students
        this.displayStudents();
    }

    // Display all students
    displayStudents() {
        const students = this.model.getStudents();
        this.view.renderStudents(students);
    }

    // Handle adding a student
    handleAddStudent(studentData) {
        if (studentData.id) {
            // Update existing student
            this.model.updateStudent(studentData.id, {
                name: studentData.name,
                age: studentData.age,
                grade: studentData.grade
            });
        } else {
            // Add new student
            this.model.addStudent({
                name: studentData.name,
                age: studentData.age,
                grade: studentData.grade
            });
        }
        
        this.displayStudents();
        this.view.clearForm();
    }

    // Handle editing a student
    handleEditStudent(id) {
        const student = this.model.getStudentById(id);
        if (student) {
            this.view.fillForm(student);
        }
    }

    // Handle deleting a student
    handleDeleteStudent(id) {
        if (confirm('Are you sure you want to delete this student?')) {
            this.model.deleteStudent(id);
            this.displayStudents();
        }
    }

    // Handle cancel edit
    handleCancelEdit() {
        this.view.clearForm();
    }
}