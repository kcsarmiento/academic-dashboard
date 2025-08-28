class TeacherController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Bind view events
        this.view.bindAddTeacher(this.handleAddTeacher.bind(this));
        this.view.bindEditTeacher(this.handleEditTeacher.bind(this));
        this.view.bindDeleteTeacher(this.handleDeleteTeacher.bind(this));
        this.view.bindCancelEdit(this.handleCancelEdit.bind(this));

        // Display initial teachers
        this.displayTeachers();
    }

    // Display all teachers
    displayTeachers() {
        const teachers = this.model.getTeachers();
        this.view.renderTeachers(teachers);
    }

    // Handle adding a teacher
    handleAddTeacher(teacherData) {
        if (teacherData.id) {
            // Update existing teacher
            this.model.updateTeacher(teacherData.id, {
                name: teacherData.name,
                subject: teacherData.subject,
                department: teacherData.department
            });
        } else {
            // Add new teacher
            this.model.addTeacher({
                name: teacherData.name,
                subject: teacherData.subject,
                department: teacherData.department
            });
        }
        
        this.displayTeachers();
        this.view.clearForm();
    }

    // Handle editing a teacher
    handleEditTeacher(id) {
        const teacher = this.model.getTeacherById(id);
        if (teacher) {
            this.view.fillForm(teacher);
        }
    }

    // Handle deleting a teacher
    handleDeleteTeacher(id) {
        if (confirm('Are you sure you want to delete this teacher?')) {
            this.model.deleteTeacher(id);
            this.displayTeachers();
        }
    }

    // Handle cancel edit
    handleCancelEdit() {
        this.view.clearForm();
    }
}