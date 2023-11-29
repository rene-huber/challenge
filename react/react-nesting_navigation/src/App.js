import Header from "./components/Header";
import Avatar from "./components/Avatar";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

import "./styles.css";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation/>
        <Avatar />
      </Header>
      
      <main>content goes here…</main>
    </>
  );
}