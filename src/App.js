import "./App.css";

// aggiungiamo l'import del CSS di bootstrap, altrimenti i nostri componenti non verranno
// visualizzati correttamente
import "bootstrap/dist/css/bootstrap.min.css";

import LibraryNavbar from "./components/LibraryNavbar.jsx";
import LibraryFooter from "./components/LibraryFooter.jsx";
import Welcome from "./components/Welcome.jsx";
import DiscountModal from "./components/DiscountModal";

function App() {
  return (
    <div>
      <LibraryNavbar />
      <Welcome />
      <DiscountModal />
      <LibraryFooter />
    </div>
  );
}

export default App;
