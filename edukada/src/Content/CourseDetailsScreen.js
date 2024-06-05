import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const Course = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const COURSES_DATA = [
      { id: 1, title: 'Mathematics', image: '/assets/math.png', path: '/mathematics', content: 'Mathematics is the study of numbers, quantities, shapes, and patterns. It is a fundamental subject that underpins many aspects of daily life and is essential for understanding advanced concepts in science, engineering, and finance.' },
      { id: 2, title: 'Science', image: '/assets/science.png', path: '/science', content: 'Science is the systematic study of the natural world through observation and experimentation. It encompasses a wide range of disciplines, including biology, chemistry, physics, and earth sciences, and plays a crucial role in technological advancements and solving real-world problems.' },
      { id: 3, title: 'History', image: '/assets/history.png', path: '/history', content: 'History is the study of past events, cultures, and societies. It helps us understand how the world has evolved over time and provides insights into the origins of different civilizations, political systems, and cultural traditions.' },
      { id: 4, title: 'English', image: '/assets/english.png', path: '/english', content: 'English is a global language that is essential for communication, business, and cultural exchange. It encompasses a wide range of skills, including reading, writing, speaking, and listening, and is vital for success in academic and professional settings.' },
    ];

    setCourses(COURSES_DATA);
  }, []);

  const handleCourseClick = (coursePath) => {
    navigate(coursePath);
  };

  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Course Learning Materials
      </Typography>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {courses.map((course) => (
          <div
            key={course.id}
            style={{
              width: '40%',
              padding: '10px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              marginLeft: 80,
            }}
          >
            <button
              onClick={() => handleCourseClick(course.path)}
              style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}
            >
              <img
                src={course.image}
                alt={course.title}
                style={{
                  width: '50%',
                  borderRadius: '10px',
                  marginBottom: '5px',
                  margin: '0 auto',
                  transition: 'transform 0.3s ease',
                }}
                // Add hover effect
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" style={{ fontWeight: 'bold', textAlign: 'center', flex: 1 }}>
                {course.title}
              </Typography>
              <Typography variant="body2" style={{ textAlign: 'justify' }}>
                {course.content}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <Typography variant="body1" style={{ marginTop: '20px' }}>
        For more information about each course, please click on the respective course image.
      </Typography>
    </div>
  );
};

export default Course;
