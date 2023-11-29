import Header from "./components/Header";
import Avatar from "./components/Avatar";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
// import Link from "./components/Links";
import "./styles.css";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation className="navigation__link"/>
        
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}