const Course = ({courses}) => {
    return (
      <div>
        <h2>{courses.name}</h2>
        <ul>
          {courses.parts.map(part =>
            <li key={part.id}> {part.name} {part.exercises}</li>)}
        </ul>
        <Adder courses={courses} />
      </div>
    )
  }

  const Adder = ({courses}) => {
    const total = courses.parts.reduce((sum, part) => sum + part.exercises, 0);
    return (
      <h3 key={courses.parts.id}> Total of {total} exercises</h3>
    )
  }

  export default Course