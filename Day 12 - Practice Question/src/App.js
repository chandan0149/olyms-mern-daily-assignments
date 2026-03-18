import React, { useState, Suspense, lazy } from "react";
import StatsCard from "./components/StatsCard";
import ErrorBoundary from "./components/ErrorBoundary";
import Modal from "./components/Modal";

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

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Advanced Concepts</h1>

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
    </div>
  );
}

export default App;