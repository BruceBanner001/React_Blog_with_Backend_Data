import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Food = () => {
    const[data, setData] = useState([])
    const fetchData = async () => {
        const responseFromServer = await axios.get("https://react-blog-backend-data.herokuapp.com/data");
        setData(responseFromServer.data);
      };
      useEffect(() => {
        fetchData();
      },[]);
    return (
        <div>
            <div className='Header'>Food</div>
            <hr id="harizondal" /><br></br><br></br>
            <div>
                <div className="LeftSide">
                    {
                        data.filter((data) => data.category === "Food").map((data) => (
                            <>
                                <div className="leftSideContent">
                                    <div key={data.id}>
                                    <Link to={`/Food/${data.id}`}>
                                            <img src={data.image} alt=' ' className="imageLeftSide" />
                                        </Link>
                                        <div className="leftSideRight">
                                            <div><h3 className="titleLeftSide">{data.title}</h3></div>
                                            <div><p className="descriptionLeftSide">{data.descriptionSmall}</p></div>
                                            <div><p className="categoryLeftSide">{data.category}</p></div>
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
                        data.filter((data) => data.category === "Food").map((data) => (
                            <>
                                <div className="rightSideContent">
                                    <div key={data.id}>
                                        <Link to={`/Food/${data.id}`}>
                                            <img src={data.image} alt=' ' className="imageRightSide" />
                                        </Link>
                                        <div className="rightSideRight">
                                            <div><h3 className="titleRightSide">{data.title}</h3></div>
                                            <div><p>Category:<span className="categoryRightSide">{data.category}</span></p></div>
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

export default Food;