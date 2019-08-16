import React from "react";

class DataEncrypt extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log("text1--->", this.props.text1);
    return (
      <div>
        <div>
          <img src={this.props.img} className="top-img" />
        </div>

        <div className="top-box" style={this.props.style}>
          <p
            style={{
              textAlign: "center",
              paddingLeft: "26px",
              fontSize: "20px",
              color: "white"
            }}
          >
            {this.props.borderBox}
          </p>
        </div>
        <i
          class="fas fa-arrow-left"
          style={{ fontSize: "48px", color: "peru", paddingLeft: "24px" }}
          onClick={this.props.onClick}
        />
        <br />
        <i
          class="fas fa-arrow-right"
          style={{ fontSize: "48px", color: "grey", paddingLeft: "24px" }}
          onClick={this.props.onClick}
        />
        <div className="list-box" style={this.props.style1}>
          <ul>
            <li style={{margin: '0 0 3px 0'}}>{this.props.text1}</li>
            <li className="list">{this.props.text2}</li>
            <li className="list">{this.props.text3}</li>
            <li className="list">{this.props.text4}</li>
            <li className="list">{this.props.text5}</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default DataEncrypt;
