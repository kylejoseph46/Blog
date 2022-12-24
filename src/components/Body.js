import Spotify from 'react-spotify-embed'

function Body() {
    return (
        <body>
            <p>
                <span style={{ fontWeight: 'bold' }}>Week 1 Thoughts:</span><br />
                React is not as easy as I expected. I'm struggling to do the same things I was doing casually with JavaScript.
                But I'm not disheartened, I'm gonna continue trying!
            </p>
            <div className="week-one-song">
                <h4>Song of the week</h4>
                <Spotify link="https://open.spotify.com/track/4bnE1qsvaRul33kRqN318l?utm_source=generator" width="855" height="180" />
            </div>
        </body>
    )
}

export default Body