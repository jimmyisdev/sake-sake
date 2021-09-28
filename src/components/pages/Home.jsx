export default function Home() {
  return (
    <section className="home">
      <div className="sec_header">
        <h1><strong>Sake Sake</strong></h1>
      </div>
      <div className="sec_body">
        <div>
          <img src={process.env.PUBLIC_URL + '/assets/home.png'}  alt="bar"/>
        </div>
      </div>
    </section>
  );
}
