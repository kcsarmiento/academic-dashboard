class TeacherView {
    constructor() {
        this.form = document.getElementById('teacherForm');
        this.table = document.getElementById('teacherTable');
        this.nameInput = document.getElementById('teacherName');
        this.subjectInput = document.getElementById('teacherSubject');
        this.departmentInput = document.getElementById('teacherDepartment');
        this.idInput = document.getElementById('teacherId');
        this.cancelBtn = document.getElementById('cancelTeacherBtn');
    }

    // Bind form submit event
    bindAddTeacher(handler) {
        this.form.addEventListener('submit', event => {
            event.preventDefault();
            
            const teacherData = {
                id: this.idInput.value,
                name: this.nameInput.value,
                subject: this.subjectInput.value,
                department: this.departmentInput.value
            };
            
            handler(teacherData);
        });
    }

    // Bind edit teacher event
    bindEditTeacher(handler) {
        this.editHandler = handler;
    }

    // Bind delete teacher event
    bindDeleteTeacher(handler) {
        this.deleteHandler = handler;
    }

    // Bind cancel edit event
    bindCancelEdit(handler) {
        this.cancelBtn.addEventListener('click', handler);
    }

    // Render teachers in table
    renderTeachers(teachers) {
        const tbody = this.table.querySelector('tbody');
        tbody.innerHTML = '';

        teachers.forEach(teacher => {
            const row = tbody.insertRow();
            row.innerHTML = `
                <td>${teacher.id}</td>
                <td>${teacher.name}</td>
                <td>${teacher.subject}</td>
                <td>${teacher.department}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="teacherController.handleEditTeacher(${teacher.id})">Edit</button>
                    <button class="action-btn delete-btn" onclick="teacherController.handleDeleteTeacher(${teacher.id})">Delete</button>
                </td>
            `;
        });
    }

    // Fill form with teacher data for editing
    fillForm(teacher) {
        this.idInput.value = teacher.id;
        this.nameInput.value = teacher.name;
        this.subjectInput.value = teacher.subject;
        this.departmentInput.value = teacher.department;
    }

    // Clear form
    clearForm() {
        this.form.reset();
        this.idInput.value = '';
    }
}