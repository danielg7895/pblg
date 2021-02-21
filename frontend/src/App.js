import './App.css';
//import { BrowserRouter as Router, Route} from 'react-router-dom'
import {Container } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import PostScreen from './screens/PostScreen';
import AddPostScreen from './screens/AddPostScreen';


const App = () => {
  // zona de rutas!
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/addpost' component={AddPostScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/post/:id/:title' component={PostScreen} />
        </Container>
      </main>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
