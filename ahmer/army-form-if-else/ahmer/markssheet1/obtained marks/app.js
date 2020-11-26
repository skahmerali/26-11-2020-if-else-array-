var obtainMarks = document.getElementById("OBTAIN-MARKS");
var totalMarks = document.getElementById("TOTAL-MARKS");
var Fpercentage;


function abc() {


     Fpercentage = ( parseInt(obtainMarks.value) / parseInt(totalMarks.value) ) * 100;
     document.getElementById('percentage').value = Fpercentage + "%";



     var res = document.getElementById("grade");
     if (Fpercentage >= 80 && Fpercentage >= 100) {
          res.value = "CONGRATS! A+ GRADE";
        
     }
     else if (Fpercentage >= 70 && Fpercentage <= 79) {
          res.value = "CONGRATS A GRADE";
     }
     else if (Fpercentage >= 60 && Fpercentage <= 69) {
          res.value = "CONGRATS  B GRADE";
     }
     else if (Fpercentage >= 50 && Fpercentage <= 59) {
          res.value = "CONGRATS  C GRADE";
     }
     else if (Fpercentage >= 40 && Fpercentage <= 49) {
          res.value = "CONGRATS  D GRADE";
     }
     else {
          res.value = "so harsh! failed ! try again"
     }

}

// function fgrade(){
//      const zubair=Fpercentage;
//      console.log(zubair)

// }

function fgrade() {
     var res = document.getElementById("grade");
     if (Fpercentage >= 80 && Fpercentage >= 100) {
          res.value = "CONGRATS! A+ GRADE";
        
     }
     else if (Fpercentage >= 70 && Fpercentage <= 79) {
          res.value = "CONGRATS A GRADE";
     }
     else if (Fpercentage >= 60 && Fpercentage <= 69) {
          res.value = "CONGRATS  B GRADE";
     }
     else if (Fpercentage >= 50 && Fpercentage <= 59) {
          res.value = "CONGRATS  C GRADE";
     }
     else if (Fpercentage >= 40 && Fpercentage <= 49) {
          res.value = "CONGRATS  D GRADE";
     }
     else {
          res.value = "so harsh but u are failed ! try again"
     }


}