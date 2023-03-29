import Views from "./Views/Views";
import NavBar from "./components/NavBar/Index";
import Footer from "./components/Footer/Index";


const menusArray = [
  "Home",
  "About",
  "Menu",
  "Reservations",
  "Order Online",
  "Login",
];

const App = () => {
  return (
    <>
      <NavBar links={menusArray} />
      <Views />
      <Footer links={menusArray} />
    </>
  );
};

export default App;
