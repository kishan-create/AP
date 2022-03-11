import React from "react";
const dummy = "https://static.thenounproject.com/png/625182-200.png";
class MultipleImageUpload extends React.Component {
  state = { current: null, old: [] };
  uploadImage = e => {
    const { current, old } = this.state;

    this.setState(
      {
        current: URL.createObjectURL(e.target.files[0])
      },
      () => {
        this.setState({ old: [...old, current] });
      }
    );

    this.setState({ current: URL.createObjectURL(e.target.files[0]) });
  };
  render() {
    console.log(this.state);
    const { old} = this.state;
    return (
      <div className="App">
                 </div>
    );
  }
}
export default MultipleImageUpload;
