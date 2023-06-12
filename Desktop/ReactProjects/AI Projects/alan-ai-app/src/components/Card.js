import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard({item:{author,title, description,publishedAt,url,urlToImage}}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={urlToImage?urlToImage:'No image'}
        title="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {author}
          
        </Typography>
        <p>{publishedAt.slice(0,10)}</p>
        <Typography variant="body2" color="text.secondary">
            {title}
          {description}
        </Typography>
      </CardContent>
      <CardActions>
       
        <Button size="small"><a href={url} target='_blank' rel='noopener noreferrer' style={{textDecoration:'none'}}> Read More</a></Button>
      </CardActions>
    </Card>
  );
}