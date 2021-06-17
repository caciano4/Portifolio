import React from 'react'
import AreaBlock from "./styleBlock";

const Block = ({firstImage, secondImage, firstTitle, secondTitle, firstDescription, secondDescription }) => {
    return (
        <AreaBlock>
            <ul>
                <li className="item">
                    <div>
                        <h1>{firstTitle}</h1>
                        <img src={firstImage} alt=""/>
                    </div>
                    <div>
                        <p>{firstDescription}</p>
                    </div>
                </li>
                <li className="item">
                    <div>
                        <h1>{secondTitle}</h1>
                        <img src={secondImage} alt=""/>
                    </div>
                    <div>
                        <p>{secondDescription}</p>
                    </div>
                </li>
            </ul>
        </AreaBlock>
    );
}

export default Block;