import React from "react";

export default class Attendance extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="flex-1">This is Attendance Page</div>
    )
  }
}
