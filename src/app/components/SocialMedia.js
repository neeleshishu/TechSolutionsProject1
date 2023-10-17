import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialMedia = () => {
  return (
      <div className="content">
   
   <ul className="sci">
     <li>
       <a href="#">
         <TwitterIcon/>
       </a>
     </li>

     <li>
       <a href="#">
         <FacebookIcon/>
       </a>
     </li>

     <li>
       <a href="#">
         <InstagramIcon/>
       </a>
     </li>

     <li>
       <a href="#">
        <LinkedInIcon/>
       </a>
     </li>
   </ul>
 </div>
  )
}

export default SocialMedia;
