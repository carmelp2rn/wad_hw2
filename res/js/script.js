$(function () {
    var user = new User("Will", "Smith", "11/11/1970", "Computer Science", 0);
    var courses = [
        new Course("Web Application Development", 2, 85),
        new Course("Programming", 2, 90),
        new Course("Mathematics", 3, 75),
        new Course("Multimedia", 3, 60)
    ];
    init();

    $("#courses-button").click(function() {
        $("#profile").hide();
        $("#courses-container").show()
        $(this).removeClass('pill').addClass('pill active')
        $('#profile-button').removeClass('pill active').addClass('pill');

    });

    $("#profile-button").click(function () {
        $("#courses-container").hide();
        $("#profile").show()
        $(this).removeClass('pill').addClass('pill active')
        $('#courses-button').removeClass('pill active').addClass('pill');

    });

    $("#add-course-button").click(function () {
        $("#add-course").toggle();
    });


function init() {

    $(".info #name").text(user.firstname + " " + user.lastname);
    $(".info #birthdate").text(user.birthdate);
    $(".info #faculty").text(user.faculty);
    $("#profile #gpa strong").text(user.gpa);

    for (let i = 0; i < courses.length; i++) {
        let tr = $("<tr></tr>");
        let nr = $("<td></td>");
        let title = $("<td></td>");
        let semester = $("<td></td>");
        let grade = $("<td></td>");

        let id = parseInt($("#courses tbody tr:last td:first").text()) + 1;

        nr.text(id);
        title.text(courses[i].title);
        semester.text(courses[i].semester);
        grade.text(courses[i].grade);

        tr.append(nr, title, semester, grade);

        $("#courses tr:last").after(tr);
    }
}

});

