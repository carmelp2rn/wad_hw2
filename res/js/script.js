$(function () {
    var user = new User("Will", "Smith", "11/11/1970", "Computer Science", 0);
    var courses = [
        new Course("Web Application Development", 2, 85),
        new Course("Programming", 2, 90),
        new Course("Mathematics", 3, 75),
        new Course("Multimedia", 3, 60),
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
	
	$("#save-course").click(function (event) {
        var course_name = $('input[placeholder="Course title"]').val();
        var semester = $('input[placeholder="Semester"]').val();
        var grade = $('input[placeholder="Grade"]').val();
        courses.push(new Course(course_name, semester, +grade));
        $("#courses").find("tr:gt(0)").remove();
        init();
        $('#add-course .input').val('');
        $('#add-course').hide();
		
		
    });
	
	$("#cancel-course").click(function () {
        $("#add-course").toggle();
		$("#title, #semester, #grade").val("")
		
		
    });
	
function findGPA(arr){
	let gradesTotal=0;
	for (let i = 0; i < arr.length; i++) {
		if(arr[i].grade>90){gradesTotal+=4}
		else if(arr[i].grade>80){gradesTotal+=3}
		else if(arr[i].grade>70){gradesTotal+=2}
		else if(arr[i].grade>60){gradesTotal+=1}
		else if(arr[i].grade>50){gradesTotal+=0.5}
		else{gradesTotal+=0}
	}
	return Math.round((gradesTotal/arr.length) * 100) / 100;
}



/* function addNewCourse(){

        let tr = $("<tr></tr>");
        let nr = $("<td></td>");
        let title = $("<td></td>");
        let semester = $("<td></td>");
        let grade = $("<td></td>");
        let id = parseInt($("#courses tbody tr:last td:first").text()) + 1;
        nr.text(id);
        title.text(courses[courses.length-1].title);
        semester.text(courses[courses.length-1].semester);
        grade.text(courses[courses.length-1].grade);
        tr.append(nr, title, semester, grade);
        $("#courses tr:last").after(tr);
}
 */

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

        nr.text(i+1);
        title.text(courses[i].title);
        semester.text(courses[i].semester);
        grade.text(courses[i].grade);

        tr.append(nr,title,semester,grade);

        $('#courses tr:last').after(tr);
    }
	
	user.gpa=findGPA(courses)
	$('#gpa strong').text(user.gpa)
}

});

