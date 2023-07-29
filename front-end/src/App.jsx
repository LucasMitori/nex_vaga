import GeneralProvider from "./contexts/GeneralContext";
import RoutesMain from "./routes/routes";

function App() {
  return (
    <>
      <GeneralProvider>
        <RoutesMain />
      </GeneralProvider>
    </>
  );
}

export default App;
