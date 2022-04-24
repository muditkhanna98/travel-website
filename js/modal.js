var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

//to display the modal after 2500 ms of opening the page
setTimeout(() => {
  document.getElementsByClassName("modal")[0].style.display = "block";
}, 2500);

$(document).ready(() => {
  $("#submit").click(() => {
    const mobilePattern = new RegExp(/^\d{10}$/);
    const emailPattern = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const mobile = $("#mobile").val();
    const email = $("#email").val();
    const from = $("#from").val();
    let isValid = true;

    // validate the first name
    if (firstName === "" || firstName === undefined) {
      $("#firstName").next().text("This field is required.");
      isValid = false;
    } else {
      $("#firstName").next().text("");
    }

    // validate the last name
    if (lastName === "" || lastName === undefined) {
      $("#lastName").next().text("This field is required.");
      isValid = false;
    } else {
      $("#lastName").next().text("");
    }

    // validate the mobile
    if (!mobilePattern.test(mobile)) {
      $("#mobile").next().text("Enter mobile number in correct format");
      isValid = false;
    } else {
      $("#mobile").next().text("");
    }

    //validate the email
    if (!emailPattern.test(email)) {
      $("#email").next().text("Enter correct email address");
      isValid = false;
    } else {
      $("#email").next().text("");
    }

    // validate the from
    if (from === "" || from === undefined) {
      $("#from").next().text("This field is required.");
      isValid = false;
    } else {
      $("#from").next().text("");
    }

    // submit the form if all entries are valid
    if (isValid) {
      $("#agentForm").submit();
      $("#agentForm").toggle();
      $("#submitHeading").show();
    }
  });
});
