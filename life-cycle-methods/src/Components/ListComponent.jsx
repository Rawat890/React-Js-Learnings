import React, { Component } from "react";

class ListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Item 1", "Item 2", "Item 3"],
    };
    this.listRef = React.createRef();
  }

  // This method is called right before the update happens
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // We only want to track scroll position when new items are added
    if (prevState.items.length < this.state.items.length) {
      // Capture the scroll position before the update
      const list = this.listRef.current;
      return list.scrollTop;
    }
    return null;
  }

  // This method is called after the render but before the DOM is painted
  componentDidUpdate(prevProps, prevState, snapshot) {
    // snapshot contains the scroll position from getSnapshotBeforeUpdate
    if (snapshot !== null) {
      // After the DOM has updated, scroll back to the previous position
      const list = this.listRef.current;
      list.scrollTop = snapshot;
    }
  }

  addItem = () => {
    this.setState((prevState) => ({
      items: [...prevState.items, `Item ${prevState.items.length + 1}`],
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.addItem}>Add Item</button>
        <div
          ref={this.listRef}
          style={{
            height: "100px",
            overflowY: "auto",
            border: "1px solid #000",
          }}
        >
          <ul>
            {this.state.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ListComponent;
