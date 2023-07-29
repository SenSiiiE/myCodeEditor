

import { AppBar, Toolbar, styled } from '@mui/material';

const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
`
const Header = () => {

    const logo = 'https://cdn.dribbble.com/users/299/screenshots/5648722/codepen-logo-gifc2.gif'

    return (
        <Container position='static'>
            <Toolbar>
                <img src={logo} alt="logo" style={{width: 40}} />
            </Toolbar>
        </Container>
    )
}

export default Header;