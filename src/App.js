import logo from './logo.svg';
import './App.css';
import Developer from "./img/developer.jpg";
import FondoTrabajo from "./img/fondotrabajo.JPG";

function App() {
  return (
    <div className="conten">
    <div className="App">
      <section className="login_Developer">
      <img class="avatar" src={Developer} alt="Logo_del_grupo"/>
      <h1>Iniciar Sesion</h1>
      <form>
      <label for="nombre_usuario">Nombre de usuario</label>
      <input type="text" placeholder="Ingrese Nombre de Usuario"></input>
      <label for="Constraseña">Constraseña</label>
      <input type="password" placeholder="Ingrese su contraseña"></input>
      <input type="submit" value="Ingresar"></input>
      <a href="#">He perdido mi contraseña</a><br>
      </br>
      <a href="#">Aun no tengo cuenta empresarial</a>

      </form>
      </section>
    </div>
    </div>
  );
}

export default App;
