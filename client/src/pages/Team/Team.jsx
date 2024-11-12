import React from "react";
import "./Team.css"; // Optional: Link to a CSS file for styling if needed

const teamMembers = [
  {
    id: 1,
    name: "Adrien Dupont",
    role: "Project Manager",
    photo: "/path/to/photo1.jpg",
    description:
      "Experienced in leading digital projects with a focus on small businesses.",
  },
  {
    id: 2,
    name: "Marie Lemarchand",
    role: "UI/UX Designer",
    photo: "/path/to/photo2.jpg",
    description:
      "Passionate about creating user-friendly and visually appealing designs.",
  },
  {
    id: 3,
    name: "Jean Martin",
    role: "Full-Stack Developer",
    photo: "/path/to/photo3.jpg",
    description:
      "Expert in both front-end and back-end development, specializing in React and Node.js.",
  },
  // Add more team members as needed
];

const Team = () => {
  return (
    <section className="team-section">
      <div className="container">
        <h2>Notre Équipe</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div className="team-card" key={member.id}>
              <img
                src={member.photo}
                alt={`${member.name} photo`}
                className="team-photo"
              />
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
