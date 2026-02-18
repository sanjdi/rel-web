'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <style>
        {`.container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 60px 40px;
        background: white;
      }

      /* ================= HEADER ================= */

      .header {
        font-family: Arial, Helvetica, sans-serif;
        background: linear-gradient(
          180deg,
          rgba(14, 43, 92, 0.98),
          rgba(11, 35, 72, 0.92)
        );
        color: white;
        padding: 14px 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1304px;
        margin: 0 auto;
        position: sticky;
        top: 0;
        z-index: 1200;
        box-shadow: 0 8px 30px rgba(2, 6, 23, 0.18);
        border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        transition:
          background 0.18s ease,
          box-shadow 0.18s ease,
          padding 0.18s ease;
      }

      .logo {
        font-weight: 600;
        font-size: 20px;
        letter-spacing: 0.5px;
      }

      /* styled logo link */
      .logo a,
      .logo-link {
        color: white;
        text-decoration: none;
        display: inline-block;
        padding: 6px 10px;
        border-radius: 6px;
        font-weight: 700;
        background: transparent;
      }

      .logo a:hover,
      .logo-link:hover {
        background: rgba(255, 255, 255, 0.04);
      }

      .logo a:focus-visible,
      .logo-link:focus-visible {
        outline: 3px solid rgba(255, 255, 255, 0.14);
        outline-offset: 2px;
      }

      .nav {
        display: flex;
        gap: 18px;
        align-items: center;
        font-size: 15px;
      }

      /* parent item provides spacing and hover background so child anchors don't double-highlight */
      .nav div {
        display: inline-flex;
        align-items: center;
        padding: 8px 12px;
        border-radius: 8px;
        transition:
          background 0.18s ease,
          transform 0.12s ease,
          opacity 0.12s ease;
      }

      .nav a {
        cursor: pointer;
        opacity: 0.98;
        color: white;
        text-decoration: none;
        padding: 0; /* spacing provided by parent div */
        border-radius: 6px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }

      .nav div:hover {
        background: rgba(255, 255, 255, 0.06);
        transform: translateY(-2px);
        opacity: 1;
      }

      .nav a.active {
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.08),
          rgba(255, 255, 255, 0.03)
        );
        box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.02);
      }

      .signup {
        background: white;
        color: #0e2b5c;
        padding: 8px 14px;
        border-radius: 10px;
        font-weight: 700;
        box-shadow:
          0 6px 18px rgba(14, 43, 92, 0.12),
          inset 0 -1px 0 rgba(0, 0, 0, 0.03);
        border: 1px solid rgba(14, 43, 92, 0.06);
      }

      /* ================= HERO ================= */

      /* ================= HERO ================= */

      .hero {
        position: relative;
        height: 885px;
        /* render image at natural size (no scaling), positioned to the right */
        background-image: url('/images/landing_page_hero1.png');
        background-repeat: no-repeat;
        background-position: top left;
        background-size: 100%;
        display: flex;
        align-items: center;
        color: white;
        overflow: visible;
        max-width: 1304px;
        margin: 0 auto;
      }

      /* clickable overlay link covering hero background */
      .hero-link {
        position: absolute;
        inset: 0;
        z-index: 2; /* above overlay (z-index:1) but below content (z-index:3) */
        display: block;
        text-decoration: none;
        background: transparent;
      }

      .hero {
        cursor: pointer;
      }

      /* Dark blue overlay for readability */
      .hero-overlay {
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          rgba(14, 43, 92, 0.96) 0%,
          rgba(14, 43, 92, 0.88) 35%,
          rgba(14, 43, 92, 0.25) 65%,
          rgba(14, 43, 92, 0) 100%
        );
        display: flex;
        align-items: center;
        position: relative;
        z-index: 1;
      }

      .hero-content {
        max-width: 620px;
        padding-left: 86px;
        position: relative;
        z-index: 3;
      }

      .hero-content small {
        font-size: 20px;
        opacity: 0.95;
        font-style: italic;
        display: block;
      }

      .hero-content h1 {
        font-size: 68px;
        font-weight: 700;
        margin: 14px 0;
        line-height: 1.02;
        letter-spacing: -1px;
        text-shadow: 0 6px 18px rgba(0, 0, 0, 0.28);
      }

      .hero-divider {
        width: 140px;
        height: 3px;
        background: rgba(255, 255, 255, 0.75);
        margin: 18px 0;
        border-radius: 2px;
      }

      .hero-content p {
        font-size: 22px;
        margin-bottom: 24px;
        opacity: 0.95;
      }

      .cta-primary {
        background: linear-gradient(180deg, #ff7a2f, #f25a1b);
        color: white;
        border: none;
        padding: 16px 40px;
        font-size: 20px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 700;
        box-shadow:
          0 12px 30px rgba(242, 101, 34, 0.28),
          0 6px 12px rgba(0, 0, 0, 0.12);
        transition:
          transform 0.18s ease,
          box-shadow 0.18s ease;
      }

      .cta-primary:hover {
        transform: translateY(-4px);
        box-shadow:
          0 18px 44px rgba(242, 101, 34, 0.32),
          0 8px 18px rgba(0, 0, 0, 0.14);
      }

      /* Responsive */
      @media (max-width: 900px) {
        .hero {
          /* on small screens let the background scale to cover for legibility */
          height: 600px;
          background-position: center center;
          background-size: cover;
        }

        .hero-content {
          padding-left: 30px;
          padding-right: 20px;
        }

        .hero-content h1 {
          font-size: 40px;
        }

        .hero-content p {
          font-size: 18px;
        }
      }

      /* ================= CONTENT ================= */

      .section {
        margin-bottom: 60px;
      }

      .section h2 {
        color: #0e2b5c;
        font-size: 28px;
        margin-bottom: 10px;
      }

      .divider {
        height: 1px;
        background: #ddd;
        margin: 10px 0 25px 0;
      }

      .lead-text {
        font-size: 18px;
        color: #333;
      }

      ul {
        padding-left: 22px;
        font-size: 16px;
      }

      li {
        margin-bottom: 12px;
      }

      .highlight {
        font-weight: 600;
        color: #0e2b5c;
      }

      /* Final CTA Card */

      .final-cta {
        background: white;
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        text-align: left;
      }

      .cta-secondary {
        background: #0e2b5c;
        color: white;
        border: none;
        padding: 14px 28px;
        font-size: 16px;
        border-radius: 6px;
        margin-top: 20px;
        cursor: pointer;
        font-weight: 600;
      }

      .cta-course-list a {
        cursor: pointer;
        opacity: 0.95;
        color: white;
        text-decoration: none;
        padding: 6px 7px;
        border-radius: 6px;
        transition:
          background 0.18s ease,
          opacity 0.12s ease;
      }
      /* ================= RESPONSIVE ================= */

      @media (max-width: 900px) {
        .hero-inner {
          flex-direction: column;
          text-align: left;
        }

        .hero-text h1 {
          font-size: 40px;
        }

        .hero-image {
          text-align: center;
          margin-top: 40px;
        }

        .hero:after {
          height: 80px;
        }

        .container {
          padding: 40px 20px;
        }

        .nav {
          display: none;
        }
      }`}
      </style>
      <div className='hero'>
        <Link className='hero-link' href='/courses'>
          For Individuals
        </Link>
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
          <button className='cta-secondary cta-course-list'>
            <a href='./course_list.html'>Your future starts here.</a>
          </button>
        </div>
      </div>
    </main>
  );
}
