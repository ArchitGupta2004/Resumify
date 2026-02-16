import demoData from "./demoData";
import "./ModernTemplate.css";

export default function ModernTemplate({ data }) {

  // agar user ne type nahi kiya → demo dikhao
  const resume = data?.name ? data : demoData;

  return (
    <div className="resume modern">

      <div className="header">
        <h1>{resume.name}</h1>
        <p>{resume.title}</p>
        <span>{resume.email}</span>
      </div>

      <div className="section">
        <h3>Skills</h3>
        <p className="text-block">{resume.skills}</p>
      </div>

      <div className="section">
        <h3>Education</h3>
        <p className="text-block">{resume.education}</p>
      </div>

 <div className="section">
        <h3>Experience</h3>
        <p className="text-block">{resume.experience}</p>
      </div>

         <div className="section">
        <h3>Projects</h3>
        <p className="text-block">{resume.projects}</p>
        </div>

        
      <div className="section">
        <h3>Summary</h3>
        <p className="text-block">{resume.summary}</p>
      </div>

     

    </div>
  );
}
