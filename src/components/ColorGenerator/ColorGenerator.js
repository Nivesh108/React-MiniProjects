import { Button} from '@mui/material';
import React, { useEffect } from 'react'
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import './ColorGenerator.css'

function ColorGenerator() {
  const [color, setColor] = React.useState('rgb(255,255,255)');
  const randomRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };
  useEffect(() => {
    //document.body.style.backgroundColor = color;
    document.getElementById('x').style.backgroundColor = color;
  }, [color]);
    return (
        <div className="c-container" id='x'>
            <Button onClick={()=>{setColor(randomRgbColor())}}>Generate Color</Button>
            <div className="c-sub-container" >
              <div>{color}</div>
              <Button onClick={() => navigator.clipboard.writeText(color)}><ContentCopyRoundedIcon/></Button>
              </div>
        </div> 
    )
}

export default ColorGenerator
