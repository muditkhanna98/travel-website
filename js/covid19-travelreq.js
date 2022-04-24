'use strict';

// the event handler for the click event of each h2 element
  const toggle = (evt) => {
  const h2Element = evt.currentTarget; // get the clicked h2 element
  const divElement = h2Element.nextElementSibling; // get h2's sibling

  h2Element.classList.toggle('minus');
  divElement.classList.toggle('open');

  evt.preventDefault(); // cancel default action of h2 tag's <a> tag
 };

  document.addEventListener('DOMContentLoaded', () => {
  // get the h2 tags
  const h2Elements = faqs.querySelectorAll('#faqs h2');

  // attach event handler for each h2 tag
  for (let h2Element of h2Elements) {
    h2Element.addEventListener('click', toggle);
  }
  // set focus on first h2 tag's <a> tag
  h2Elements[0].firstChild.focus();
 });

 "use strict";
 $(document).ready( () => {

    // handle click on Join List button
    $("#submit_form").click( () => {
        const email1 = $("#email_1").val();
        let isValid = true;

          // validate the email address
        if (email1 === "Your email address gets you access." || email1 === "") { 
            $("#email_1").next(1).text("This field is required.");
            isValid = false;
        } else {
            $("#email_1").next(1).text("");
        } 

        // submit the form if all entries are valid
        if (isValid) {
            $("#email_form").submit();
        }
    });
    $("#email_1").focus();
  });