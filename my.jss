// Function to generate PDF
function generatePDF(resumeData) {
    const { contact_info, experience, education, skills, projects, certifications, achievements } = resumeData;

    // Create a new instance of jsPDF
    const doc = new jsPDF();

    // Add Contact Information
    doc.setFontSize(16);
    doc.text(contact_info.name, 10, 10);
    doc.setFontSize(12);
    doc.text(`Email: ${contact_info.email}`, 10, 20);
    doc.text(`Phone: ${contact_info.phone}`, 10, 30);
    doc.text(`Address: ${contact_info.address}`, 10, 40);
    if (contact_info.linkedin) doc.text(`LinkedIn: ${contact_info.linkedin}`, 10, 50);
    if (contact_info.github) doc.text(`GitHub: ${contact_info.github}`, 10, 60);

    // Add Work Experience
    let yOffset = 70;
    doc.setFontSize(14);
    doc.text("Work Experience", 10, yOffset);
    doc.setFontSize(12);
    yOffset += 10;
    experience.forEach(exp => {
        doc.text(`${exp.title} at ${exp.company} (${exp.start_date} - ${exp.end_date})`, 10, yOffset);
        yOffset += 10;
        exp.details.forEach(detail => {
            doc.text(`- ${detail}`, 15, yOffset);
            yOffset += 7;
        });
        yOffset += 5;
    });

    // Add Education
    doc.setFontSize(14);
    doc.text("Education", 10, yOffset);
    yOffset += 10;
    doc.setFontSize(12);
    education.forEach(edu => {
        doc.text(`${edu.degree} from ${edu.institution} (${edu.start_year} - ${edu.end_year})`, 10, yOffset);
        yOffset += 10;
    });

    // Add Skills
    doc.setFontSize(14);
    doc.text("Skills", 10, yOffset);
    yOffset += 10;
    doc.setFontSize(12);
    doc.text(skills.join(", "), 10, yOffset);
    yOffset += 10;

    // Add Projects
    doc.setFontSize(14);
    doc.text("Projects", 10, yOffset);
    yOffset += 10;
    doc.setFontSize(12);
    projects.forEach(project => {
        doc.text(`${project.name}`, 10, yOffset);
        yOffset += 10;
        doc.text(`${project.description}`, 15, yOffset);
        yOffset += 10;
        doc.text(`Technologies Used: ${project.technologies}`, 15, yOffset);
        yOffset += 15;
    });

    // Add Certifications
    doc.setFontSize(14);
    doc.text("Certifications", 10, yOffset);
    yOffset += 10;
    doc.setFontSize(12);
    certifications.forEach(cert => {
        doc.text(`${cert.name} by ${cert.provider} (${cert.year})`, 10, yOffset);
        yOffset += 10;
    });

    // Add Achievements
    doc.setFontSize(14);
    doc.text("Achievements", 10, yOffset);
    yOffset += 10;
    doc.setFontSize(12);
    achievements.forEach(achievement => {
        doc.text(`- ${achievement}`, 10, yOffset);
        yOffset += 10;
    });

    // Save the PDF
    doc.save("resume.pdf");
}

// Example of how to call this function
// Assuming `resumeData` is the object containing all the resume data
document.getElementById("generatePDFButton").addEventListener("click", () => {
    const resumeData = {
        contact_info: {
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "123-456-7890",
            address: "123 Main St, Anytown, USA",
            linkedin: "https://linkedin.com/in/johndoe",
            github: "https://github.com/johndoe"
        },
        experience: [
            {
                title: "Software Engineer",
                company: "TechCorp",
                start_date: "Jan 2020",
                end_date: "Present",
                details: ["Developed applications", "Collaborated with team", "Maintained codebase"]
            }
        ],
        education: [
            {
                degree: "B.Tech in Computer Science",
                institution: "Anytown University",
                start_year: "2015",
                end_year: "2019"
            }
        ],
        skills: ["JavaScript", "Python", "React", "Node.js"],
        projects: [
            {
                name: "Portfolio Website",
                description: "A personal portfolio website showcasing my work.",
                technologies: "HTML, CSS, JavaScript"
            }
        ],
        certifications: [
            {
                name: "Certified JavaScript Developer",
                provider: "Example Certification Body",
                year: "2023"
            }
        ],
        achievements: ["Won Hackathon 2022", "Top Performer Award 2021"]
    };

    generatePDF(resumeData);
});
