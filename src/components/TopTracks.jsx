import { useSpotifyProfileData } from "../contexts/SpotifyProfileProvider";
import "../styles/TopTracks.css";

export function TopTracks(){
	let {topTracks} = useSpotifyProfileData();

	if (topTracks.items && topTracks.items.length > 0){
		return (
			<div id="topTracksContainer">
				{topTracks.items.map((track) => {
					return <div className="trackCard" key={track.id}>
							<h2>{track.name}</h2>
							<img src={track.album.images[0].url} />
							<h3>By {track.artists.map(artistObj => artistObj.name).join(", ")}</h3>
							<button>
								<a href={track.external_urls.spotify} >Listen to track</a>
							</button>
						</div>
				})}
			</div>
		)
	} else {
		return (
			<div id="topTracksContainer">
				<p>Please log in to see your top tracks.</p>
			</div>
		)
	}
}