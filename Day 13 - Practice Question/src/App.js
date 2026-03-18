import React, {
  useState,
  Suspense,
  lazy,
  useContext,
  useEffect
} from "react";

import StatsCard from "./components/StatsCard";
import ErrorBoundary from "./components/ErrorBoundary";
import Modal from "./components/Modal";
import WorkoutTracker from "./components/WorkoutTracker";

import { ThemeContext } from "./context/ThemeContext";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, updateProduct } from "./redux/productSlice";

const CourseDetails = lazy(() =>
  import("./components/CourseDetails")
);
const InstructorProfile = lazy(() =>
  import("./components/InstructorProfile")
);

function BrokenComponent() {
  throw new Error("Crash!");
}

function App() {
  const [view, setView] = useState("");
  const [open, setOpen] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

  // Redux
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div
      style={{
        background: theme === "dark" ? "#222" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <h1>React Advanced + Hooks & State Management</h1>

      {/* Theme Toggle */}
      <button onClick={toggleTheme}>Toggle Theme</button>

      <hr />

      {/* Lazy Loading */}
      <button onClick={() => setView("course")}>
        View Course Details
      </button>

      <button onClick={() => setView("instructor")}>
        View Instructor Profile
      </button>

      <Suspense fallback={<h3>Loading...</h3>}>
        {view === "course" && <CourseDetails />}
        {view === "instructor" && <InstructorProfile />}
      </Suspense>

      <hr />

      {/* Pure Component */}
      <h2>Pure Component Example</h2>
      <StatsCard title="Users" value={100} />
      <StatsCard title="Orders" value={200} />
      <button onClick={() => alert("Simulated update!")}>
        Simulate Update
      </button>

      <hr />

      {/* Portal */}
      <h2>Portal Example</h2>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      {open && (
        <Modal>
          <h3>This is a Portal Modal</h3>
          <button onClick={() => setOpen(false)}>Close</button>
        </Modal>
      )}

      <hr />

      {/* Error Boundary */}
      <h2>Error Boundary Example</h2>
      <ErrorBoundary>
        <BrokenComponent />
      </ErrorBoundary>

      <hr />

      {/* Workout Tracker */}
      <WorkoutTracker />

      <hr />

      {/* Redux Products */}
      <h2>Redux Products</h2>

      {products.map(product => (
        <div key={product.id}>
          {product.name}
          <button
            onClick={() =>
              dispatch(
                updateProduct({
                  id: product.id,
                  name: product.name + " Updated"
                })
              )
            }
          >
            Update
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;