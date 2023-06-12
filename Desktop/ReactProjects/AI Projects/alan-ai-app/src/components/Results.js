import { Grid } from '@mui/material'
import React from 'react'
import MediaCard from './Card'
const Results = ({ source, category, country }) => {
  return (
    <div >
      <Grid container spacing={2} sx={{ margin: '15px' }}>
        {source &&
          source.map((item) =>

            <Grid item lg={3} md={4} sm={6} xs={12} key={item.title}>
              <MediaCard item={item} />
            </Grid>

          )}

        {category &&
          category.map((item) =>

            <Grid item lg={3} md={4} sm={6} xs={12} key={item.title}>
              <MediaCard item={item} />
            </Grid>

          )}


        {country&&
          country.map((item) =>

            <Grid item lg={3} md={4} sm={6} xs={12} key={item.title}>
              <MediaCard item={item} />
            </Grid>

          )}
      </Grid>
    </div>

  )
}

export default Results
