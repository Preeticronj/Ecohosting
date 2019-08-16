import React from 'react'

class DataEncrypt1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            leftarrow:'',
            rightarrow:'',
            pos:0
        }
    }



    // handleLeft=()=>{
    //     this.setState(prevState => {
    //         let data = [...prevState.this.props.arr];
        
    //         let temp = this.props.arr[pos-1];
    //        this.props.arr.data[pos-1] = this.props.data[index];
    //         data[index] = temp;
        
    //         return { data };
    //     })
    // }

  
//  handleRight=(index)=> {
//     this.setState(prevState => {
//         let data = [...prevState.this.props.arr];
    
//         let temp = this.props.arr[index-1];
//         this.props.arr[index-1] = this.props.arr[index];
//         this.props[index] = temp;
    
//         return { data };
//     })
//     }
//  componentWillReceiveProps(nextProps){
//      alert("props")
//  this.setState({
//     data:nextProps.arr 
//  })
//  }

// handleLeft=()=>{
//     alert("hello")
    
//     for(let i=0;i<this.props.arr.length;i++){
//     // console.log("length",this.props.arr.length)
//        console.log("index",i)
//         this.handleCheck(i)

//     }
// }






handleLeft=()=>{
    // console.log("index--->",index)
    alert("bye")
//     this.setState(prevState => {
//         console.log("props",this.props.arr[index])
//         let data = this.props.arr;
//         let temp = this.props.arr[index]
//         console.log("temp---->",temp)
//         this.props.arr[index] = this.props.arr[index+1];
//         this.props.arr[index+1] = temp;
//         return temp 
//     }, () =>  {
//         console.log("state =======>>>>>>", this.temp)
//     })
    
//    console.log("data--->",this.state.data)
   

}
    render(){
        
        console.log("arrr----->",this.props.arr)
        return(
            <div style={{display:'flex'}}>
       {this.props.arr.map((item,index)=>{
           return(
               <div>
            <div><img src={item.image}className="top-img"/></div>
            <div className="top-box" style={this.props.style}>{item.heading}</div>
            <div className="list-box" style={{display:'flex'}}>
                <ul>
                 <li>{item.content1}</li>   
                 <li>{item.content2}</li>
                 <li>{item.content3}</li>
                 <li>{item.content4}</li>
                 <li>{item.content5}</li>
            </ul>
            {index == this.props.arr.length-1 ? null
                     : 
                    <div style={{paddingLeft:'66px'}}>
          <button  onClick={this.handleLeft}>     
          <i
          class="fas fa-arrow-left"
          style={{ fontSize: "48px", color: "peru", paddingLeft: "24px" }}
       
        /></button> 
        <br />
        <i
          class="fas fa-arrow-right"
          style={{ fontSize: "48px", color: "grey", paddingLeft: "24px" }}
        // onClick={()=> {this.handleLeft(index)}}
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
export default DataEncrypt1