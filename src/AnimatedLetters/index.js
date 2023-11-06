import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx, val, className }) => {
  return (
    <span className={className}>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`} style={{padding: val}}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
