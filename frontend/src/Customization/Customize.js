import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Customize.css";
import logo from "../pic/logo.png"; // adjust path relative to Customize.js

function Customize() {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    summary: "",
    education: "",
    skills: "",
    work: "",
  });

  const fileInputRef = useRef(null);
  const [uploadedFileName, setUploadedFileName] = useState("");

  const [sections, setSections] = useState([
    { id: "personal", name: "Personal Information" },
    { id: "title", name: "Job Title" },
    { id: "summary", name: "Professional Summary" },
    { id: "work", name: "Work Experience" },
    { id: "education", name: "Education" },
    { id: "skills", name: "Skills" },
  ]);

  // Form input handler
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // File upload handlers
  const handleBrowseClick = (e) => {
    e.preventDefault();
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setUploadedFileName(file.name);
    else setUploadedFileName("");
  };

  // Drag & drop handlers
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const draggedIndex = parseInt(e.dataTransfer.getData("index"), 10);
    const updatedSections = [...sections];
    const [removed] = updatedSections.splice(draggedIndex, 1);
    updatedSections.splice(index, 0, removed);
    setSections(updatedSections);
  };

  const handleDragOver = (e) => e.preventDefault();

  // Live preview content
  const renderLivePreviewContent = () =>
    sections.map((sec) => {
      switch (sec.id) {
        case "title":
          return (
            <section key={sec.id}>
              <h4>{sec.name}</h4>
              <p>{formData.title || "Your Job Title here."}</p>
            </section>
          );
        case "summary":
          return (
            <section key={sec.id}>
              <h4>{sec.name}</h4>
              <p>{formData.summary || "Your summary will appear here."}</p>
            </section>
          );
        case "education":
          return (
            <section key={sec.id}>
              <h4>{sec.name}</h4>
              <p>{formData.education || "Your education details here."}</p>
            </section>
          );
        case "skills":
          return (
            <section key={sec.id}>
              <h4>{sec.name}</h4>
              <p>{formData.skills || "Your skills here."}</p>
            </section>
          );
        case "work":
          return (
            <section key={sec.id}>
              <h4>{sec.name}</h4>
              <p>{formData.work || "Your work experience here."}</p>
            </section>
          );
        default:
          return null;
      }
    });

  // Navbar navigation
  const handleHome = () => navigate("/");
  const handleTemplates = () => navigate("/templates");
  const handleFeatures = () => navigate("/features");

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="leftSection">
          <img src={logo} alt="Logo" className="logoImg" />
          <div className="brand">Resumify</div>
        </div>
        <ul className="menu">
          <li
            className={location.pathname === "/" ? "active" : ""}
            onClick={handleHome}
          >
            Home
          </li>
          <li
            className={location.pathname === "/templates" ? "active" : ""}
            onClick={handleTemplates}
          >
            Templates
          </li>
          <li
            className={location.pathname === "/features" ? "active" : ""}
            onClick={handleFeatures}
          >
            Features
          </li>
          
        </ul>
      </header>

      {/* Main content */}
      <main className="container" role="main" aria-labelledby="main-title">
        <h1 id="main-title" className="headline">
          Customize Your Template
        </h1>

        <section className="columns" aria-label="Template customization area">
          {/* Left column: Form & Upload */}
          <aside className="card" aria-labelledby="upload-title">
            <div id="upload-title" className="card-header">
              <span>Upload Your Template</span>
              <span className="small">Supported: .pdf · .docx · .png</span>
            </div>

            <div className="upload-area">
              {uploadedFileName ? (
                <div className="file-selected">
                  ✅ File selected: {uploadedFileName}
                </div>
              ) : (
                <div className="drop-text">Drop your resume template here</div>
              )}
              <div className="text-muted">or</div>
              <a href="#" className="btn ghost" onClick={handleBrowseClick}>
                Browse files
              </a>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.docx,.png"
                style={{ display: "none" }}
              />
            </div>

            <form className="form">
              <div className="row">
                <div className="field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Full Name"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
              </div>

              <div className="row">
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="+91 70000 00000"
                    onChange={handleChange}
                    value={formData.phone}
                  />
                </div>
                <div className="field">
                  <label htmlFor="title">Job Title</label>
                  <input
                    id="title"
                    type="text"
                    placeholder="Frontend Developer"
                    onChange={handleChange}
                    value={formData.title}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="summary">Professional Summary</label>
                <textarea
                  id="summary"
                  placeholder="A brief professional summary..."
                  onChange={handleChange}
                  value={formData.summary}
                />
              </div>

              <div className="row">
                <div className="field">
                  <label htmlFor="education">Education</label>
                  <input
                    id="education"
                    type="text"
                    placeholder="Degree · Institution"
                    onChange={handleChange}
                    value={formData.education}
                  />
                </div>
                <div className="field">
                  <label htmlFor="skills">Skills</label>
                  <input
                    id="skills"
                    type="text"
                    placeholder="HTML, CSS, JavaScript"
                    onChange={handleChange}
                    value={formData.skills}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="work">Work Experience</label>
                <textarea
                  id="work"
                  placeholder="Company · Role · Years"
                  onChange={handleChange}
                  value={formData.work}
                />
              </div>
            </form>
          </aside>

          {/* Right column: Live Preview */}
          <section className="card">
            <div className="card-header">Live Preview</div>
            <div className="live-preview">
              <article className="preview-card">
                <header className="pv-top">
                  <div>
                    <div className="pv-name">{formData.name || "Your Name"}</div>
                    <div className="pv-contact">
                      {formData.title || "Job Title"} · {formData.email || "email@example.com"} · {formData.phone || "+91 70000 00000"}
                    </div>
                  </div>
                </header>

                <hr className="soft" />
                <div className="pv-content">{renderLivePreviewContent()}</div>
              </article>
            </div>
          </section>
        </section>

        <hr />

        {/* Drag & Drop Editor */}
        <section className="editor">
          <h2>Drag & Drop Editor</h2>
          <p className="text-muted">
            Drag sections to reorder — layout preview updates automatically.
          </p>

          <div className="editor-grid">
            <aside className="card">
              <div className="card-header">Resume Sections</div>
              <div className="sections">
                {sections.map((sec, index) => (
                  <div
                    key={sec.id}
                    className="section-item"
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, index)}
                  >
                    <span className="handle">☰</span> {sec.name}
                  </div>
                ))}
              </div>
            </aside>

            <aside className="card layout-preview">
              <div className="card-header">Layout Preview</div>
              <div className="layout-box">
                {sections.map((sec) => (
                  <div key={sec.id} className="layout-row">
                    <h4>{sec.name}</h4>
                    {sec.id === "personal" && (
                      <div className="muted">
                        {formData.name || "Your Name"} · {formData.email || "Email"}
                      </div>
                    )}
                    {sec.id === "title" && <div className="muted">{formData.title || "Your Job Title here."}</div>}
                    {sec.id === "summary" && <div className="muted">{formData.summary || "Your summary here."}</div>}
                    {sec.id === "work" && <div className="muted">{formData.work || "Your work experience here."}</div>}
                    {sec.id === "education" && <div className="muted">{formData.education || "Your education here."}</div>}
                    {sec.id === "skills" && <div className="muted">{formData.skills || "Your skills here."}</div>}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}

export default Customize;

