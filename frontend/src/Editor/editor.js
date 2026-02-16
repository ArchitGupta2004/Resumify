import React, { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./editor.css";

import ModernTemplate from "../resumeTemplates/ModernTemplate";
import CreativeTemplate from "../resumeTemplates/CreativeTemplate";
import ClassicTemplate from "../resumeTemplates/ClassicTemplate";
import SimpleTemplate from "../resumeTemplates/SimpleTemplate";

export default function Editor() {

  // ---------------- FORM STATE ----------------
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    email: "",
    skills: "",
    education: "",
    summary: "",
    experience: "",
    projects: ""
  });

  // selected template from TemplatePage
  const [template, setTemplate] = useState("modern");

  const resumeRef = useRef();

  // load selected template
  useEffect(() => {
    const saved = localStorage.getItem("selectedTemplate");
    if (saved) setTemplate(saved);
  }, []);

  // input handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ---------------- TEMPLATE SWITCH ----------------
  const SelectedTemplate = () => {
    switch (template) {
      case "modern":
        return <ModernTemplate data={formData} />;
      case "creative":
        return <CreativeTemplate data={formData} />;
      case "classic":
        return <ClassicTemplate data={formData} />;
      case "simple":
        return <SimpleTemplate data={formData} />;
      default:
        return <ModernTemplate data={formData} />;
    }
  };

  // ---------------- PDF DOWNLOAD ----------------
  const downloadPDF = async () => {
    const element = resumeRef.current;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    const fileName = (formData.name || "My_Resume").replace(/\s+/g, "_");
    pdf.save(`${fileName}_Resume.pdf`);
  };

  // ---------------- UI ----------------
  return (
    <div className="editor-page">

      {/* LEFT FORM */}
      <div className="editor-form">
        <h2>Enter Details</h2>

        <input name="name" placeholder="Full Name" onChange={handleChange}/>
        <input name="title" placeholder="Job Title" onChange={handleChange}/>
        <input name="email" placeholder="Email" onChange={handleChange}/>
        <input name="skills" placeholder="Skills (comma separated)" onChange={handleChange}/>
        <input name="education" placeholder="Education" onChange={handleChange}/>
        <textarea name="summary" placeholder="Professional Summary" onChange={handleChange}/>
        <textarea name="experience" placeholder="Experience" onChange={handleChange}/>
        <textarea name="projects" placeholder="Projects" onChange={handleChange}/>

        <button className="download-btn" onClick={downloadPDF}>
          Download PDF
        </button>
      </div>

      {/* RIGHT PREVIEW */}
      <div className="editor-preview">
        <div ref={resumeRef} className="resume-paper">
          <SelectedTemplate />
        </div>
      </div>

    </div>
  );
}
