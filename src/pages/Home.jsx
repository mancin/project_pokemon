import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import PokemomCard from '../components/PokemomCard'
import { Box, Container } from "@mui/system";
import { Grid } from "@mui/material";
import axios from "axios";


export const Home = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        var endpoints = [];
        for(var i = 1; i<50; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => setPokemons(res));
    }

    const pokemonFilter = (name) => {
        var filteredPokemons = [];
        if(name == ""){
            getPokemons();
        }
        for (var i in pokemons) {
          if (pokemons[i].data.name.includes(name)) {
            filteredPokemons.push(pokemons[i]);
          }
        }
        setPokemons(filteredPokemons);
      };

    return (
        <div>
            <Navbar pokemonFilter={pokemonFilter}/>

            <Grid className='banner_topo'>
                <div className='banner-img'>
                    <img src="/assets/pokemon_banner.jpg" alt=""/>
                </div>
                
            </Grid>
            <Container maxWidth="xg">
                <Grid container spacing={3}>
                    {pokemons.map((pokemon, key) => (
                        <Grid item xs={3} key={key}>
                            <PokemomCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} stats={pokemon.data.stats} height={pokemon.data.height} weight={pokemon.data.weight}/>
                        </Grid>
                    )
                    )}                              
                </Grid>
            </Container>         
        </div>
        
    )
}