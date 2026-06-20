let profileImage = "";


// photo upload

document.getElementById("photo").addEventListener("change", function(e){

    let reader = new FileReader();

    reader.onload = function(){

        profileImage = reader.result;

    }

    reader.readAsDataURL(e.target.files[0]);

});





// ADD EDUCATION

function addEducation(){

let container =
document.getElementById("educationContainer");


let div =
document.createElement("div");


div.className="educationBox";


div.innerHTML = `

<input class="course" placeholder="Course / Degree">

<input class="college" placeholder="School / College">

<input class="grade" placeholder="Grade / Percentage">

<input class="year" placeholder="Year">


<button type="button" onclick="this.parentElement.remove()">
Remove
</button>

`;


container.appendChild(div);

}





// ADD EXPERIENCE

function addExperience(){

let container =
document.getElementById("experienceContainer");


let div =
document.createElement("div");


div.className="experienceBox";


div.innerHTML = `

<input class="company" placeholder="Company Name">

<input class="jobTitle" placeholder="Job Title">

<input class="startDate" placeholder="Start Date">

<input class="endDate" placeholder="End Date">


<textarea class="experienceDetails"
placeholder="Experience Details"></textarea>


<button type="button" onclick="this.parentElement.remove()">
Remove
</button>

`;

container.appendChild(div);

}


function addSkill(){


let container = 
document.getElementById("skillsContainer");


let div = document.createElement("div");


div.className = "skillBox";


div.innerHTML = `


<input 
class="skill"
placeholder="Enter skill">


<button type="button" onclick="this.parentElement.remove()">

Remove

</button>


`;


container.appendChild(div);


}





// ADD PROJECT

function addProject(){

let container =
document.getElementById("projectsContainer");


let div =
document.createElement("div");


div.className="projectBox";


div.innerHTML = `

<input class="projectName"
placeholder="Project Name">


<textarea class="projectDescription"
placeholder="Project Description">
</textarea>


<input class="projectTech"
placeholder="Technologies Used">


<input class="projectLink"
placeholder="Project Link">


<button type="button" onclick="this.parentElement.remove()">
Remove
</button>

`;

container.appendChild(div);

}




// ADD CERTIFICATE

function addCertification(){

let container =
document.getElementById("certificationsContainer");


let div =
document.createElement("div");


div.className="certificateBox";


div.innerHTML=`

<input class="certificateName"
placeholder="Certification Name">


<input class="issuedBy"
placeholder="Issued By">


<input class="certificateYear"
placeholder="Year">


<button type="button" onclick="this.parentElement.remove()">
Remove
</button>


`;

container.appendChild(div);

}





// ADD LANGUAGE


function addLanguage(){

let container =
document.getElementById("languagesContainer");


let div =
document.createElement("div");


div.className="languageBox";


div.innerHTML=`

<input class="language"
placeholder="Language">


<input class="level"
placeholder="Level">


<button type="button" onclick="this.parentElement.remove()">
Remove
</button>


`;

container.appendChild(div);

}






// GENERATE RESUME


function generateResume(){



let name =
document.getElementById("name").value;


let address =
document.getElementById("address").value;


let email =
document.getElementById("email").value;


let phone =
document.getElementById("phone").value;


let dob =
document.getElementById("dob").value;


let nationality =
document.getElementById("nationality").value;


let objective =
document.getElementById("objective").value;





let education="";


document.querySelectorAll(".educationBox")
.forEach(e=>{


education += `

<div class="resume-section">

<h3>
${e.querySelector(".course").value}
</h3>

<p>
${e.querySelector(".college").value}
<br>
${e.querySelector(".grade").value}
<br>
${e.querySelector(".year").value}
</p>


</div>`;


});






let skills="";


document.querySelectorAll(".skill")
.forEach(s=>{


skills += s.value + " | ";


});





let experience="";


document.querySelectorAll(".experienceBox")
.forEach(e=>{


experience += `

<h3>
${e.querySelector(".jobTitle").value}
</h3>

<p>

${e.querySelector(".company").value}

<br>

${e.querySelector(".startDate").value}
-
${e.querySelector(".endDate").value}

<br>

${e.querySelector(".experienceDetails").value}

</p>

`;

});






document.getElementById("resume").innerHTML = `



<div class="resume-card">


${profileImage ?
`<img class="profile" src="${profileImage}">`
:
""}



<h1>${name}</h1>


<p>

${email} |
${phone}

</p>


<p>

${address}

</p>


<p>

DOB: ${dob}

<br>

Nationality: ${nationality}

</p>



<h2>Objective</h2>

<p>${objective}</p>




<h2>Education</h2>

${education}




<h2>Skills</h2>

<p>${skills}</p>




<h2>Experience</h2>

${experience}




</div>


`;

}


function downloadPDF(){

const element = document.getElementById("resume");


html2canvas(element).then(canvas => {


const imgData = canvas.toDataURL("image/png");


const { jsPDF } = window.jspdf;


let pdf = new jsPDF(
"p",
"mm",
"A4"
);



let width = pdf.internal.pageSize.getWidth();


let height =
(canvas.height * width) / canvas.width;



pdf.addImage(
imgData,
"PNG",
0,
0,
width,
height
);



pdf.save("My_Resume.pdf");


});


}




