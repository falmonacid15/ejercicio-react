import NavBar from "./components/NavBar";
import UseCallbackHook from "./components/UseCallback";
import UseContextHook from "./components/UseContext";
import UseEffectHook from "./components/UseEffect";
import UseMemoHook from "./components/UseMemo";
import UseReducerHook from "./components/UseReducer";
import UseRefHook from "./components/UseRef";
import UseStateHook from "./components/UseState";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100 dark:bg-slate-800 w-full">
      <NavBar />
      <h1 className="text-center text-2xl font-semibold text-black dark:text-white mb-4">
        Hooks
      </h1>
      <div className="flex flex-col gap-4 w-full p-2">
        <UseStateHook />
        <hr className="my-12 h-0.5 border-t-0 bg-slate-200 dark:bg-slate-900" />
        <UseEffectHook />
        <hr className="my-12 h-0.5 border-t-0 bg-slate-200 dark:bg-slate-900" />
        <UseReducerHook />
        <hr className="my-12 h-0.5 border-t-0 bg-slate-200 dark:bg-slate-900" />
        <UseRefHook />
        <hr className="my-12 h-0.5 border-t-0 bg-slate-200 dark:bg-slate-900" />
        <UseContextHook />
        <hr className="my-12 h-0.5 border-t-0 bg-slate-200 dark:bg-slate-900" />
        <UseMemoHook />
        <hr className="my-12 h-0.5 border-t-0 bg-slate-200 dark:bg-slate-900" />
        <UseCallbackHook />
      </div>
    </div>
  );
}

export default App;
