import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="fade-in">
      <Hero />
      <section style={{ padding: "3rem" }}>
        <h2>Why Choose EduCollege?</h2>
        <p>We provide world-class education, research opportunities, and vibrant campus life.</p>
      </section>
    </div>
  );
}
