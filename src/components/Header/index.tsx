import { Link } from "react-router-dom"

const Header = () => {

    return(
        <header 
            style={{ 
                display: 'flex',
                padding: "10px 30px",
                backgroundColor: "lightgreen",
                justifyContent: "space-between"
            }}
        >
            <h1>Home</h1>
            <div
                style={
                    {
                        display: "flex",
                        gap: "30px"
                    }
                }
            >
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </header>
    )
}

export default Header