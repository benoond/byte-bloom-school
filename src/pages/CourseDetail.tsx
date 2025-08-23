import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play, FileText, Code, CheckCircle, Clock, Users, Award } from "lucide-react";

const courseData = {
  "digital-literacy": {
    title: "Digital Literacy & Productivity",
    description: "Master essential computer skills, file management, email, productivity tools, and digital citizenship for modern workplace success.",
    duration: "2 weeks",
    skillLevel: "Beginner",
    totalLessons: 10,
    completedLessons: 0,
    project: "Digital Portfolio Setup",
    lessons: [
      { id: 1, title: "Computer Basics & Operating Systems", duration: "12 min", type: "video", completed: false },
      { id: 2, title: "File Management & Organization", duration: "15 min", type: "video", completed: false },
      { id: 3, title: "Internet & Email Fundamentals", duration: "14 min", type: "video", completed: false },
      { id: 4, title: "Microsoft Office Essentials", duration: "18 min", type: "video", completed: false },
      { id: 5, title: "Cloud Storage & Collaboration", duration: "13 min", type: "video", completed: false },
      { id: 6, title: "Digital Security & Privacy", duration: "16 min", type: "video", completed: false },
      { id: 7, title: "Online Research & Information Literacy", duration: "11 min", type: "video", completed: false },
      { id: 8, title: "Digital Communication Etiquette", duration: "10 min", type: "video", completed: false },
      { id: 9, title: "Productivity Apps & Tools", duration: "17 min", type: "video", completed: false },
      { id: 10, title: "Final Project: Digital Portfolio", duration: "20 min", type: "project", completed: false }
    ]
  },
  "python-foundations": {
    title: "Programming Foundations (Python)",
    description: "Learn programming concepts through Python - variables, functions, loops, and data structures. Perfect first programming language.",
    duration: "3 weeks",
    skillLevel: "Beginner", 
    totalLessons: 12,
    completedLessons: 0,
    project: "Simple Calculator App",
    lessons: [
      { id: 1, title: "Introduction to Programming & Python", duration: "15 min", type: "video", completed: false },
      { id: 2, title: "Variables & Data Types", duration: "12 min", type: "video", completed: false },
      { id: 3, title: "Input/Output & String Operations", duration: "14 min", type: "video", completed: false },
      { id: 4, title: "Conditional Statements (if/else)", duration: "13 min", type: "video", completed: false },
      { id: 5, title: "Loops: for and while", duration: "16 min", type: "video", completed: false },
      { id: 6, title: "Functions & Parameters", duration: "15 min", type: "video", completed: false },
      { id: 7, title: "Lists & List Operations", duration: "14 min", type: "video", completed: false },
      { id: 8, title: "Dictionaries & Data Structures", duration: "12 min", type: "video", completed: false },
      { id: 9, title: "Error Handling & Debugging", duration: "11 min", type: "video", completed: false },
      { id: 10, title: "Working with Files", duration: "13 min", type: "video", completed: false },
      { id: 11, title: "Introduction to Libraries", duration: "10 min", type: "video", completed: false },
      { id: 12, title: "Final Project: Calculator App", duration: "25 min", type: "project", completed: false }
    ]
  },
  "web-development": {
    title: "Web Development Essentials (HTML, CSS, JavaScript)",
    description: "Build responsive websites from scratch. Learn HTML structure, CSS styling, and JavaScript interactivity for modern web development.",
    duration: "3 weeks",
    skillLevel: "Beginner",
    totalLessons: 15,
    completedLessons: 0,
    project: "Personal Portfolio Website",
    lessons: [
      { id: 1, title: "Introduction to Web Development", duration: "10 min", type: "video", completed: false },
      { id: 2, title: "HTML Basics & Document Structure", duration: "15 min", type: "video", completed: false },
      { id: 3, title: "HTML Elements & Attributes", duration: "12 min", type: "video", completed: false },
      { id: 4, title: "Forms & Input Elements", duration: "14 min", type: "video", completed: false },
      { id: 5, title: "CSS Fundamentals & Selectors", duration: "13 min", type: "video", completed: false },
      { id: 6, title: "CSS Layout: Box Model & Flexbox", duration: "16 min", type: "video", completed: false },
      { id: 7, title: "CSS Grid & Responsive Design", duration: "15 min", type: "video", completed: false },
      { id: 8, title: "CSS Styling & Animations", duration: "14 min", type: "video", completed: false },
      { id: 9, title: "JavaScript Basics & Variables", duration: "12 min", type: "video", completed: false },
      { id: 10, title: "JavaScript Functions & Events", duration: "13 min", type: "video", completed: false },
      { id: 11, title: "DOM Manipulation", duration: "15 min", type: "video", completed: false },
      { id: 12, title: "JavaScript Form Validation", duration: "11 min", type: "video", completed: false },
      { id: 13, title: "API Integration Basics", duration: "14 min", type: "video", completed: false },
      { id: 14, title: "Website Deployment", duration: "10 min", type: "video", completed: false },
      { id: 15, title: "Final Project: Portfolio Website", duration: "30 min", type: "project", completed: false }
    ]
  },
  "data-databases": {
    title: "Data & Databases (SQL, Python basics)",
    description: "Understand data concepts, SQL queries, database design, and data analysis using Python libraries like pandas.",
    duration: "3 weeks",
    skillLevel: "Beginner",
    totalLessons: 14,
    completedLessons: 0,
    project: "Data Analysis Dashboard",
    lessons: [
      { id: 1, title: "Introduction to Data & Databases", duration: "12 min", type: "video", completed: false },
      { id: 2, title: "Database Concepts & Relationships", duration: "15 min", type: "video", completed: false },
      { id: 3, title: "SQL Basics: SELECT Statements", duration: "14 min", type: "video", completed: false },
      { id: 4, title: "Filtering Data with WHERE", duration: "13 min", type: "video", completed: false },
      { id: 5, title: "Sorting & Grouping Data", duration: "12 min", type: "video", completed: false },
      { id: 6, title: "JOIN Operations", duration: "16 min", type: "video", completed: false },
      { id: 7, title: "Data Modification: INSERT, UPDATE, DELETE", duration: "14 min", type: "video", completed: false },
      { id: 8, title: "Database Design Principles", duration: "11 min", type: "video", completed: false },
      { id: 9, title: "Python for Data Analysis", duration: "15 min", type: "video", completed: false },
      { id: 10, title: "Working with CSV Files", duration: "13 min", type: "video", completed: false },
      { id: 11, title: "Introduction to Pandas", duration: "16 min", type: "video", completed: false },
      { id: 12, title: "Data Visualization Basics", duration: "14 min", type: "video", completed: false },
      { id: 13, title: "Creating Charts & Graphs", duration: "12 min", type: "video", completed: false },
      { id: 14, title: "Final Project: Analysis Dashboard", duration: "25 min", type: "project", completed: false }
    ]
  },
  "networking-security": {
    title: "Networking & Cybersecurity Basics",
    description: "Learn network fundamentals, internet protocols, security principles, password management, and safe computing practices.",
    duration: "2 weeks",
    skillLevel: "Beginner",
    totalLessons: 11,
    completedLessons: 0,
    project: "Network Security Audit",
    lessons: [
      { id: 1, title: "Network Fundamentals", duration: "14 min", type: "video", completed: false },
      { id: 2, title: "Internet Protocols (TCP/IP)", duration: "13 min", type: "video", completed: false },
      { id: 3, title: "Network Hardware & Topology", duration: "12 min", type: "video", completed: false },
      { id: 4, title: "Cybersecurity Principles", duration: "15 min", type: "video", completed: false },
      { id: 5, title: "Password Security & Management", duration: "11 min", type: "video", completed: false },
      { id: 6, title: "Malware & Virus Protection", duration: "14 min", type: "video", completed: false },
      { id: 7, title: "Network Security Tools", duration: "13 min", type: "video", completed: false },
      { id: 8, title: "Safe Internet Browsing", duration: "10 min", type: "video", completed: false },
      { id: 9, title: "Email Security & Phishing", duration: "12 min", type: "video", completed: false },
      { id: 10, title: "Data Backup & Recovery", duration: "11 min", type: "video", completed: false },
      { id: 11, title: "Final Project: Security Audit", duration: "20 min", type: "project", completed: false }
    ]
  },
  "emerging-tech": {
    title: "Emerging Tech Awareness (AI, Blockchain, Cloud)",
    description: "Explore cutting-edge technologies including artificial intelligence, blockchain concepts, and cloud computing fundamentals.",
    duration: "2 weeks",
    skillLevel: "Beginner",
    totalLessons: 9,
    completedLessons: 0,
    project: "Tech Trend Research Report",
    lessons: [
      { id: 1, title: "Introduction to Emerging Technologies", duration: "12 min", type: "video", completed: false },
      { id: 2, title: "Artificial Intelligence Basics", duration: "15 min", type: "video", completed: false },
      { id: 3, title: "Machine Learning Concepts", duration: "14 min", type: "video", completed: false },
      { id: 4, title: "Blockchain Fundamentals", duration: "13 min", type: "video", completed: false },
      { id: 5, title: "Cryptocurrency & Digital Assets", duration: "11 min", type: "video", completed: false },
      { id: 6, title: "Cloud Computing Introduction", duration: "14 min", type: "video", completed: false },
      { id: 7, title: "Cloud Services & Platforms", duration: "12 min", type: "video", completed: false },
      { id: 8, title: "IoT & Smart Devices", duration: "10 min", type: "video", completed: false },
      { id: 9, title: "Final Project: Tech Research Report", duration: "25 min", type: "project", completed: false }
    ]
  }
};

