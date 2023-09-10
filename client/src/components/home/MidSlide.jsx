import { Box,styled } from "@mui/material"
import Slide from "./Slide"
const MidSlide= ({products, title, timer})=>{
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    // const adURL='https://rukminim1.flixcart.com/fk-p-flap/530/810/image/674093f0167f6014.jpg?q=20';
    return(
        <Component>
            <LeftComponent>
            <Slide 
            products={products} 
            title={title} 
            timer={timer}/>
            </LeftComponent>
            <RightComponent>
                <img src={adURL} alt="" style={{width:217}}/>
            </RightComponent>
        </Component>
    )
}

const Component =styled(Box)`
    display:flex;
`;

const LeftComponent = styled(Box)((({theme})=>({
    width: '83%',
    [theme.breakpoints.down('md')]:{
        width:'100%',
    },

})))

const RightComponent = styled(Box)(({theme})=>({
    background:'#ffffff',
    padding: '5px',
    marginTop: '10px',
    marginLeft: '10px',
    width : '17%',
    [theme.breakpoints.down('md')]:{
        display:'none',
    },
}))

export default MidSlide