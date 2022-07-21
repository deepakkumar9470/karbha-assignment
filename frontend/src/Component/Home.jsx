import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import toast from 'react-hot-toast'
import axios from "axios";


const Home = ({user}) => {
	const [data,setData] = useState([])
	const [query,setQuery] = useState("")
	const [loading, setLoading] = useState(false);
	 

    useEffect(() => {
	 const fetchData = async  () =>{
		setLoading(true)
		try {
			const res = await axios.get('http://mmb.karbh.com/api/v1/categories')
			console.log(res.data)
			setData(res.data)
			setLoading(false)
		} catch (error) {
			console.log(error)
		}
	 }

	 fetchData()
	}, [])
	



    const handleLogout = () => {
		localStorage.removeItem("token");
		toast.success('Logout Successfully')
		window.location.reload();
	};

	const handleSearch = async (e) =>{
		e.preventDefault()
          try {
			const res = await axios.get(`http://mmb.karbh.com/api/v1/categories?q=${query}`)
			setData(res.data)
			setQuery("")
		  } catch (error) {
			console.log(error)
		  }
	}

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>MERN AUTH </h1>
                {!user ? 
				<>
				 <Link to="/login" className={styles.link}>
					Login
				</Link>
                <Link to="/register" className={styles.link}>
					Register
				</Link>
				</>: 
				<button className={styles.white_btn} onClick={handleLogout}>
				Logout
			</button>
				}
				
			</nav>

			<h1 className={styles.heading}>Welcome to Dashboard</h1>
          
			 {query ? <h1 className={styles.heading}>{query}</h1> && 
			   localStorage.setItem('items', query) : ''
			 }
				
				<input
					type="text"
					onChange={(e)=> setQuery(e.target.value)}
					placeholder="Search by name.."
					className={styles.input}
						/>
			

			{loading ? (
					<h4>Loading ...</h4>
				    ) : (
					data
					.filter((value) => {
						if (query === "") {
						return value;
						} else if (
						value.name.toLowerCase().includes(query.toLowerCase())
						) {
						return value;
						}
					})
					.map((item) => 
						<div className={styles.cat} key={item.id}>
							<div className={styles.inner}>
							<p  className={styles.p}>{item.name}</p>
							<img src={item.image} alt="myimage" />
							</div>
						</div>
					)
				)}
					</div>
	);
}

export default Home
