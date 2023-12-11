import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './style.css'
import { Select, Option } from "@material-tailwind/react";

function valuetext(value) {
  return `${value}`;
}

const Hero = () => {
  const [value, setValue] = React.useState([1000000, 1000000000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="cont">
      <div className='hero'>
          <h1 className='hero-h1 '>Yangi boshpanangizni bizdan toping!</h1>
          <p className='hero-p'>1.199.000 so'mdan boshlanadigan kvartiralar hamda istalgam tur va hajmdagi uylarni sotib oling yoki soting! </p>
          <div className="filter">
            <div className="w-72">
              <Select label="Select Version">
                <Option>Hammasi</Option>        
                <Option>Andijon</Option>        
                <Option>Buxoro</Option>           
                <Option>Farg'ona</Option>           
                <Option>Jizzax</Option>           
                <Option>Xorazm</Option>           
                <Option>Namangan</Option>           
                <Option>Qashqadaryo</Option>           
                <Option>Qoraqalpog'iston</Option>           
                <Option>Samarqand</Option>     
                <Option>Sirdaryo</Option>     
                <Option>Surxandaryo</Option>     
                <Option>Toshkent</Option>     
              </Select>
            </div>
            <div className="w-72">
              <Select label="Select Version">
                <Option>Hammasi</Option>  
                <Option>Ijaraga olish</Option>  
                <Option>Sotib olish</Option> 
              </Select>
            </div>
            <Box sx={{ width: 300 }}>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </Box>
          </div>
      </div>
    </div>
  )
}

export default Hero