let myImagesArray = ["../images/about-us-page images/beach.png","../images/about-us-page images/balloon.png","../images/about-us-page images/man-on-mountain.png","../images/about-us-page images/silhouette.png","../images/about-us-page images/surf-boarding.png","../images/about-us-page images/surf-hawaii.png","../images/about-us-page images/relax.png","../images/about-us-page images/sand.png","../images/about-us-page images/under.png","../images/about-us-page images/boat.png"];
let ImageNumber = 0;
let difference = myImagesArray.length -1;

let delay = 2000; 

setInterval('ChangeImages(1)', delay);
   
function ChangeImages(direction)
{
ImageNumber = ImageNumber + direction;

if(ImageNumber > difference)
{
  ImageNumber = 0;
}

if(ImageNumber < 0)
{
  ImageNumber = difference;
}
document.getElementById('slideshow').src = myImagesArray[ImageNumber]; 
}

"use strict";
 $(document).ready(() => {

    // process each img tag
    $("#image_rollovers img").each( (index, img) => {
        const oldURL = img.src;      // gets the src attribute
        const newURL = img.id;       // gets the id attribute

        // preload rollover image		
        const rolloverImage = new Image();
        rolloverImage.src = newURL;

        // set up event handlers for hovering over an image
        $(img).hover(   // use jQuery syntax to access hover() method
            () => img.src = newURL,  // hover over
            () => img.src = oldURL   // hover out
        ); 
    });
    
 });

 "use strict";
 $(document).ready( () => {

    // handle click on Join List button
    $("#submit_form").click( () => {
        const email1 = $("#email_1").val();
        const name2 = $("#name_2").val();
        let isValid = true;

        // validate the email address
        if (email1 === "Email Address" || email1 === "") { 
            $("#email_1").next().text("This field is required.");
            isValid = false;
        } else {
            $("#email_1").next().text("");
        } 
        
        // validate the name
        if (name2 === "Name" || name2 === "") { 
            $("#name_2").next().text("This field is required.");
            isValid = false; 
        } else {
            $("#name_2").next().text("");
        }
        
        // validate the message
        if ($("#message").val() === "") {
            $("#message").next().text("This field is required.");
            isValid = false;
        } else {
            $("#message").next().text("");
        }
        
        // submit the form if all entries are valid
        if (isValid) {
            $("#email_form").submit();
        }
    });

    // handle click on Reset Form button
    $("#clear_form").click( () => {
        // clear text boxes
        $("#email_1").val("");
        $("#name_2").val("");
        $("#message").val("");

        // reset span elements
        $("#email_1").next().text("*");
        $("#name_2").next().text("*");
        $("#message").next().text("*");
        
        $("#email_1").focus();
    });

    $("#email_1").focus();
});