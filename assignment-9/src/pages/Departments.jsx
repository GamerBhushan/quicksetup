const departments = [
  {
    name: "Computer Science",
    description: "Focus on AI, data science, and cutting-edge software technologies.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Business Administration",
    description: "Develop leadership and entrepreneurial skills for a global market.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Mechanical Engineering",
    description: "Hands-on experience with robotics, CAD, and mechanical systems.",
    image: "https://images.unsplash.com/photo-1581091870622-1a3e5b0d2af9?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Departments() {
  return (
    <div className="fade-in" style={{ padding: "3rem" }}>
      <h1>Departments</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        {departments.map((dept) => (
          <div
            key={dept.name}
            style={{
              background: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              overflow: "hidden",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            className="fade-in department-card"
          >
            <img
              src={dept.image}
              alt={dept.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "1.5rem" }}>
              <h3 style={{ color: "var(--primary)" }}>{dept.name}</h3>
              <p>{dept.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
