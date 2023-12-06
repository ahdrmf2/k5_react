

const TailInputDate = ({max, rf, onChange}) => {
  return (
    <div>
      <input type="date" 
              max={max}
              ref={rf}
              onChange={onChange}
              />
    </div>
  )
}

export default TailInputDate
