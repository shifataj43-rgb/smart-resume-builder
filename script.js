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


function generateResume() {
    document.getElementById("r_photo").src = profileImage;

    // BASIC INFO
    document.getElementById("r_name").innerText = document.getElementById("name").value || "";

    let emailVal = document.getElementById("email").value;
    document.getElementById("r_email").innerText = emailVal ? emailVal + " | " : "";

    let phoneVal = document.getElementById("phone").value;
    document.getElementById("r_phone").innerText = phoneVal ? phoneVal + " | " : "";

    document.getElementById("r_address").innerText = document.getElementById("address").value || "";

    // OBJECTIVE
    let objVal = document.getElementById("objective").value;
    let r_objective = document.getElementById("r_objective");
    r_objective.innerText = objVal || "";
    // Hide objective if empty
    r_objective.style.display = objVal === "" ? "none" : "block";


    // EDUCATION
    let edu = "";
    document.querySelectorAll(".educationBox").forEach(e => {
        let course = e.querySelector(".course").value;
        let college = e.querySelector(".college").value;
        let year = e.querySelector(".year").value;

        if(course){
            edu += `<p><b>${course}</b> - ${college} (${year})</p>`;
        }
    });
    let r_education = document.getElementById("r_education");
    r_education.innerHTML = edu;
    // Hide the entire section wrapper if empty
    r_education.parentElement.style.display = edu === "" ? "none" : "block";


    // EXPERIENCE
    let exp = "";
    document.querySelectorAll(".experienceBox").forEach(e => {
        let company = e.querySelector(".company").value;
        let job = e.querySelector(".jobTitle").value;
        let details = e.querySelector(".experienceDetails").value;

        if(company){
            exp += `<p><b>${job}</b> @ ${company}</p><p>${details}</p>`;
        }
    });
    let r_experience = document.getElementById("r_experience");
    r_experience.innerHTML = exp;
    // Hide the entire section wrapper if empty
    r_experience.parentElement.style.display = exp === "" ? "none" : "block";


    // SKILLS
    let skills = "";
    document.querySelectorAll(".skillBox .skill").forEach(s => {
        if(s.value){
            skills += `<li>${s.value}</li>`;
        }
    });
    let r_skills = document.getElementById("r_skills");
    r_skills.innerHTML = skills;
    // Hide the entire section wrapper if empty
    r_skills.parentElement.style.display = skills === "" ? "none" : "block";


    // PROJECTS
    let projects = "";
    document.querySelectorAll(".projectBox").forEach(p => {
        let name = p.querySelector(".projectName").value;
        let desc = p.querySelector(".projectDescription").value;
        let tech = p.querySelector(".projectTech").value;

        if(name){
            projects += `
            <div>
                <b>${name}</b>
                <p>${desc}</p>
                <small>${tech}</small>
            </div>
            `;
        }
    });
    let r_projects = document.getElementById("r_projects");
    r_projects.innerHTML = projects;
    // Hide the entire section wrapper if empty
    r_projects.parentElement.style.display = projects === "" ? "none" : "block";


    // CERTIFICATIONS
    let cert = "";
    document.querySelectorAll(".certificateBox").forEach(c => {
        let name = c.querySelector(".certificateName").value;
        let org = c.querySelector(".issuedBy").value;
        let year = c.querySelector(".certificateYear").value;

        if(name){
            cert += `<p>${name} - ${org} (${year})</p>`;
        }
    });
    let r_certifications = document.getElementById("r_certifications");
    r_certifications.innerHTML = cert;
    // Hide the entire section wrapper if empty
    r_certifications.parentElement.style.display = cert === "" ? "none" : "block";


    // LANGUAGES
    let lang = "";
    document.querySelectorAll(".languageBox").forEach(l => {
        let lan = l.querySelector(".language").value;
        let level = l.querySelector(".level").value;

        if(lan){
            lang += `<p>${lan} - ${level}</p>`;
        }
    });
    let r_languages = document.getElementById("r_languages");
    r_languages.innerHTML = lang;
    // Hide the entire section wrapper if empty
    r_languages.parentElement.style.display = lang === "" ? "none" : "block";

    console.log("PROJECTS:", r_projects.innerHTML);
    console.log("CERTS:", r_certifications.innerHTML);
    console.log("LANGS:", r_languages.innerHTML);
}
async function downloadPDF() {

    generateResume();



    const element = document.getElementById("resumeContent");



    const canvas = await html2canvas(element, {

        scale: 3,

        useCORS: true,

        backgroundColor: "#ffffff"

    });



    const imgData = canvas.toDataURL("image/png");

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF("p", "mm", "a4");



    // ✅ REAL PDF PAGE SIZE

    const pageWidth = 210;

    const pageHeight = 297;



    // ✅ 0.5 inch margin = 12.7mm

    const margin = 12.7;



    const usableWidth = pageWidth - margin * 2;

    const usableHeight = pageHeight - margin * 2;



    const imgWidth = usableWidth;

    const imgHeight = (canvas.height * imgWidth) / canvas.width;



    let heightLeft = imgHeight;

    let position = 0;



    // --- FIRST PAGE ---

    pdf.addImage(imgData, "PNG", margin, margin, imgWidth, imgHeight);



    // 🛠️ FIX: Draw a white rectangle over the bottom margin to hide overflow

    pdf.setFillColor(255, 255, 255);

    pdf.rect(0, pageHeight - margin, pageWidth, margin, "F");



    heightLeft -= usableHeight;



    // --- NEXT PAGES ---

    while (heightLeft > 0) {

        position -= usableHeight;

        pdf.addPage();



        pdf.addImage(

            imgData,

            "PNG",

            margin,

            margin + position, // Shifts the image up

            imgWidth,

            imgHeight

        );



        // 🛠️ FIX: Draw a white rectangle over the TOP margin to hide previous page bleed

        pdf.setFillColor(255, 255, 255);

        pdf.rect(0, 0, pageWidth, margin, "F");



        // 🛠️ FIX: Draw a white rectangle over the BOTTOM margin to hide next page bleed

        pdf.rect(0, pageHeight - margin, pageWidth, margin, "F");



        heightLeft -= usableHeight;

    }



    pdf.save("resume.pdf");

} 

