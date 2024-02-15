// new context provider.
import NewsContextProvider from "./providers/NewsContextProvider";

// react components.
import Header from "./components/Header";
import News from "./components/news/News";
import Footer from "./components/Footer";

function App() {
  return (
    <NewsContextProvider>
      <Header />
      <News />
      <Footer />
    </NewsContextProvider>
  );
}

export default App;
