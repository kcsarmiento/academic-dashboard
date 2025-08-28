class StudentView {
    constructor() {
        this.form = document.getElementById('studentForm');
        this.table = document.getElementById('studentTable');
        this.nameInput = document.getElementById('studentName');
        this.ageInput = document.getElementById('studentAge');
        this.gradeInput = document.getElementById('studentGrade');
        this.idInput = document.getElementById('studentId');
        this.cancelBtn = document.getElementById('cancelStudentBtn');
    }

    // Bind form submit event
    bindAddStudent(handler) {
        this.form.addEventListener('submit', event => {
            event.preventDefault();
            
            const studentData = {
                id: this.idInput.value,
                name: this.nameInput.value,
                age: this.ageInput.value,
                grade: this.gradeInput.value
            };
            
            handler(studentData);
        });
    }

    // Bind edit student event
    bindEditStudent(handler) {
        this.editHandler = handler;
    }

    // Bind delete student event
    bindDeleteStudent(handler) {
        this.deleteHandler = handler;
    }

    // Bind cancel edit event
    bindCancelEdit(handler) {
        this.cancelBtn.addEventListener('click', handler);
    }

    // Render students in table
    renderStudents(students) {
        const tbody = this.table.querySelector('tbody');
        tbody.innerHTML = '';

        students.forEach(student => {
            const row = tbody.insertRow();
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.grade}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="studentController.handleEditStudent(${student.id})">Edit</button>
                    <button class="action-btn delete-btn" onclick="studentController.handleDeleteStudent(${student.id})">Delete</button>
                </td>
            `;
        });
    }

    // Fill form with student data for editing
    fillForm(student) {
        this.idInput.value = student.id;
        this.nameInput.value = student.name;
        this.ageInput.value = student.age;
        this.gradeInput.value = student.grade;
    }

    // Clear form
    clearForm() {
        this.form.reset();
        this.idInput.value = '';
    }
}