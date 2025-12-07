import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { cards } from "./data";

function App() {
  return (
    <div className="app-root">
      <Header />

      <main className="main">
        <section className="hero">
          <div className="hero-badge">Task 1 • React Basics</div>
          <h1>Reusable Card UI with Props</h1>
          <p>
            Create a simple but colorful React layout with a Header, a Footer, and a reusable Card component. All cards should receive their data through props.
          </p>
        </section>

        <section className="cards-area">
          <h2>Learning Topics</h2>
          <div className="cards-grid">
            {cards.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                badge={item.badge}
                emoji={item.emoji}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
