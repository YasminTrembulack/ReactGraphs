import { useEffect, useState } from "react"
import Header from "../../components/Header"
// import githubApi from "../../service/githubApi";
import RepoCard from "./components/RepoCard";
import data from "../../data/data.json"
import { StyledList } from "./styles";

type TProject = {
    name: string;
    description: string;
    language: string;
}

const Projects = () => {

    const [projects, setProjects] = useState<TProject[]>([])
    const [username, setUsername] = useState<string>("")

    useEffect(() => {
        const getProjects = async () => {
            try {
                // const response = await githubApi.get(`users/${username}/repos`)
                // setProjects(response.data)
                setProjects(data)
            } catch (error) {
                setProjects([])
            }
        }
        getProjects()
    }, [username])

    return(
        <>
            <Header/>
            <input value={username} onChange={(e) => { setUsername(e.target.value) }}/>
            <StyledList>
                {
                    projects.length > 0 

                    ? projects.map( 
                        (project, index) =>
                            <RepoCard
                                key={index}
                                title={project.name}
                                description={project.description} 
                                language={project.language}
                            />
                    ) 
                    
                    : <h1>Não achei porcaria nenhuma</h1>
                }
            </StyledList>
        </>
    )
}

export default Projects