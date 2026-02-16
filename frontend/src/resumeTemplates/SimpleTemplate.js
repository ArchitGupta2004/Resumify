import demoData from "./demoData";
export default function SimpleTemplate({ data, demo }) {

  const resume = demo ? demoData : data;

  if (!resume) return null;

  return (
    <div className="resume creative">

      <div className="creative-header">
        <h1>{resume.name}</h1>
        <h2>{resume.title}</h2>
      </div>

      <div className="creative-body">
        <p><b>Email:</b> {resume.email}</p>
        <p><b>Skills:</b> {resume.skills}</p>
        <p><b>Education:</b> {resume.education}</p>
        <p><b>Summary:</b> {resume.summary}</p>
        <p><b>Experience:</b> {resume.experience}</p>
      </div>

    </div>
  );
}
