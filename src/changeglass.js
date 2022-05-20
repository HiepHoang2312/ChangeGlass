import React, { Component } from 'react';
import Styles from './changgeglass.module.css'
import Modelhuman from './assets/img/glassesImage/model.jpg'
import g1 from "./assets/img/glassesImage/g1.jpg"
import g2 from "./assets/img/glassesImage/g2.jpg"
import g3 from "./assets/img/glassesImage/g3.jpg"
import g4 from "./assets/img/glassesImage/g4.jpg"
import g5 from "./assets/img/glassesImage/g5.jpg"
import g6 from "./assets/img/glassesImage/g6.jpg"
import g7 from "./assets/img/glassesImage/g7.jpg"
import g8 from "./assets/img/glassesImage/g8.jpg"
import g9 from "./assets/img/glassesImage/g9.jpg"
import v1 from "./assets/img/glassesImage/v1.png"
import v2 from "./assets/img/glassesImage/v2.png"
import v3 from "./assets/img/glassesImage/v3.png"
import v4 from "./assets/img/glassesImage/v4.png"
import v5 from "./assets/img/glassesImage/v5.png"
import v6 from "./assets/img/glassesImage/v6.png"
import v7 from "./assets/img/glassesImage/v7.png"
import v8 from "./assets/img/glassesImage/v8.png"
import v9 from "./assets/img/glassesImage/v9.png"

class Changeglass extends Component {
    state ={
        img:v1,
    };
    ChangGlass=(styleglass)=>{
        this.setState(
            {img:styleglass}
        );
    }
    render() {
        return (
            <div>
                <div className={Styles.header}>
                    <h1>TRY GLASSES APP ONLINE</h1>
                </div>
                <div className={Styles.container}>
                    <div className={Styles.colorhelp}></div>
                    <div className={Styles.row}>

                        <div className={Styles.modelleft}>
                            <div className={Styles.modelimg}>

                            <img src={Modelhuman} alt="" />
                            <div className={Styles.glasschange}>
                                <img src={this.state.img} alt="" />
                            </div>
                            </div>
                        </div>
                        <div className={Styles.modelright}>
                            <img src={Modelhuman} alt="" />
                        </div>

                    </div>
                    <div className={Styles.glass}>
                        <div className={Styles.row}>
                            <div onClick={()=>{this.ChangGlass(v1)}}>
                                <img src={g1} alt="" />
                            </div>
                            <div onClick={()=>{this.ChangGlass(v2)}}>
                                <img src={g2} alt="" />
                            </div>
                            <div onClick={()=>{this.ChangGlass(v3)}}>
                                <img src={g3} alt="" />
                            </div>
                            <div onClick={()=>{this.ChangGlass(v4)}}>
                                <img src={g4} alt="" />
                            </div>
                            <div onClick={()=>{this.ChangGlass(v5)}}>
                                <img src={g5} alt="" />
                            </div>
                            <div onClick={()=>{this.ChangGlass(v6)}}>
                                <img src={g6} alt="" />
                            </div>
                            <div onClick={()=>{this.ChangGlass(v7)}}>
                                <img src={g7} alt="" />
                            </div>
                            <div onClick={()=>{this.ChangGlass(v8)}}>
                                <img src={g8} alt="" />
                            </div>
                            <div onClick={()=>{this.ChangGlass(v9)}}>
                                <img src={g9} alt="" />
                            </div>
                        
                        </div>
                    </div>
                    

                
                </div>
            </div>
        );
    }
}

export default Changeglass;