import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import { height } from '@mui/system';

export default function MyCard({ user }) {
  console.log('qqq',user);
  
  const calculateAge = (dateOfBirth) => {
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  
  const age = calculateAge(user.birthday);
console.log('qqqqqqqq',age);
  return (
    <Card  sx={{ maxWidth: 300, maxHeight: 388 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://static.tvtropes.org/pmwiki/pub/images/1527763051_preview_default_giant_dad.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
         {user.firstName} 
         {/* {user.gender === 'M' ? <MaleIcon /> : <FemaleIcon /> } */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {age} Years 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}