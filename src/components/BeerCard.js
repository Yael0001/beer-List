import React, { useState } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Tooltip from '@material-ui/core/Tooltip';

const BeerCard = (item, key) => {
    const [isFullText, setIsFullText] = useState(false);

    const InfoTooltip = withStyles(() => ({
        tooltip: {
          width: 140,
          fontSize: 13,
          textAlign: 'center'
        }
      }))(Tooltip);

    const toggleFullText = () => {
        setIsFullText(!isFullText);
    }

    const getTextForInfoTip = (ingredients)=> {
        const keys = Object.keys(ingredients);
        return "ingredients: "+ keys.join(", ");
    }

    const getItemDescription = (text) => {
        return isFullText ? text : text.slice(0, 70).trim()+"...";
    }

    return (
        <div key={key} className='beer-item'>
            <InfoTooltip title={getTextForInfoTip(item.item.ingredients)} arrow placement='top'>
            <div className='item-pic'> 
                <img src={item.item.image_url} alt={item.item.name}></img>
            </div>
            </InfoTooltip>
            <div className='item-details'>
                <h3>{item.item.name}</h3>
                <h4>{item.item.tagline}</h4>
                <span>{getItemDescription(item.item.description)}</span>
                <span onClick={toggleFullText} className="read-more-less">
                    {isFullText ? " less" : " more"}
                </span>   
            </div>
        </div>
    )
}

export default BeerCard