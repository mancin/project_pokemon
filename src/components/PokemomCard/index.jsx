import * as React from 'react';
import { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PokemomCard({name, image, types, stats, height, weight}) {

    return (
    <Card sx={{ maxWidth: 500 }} className='css-selector card_pokemon'>

        {/* Type */}
        <Typography variant="body2" color="text.secondary" className='type_card'>
            {types[0].type.name}
        </Typography>

      <CardMedia
        className='img_card'
        component="img"
        alt={name}
        height="250"
        image={image}
      />
      <CardContent>

        {/* Atura e Peso*/}
        <Typography variant="body2" color="text.secondary" className='info_card'>
            Altura : {height / 10}m Peso : {weight / 10}kg
        </Typography>
        {/* Name */}
        <Typography gutterBottom variant="h5" component="div" className='name_card'>
          {name}
        </Typography>

        {/* HP */}
        <Typography variant="body2" color="text.secondary" className='stats_bar'>
            <Typography width={stats[0].base_stat + "%"} className='stats_hp_bar'>               
                <div>{stats[0].stat.name}: {stats[0].base_stat}</div>                
            </Typography>
        </Typography>

        {/* Attack */}
        <Typography variant="body2" color="text.secondary" className='stats_bar'>
            <Typography width={stats[1].base_stat + "%"} className='stats_attack_bar'>               
                <div>Ataque: {stats[1].base_stat}</div>                           
            </Typography>
        </Typography>

        {/* Defense */}
        <Typography variant="body2" color="text.secondary" className='stats_bar'>
            <Typography width={stats[2].base_stat + "%"} className='stats_defense_bar'>               
                <div>Defesa: {stats[2].base_stat}</div>                
            </Typography>
        </Typography>

        {/* Especial Attack */}
        <Typography variant="body2" color="text.secondary" className='stats_bar'>
            <Typography width={stats[3].base_stat + "%"} className='stats_espAttack_bar'>               
                <div>Ataque Esp: {stats[3].base_stat}</div>                
            </Typography>
        </Typography>

        {/* Especial Defense */}
        <Typography variant="body2" color="text.secondary" className='stats_bar'>
            <Typography width={stats[4].base_stat + "%"} className='stats_espDefense_bar'>               
                <div>Defesa Esp: {stats[4].base_stat}</div>                
            </Typography>
        </Typography>
      </CardContent>
      
    </Card>
  );
}
