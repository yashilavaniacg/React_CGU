import { useState } from 'react'
import './ProfileCard.css'

const skills = [
  { id: 1, name: 'HTML' },
  { id: 2, name: 'CSS' },
  { id: 3, name: 'OpenCV' },
  { id: 4, name: 'Matplotlib' },
  { id: 5, name: 'Streamlit' },
]

const longBio =
  'I enjoy building modern web applications, exploring computer vision with OpenCV, creating data visualizations using Matplotlib, and developing interactive applications with Streamlit.'

function ProfileCard({ name, bio, status }) {
  const [likes, setLikes] = useState(0)
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="card">
      {/* Avatar */}
      <div className="avatar">{name.charAt(0)}</div>

      {/* Name & status */}
      <h2 className="card-name">{name}</h2>
      <span className="card-status">{status}</span>

      {/* Short bio */}
      <p className="card-bio">{bio}</p>

      {/* Show More / Show Less */}
      <div className="bio-extra">
        {showMore && <p className="card-bio long-bio">{longBio}</p>}
        <button
          className="btn-toggle"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>

      {/* Skills */}
      <div className="skills-section">
        <h3 className="skills-title">Skills</h3>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill.id} className="skill-tag">
              {skill.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Like button */}
      <div className="like-section">
        <button className="btn-like" onClick={() => setLikes((prev) => prev + 1)}>
          Like
        </button>
        <span className="like-count">{likes} {likes === 1 ? 'like' : 'likes'}</span>
      </div>
    </div>
  )
}

export default ProfileCard
