import React from 'react'

class DataEncrypt1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            leftarrow: '',
            rightarrow: '',
            pos: 0,
            data: ''
        };
       
    }

    componentWillMount() {
        this.setState({
            data: this.props.arr
        })
    }


    handleLeft = (index) => {
        alert("jfvjdfbvjfdvjkdfvjdkfvjdf");
        alert("bye");
        console.log("nothing is working.....")
        const temp = [...this.state.data];
        temp[index] = this.state.data[index + 1];
        temp[index + 1] = this.state.data[index];
        this.setState({
            data: temp
        })
    }

    // handleLeft = () => {
    //     alert("bye bye")
    // }

    render() {
        console.log("data--->",this.state.data)
        return (
            <div style={{ display: 'flex' }}>
                {this.state.data.map((item, index) => {
                    return (
                        <div key={index}>
                            <div><img src={item.image} className="top-img" /></div>
                            <div className="top-box" style={this.props.style}>{item.heading}</div>
                            <div className="list-box" style={{ display: 'flex' }}>
                                <ul>
                                    <li>{item.content1}</li>
                                    <li>{item.content2}</li>
                                    <li>{item.content3}</li>
                                    <li>{item.content4}</li>
                                    <li>{item.content5}</li>
                                </ul>
                                {index == this.props.arr.length - 1 ? null
                                    :
                                    <div style={{ paddingLeft: '66px' }}>
                                        <button type="button" onClick={()=>this.handleLeft(index) }>
                                            <i
                                                className="fas fa-arrow-left"
                                                style={{ fontSize: "48px", color: "peru", paddingLeft: "24px" }}
                                            />test
                                            </button>
                                        <br />
                                        <i
                                        class="fas fa-arrow-right"
                                            style={{ fontSize: "48px", color: "grey", paddingLeft: "24px" }}
                                        />
                                    </div>
                                }
                            </div>


                        </div>

                    )

                })
                }
            </div>
        )
    }
}
export default DataEncrypt1;
