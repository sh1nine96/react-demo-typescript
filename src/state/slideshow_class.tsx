import React, { cloneElement, Component, ReactElement } from "react";

type Props = {
  children: ReactElement[];
};

type State = {
  activeSlide: number;
};

class Slideshow extends Component<Props, State> {
  state = {
    activeSlide: 0,
  };

  //     constructor(props: Props) {
  //     super(props);
  //     this.state = {
  //       activeSlide: 0,
  //     };
  //   }

  previous = () => {
    // console.log("previous");
    // this.setState({
    //   activeSlide: this.state.activeSlide - 1,
    // });
    this.setState((state) => {
      return {
        activeSlide: Math.max(state.activeSlide - 1, 0),
      };
    });
  };

  next = () => {
    // console.log("next");
    // this.setState({
    //   activeSlide: this.state.activeSlide + 1,
    // });
    this.setState((state) => {
      return {
        activeSlide: Math.min(
          state.activeSlide + 1,
          this.props.children.length - 1
        ),
      };
    });
  };

  render() {
    const { activeSlide } = this.state;
    const { children } = this.props;
    return (
      <>
        <div style={{ float: "right" }}>
          <button onClick={this.previous}>previous</button>
          <button onClick={this.next}>next</button>
        </div>
        {cloneElement(children[activeSlide], {
          page: {
            current: activeSlide + 1,
            total: children.length,
          },
        })}
      </>
    );
  }
}

export default Slideshow;
