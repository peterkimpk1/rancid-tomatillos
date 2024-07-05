import Card from './Card'

export default function Movies({movies, handleOpen}) {
    const allMovies = movies.map(({id, poster_path, release_date,title, average_rating}) => {
    return <Card
    key={id}
    img={poster_path}
    release_date={release_date}
    title={title}
    average_rating={average_rating}
    displayMovieDetails={handleOpen}
    />
  })
  return (
    <div className='movies-wrapper'>
    {allMovies}
    </div>
  )
}


//const [viewstate, setViewstate] = useState(false)
//When "View Movie Details button is clicked"
  //viewstate === true && id gets passed to 'find' 
//{viewstate && <div>Movie Details</div>}
//Go back button sets viewstate as false 