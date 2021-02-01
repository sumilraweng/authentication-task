import { Component } from "react";

// protectRoute
// Security

export default function withProtectRouter(WrappedComponent) {
  return class extends Component {
    render() {
      return <WrappedComponent />;
    }
  };
}
