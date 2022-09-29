import React from "react";

const Question2 = () => {
  return (
    <div className="text-xl border mb-12 px-7">
      <h1 className="font-bold">2. Props Vs State</h1>
      <h1 className="font-bold">Props</h1>
      <p>
        Props are read-only components. It is an object which stores the value
        of attributes of a tag and work similar to the HTML attributes. It
        allows passing data from one component to other components. It is
        similar to function arguments and can be passed to the component the
        same way as arguments passed in a function. Props are immutable so we
        cannot modify the props from inside the component.
      </p>
      <h1 className="font-bold">State</h1>
      <p>
        The state is an updatable structure that is used to contain data or
        information about the component and can change over time. The change in
        state can happen as a response to user action or system event. It is the
        heart of the react component which determines the behavior of the
        component and how it will render. A state must be kept as simple as
        possible. It represents the component's local state or information. It
        can only be accessed or modified inside the component or by the
        component directly
      </p>
    </div>
  );
};

export default Question2;
