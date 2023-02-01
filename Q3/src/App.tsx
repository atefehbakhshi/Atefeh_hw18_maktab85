import Form from "./Form/Form";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Create account</h1>
      <p>
        Already have an account? <a href="#">Sign in</a>
      </p>
      <Form />
    </div>
  );
}

export default App;
