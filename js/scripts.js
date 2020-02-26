$(document).ready(function() {
    $("#things").submit(function(event) {
        var foodsInput = $("input#foods").val();
        var moviesInput = $("input#movies").val();
        var sportsInput = $("input#sports").val();

        $(".foods").text(foodsInput);
        $(".movies").text(moviesInput);
        $(".sports").text(sportsInput);

        $(".favorites").show();

        event.preventDefault();
    });
});