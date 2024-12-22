async function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Add title
  doc.setFontSize(18);
  doc.text('Resume', 105, 10, { align: 'center' });

  // Add contact information
  doc.setFontSize(12);
  doc.text(`Name: ${document.getElementById('name').value}`, 10, 20);
  doc.text(`Email: ${document.getElementById('email').value}`, 10, 30);
  doc.text(`Phone: ${document.getElementById('phone').value}`, 10, 40);
  doc.text(`Address: ${document.getElementById('address').value}`, 10, 50);

  // Add work experience
  const experience = document.getElementById('experience').value.split('\n');
  doc.text('Experience:', 10, 60);
  experience.forEach((line, index) => {
    doc.text(`- ${line}`, 10, 70 + index * 10);
  });

  // Add education
  const education = document.getElementById('education').value.split('\n');
  doc.text('Education:', 10, 80 + experience.length * 10);
  education.forEach((line, index) => {
    doc.text(`- ${line}`, 10, 90 + experience.length * 10 + index * 10);
  });

  // Add skills
  const skills = document.getElementById('skills').value.split(',');
  doc.text('Skills:', 10, 100 + experience.length * 10 + education.length * 10);
  skills.forEach((skill, index) => {
    doc.text(`- ${skill.trim()}`, 10, 110 + experience.length * 10 + education.length * 10 + index * 10);
  });

  // Save the PDF
  doc.save('resume.pdf');
}
