import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import Button from '@mui/material/Button'
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';
import IconButton from '@mui/material/IconButton';


import Nix from '../Photos/637880558264506587.jpeg'

export default function TitlebarImageList() {
    return (
        <ImageList sx={{ width: 500, height: 450 }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                  <Button />
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
  
  
  const itemData = [
    {
        img: Nix,
        title: 'Nix',
        class: 'Warlock',
      },
  ];