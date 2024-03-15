export default function Home() {
  return (
    <>
      <div id="welcome-banner">
      <h1>Welcome to BeatMatchApp!</h1>
      <h3>Leave the crate digging to us!</h3>
      </div>
      <form action="sumbit">
        <h2></h2>
        <textarea name="spotifylink" id="spotifylink" defaultValue="Enter Spotify URL" cols={30} rows={10} />
        <br />
        <button>Start Digging</button>
      </form>
    </>
  );
}
