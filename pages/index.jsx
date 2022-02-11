
import axios from 'axios';
import { API_URL, FETCH_HEADERS } from '../libs/variables';
import Hero from "../components/Hero";
import Activities from '../components/Activities';
import Cities from '../components/Cities';
import Layout from '../components/Layouts';


export default function Home({ activities, cities }) 
{
  return (
    <Layout>
      <Hero data={cities} />     
      <Activities data={activities} />
      <Cities data={cities.slice(0,5)} />
    </Layout>
  )
}

export const getStaticProps = async () =>
{
    const activitiesRes = await axios(
      `${API_URL}activities?offset=2&limit=5`,
      {
        headers: FETCH_HEADERS
      }
    );

    const citiesRes = await axios(
      `${API_URL}cities?limit=5&without_events=yes`,
      {
        headers: FETCH_HEADERS
      }
    );

    return {
      props: {
        activities: activitiesRes.data,
        cities: citiesRes.data
      }
    };
};