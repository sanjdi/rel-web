"use client";

import { useState } from 'react';
import { courses } from '@/features/courses/data';
import CourseGrid from '@/features/courses/components/CourseGrid';
import CourseModal from '@/features/courses/components/CourseModal';
import type { Course } from '@/features/courses/data';

export default function CoursesPage() {
  const [selected, setSelected] = useState<Course | null>(null);

  return (
    <main className="container">
      <CourseGrid courses={courses} onOpen={(c) => setSelected(c)} />
      {selected && (
        <CourseModal course={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
}
