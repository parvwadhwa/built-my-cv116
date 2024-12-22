// Resume data storage
const resumeData = {
    contact_info: {},
    experience: [],
    education: [],
    skills: [],
};

// Add contact info
function addContactInfo() {
    const container = document.getElementById("form-container");
    container.innerHTML = `
        <h2>Enter Contact Information</h2>
        <form onsubmit="saveContactInfo(event)">
            <label>Name: <input type="text" id="name" required></label><br>
            <label>Email: <input type="email" id="email" required></label><br>
            <label>Phone: <input type="text" id="phone" required></label><br>
            <label>Address: <input type="text" id="address"></label><br>
            <button type="submit">Save</button>
        </form>
    `;
}

function saveContactInfo(event) {
    event.preventDefault();
    resumeData.contact_info = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
    };
    alert("Contact Information Saved!");
}

// Add work experience
function addExperience() {
    const container = document.getElementById("form-container");
    container.innerHTML = `
        <h2>Add Work Experience</h2>
        <form onsubmit="saveExperience(event)">
            <label>Job Title: <input type="text" id="title" required></label><br>
            <label>Company: <input type="text" id="company" required></label><br>
            <label>Start Date: <input type="text" id="start_date" required></label><br>
            <label>End Date: <input type="text" id="end_date"></label><br>
            <label>Details: <textarea id="details"></textarea></label><br>
            <button type="submit">Save</button>
        </form>
    `;
}

function saveExperience(event) {
    event.preventDefault();
    resumeData.experience.push({
        title: document.getElementById("title").value,
        company: document.getElementById("company").value,
        start_date: document.getElementById("start_date").value,
        end_date: document.getElementById("end_date").value,
        details: document.getElementById("details").value,
    });
    alert("Experience Saved!");
}

// Add education, skills, and generate PDF functionality similarly
function generatePDF() {
    alert("PDF generation is not supported in the browser. Use external libraries like jsPDF.");
}
