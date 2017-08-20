function getCourseRating(course) {
    return chrome.runtime.sendMessage(course, function(response) {
        console.log("Message response: " + response);
    });
}

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

        courseTables[i].insertAdjacentHTML("beforebegin", div);
    }
}

function addToPage() {
    addCSS();

    var courses = document.getElementsByTagName("h2");
    var ratings = [];

    for (var i = 0; i < courses.length; i++) {
        var courseCode = courses[i].innerHTML.slice(0, 10).replace(/\s/g, '');
        var courseJSON = {code: courseCode};
        console.log("Getting " + courseJSON.code);
        getCourseRating(courseJSON);
    }

    var test = [
        {
            "content": "A",
            "teaching": "A",
            "grading": "A",
            "workload": "A"
        }
    ];
    addCourseRatings(test);
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
    addToPage();
}
