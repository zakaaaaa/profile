import React, { useState, useEffect } from 'react';
import { ChevronDown, Brain, Code, GraduationCap, FolderOpen, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Detect active section
      const sections = ['hero', 'about', 'skills', 'swot', 'projects', 'assignments'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      fontFamily: "'Crimson Pro', serif",
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1e3e 50%, #0f1629 100%)',
      color: '#e8e9f3',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Effects */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 60%)
        `,
        pointerEvents: 'none',
        animation: 'pulse 15s ease-in-out infinite'
      }} />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'fixed',
            width: Math.random() * 4 + 1 + 'px',
            height: Math.random() * 4 + 1 + 'px',
            background: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.5 + 0.2})`,
            borderRadius: '50%',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animation: `float ${Math.random() * 20 + 10}s ease-in-out infinite`,
            animationDelay: Math.random() * 5 + 's',
            pointerEvents: 'none',
            filter: 'blur(1px)'
          }}
        />
      ))}

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1.5rem 2rem',
        background: scrollY > 50 ? 'rgba(10, 14, 39, 0.85)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
        borderBottom: scrollY > 50 ? '1px solid rgba(139, 92, 246, 0.2)' : 'none',
        transition: 'all 0.5s ease',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: "'Space Mono', monospace"
        }}>
          {'Zaka Kurnia'}
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['About', 'Skills', 'SWOT', 'Projects', 'Assignments'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              style={{
                background: 'none',
                border: 'none',
                color: activeSection === item.toLowerCase() ? '#8b5cf6' : '#e8e9f3',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500',
                padding: '0.5rem 1rem',
                transition: 'all 0.3s ease',
                position: 'relative',
                fontFamily: "'Space Mono', monospace"
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#8b5cf6';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = activeSection === item.toLowerCase() ? '#8b5cf6' : '#e8e9f3';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              {item}
              {activeSection === item.toLowerCase() && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60%',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #8b5cf6, transparent)',
                  animation: 'slideIn 0.3s ease'
                }} />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
        position: 'relative'
      }}>
        <div style={{
          opacity: scrollY > 100 ? 0 : 1,
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'opacity 0.5s ease'
        }}>
          <div style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
            margin: '0 auto 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '5px'
          }}>
            <div style={{
              width: '170px',
              height: '170px',
              borderRadius: '50%',
              overflow: 'hidden',
              background: '#1a1e3e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="/IMG_1397.JPG" 
                alt="Zaka Kurnia Rahman"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
          </div>

          <h1 style={{
            fontSize: '4.5rem',
            fontWeight: '700',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #8b5cf6 50%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'fadeInUp 1s ease',
            lineHeight: '1.2'
          }}>
            Zaka Kurnia Rahman
          </h1>

          <p style={{
            fontSize: '1.8rem',
            color: '#a5b4fc',
            marginBottom: '1rem',
            fontFamily: "'Space Mono', monospace",
            animation: 'fadeInUp 1s ease 0.2s backwards'
          }}>
            Mahasiswa Teknik Informatika
          </p>

          <div style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            background: 'rgba(139, 92, 246, 0.1)',
            border: '2px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '50px',
            marginBottom: '2rem',
            animation: 'fadeInUp 1s ease 0.4s backwards'
          }}>
            <p style={{
              fontSize: '1.2rem',
              color: '#c4b5fd',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: "'Space Mono', monospace"
            }}>
              <span style={{ fontSize: '1.5rem' }}>🤖</span>
              Konsentrasi: Artificial Intelligence
            </p>
          </div>

          <p style={{
            fontSize: '1.3rem',
            color: '#cbd5e1',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            lineHeight: '1.8',
            animation: 'fadeInUp 1s ease 0.6s backwards'
          }}>
            Passionate about exploring the frontiers of AI technology,
            <br />
            from machine learning to neural networks.
          </p>

          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            animation: 'fadeInUp 1s ease 0.8s backwards'
          }}>
            {[
              { icon: <Github size={24} />, label: 'GitHub', url: 'https://github.com/zakaaaaa' },
              { icon: <Linkedin size={24} />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/zaka-kurnia-rahman' },
              { icon: <Mail size={24} />, label: 'Email', url: 'mailto:zakakurnia@example.com' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(139, 92, 246, 0.1)',
                  border: '2px solid rgba(139, 92, 246, 0.3)',
                  color: '#8b5cf6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)';
                  e.currentTarget.style.transform = 'scale(1.1) rotate(10deg)';
                  e.currentTarget.style.borderColor = '#8b5cf6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          style={{
            position: 'absolute',
            bottom: '3rem',
            background: 'none',
            border: 'none',
            color: '#8b5cf6',
            cursor: 'pointer',
            animation: 'bounce 2s ease-in-out infinite'
          }}
        >
          <ChevronDown size={40} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" style={{
        minHeight: '100vh',
        padding: '8rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              background: 'rgba(139, 92, 246, 0.1)',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.9rem',
              color: '#a5b4fc'
            }}>
              TENTANG SAYA
            </div>
            <h2 style={{
              fontSize: '3.5rem',
              fontWeight: '700',
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #ffffff 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.2'
            }}>
              Perjalanan Saya di Dunia AI
            </h2>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              color: '#cbd5e1',
              marginBottom: '1.5rem'
            }}>
              Saya adalah mahasiswa Teknik Informatika yang memiliki ketertarikan mendalam
              terhadap teknologi Artificial Intelligence. Keputusan untuk mengambil konsentrasi
              AI berawal dari kekaguman saya terhadap bagaimana teknologi ini dapat mengubah
              cara kita memecahkan masalah kompleks.
            </p>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              color: '#cbd5e1'
            }}>
              Dalam perjalanan akademis saya, saya terus mengeksplorasi berbagai aspek AI,
              mulai dari machine learning, deep learning, hingga natural language processing.
              Setiap hari adalah kesempatan baru untuk belajar dan berkembang di bidang
              yang sangat dinamis ini.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem'
          }}>
            {[
              { icon: <GraduationCap size={40} />, title: 'Pendidikan', desc: 'Teknik Informatika' },
              { icon: <Brain size={40} />, title: 'Konsentrasi', desc: 'Artificial Intelligence' },
              { icon: <Code size={40} />, title: 'Focus Area', desc: 'ML & Deep Learning' },
              { icon: <FolderOpen size={40} />, title: 'Projects', desc: '10+ AI Projects' }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: '2rem',
                  background: 'rgba(139, 92, 246, 0.05)',
                  border: '2px solid rgba(139, 92, 246, 0.2)',
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                  e.currentTarget.style.borderColor = '#8b5cf6';
                  e.currentTarget.style.transform = 'translateY(-10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ color: '#8b5cf6', marginBottom: '1rem' }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  fontFamily: "'Space Mono', monospace"
                }}>
                  {item.title}
                </h3>
                <p style={{ color: '#a5b4fc', fontSize: '1rem' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - 7 In-Demand AI Skills */}
      <section id="skills" style={{
        minHeight: '100vh',
        padding: '8rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ maxWidth: '1200px', width: '100%', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '50px',
            marginBottom: '1.5rem',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.9rem',
            color: '#93c5fd'
          }}>
            IN-DEMAND SKILLS
          </div>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            7 In-Demand AI Skills
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#cbd5e1',
            marginBottom: '4rem',
            maxWidth: '700px',
            margin: '0 auto 4rem'
          }}>
            Keahlian yang dibutuhkan untuk berkarir di bidang Artificial Intelligence
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            {[
              {
                number: '01',
                category: 'Statistical Programming',
                skills: ['Python', 'R', 'Julia'],
                color: '#8b5cf6',
                icon: '💻'
              },
              {
                number: '02',
                category: 'Machine Learning',
                skills: ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning'],
                color: '#3b82f6',
                icon: '🤖'
              },
              {
                number: '03',
                category: 'Deep Learning Frameworks',
                skills: ['TensorFlow', 'PyTorch', 'Keras'],
                color: '#ec4899',
                icon: '🧠'
              },
              {
                number: '04',
                category: 'Data Processing',
                skills: ['Pandas', 'NumPy', 'Data Wrangling'],
                color: '#10b981',
                icon: '📊'
              },
              {
                number: '05',
                category: 'NLP & Computer Vision',
                skills: ['NLTK', 'spaCy', 'OpenCV', 'Transformers'],
                color: '#f59e0b',
                icon: '👁️'
              },
              {
                number: '06',
                category: 'Cloud & MLOps',
                skills: ['AWS', 'Google Cloud', 'Docker', 'MLflow'],
                color: '#06b6d4',
                icon: '☁️'
              },
              {
                number: '07',
                category: 'Mathematics & Statistics',
                skills: ['Linear Algebra', 'Probability', 'Calculus'],
                color: '#8b5cf6',
                icon: '📐'
              }
            ].map((skillSet, index) => (
              <div
                key={index}
                style={{
                  padding: '2.5rem',
                  background: 'rgba(139, 92, 246, 0.05)',
                  border: '2px solid rgba(139, 92, 246, 0.2)',
                  borderRadius: '25px',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `rgba(${
                    skillSet.color === '#8b5cf6' ? '139, 92, 246' :
                    skillSet.color === '#3b82f6' ? '59, 130, 246' :
                    skillSet.color === '#ec4899' ? '236, 72, 153' :
                    skillSet.color === '#10b981' ? '16, 185, 129' :
                    skillSet.color === '#f59e0b' ? '245, 158, 11' :
                    skillSet.color === '#06b6d4' ? '6, 182, 212' :
                    '139, 92, 246'
                  }, 0.1)`;
                  e.currentTarget.style.borderColor = skillSet.color;
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: skillSet.color,
                  opacity: 0.1,
                  fontFamily: "'Space Mono', monospace"
                }}>
                  {skillSet.number}
                </div>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  {skillSet.icon}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '1.5rem',
                  color: skillSet.color,
                  fontFamily: "'Space Mono', monospace"
                }}>
                  {skillSet.category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                  {skillSet.skills.map((skill, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '0.4rem 0.9rem',
                        background: `rgba(${
                          skillSet.color === '#8b5cf6' ? '139, 92, 246' :
                          skillSet.color === '#3b82f6' ? '59, 130, 246' :
                          skillSet.color === '#ec4899' ? '236, 72, 153' :
                          skillSet.color === '#10b981' ? '16, 185, 129' :
                          skillSet.color === '#f59e0b' ? '245, 158, 11' :
                          skillSet.color === '#06b6d4' ? '6, 182, 212' :
                          '139, 92, 246'
                        }, 0.15)`,
                        borderRadius: '50px',
                        fontSize: '0.85rem',
                        color: '#e8e9f3',
                        fontFamily: "'Space Mono', monospace"
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SWOT Analysis Section */}
      <section id="swot" style={{
        minHeight: '100vh',
        padding: '8rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ maxWidth: '1200px', width: '100%', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: 'rgba(16, 185, 129, 0.1)',
            borderRadius: '50px',
            marginBottom: '1.5rem',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.9rem',
            color: '#6ee7b7'
          }}>
            ANALISIS
          </div>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #10b981 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            SWOT Analysis
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#cbd5e1',
            marginBottom: '4rem',
            maxWidth: '700px',
            margin: '0 auto 4rem'
          }}>
            Analisis diri untuk pengembangan karir di bidang Artificial Intelligence
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            {[
              {
                title: 'Strengths',
                subtitle: 'Kekuatan',
                items: [
                  'Kemampuan programming Python yang kuat',
                  'Pemahaman konsep Machine Learning',
                  'Passion dalam teknologi AI',
                  'Kemampuan problem solving'
                ],
                color: '#10b981',
                icon: '💪'
              },
              {
                title: 'Weaknesses',
                subtitle: 'Kelemahan',
                items: [
                  'Pengalaman praktis masih terbatas',
                  'Perlu peningkatan di Deep Learning',
                  'Kurang pengalaman proyek besar',
                  'Networking industri masih minim'
                ],
                color: '#ef4444',
                icon: '🎯'
              },
              {
                title: 'Opportunities',
                subtitle: 'Peluang',
                items: [
                  'Demand AI engineer yang tinggi',
                  'Banyak resources pembelajaran online',
                  'Komunitas AI yang berkembang',
                  'Program magang dan bootcamp'
                ],
                color: '#3b82f6',
                icon: '🚀'
              },
              {
                title: 'Threats',
                subtitle: 'Ancaman',
                items: [
                  'Kompetisi yang sangat ketat',
                  'Teknologi yang cepat berkembang',
                  'Standar industri yang tinggi',
                  'Kebutuhan pengalaman praktis'
                ],
                color: '#f59e0b',
                icon: '⚠️'
              }
            ].map((swot, index) => (
              <div
                key={index}
                style={{
                  padding: '2.5rem',
                  background: 'rgba(139, 92, 246, 0.05)',
                  border: '2px solid rgba(139, 92, 246, 0.2)',
                  borderRadius: '25px',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `rgba(${
                    swot.color === '#10b981' ? '16, 185, 129' :
                    swot.color === '#ef4444' ? '239, 68, 68' :
                    swot.color === '#3b82f6' ? '59, 130, 246' :
                    '245, 158, 11'
                  }, 0.1)`;
                  e.currentTarget.style.borderColor = swot.color;
                  e.currentTarget.style.transform = 'translateY(-10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ fontSize: '2.5rem' }}>{swot.icon}</div>
                  <div>
                    <h3 style={{
                      fontSize: '1.8rem',
                      fontWeight: '700',
                      color: swot.color,
                      fontFamily: "'Space Mono', monospace",
                      marginBottom: '0.2rem'
                    }}>
                      {swot.title}
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      color: '#94a3b8',
                      fontFamily: "'Space Mono', monospace"
                    }}>
                      {swot.subtitle}
                    </p>
                  </div>
                </div>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {swot.items.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        padding: '0.8rem 0',
                        borderBottom: i < swot.items.length - 1 ? '1px solid rgba(139, 92, 246, 0.1)' : 'none',
                        fontSize: '1rem',
                        color: '#cbd5e1',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.8rem'
                      }}
                    >
                      <span style={{ color: swot.color, fontSize: '1.2rem', marginTop: '0.1rem' }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{
        minHeight: '100vh',
        padding: '8rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ maxWidth: '1200px', width: '100%', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: 'rgba(236, 72, 153, 0.1)',
            borderRadius: '50px',
            marginBottom: '1.5rem',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.9rem',
            color: '#f9a8d4'
          }}>
            PROYEK
          </div>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #ec4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Featured Projects
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#cbd5e1',
            maxWidth: '600px',
            margin: '0 auto 4rem'
          }}>
            Beberapa proyek AI yang telah saya kerjakan selama perkuliahan
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                title: 'Deteksi Jumlah Kendaraan dengan YOLO V8',
                description: 'Model YOLO Ultralytics untuk menghitung jumlah kendaraan yang lewat',
                tech: ['Pytorch', 'Ultralytics', 'CNN', 'Keras'],
                githubUrl: 'https://github.com/zakaaaaa/Vehicle-Counting-with-Yolov8.git'
              },
              {
                title: 'Analisa Penyakit Daun Selada dengan Algoritma K-Means',
                description: 'Analisis penyakit pada tanaman selada yang dilihat dari daun  menggunakan algoritma K-means',
                tech: ['Python', 'NLTK', 'Scikit-learn', 'Pandas'],
                githubUrl: 'https://github.com/zakaaaaa/Deteksi-Penyakit-Daun-Selada-Menggunakan-K-Means.git'
              },
              {
                title: 'Analisa Kelayakan Debitur',
                description: 'Analisa data kelayakan calon debitur dengan metode regresi linear',
                tech: ['Python', 'NumPy', 'Flask', 'Tensor'],
                githubUrl: 'https://github.com/zakaaaaa/Analisa-Debitur-Learning-.git'
              }
            ].map((project, index) => (
              <div
                key={index}
                style={{
                  padding: '2.5rem',
                  background: 'rgba(236, 72, 153, 0.05)',
                  border: '2px solid rgba(236, 72, 153, 0.2)',
                  borderRadius: '25px',
                  textAlign: 'left',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(236, 72, 153, 0.1)';
                  e.currentTarget.style.borderColor = '#ec4899';
                  e.currentTarget.style.transform = 'translateY(-10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(236, 72, 153, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem'
                }}>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '600',
                    color: '#ec4899',
                    fontFamily: "'Space Mono', monospace",
                    flex: 1
                  }}>
                    {project.title}
                  </h3>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '45px',
                      height: '45px',
                      background: 'rgba(236, 72, 153, 0.15)',
                      borderRadius: '50%',
                      transition: 'all 0.3s ease',
                      border: '2px solid rgba(236, 72, 153, 0.3)',
                      marginLeft: '1rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(236, 72, 153, 0.3)';
                      e.currentTarget.style.borderColor = '#ec4899';
                      e.currentTarget.style.transform = 'scale(1.1) rotate(10deg)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(236, 72, 153, 0.15)';
                      e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.3)';
                      e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                    }}
                  >
                    <Github size={22} style={{ color: '#ec4899' }} />
                  </a>
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#cbd5e1',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(236, 72, 153, 0.15)',
                        borderRadius: '50px',
                        fontSize: '0.85rem',
                        color: '#f9a8d4',
                        fontFamily: "'Space Mono', monospace"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assignments Section */}
      <section id="assignments" style={{
        minHeight: '100vh',
        padding: '8rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          maxWidth: '900px',
          width: '100%',
          textAlign: 'center',
          padding: '4rem',
          background: 'rgba(139, 92, 246, 0.05)',
          border: '2px solid rgba(139, 92, 246, 0.2)',
          borderRadius: '30px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: -50,
            right: -50,
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)'
          }} />

          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: 'rgba(16, 185, 129, 0.1)',
            borderRadius: '50px',
            marginBottom: '1.5rem',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.9rem',
            color: '#6ee7b7'
          }}>
            TUGAS & DOKUMEN
          </div>

          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #10b981 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Pengumpulan Tugas
          </h2>

          <p style={{
            fontSize: '1.3rem',
            color: '#cbd5e1',
            marginBottom: '3rem',
            lineHeight: '1.8'
          }}>

          </p>

          <a
            href="https://drive.google.com/drive/folders/1pdyi8TNiKiWrJlMpEwPst7h9AFTxaV9u?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.5rem 3rem',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
              border: 'none',
              borderRadius: '50px',
              color: '#ffffff',
              fontSize: '1.3rem',
              fontWeight: '600',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: "'Space Mono', monospace",
              boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(139, 92, 246, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 92, 246, 0.3)';
            }}
          >
            <FolderOpen size={28} />
            Buka Google Drive
            <ExternalLink size={24} />
          </a>

          <div style={{
            marginTop: '3rem',
            padding: '2rem',
            background: 'rgba(16, 185, 129, 0.05)',
            borderRadius: '20px',
            border: '1px solid rgba(16, 185, 129, 0.2)'
          }}>
            <p style={{
              fontSize: '1rem',
              color: '#6ee7b7',
              fontFamily: "'Space Mono', monospace"
            }}>
       
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '3rem 2rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(139, 92, 246, 0.2)',
        background: 'rgba(10, 14, 39, 0.5)'
      }}>
        <p style={{
          fontSize: '1.1rem',
          color: '#a5b4fc',
          fontFamily: "'Space Mono', monospace"
        }}>
          © 2024 AI Student Portfolio • Built with React.js
        </p>
        <p style={{
          fontSize: '0.9rem',
          color: '#64748b',
          marginTop: '0.5rem'
        }}>
          Passionate about AI • Always Learning • Building the Future
        </p>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=Space+Mono:wght@400;700&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(10px, -10px);
          }
          50% {
            transform: translate(-5px, -20px);
          }
          75% {
            transform: translate(-10px, -10px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        @keyframes slideIn {
          from {
            width: 0;
          }
          to {
            width: 60%;
          }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          overflow-x: hidden;
        }
        
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0a0e27;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%);
        }
      `}</style>
    </div>
  );
}