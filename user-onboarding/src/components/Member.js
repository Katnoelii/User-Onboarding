 import React from 'react'

export default function Member(props) {
    
     const {member} = props
     
     return (
         <div>
             <h2>{member.name}</h2>
             <p>Username: {member.username}</p>
             <p>Email: {member.email}</p>
             <p>Student Status: {member.status}</p>
         </div>
     )
 }