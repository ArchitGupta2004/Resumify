import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TemplatePage.css";


import ModernTemplate from "../resumeTemplates/ModernTemplate";
import CreativeTemplate from "../resumeTemplates/CreativeTemplate";
import ClassicTemplate from "../resumeTemplates/ClassicTemplate";
import SimpleTemplate from "../resumeTemplates/SimpleTemplate";

import PreviewWrapper from "../components/PreviewWrapper";

const templates = [
  { id: "modern", name: "Modern", category: "ATS" },
  { id: "creative", name: "Creative", category: "Creative" },
  { id: "classic", name: "Classic", category: "Minimal" },
  { id: "simple", name: "Simple", category: "ATS" },
];

export default function TemplatePage() {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [filter, setFilter] = useState("All");

  const navigate = useNavigate();

  // filter logic
  const filtered =
    filter === "All"
      ? templates
      : templates.filter((t) => t.category === filter);

  // continue button
  const handleContinue = () => {
    if (!selected) return alert("Select a template first");
    localStorage.setItem("selectedTemplate", selected);
    navigate("/editor");
  };

  // template renderer function (clean code)
  const renderTemplate = (id, scale) => {
    switch (id) {
      case "modern":
        return (
          <PreviewWrapper scale={scale}>
            <ModernTemplate demo />
          </PreviewWrapper>
        );
      case "creative":
        return (
          <PreviewWrapper scale={scale}>
            <CreativeTemplate demo />
          </PreviewWrapper>
        );
      case "classic":
        return (
          <PreviewWrapper scale={scale}>
            <ClassicTemplate demo />
          </PreviewWrapper>
        );
      case "simple":
        return (
          <PreviewWrapper scale={scale}>
            <SimpleTemplate demo />
          </PreviewWrapper>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tp-page">

      <h2 className="tp-title">Choose Your Template</h2>

      {/* FILTER BUTTONS */}
      <div className="tp-filters">
        {["All", "ATS", "Creative", "Minimal"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`tp-filter-btn ${filter === f ? "active" : ""}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="tp-layout">

        {/* TEMPLATE CARDS */}
        <div className="tp-cards">
          {filtered.map((t) => (
            <div
              key={t.id}
              className={`tp-card ${selected === t.id ? "active" : ""}`}
              onClick={() => setSelected(t.id)}
              onMouseEnter={() => setHovered(t.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="tp-preview-box">
                {renderTemplate(t.id, 0.23)}
              </div>

              <div className="tp-card-footer">
                <h4>{t.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* LIVE PREVIEW */}
       <div className="tp-live-preview">
  <h3>Live Preview</h3>

  <div className="tp-preview-container">
    {hovered && (
      <PreviewWrapper>
        {renderTemplate(hovered, true)}
      </PreviewWrapper>
    )}

    {!hovered && <p>Hover over a template</p>}
  </div>
</div>


      </div>

      {/* CONTINUE BUTTON */}
      <div className="tp-bottom">
        <button
          className="tp-continue-btn"
          disabled={!selected}
          onClick={handleContinue}
        >
          Customize
        </button>
      </div>

    </div>
  );
}
