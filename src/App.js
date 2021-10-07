import './App.css';
import Banner from './components/Banner/Banner';
import Topics from './components/Topics/Topics';
import Header from './components/Header/Header';
import Speakers from './components/Speakers/Speakers';
import Sponsors from './components/Sponsors/Sponsors';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Topics />
      <Speakers />
      <Sponsors />
      <SignUpForm />
      <Footer />
    </div>
  );
}

export default App;
