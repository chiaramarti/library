import "./App.css";

// aggiungiamo l'import del CSS di bootstrap, altrimenti i nostri componenti non verranno
// visualizzati correttamente
import "bootstrap/dist/css/bootstrap.min.css";

import LibraryNavbar from "./components/LibraryNavbar.jsx";
import LibraryFooter from "./components/LibraryFooter.jsx";
import Welcome from "./components/Welcome.jsx";
// import DiscountModal from "./components/DiscountModal";

// import BooksGrid from "./components/BooksGrid.jsx";
import horrorData from "./data/horror.json";
import BooksList from "./components/BooksList.jsx";

function App() {
  return (
    <div>
      <LibraryNavbar />
      <Welcome />
      {/* <div className="container mt-4">
        <BooksGrid books={horrorData} />
      </div> */}
      <BooksList books={horrorData} />
      {/* <DiscountModal /> */}
      <LibraryFooter />
    </div>
  );
}

export default App;
