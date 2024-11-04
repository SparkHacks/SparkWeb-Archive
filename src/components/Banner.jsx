import "./styles/Banner.css"

export default function Banner() {
  const logo = {
    image: "sparkHacks2025.png",
    name: "SparkHacks 2025",
    date: "Under Construction",
    color: "#D6D6D6"
  }
  return (
    <section className="banner"  style={{backgroundColor: logo.color}}>
      <div className="banner-center">
        <img className="banner-img" src={logo.image} alt={logo.name}/>
        <div className="banner-description">
          <div className="banner-name">{logo.name}</div>
          <div className="banner-date">{logo.date}</div>
        </div>
      </div>
    </section>
  )
}