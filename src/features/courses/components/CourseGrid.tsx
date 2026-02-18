import { Course } from '../data';
import CourseCard from './CourseCard';

export default function CourseGrid({
  courses,
  onOpen,
}: {
  courses: Course[];
  onOpen?: (c: Course) => void;
}) {
  return (
    <div className="grid">
      {courses.map((course) => (
        <CourseCard key={course.slug} course={course} onOpen={onOpen} />
      ))}
    </div>
  );
}
