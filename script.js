function generateResume() {


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let location = document.getElementById("location").value;

    let education = document.getElementById("education").value;
    let skills = document.getElementById("skills").value;
    let experience = document.getElementById("experience").value;



    let resume = `

        <h1>${name}</h1>

        <p>
        ${email} | ${phone} | ${location}
        </p>


        <hr>


        <h2>Education</h2>

        <p>${education}</p>


        <h2>Skills</h2>

        <p>${skills}</p>



        <h2>Experience</h2>

        <p>${experience}</p>


    `;


    document.getElementById("resume").innerHTML = resume;


}
function downloadPDF(){

    const { jsPDF } = window.jspdf;

    let doc = new jsPDF();


    let content = document.getElementById("resume").innerText;


    doc.text(content, 10, 10);


    doc.save("My_Resume.pdf");

}