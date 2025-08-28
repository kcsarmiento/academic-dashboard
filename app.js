// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Student MVC
    const studentModel = new StudentModel();
    const studentView = new StudentView();
    const studentController = new StudentController(studentModel, studentView);

    // Initialize Teacher MVC
    const teacherModel = new TeacherModel();
    const teacherView = new TeacherView();
    const teacherController = new TeacherController(teacherModel, teacherView);

    // Initialize Subject MVC
    const subjectModel = new SubjectModel();
    const subjectView = new SubjectView();
    const subjectController = new SubjectController(subjectModel, subjectView);

    // Make controllers globally available for onclick handlers
    window.studentController = studentController;
    window.teacherController = teacherController;
    window.subjectController = subjectController;

    console.log('Management System initialized successfully!');
});