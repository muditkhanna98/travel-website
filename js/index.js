// populating country blocks for the index page

$(document).ready(function () {
    $.getJSON('/../json/index-page.json', function (data) {
        $.each(data.countries, function () {

            let newCountry = $("body").find(".country-wrapper-hidden").clone();

            newCountry.find(".country-image").append('<a href="' + this.href + '"/>');
            newCountry.find(".country-image a").append('<img src="' + this.image + '" alt="' + this.name + '" />');
            newCountry.find(".country-name").append(this.countryName);
            $.each(this.countryMenu, function () {
                newCountry.find(".add-links ul").append('<li><a href=' + this.link + '>' + this.name + '</a></li>');
            });
            $.each(this.countryInfo, function () {
                newCountry.find(".country-info").append('<p>' + this + '</p>');
            });

            $(newCountry).appendTo(".main-content").css("display", "block").addClass("country-wrapper").removeClass("country-wrapper-hidden");

        });
    });
});