import React, { useState } from "react";

function withLoader(WrappedComponent) {
  return function EnhancedComponent(props) {

    const [loading, setLoading] = useState(false);

    if (loading) {
      return (
        <div className="text-center mt-5">
          <h3>Loading...</h3>
        </div>
      );
    }

    return (
      <WrappedComponent
        {...props}
        setLoading={setLoading}
      />
    );
  };
}

export default withLoader;