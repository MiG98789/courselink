function addRatings(course) {
    var courses = document.getElementsByClassName("course");

    for (var i = 0; i < courses.length; i++) {
        var rating = document.createElement("div");
        rating.setAttribute("class", "rating");
        rating.innerHTML = "<div class='rating'><table id='ratingTable'><tr id='ratingLabel'><td>Content</td><td>Teaching</td><td>Grading</td><td>Workload</td></tr><tr id='ratingRow'><td>" + course.content + "</td><td>" + course.teaching + "</td><td>" + course.grading + "</td><td>" + course.workload + "</td></tr></table></div>";

        console.log("Rating course " + i);
        courses[i].appendChild(rating);
    }
}

if (document.readyState === "complete") {
    console.log("Attempting to insert");
    var test = {
        "content":"A",
        "teaching":"A",
        "grading":"A",
        "workload":"A"
    };
    addRatings(test);
}
