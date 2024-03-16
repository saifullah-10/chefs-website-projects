import "./App.css";
import Header from "./assets/components/Header/Header";
import Hero from "./assets/components/Hero/Hero";
import RecipeCooking from "./assets/components/RecipeCooking/RecipeCooking";

function App() {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <Hero></Hero>
        <RecipeCooking></RecipeCooking>
      </main>
    </>
  );
}

export default App;
