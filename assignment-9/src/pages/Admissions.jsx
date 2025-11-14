export default function Admissions() {
  return (
    <div className="fade-in" style={{ padding: "3rem" }}>
      <h1>Admissions</h1>
      <p>Join a vibrant learning community where innovation meets excellence.</p>

      <section style={{ marginTop: "2rem" }}>
        <h2>Admission Process</h2>
        <ol style={{ lineHeight: "1.8" }}>
          <li>Submit the online application form.</li>
          <li>Upload required documents (transcripts, ID, etc.).</li>
          <li>Appear for the entrance exam/interview.</li>
          <li>Receive offer letter and complete enrollment.</li>
        </ol>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Important Dates</h2>
        <ul style={{ lineHeight: "1.8" }}>
          <li>Application Opens: <strong>March 1, 2025</strong></li>
          <li>Application Deadline: <strong>June 30, 2025</strong></li>
          <li>Classes Begin: <strong>August 15, 2025</strong></li>
        </ul>
      </section>
    </div>
  );
}
