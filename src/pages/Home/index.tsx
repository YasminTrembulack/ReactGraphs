import { useEffect, useState } from "react"
import Header from "../../components/Header"
import  {   RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend,
            BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip
        } from 'recharts';
import api from "../../service/api";

interface HardSkill {
    competence_name: string; 
    value : number
}

interface Iperformances {
    discipline: string; 
    average : number
}

interface IDataA {
    subject: string;
    A: number
}

interface IDataB {
    discipline: string;
    grade: number
}

const Home = () => {
    const [dataA, setDataA] = useState<IDataA[]>([]); 
    const [dataB, setDataB] = useState<IDataB[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await api.get(`/api/v1/report/profile/4`)
                
                const hard_skill: HardSkill[] = response.data['hardSkills'];
                const performances: Iperformances[] = response.data['performances'];

                console.log(response.data);

                const data_a_dict: IDataA[] = hard_skill.map(u => {
                    return { subject: u['competence_name'] , A: 20 *  u['value'] == 0 ? u['value'] + 30 : u['value']};
                });

                const data_b_dict: IDataB[] = performances.map(u => {
                    return { discipline: u['discipline'] , grade: u['average']};
                });

                setDataA(data_a_dict);
                setDataB(data_b_dict)
    
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, [])

    return (
        <>
            <Header />

            <RadarChart outerRadius={100} width={730} height={310} data={dataA}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" fontSize={14} />
                <PolarRadiusAxis angle={90} domain={[-20, 20]} />
                <Radar name='Hard Skills' dataKey="A" stroke="#f51c1c" fill="#e15d5d" fillOpacity={0.3} />
                <Legend />
            </RadarChart>

            <BarChart width={600} height={300} data={dataB} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <Bar dataKey="grade" fill="#1f57ff" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="discipline" />
              <YAxis />
              <Tooltip />
            </BarChart>

        </>
    )
}

export default Home