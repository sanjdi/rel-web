import Image from 'next/image';
import { Course } from '../data';

export default function CourseDetails({ course }: { course: Course }) {
  return (
    <main className='container'>
      <div className='course-header'>
        <Image src={course.image} alt={course.title} width={600} height={400} />

        <h1>{course.title}</h1>
        <p>{course.duration}</p>
        <p>{course.description}</p>

        <button className='enroll-btn'>Enroll Now</button>
      </div>
    </main>
  );
}
