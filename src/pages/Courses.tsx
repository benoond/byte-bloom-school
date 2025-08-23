import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, BookOpen, Users, Code, Globe, Database, Shield, Cpu, Lightbulb } from "lucide-react";

const courses = [
  {
    id: "digital-literacy",
    title: "Digital Literacy & Productivity",
    description: "Master essential computer skills, file management, email, productivity tools, and digital citizenship for modern workplace success.",
    duration: "2 weeks",
    skillLevel: "Beginner",
    icon: Users,
    color: "bg-blue-500",
    lessons: 10,
    project: "Digital Portfolio Setup"
  },
  {
    id: "python-foundations",
    title: "Programming Foundations (Python)",
    description: "Learn programming concepts through Python - variables, functions, loops, and data structures. Perfect first programming language.",
    duration: "3 weeks", 
    skillLevel: "Beginner",
    icon: Code,
    color: "bg-green-500",
    lessons: 12,
    project: "Simple Calculator App"
  },
  {
    id: "web-development",
    title: "Web Development Essentials (HTML, CSS, JavaScript)",
    description: "Build responsive websites from scratch. Learn HTML structure, CSS styling, and JavaScript interactivity for modern web development.",
    duration: "3 weeks",
    skillLevel: "Beginner", 
    icon: Globe,
    color: "bg-purple-500",
    lessons: 15,
    project: "Personal Portfolio Website"
  },
  {
    id: "data-databases",
    title: "Data & Databases (SQL, Python basics)",
    description: "Understand data concepts, SQL queries, database design, and data analysis using Python libraries like pandas.",
    duration: "3 weeks",
    skillLevel: "Beginner",
    icon: Database,
    color: "bg-orange-500", 
    lessons: 14,
    project: "Data Analysis Dashboard"
  },
  {
    id: "networking-security",
    title: "Networking & Cybersecurity Basics",
    description: "Learn network fundamentals, internet protocols, security principles, password management, and safe computing practices.",
    duration: "2 weeks",
    skillLevel: "Beginner",
    icon: Shield,
    color: "bg-red-500",
    lessons: 11,
    project: "Network Security Audit"
  },
  {
    id: "emerging-tech",
    title: "Emerging Tech Awareness (AI, Blockchain, Cloud)",
    description: "Explore cutting-edge technologies including artificial intelligence, blockchain concepts, and cloud computing fundamentals.",
    duration: "2 weeks",
    skillLevel: "Beginner",
    icon: Cpu,
    color: "bg-indigo-500",
    lessons: 9,
    project: "Tech Trend Research Report"
  }
];

const Courses = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Course Catalog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive collection of beginner-friendly computer courses. 
            Each course includes hands-on projects, downloadable resources, and a certificate of completion.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course) => {
            const IconComponent = course.icon;
            
            return (
              <Card key={course.id} className="shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`h-12 w-12 rounded-lg ${course.color} flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="ml-4">
                      {course.skillLevel}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {course.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      {course.lessons} lessons
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex items-center mb-3">
                      <Lightbulb className="h-4 w-4 mr-2 text-accent" />
                      <span className="text-sm font-medium">Mini-Project:</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {course.project}
                    </p>
                    
                    <Button 
                      className="w-full bg-gradient-primary shadow-button hover:shadow-card-hover transition-all duration-300" 
                      asChild
                    >
                      <Link to={`/course/${course.id}`}>
                        Start Course
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="mt-16 p-8 bg-gradient-card rounded-2xl shadow-card">
          <h2 className="text-2xl font-bold text-center mb-8">What's Included in Every Course</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-gradient-primary flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-1">Video Lessons</h3>
              <p className="text-sm text-muted-foreground">10-15 minute bite-sized lessons</p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-accent flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-1">Coding Sandbox</h3>
              <p className="text-sm text-muted-foreground">Practice coding in your browser</p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-success flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-1">PDF Resources</h3>
              <p className="text-sm text-muted-foreground">Downloadable notes & cheat sheets</p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-primary flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-1">Certificate</h3>
              <p className="text-sm text-muted-foreground">Completion certificate to showcase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;