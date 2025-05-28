import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx"

function App() {
  return (
    <main className="h-screen flex gap-8">
      <Sidebar />
      <NewProject />
    </main>
  );
}

export default App;

