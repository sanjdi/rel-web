import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Edge Learning',
  description: 'Job-focused online courses, projects and mentor support',
};

export default function Home() {
  return (
    <main>
      <div className='hero'>
        <div className='hero-overlay'>
          <div className='hero-content'>
            <small>Ready to start your dream career?</small>
            <h1>Grow with</h1>
            <h1>Real Edge Learning</h1>
            <div className='hero-divider' />
            <p>
              Practical, job-focused online courses designed to help you gain
              the skills and confidence to succeed.
            </p>
            <Link
              href='/courses'
              className='cta-primary'
              aria-label='Explore courses'
            >
              Take the next step today
            </Link>
            <div className='bottom-paragraph'>
              <p>
                At <span className='highlight'>Real Edge Learning</span>, we
                help you move from ambition to achievement. Our
                industry-accepted cources combine expert instruction with
                pratical, hands-on learning, so you gain real skills that
                employers value.
              </p>
            </div>
          </div>
        </div>
        <Image
          src='/images/landing_page_hero.png'
          alt='Practical role-based training'
          aria-hidden='true'
          className='hero-image'
          width={1304}
          height={885}
        />
      </div>

      <div className='container'>
        <div className='section'>
          <h2>Why learn with us?</h2>
          <div className='divider'></div>
          <ul>
            <li>
              <span className='highlight'>Job-focused training</span> – Courses
              designed around current industry needs
            </li>
            <li>
              <span className='highlight'>Learn by doing</span> – Real projects,
              tools, and scenarios you&apos;ll use at work
            </li>
            <li>
              <span className='highlight'>Expert mentors</span> – Guidance from
              professionals who know the field
            </li>
            <li>
              <span className='highlight'>Flexible study</span> – Online,
              self-paced options that fit your life
            </li>
            <li>
              <span className='highlight'>Career pathways</span> – Skills that
              open doors across multiple industries
            </li>
          </ul>
        </div>

        <div className='section'>
          <h2>What you&apos;ll gain</h2>
          <div className='divider'></div>
          <ul>
            <li>Confidence to step into a new role</li>
            <li>Practical experience, not just theory</li>
            <li>Recognised credentials</li>
            <li>A clear pathway to better opportunities</li>
          </ul>
        </div>

        <div className='section final-cta'>
          <p>
            Whether you&apos;re starting fresh, changing careers, or upgrading
            your skills,
            <span className='highlight'>
              Real Edge Learning gives you the edge to stand out.
            </span>
          </p>
          <Link
            href='/courses'
            className='cta-secondary cta-course-list'
            aria-label='View course list'
          >
            Your future starts here.
          </Link>
        </div>
      </div>
    </main>
  );
}
