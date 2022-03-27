import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="p-5 bg-primary text-white text-center">
        <h1>Inflation Calcuator</h1>
        <p>Online tool to calculate the inflation rate</p>
      </div>

      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Active
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
