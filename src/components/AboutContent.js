import videoEdit from "../assets/videoEdit.jpg";
import studio from "../assets/studio.jpg";
import pro from "../assets/pro.jpg";
import own from "../assets/own.jpg";

export default function AboutContent() {
  const businessTimeline = [
    {
      id: 0,
      title: "videoEdit",
      url: videoEdit,
      date: "2008",
      text:
        "I started to make video editing as freelancer at 2008. That was my first job",
    },
    {
      id: 1,
      title: "studio",
      url: studio,
      date: "2010",
      text:
        "After a few video editing jobs as a freelancer, I decided to get a professional job and applied as an intern at a Imaginary studio.",
    },
    {
      id: 2,
      title: "pro",
      url: pro,
      date: "2012",
      text:
        "With the experience I gained for 2 years, I started to work as a professional photographer in the Collezzium studio.",
    },
    {
      id: 3,
      title: "own",
      url: own,
      date: "2017",
      text: "I resigned from my full time job and started my own studio.",
    },
  ];
  return (
    <section className="about-section">
      {businessTimeline.map((businessItem) => (
        <div className="row" key={businessItem.id}>
          <div className="wrapper">
            <div className="img-col">
              <img src={businessItem.url} alt={businessItem.title} />
            </div>
            <div className="date">{businessItem.date}</div>
            <div className="text-col">
              <p className="mb-0">{businessItem.text}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="reminder">
        I have to remind you that John Doe is a fictional character.
      </div>
    </section>
  );
}
