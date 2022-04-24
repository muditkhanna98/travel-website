    // Section 1 -  Declare an array of elements -----------------
    let myImagesArray  = ["/images/country-page/China-map.jpg","/images/country-page/China_greatwall.png","/images/country-page/China_forbiddencity.png","/images/country-page/China_panda.png","/images/country-page/China_terracota_army.png"];
    let myImagesArray2 = ["/images/country-page/France-map.jpg","/images/country-page/France-mont.jpg","/images/country-page/France-palace.jpg","/images/country-page/France-saint.jpg","/images/country-page/France-strasbourg.jpg"];
    let myImagesArray3 = ["/images/country-page/Japan-map.JPG","/images/country-page/Japan-meiji.JPG","/images/country-page/Japan-fukuoka.JPG","/images/country-page/Japan-hiroshima.JPG","/images/country-page/Japan-kyoto.JPG"];
    let myImagesArray4 = ["/images/country-page/Spain-map.jpg","/images/country-page/Spain-plaza.jpg","/images/country-page/Spain-sagrada.jpg","/images/country-page/Spain-alhambra.jpg","/images/country-page/Spain-segovia.jpg"];
    let myImagesArray5 = ["/images/country-page/Thailand-map.jpg","/images/country-page/Thailand-buddha.jpg","/images/country-page/Thailand-kwai.jpg","/images/country-page/Thailand-palace.jpg","/images/country-page/Thailand-siam.jpg"];
    let myImagesArray6 = ["/images/country-page/Turkey-map.jpg","/images/country-page/Turkey-ephesus.jpg","/images/country-page/Turkey-hattusa.jpg","/images/country-page/Turkey-nemrut.jpg","/images/country-page/Turkey-topkapi.jpg"];

    // -----------------------------------------------------------
    // Section 2 -  Build the slide of images --------------------
      let lowerLimit = 0;
  
      let upperLimit = myImagesArray.length - 1;
      let upperLimit2 = myImagesArray2.length - 1;
      let upperLimit3 = myImagesArray3.length - 1;
      let upperLimit4 = myImagesArray3.length - 1;
      let upperLimit5 = myImagesArray3.length - 1;
      let upperLimit6 = myImagesArray3.length - 1;

      //setInterval('changeImage(-1)',1000)
      function changeImage(direction) {
        lowerLimit = lowerLimit + direction;
        if (lowerLimit > upperLimit) {
          lowerLimit = 0;
        }
        if (lowerLimit < 0) {
          lowerLimit = upperLimit;
        }
        document.getElementById('slideshow').src = myImagesArray[lowerLimit];
      }

      function changeImage2(direction) {
        lowerLimit = lowerLimit + direction;
        if (lowerLimit > upperLimit2) {
          lowerLimit = 0;
        }
        if (lowerLimit < 0) {
          lowerLimit= upperLimit2;
        }
        document.getElementById('slideshow2').src = myImagesArray2[lowerLimit];
      }

      function changeImage3(direction) {
        lowerLimit = lowerLimit + direction;
        if (lowerLimit > upperLimit3) {
          lowerLimit = 0;
        }
        if (lowerLimit < 0) {
          lowerLimit = upperLimit3;
        }
        document.getElementById('slideshow3').src = myImagesArray3[lowerLimit];
      }

      function changeImage4(direction) {
        lowerLimit = lowerLimit + direction;
        if (lowerLimit > upperLimit4) {
          lowerLimit = 0;
        }
        if (lowerLimit < 0) {
          lowerLimit = upperLimit4;
        }
        document.getElementById('slideshow4').src = myImagesArray4[lowerLimit];
      }

      function changeImage5(direction) {
        lowerLimit = lowerLimit + direction;
        if (lowerLimit > upperLimit5) {
          lowerLimit = 0;
        }
        if (lowerLimit < 0) {
          lowerLimit = upperLimit5;
        }
        document.getElementById('slideshow5').src = myImagesArray5[lowerLimit];
      }

      function changeImage6(direction) {
        lowerLimit = lowerLimit + direction;
        if (lowerLimit > upperLimit6) {
          lowerLimit = 0;
        }
        if (lowerLimit < 0) {
          lowerLimit = upperLimit6;
        }
        document.getElementById('slideshow6').src = myImagesArray6[lowerLimit];
      }


      "use strict";
      $(document).ready( () => {

      // handle click on Join List button
      $("#submit_form").click( () => {
        const email1 = $("#email_1").val();
        const name2 = $("#name_2").val();
        let isValid = true;

        // validate the email address
        if (email1 === "Email" || email1 === "") { 
            $("#email_1").next().text("This field is required.");
            isValid = false;
        } else {
            $("#email_1").next().text("");
        } 
        
        // validate the name
        if (name2 === "Name" || email1 === "") { 
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
     $("#email_1").focus();
   });
