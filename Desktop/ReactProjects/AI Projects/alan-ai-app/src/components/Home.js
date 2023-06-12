import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

function Home() {
    return (
        <>
            <Box sx={{ margin: { xs: '8%', lg: "3%" } }}>

                <Grid container spacing={2}>
                    <Grid item lg={4} md={6} sm={12}>
                        <Paper elevation={2} sx={{padding:'10px'}} >
                            <Typography textAlign='center' mb='20px'fontFamily='cursive'>
                                SEARCH NEWS BY SOURCES
                            </Typography>
                            <Typography variant='body2'textAlign='center'>Get Latest News from your favorite sources like bbc-news,cnn,fox-news,cbc-news,cbs-news,abc-news,espn,entertainment-weekly,financial-post, fortune, google-news<br/>{''}<br/>
                            </Typography>
                            <Typography textAlign='center' variant='body2' fontWeight={1000} fontSize='12px'>
                               <span style={{color:'red'}}>Hint example:</span> <br/> "I want news from bbc news"<br/>
                                "I want news from cnn." <br/>{''}
                                <br/>Alan was programed to understand this command for proper connection with the API
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item lg={4} md={6} sm={12}>
                        <Paper elevation={2} sx={{padding:'10px'}}>
                            <Typography textAlign='center' fontFamily='cursive' mb='20px'>
                                SEARCH NEWS BY CATEGORY
                            </Typography>
                            <Typography variant='body2'textAlign='center'>Get news based on searched catergories.<br/>Available categories are: sports, business, science, health, technology, entertainment.
                            </Typography><br/>
                            <Typography textAlign='center' variant='body2' fontWeight={1000} fontSize='12px'>
                               <span style={{color:'red'}}>Hint example:</span> <br/> "show me business news"<br/>
                                "I want business news." <br/>"show me (category) news".<br/><br/>
                                Alan was programed to understand this command for proper connection with the API
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item lg={4} md={12} sm={12}>
                        <Paper elevation={2} sx={{padding:'10px'}}>
                            <Typography textAlign='center' fontFamily='cursive' mb='20px'>
                                SEARCH NEWS BY COUNTRY
                            </Typography>
                            <Typography variant='body2'textAlign='center'>Know the latest happenings globally<br/> by selecting the country.We have news coverage for almost every country of the world.
                            </Typography><br/>
                            <Typography textAlign='center' variant='body2' fontWeight={1000} fontSize='12px'>
                               <span style={{color:'red'}}>Hint example:</span> <br/>Display news from Russia<br/>
                                "Show news from USA." <br/>"show news from (country)".<br/> {''}<br/>
                                Alan was programed to understand this command for proper connection with the API
                            </Typography>
                        </Paper>
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}

export default Home