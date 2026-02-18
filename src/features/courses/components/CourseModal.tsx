'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Course } from '../data';

export default function CourseModal({
  course,
  onClose,
}: {
  course: Course;
  onClose: () => void;
}) {
  const router = useRouter();
  const [liked, setLiked] = useState(false);

  function handleEnroll() {
    onClose();
    // navigate to course details page
    router.push(`/courses/${course.slug}`);
  }

  return (
    <div className='modal open' role='dialog' aria-modal='true'>
      <div className='modal-backdrop' onClick={onClose} />
      <div className='modal-panel' role='document'>
        <button className='modal-close' aria-label='Close' onClick={onClose}>
          ×
        </button>
        <div className='modal-content'>
          <div style={{ minHeight: 200 }}>
            <Image
              src={course.image}
              alt={course.title}
              width={420}
              height={260}
              className='course-image'
            />
            <h2 className='course-title'>{course.title}</h2>
            <div className='course-duration'>{course.duration}</div>
            <div className='course-desc'>{course.description}</div>
          </div>

          <div className='modal-sections'>
            <div className='modal-sections-left'>
              <div className='section'>
                <div className='section-title'>Target Audience</div>
                <ul className='course-list'>
                  <li>Beginners wanting hands-on practice</li>
                  <li>Engineers exploring applied workflows</li>
                </ul>
              </div>
            </div>

            <aside
              className='modal-sections-right'
              aria-label='Course contents'
            >
              <div className='section-title'>Course Contents</div>
              <ol className='course-list'>
                <li>Module 1 — Introduction & setup</li>
                <li>Module 2 — Core techniques</li>
              </ol>
            </aside>
          </div>
        </div>

        <div className='course-footer'>
          <button className='enroll-btn' onClick={handleEnroll}>
            Enroll now
          </button>
          <div
            className={`heart ${liked ? 'liked' : ''}`}
            role='button'
            tabIndex={0}
            aria-pressed={liked}
            onClick={() => setLiked((v) => !v)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setLiked((v) => !v);
            }}
          >
            {liked ? '♥' : '♡'}
          </div>
        </div>
      </div>
    </div>
  );
}
