export default function Hero() {
  return (
    <section className="hero fade-in">
      <img
        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80"
        alt="College campus"
        className="hero-img"
      />
      <div className="hero-text">
        <h1>Welcome to EduCollege</h1>
        <p>Empowering students to become leaders of tomorrow.</p>
        <button className="btn">Explore More</button>
      </div>
    </section>
  );
}
