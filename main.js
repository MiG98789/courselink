function addCourseRatings(ratings) {
    var courseTables = document.getElementsByClassName("sections");

    for (var i = 0; i < courseTables.length; i++) {
        // var rating = document.createElement("div");
        // rating.setAttribute("class", "course rating");
        var div = [
        "<div class='rating'><table id='ratingTable'><tr id='ratingTableHeader'>",
        "<td>Content</td><td>Teaching</td><td>Grading</td><td>Workload</td>",
        "</tr><tr id='ratingRow'>",
        "<td>", ratings[0].content, "</td>",
        "<td>", ratings[0].teaching, "</td>",
        "<td>", ratings[0].grading, "</td>",
        "<td>", ratings[0].workload, "</td>",
        "</tr></table></div>"
        ].join('');

        console.log("Rating course " + i);
        courseTables[i].insertAdjacentHTML("beforebegin", div);
    }
}

if (document.readyState === "complete") {
    var test = [
    {
        "content":"A",
        "teaching":"A",
        "grading":"A",
        "workload":"A"
    }
    ];
    addCourseRatings(test);
}
