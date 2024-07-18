import { StyledCard } from "../styles";

interface IRepoCardProps {
    title: string;
    description: string;
    language: string;
}

const RepoCard = ({ title, description, language }:IRepoCardProps) => {

    return(
        <StyledCard>
            <h2 style={{ fontSize: "3rem" }}>{title}</h2>
            <p>{description}</p>
            <b>{language}</b>
        </StyledCard>
    )
}

export default RepoCard