import {AppBar,Toolbar,styled, Box, Typography } from '@mui/material';
import { width } from '@mui/system';

//component
import Search from './Search';
import CustomButton from './CustomButton';



const StyledHeader = styled(AppBar)`
  background: #2370f4;
  height: 55px;
  }
`;

const Component = styled(Box)`
margin-left: 12%;
line-height: 0;
`;

const SubHeading = styled(Typography)`
font-size: 10px;
font-style: italic;
`;

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4

});

const CustomButtonWrapper = styled(Box)`
    margin: 0 5% 0 auto;
`


const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


    return(
            <StyledHeader>
            {/*<AppBar> */}
                <Toolbar style={{minHeight: 55}}>
                    <Component>
                        <img src={logoURL} alt="logo" style={{width: 75}}/>
                        <Box style={{display: 'flex'}}>
                            <SubHeading>Explore&nbsp;
                                <Box component="span" style={{color:'yellow'}}>Plus</Box>
                            </SubHeading>
                            <PlusImage src={subURL} alt="subLogo" />

                        </Box>
                    </Component>
                    <Search/>
                    <CustomButtonWrapper>
                        <CustomButton />
                    </CustomButtonWrapper>
                </Toolbar>
            {/* </AppBar> */}
            </StyledHeader>
    )
}

export default Header;