const CourseDetail = () => {
  const { id } = useParams();
  const course = courseData[id as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Button asChild>
            <Link to="/courses">Back to Courses</Link>
          </Button>
        </div>
      </div>
    );
  }

  const progressPercentage = (course.completedLessons / course.totalLessons) * 100;

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" className="mb-4" asChild>
            <Link to="/courses">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </Link>
          </Button>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{course.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {course.duration}
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {course.skillLevel}
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Play className="h-3 w-3" />
                  {course.totalLessons} lessons
                </Badge>
              </div>

              <Card className="shadow-card mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Course Progress</span>
                    <span className="text-sm font-normal text-muted-foreground">
                      {course.completedLessons}/{course.totalLessons} completed
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={progressPercentage} className="mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {Math.round(progressPercentage)}% complete
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="shadow-card sticky top-8">
                <CardHeader>
                  <CardTitle>Get Started</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-gradient-primary shadow-button" size="lg">
                    <Play className="h-4 w-4 mr-2" />
                    Start Course
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    Download Resources
                  </Button>
                  <div className="pt-4 border-t">
                    <div className="flex items-center mb-2">
                      <Award className="h-4 w-4 mr-2 text-accent" />
                      <span className="text-sm font-medium">Mini-Project</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{course.project}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Lessons List */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Course Content</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {course.lessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-sm font-medium">
                      {lesson.completed ? (
                        <CheckCircle className="h-4 w-4 text-success" />
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </div>
                    <div>
                      <h3 className={`font-medium group-hover:text-primary transition-colors ${
                        lesson.completed ? 'text-muted-foreground line-through' : ''
                      }`}>
                        {lesson.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        {lesson.type === 'video' ? (
                          <Play className="h-3 w-3" />
                        ) : lesson.type === 'project' ? (
                          <Code className="h-3 w-3" />
                        ) : (
                          <FileText className="h-3 w-3" />
                        )}
                        <span>{lesson.duration}</span>
                        <span>•</span>
                        <span className="capitalize">{lesson.type}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CourseDetail;