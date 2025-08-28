class SubjectView {
    constructor() {
        this.form = document.getElementById('subjectForm');
        this.table = document.getElementById('subjectTable');
        this.nameInput = document.getElementById('subjectName');
        this.codeInput = document.getElementById('subjectCode');
        this.creditsInput = document.getElementById('subjectCredits');
        this.idInput = document.getElementById('subjectId');
        this.cancelBtn = document.getElementById('cancelSubjectBtn');
    }

    // Bind form submit event
    bindAddSubject(handler) {
        this.form.addEventListener('submit', event => {
            event.preventDefault();
            
            const subjectData = {
                id: this.idInput.value,
                name: this.nameInput.value,
                code: this.codeInput.value,
                credits: this.creditsInput.value
            };
            
            handler(subjectData);
        });
    }

    // Bind edit subject event
    bindEditSubject(handler) {
        this.editHandler = handler;
    }

    // Bind delete subject event
    bindDeleteSubject(handler) {
        this.deleteHandler = handler;
    }

    // Bind cancel edit event
    bindCancelEdit(handler) {
        this.cancelBtn.addEventListener('click', handler);
    }

    // Render subjects in table
    renderSubjects(subjects) {
        const tbody = this.table.querySelector('tbody');
        tbody.innerHTML = '';

        subjects.forEach(subject => {
            const row = tbody.insertRow();
            row.innerHTML = `
                <td>${subject.id}</td>
                <td>${subject.name}</td>
                <td>${subject.code}</td>
                <td>${subject.credits}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="subjectController.handleEditSubject(${subject.id})">Edit</button>
                    <button class="action-btn delete-btn" onclick="subjectController.handleDeleteSubject(${subject.id})">Delete</button>
                </td>
            `;
        });
    }

    // Fill form with subject data for editing
    fillForm(subject) {
        this.idInput.value = subject.id;
        this.nameInput.value = subject.name;
        this.codeInput.value = subject.code;
        this.creditsInput.value = subject.credits;
    }

    // Clear form
    clearForm() {
        this.form.reset();
        this.idInput.value = '';
    }
}