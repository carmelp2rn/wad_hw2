$(function () {
    var user = new User("Will", "Smith", 11/11/1970, "Computer Science", 2.80);
    var course = new Course(["Web Application Development", "Programming", "Mathematics", "Multimedia" ], [4, 3, 2, 1],
        [85, 90, 75, 60]);

    //Showing courses page
    $("#courses-button").click(function() {
        $("#profile").hide();
        $("#courses-container").show()
        $(this).removeClass('pill').addClass('pill active')
        $('#profile-button').removeClass('pill active').addClass('pill');

    });
    //Showing profile page
    $("#profile-button").click(function () {
        $("#courses-container").hide();
        $("#profile").show()
        $(this).removeClass('pill').addClass('pill active')
        $('#courses-button').removeClass('pill active').addClass('pill');

    });

    //Adding courses blue-button
    $("#add-course-button").click(function () {
        $("#add-course").toggle();
    });


});
