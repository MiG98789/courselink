if (document.readyState === "complete") {
    var courses = document.getElementsByTagName("h2");

    console.log("Generating URLs");
    for (var i = 0; i < courses.length; i++) {
        var courseCode = courses[i].innerHTML.slice(0,10).replace(/\s/g, '');

        var url = "https://ust.space/review/" + courseCode;
        console.log(url);

        courses[i].innerHTML +=  " <a class='rating up down' target='_blank' href=" + url + ">Rating</a>";
    }
}