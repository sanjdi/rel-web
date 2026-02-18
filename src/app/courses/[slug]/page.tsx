import { notFound } from 'next/navigation';
import { courses } from '@/features/courses/data';
import CourseDetails from '@/features/courses/components/CourseDetails';

export default async function CoursePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return notFound();

  return <CourseDetails course={course} />;
}
