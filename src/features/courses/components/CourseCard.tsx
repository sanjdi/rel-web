'use client';

import Image from 'next/image';
import { Course } from '../data';

export default function CourseCard({
  course,
  onOpen,
}: {
  course: Course;
  onOpen?: (c: Course) => void;
}) {
  return (
    <article
      className='card'
      role='button'
      tabIndex={0}
      onClick={() => onOpen?.(course)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen?.(course);
        }
      }}
    >
      <Image src={course.image} alt={course.title} width={400} height={250} />

      <div className='card-body'>
        <div className='title'>{course.title}</div>
        <div className='duration'>{course.duration}</div>
      </div>

      <div className='overlay'>
        <p>{course.description}</p>
      </div>
    </article>
  );
}
