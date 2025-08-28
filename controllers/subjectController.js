class SubjectController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Bind view events
        this.view.bindAddSubject(this.handleAddSubject.bind(this));
        this.view.bindEditSubject(this.handleEditSubject.bind(this));
        this.view.bindDeleteSubject(this.handleDeleteSubject.bind(this));
        this.view.bindCancelEdit(this.handleCancelEdit.bind(this));

        // Display initial subjects
        this.displaySubjects();
    }

    // Display all subjects
    displaySubjects() {
        const subjects = this.model.getSubjects();
        this.view.renderSubjects(subjects);
    }

    // Handle adding a subject
    handleAddSubject(subjectData) {
        if (subjectData.id) {
            // Update existing subject
            this.model.updateSubject(subjectData.id, {
                name: subjectData.name,
                code: subjectData.code,
                credits: subjectData.credits
            });
        } else {
            // Add new subject
            this.model.addSubject({
                name: subjectData.name,
                code: subjectData.code,
                credits: subjectData.credits
            });
        }
        
        this.displaySubjects();
        this.view.clearForm();
    }

    // Handle editing a subject
    handleEditSubject(id) {
        const subject = this.model.getSubjectById(id);
        if (subject) {
            this.view.fillForm(subject);
        }
    }

    // Handle deleting a subject
    handleDeleteSubject(id) {
        if (confirm('Are you sure you want to delete this subject?')) {
            this.model.deleteSubject(id);
            this.displaySubjects();
        }
    }

    // Handle cancel edit
    handleCancelEdit() {
        this.view.clearForm();
    }
}