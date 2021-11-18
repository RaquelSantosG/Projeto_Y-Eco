import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Login from './pages/login/Login';
import Sobre from './pages/sobre/Sobre';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import CadastroCategoria from './components/categoria/cadastroCategoria/CadastroCategoria';
import ListaProduto from './components/produto/listaProdutos/ListaProduto';
import CadastroProduto from './components/produto/cadastroProduto/CadastroProduto';
import DeletarProduto from './components/produto/deletarProduto/DeletarProduto';
import TelaProduto from './components/produto/telaProduto/TelaPoduto';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div style={{minHeight: '100vh'}}>
          
          <Route  path='/cadastrar'>
            <CadastroUsuario />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/sobre'>
            <Sobre />
          </Route>
          
          <Route path='/categoria'>
            <ListaCategoria />
          </Route>

          <Route path='/produtos'>
            <ListaProduto />
          </Route>

          <Route exact path='/formularioProduto'>
            <CadastroProduto />
          </Route>

          <Route  path='/formularioProduto/:id'>
            <CadastroProduto />
          </Route>

          <Route exact path='/formularioCategoria'>
            <CadastroCategoria />
          </Route>

          <Route exact path='/formularioCategoria/:id'>
            <CadastroCategoria />
          </Route>
          
          <Route path='/deletarCategoria/:id'>
            <DeletarCategoria />
          </Route>

          <Route path='/deletarProduto/:id'>
            <DeletarProduto />
          </Route>

          <Route path='/produto/:id'>
            <TelaProduto />
          </Route>

        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
