import demoData from "./demoData";
import "./CreativeTemplate.css";

export default function CreativeTemplate({ data }) {

  // Agar user ne kuch type nahi kiya → demo dikhao
  const resume = data?.name ? data : demoData;

  return (
    <div className="resume creative">

      <div className="creative-header">
        <h1>{resume.name}</h1>
        <h2>{resume.title}</h2>
        <span>{resume.email}</span>
      </div>

      <div className="creative-body">

        <div className="c-section">
          <h3>Skills</h3>
          <p className="text-block">{resume.skills}</p>
        </div>

        <div className="c-section">
          <h3>Education</h3>
          <p className="text-block">{resume.education}</p>
        </div>

        <div className="c-section">
          <h3>Experience</h3>
          <p className="text-block">{resume.experience}</p>
        </div>

        <div className="c-section">
          <h3>Projects</h3>
          <p className="text-block">{resume.projects}</p>
        </div>

        <div className="c-section">
          <h3>Summary</h3>
          <p className="text-block">{resume.summary}</p>
        </div>

      </div>

    </div>
  );
}
