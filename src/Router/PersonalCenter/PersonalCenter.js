import React,{Component} from 'react';
import '../../asstes/PersonalCenter/PersonalCenter.css';
import Header from '../../Component/PersonalCenter/Header';
import UserInf from '../../Component/PersonalCenter/UserInf';
import Footer from '../../Component/PersonalCenter/Footer';
import TabBar from '../../Component/TabBar/TabBar';
export default class PersonalCenter extends Component {
    render(){
        return(
            <div>
                <Header/>
                <UserInf/>
                <Footer/>
                <TabBar/>
            </div>
        )
    }
}