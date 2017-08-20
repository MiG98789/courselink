function addCourseRatings(ratings) {
    var courseTables = document.getElementsByClassName("sections");
    var courses = document.getElementsByTagName("h2");

    for (var i = 0; i < courseTables.length; i++) {
        var courseCode = courses[i].innerHTML.slice(0,10).replace(/\s/g, '');
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

        console.log("Rating " + courseCode);
        courseTables[i].insertAdjacentHTML("beforebegin", div);
    }
}

function addCSS() {
    var css = [
        "#ratingTable {",
        "text-align: center;",
        //"margin: 0 auto;",
        "}"
    ].join('');

    var style = document.createElement("style");
    style.setAttribute("type", "text/css");
    style.appendChild(document.createTextNode(css));

    document.head.appendChild(style);
}

if (document.readyState === "complete") {
    addCSS();
    
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
