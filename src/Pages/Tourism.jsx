import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Tourism = () => {
    const[DataFromAPI, setDataFromAPI] = useState([])
    const fetchData = async () => {
        const responseFromServer = await axios.get("https://react-blog-backend-data.herokuapp.com/data");
        setDataFromAPI(responseFromServer.data);
      };
      useEffect(() => {
        fetchData();
      },[]);
    return (
        <div>
            <div className='Header'>Tourism</div>
            <hr id="harizondal" /><br></br><br></br>
            <div>
                <div className="LeftSide">
                    {
                        DataFromAPI.filter((DataFromAPI) => DataFromAPI.category === "Tourism").map((DataFromAPI) => (
                            <>
                                <div className="leftSideContent">
                                    <div key={DataFromAPI.id}>
                                        <Link to={`/${DataFromAPI.id}`}>
                                            <img src={DataFromAPI.image} alt=' ' className="imageLeftSide" />
                                        </Link>
                                        <div className="leftSideRight">
                                            <div><h3 className="titleLeftSide">{DataFromAPI.title}</h3></div>
                                            <div><p className="descriptionLeftSide">{DataFromAPI.descriptionSmall}</p></div>
                                            <div><p className="categoryLeftSide">{DataFromAPI.category}</p></div>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr> <br></br>
                            </>
                        ))
                    }
                </div>
                <div className="RightSide">
                    <div className="Header">Top Posts</div>
                    <hr id="harizondalRight" /><br></br><br></br>
                    {
                        DataFromAPI.filter((DataFromAPI) => DataFromAPI.category === "Tourism").map((DataFromAPI) => (
                            <>
                                <div className="rightSideContent">
                                    <div key={DataFromAPI.id}>
                                        <Link to={`/Tourism/${DataFromAPI.id}`}>
                                            <img src={DataFromAPI.image} alt=' ' className="imageRightSide" />
                                        </Link>
                                        <div className="rightSideRight">
                                            <div><h3 className="titleRightSide">{DataFromAPI.title}</h3></div>
                                            <div><p>Category:<span className="categoryRightSide">{DataFromAPI.category}</span></p></div>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr><br></br>
                            </>
                        ))
                    }
                    <div id="advertisement">Advertisement</div>
                </div>
            </div>
        </div>
    )
}

export default Tourism;