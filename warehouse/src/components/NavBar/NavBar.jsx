import styled from 'styled-components';
import { NavItem } from './NavItem';
import { NavLink } from './NavLink';


// Creates a container component by styling a <nav> element
const NavContainer = styled.nav`
    background-color: #E5679B;
    padding: 2em 1em;
    font-size: 20px;
    display: flex;
    justify-content: flex-start;
`;


export const NavBar = () => {
    return (
        <NavContainer>
            <NavItem>Home</NavItem>
            <NavItem>Pets</NavItem>
            <NavItem>Medication</NavItem>
           
            <NavItem>
                <NavLink href= "somelink.com" ></NavLink>
                 For Inquiries </NavItem>
            
        </NavContainer>
       
    );
}

//need to included html link for submiitting inquires or 
// add submit inquires form on the landing page.
