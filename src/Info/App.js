import React from "react";
import InfoForm from './form';
import InfoTable from './Table';
import axios from 'axios';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            editData: []
        }
    }
    componentDidMount() {
        this.getAll();
    }
    getAll() {
        axios.get("http://localhost:5000/info").then(res => {
            // console.log(res.data);
            this.setState({
                data: res.data
            })
        })
    }
    create = data => {
        // console.log(data);
        if (!data.isEdit) {
            axios.post("http://localhost:5000/info", data).then(res => {
                // console.log(res);
                this.getAll();
            })
        } else {
            axios.put("http://localhost:5000/info/update", data).then(res => {
                console.log(res);
                this.getAll();
            })
        }
    }

    update = data => {
        // console.log(data);
        this.setState({
            editData: data
        });
        
    }
    del=data=>{
        // console.log("DEL :", data);
        var option=window.confirm(`Are You Sure want to delete ${data.Name}`)
        //console.log("Option :", option);
        if(option){
            axios.delete(`http://localhost:5000/info/del/${data._id}`).then(res=>{
               // console.log("DELETE :", res);
                this.getAll();
            })
        }
    }
    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <InfoForm myData={this.create} setForm={this.state.editData} />
                    </div>
                    <div className="col-md-6">
                        <InfoTable getData={this.state.data} setData={this.update} del={this.del} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;