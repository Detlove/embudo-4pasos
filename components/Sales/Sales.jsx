/* import { useState, useEffect } from 'react'
import styles from './sales.module.css'
export const Sales = () => {
  const [user, setUser] = useState({})
  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('/api')
      .then(r => r.json())
      .then(users => Object.values(users))
      .then(user => user.map(user => {
        setUser(user)
      }))
  }, [])
  return (
    <section className={styles.cont}>
      <div className={styles.text}>
        <p className={styles.t1}>
          <strong>{user.first} {user.last}</strong> se ha unido al programa desde <strong>{user.location}.</strong>
        </p>
        <p className={styles.t2}>
          <strong>{user.gender === 'male' ? 'Bienvenido' : 'Bienvenida'} {user.first}!</strong>
        </p>
      </div>
    </section>
  )
} */
