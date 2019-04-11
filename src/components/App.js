import React, {Component} from "react";
// import Unsplash, {toJson} from "unsplash-js";
import {Header} from './Header'
import ImageList from './ImageList';
import {getPhotos} from "../api";

class App extends Component{
    state = {
        list: [],
        fullList:[],
    };
    performSearch = (searchName) => {
        const list = this.state.fullList;
        const result = list.filter((item)=>{return item.user.name.includes(searchName)})
        this.setState({
            list:result,
        })

}
    // handleScroll = () => {
    //     const nextList = getPhotos(this.state.nextApiUrl);
    //     nextList.then( data => {
    //         this.setState({
    //             list: data.results,
    //             data: data,
    //             nextApiUrl: data.info.next,
    //             prevApiData: data.info.prev
    //         })
    //     })
    // }
    async componentDidMount() {
        const total = 100;
        let list = [];
        if (list.length<total) list = await getPhotos(list.length);

        this.setState({
            list: list,
            fullList:list
        })
    }
    render(){
        const list = this.state.list;
        return (
            <>
                <Header handleSubmit={this.performSearch}/>
                <ImageList images={this.state && list}/>
            </>
        )
    }
}


export default App;
