import { Header, StyledLink } from "./SharedLayout.styled"

export const SharedLayout = () => {
    return(<>
        <Header>
            <nav>
                <StyledLink to="/" end>Home</StyledLink>
                <StyledLink to="/movies">Movies</StyledLink>
            </nav>
        </Header>
    </>)
}