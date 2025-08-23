import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { BookOpen, Award, Clock, TrendingUp, Play, Download, Calendar } from "lucide-react";

const Dashboard = () => {
  const enrolledCourses = [
    {
      id: "python-foundations",
      title: "Programming Foundations (Python)",
      progress: 75,
      completedLessons: 9,
      totalLessons: 12,
      lastAccessed: "2 days ago",
      nextLesson: "Error Handling & Debugging",
      timeSpent: "4.5 hours"
    },
    {
      id: "web-development", 
      title: "Web Development Essentials",
      progress: 40,
      completedLessons: 6,
      totalLessons: 15,
      lastAccessed: "1 week ago",
      nextLesson: "CSS Grid & Responsive Design",
      timeSpent: "2.8 hours"
    },
    {
      id: "digital-literacy",
      title: "Digital Literacy & Productivity",
      progress: 100,
      completedLessons: 10,
      totalLessons: 10,
      lastAccessed: "3 weeks ago",
      nextLesson: "Completed",
      timeSpent: "3.2 hours"
    }
  ];

  const certificates = [
    {
      id: "digital-literacy",
      title: "Digital Literacy & Productivity",
      completedDate: "2024-01-15",
      credentialId: "DL-2024-001234"
    }
  ];

  const stats = {
    totalCourses: 3,
    completedCourses: 1,
    totalHours: 10.5,
    certificates: 1
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">My Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Track your progress and continue your learning journey
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Enrolled Courses</p>
                  <p className="text-2xl font-bold">{stats.totalCourses}</p>
                </div>
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold">{stats.completedCourses}</p>
                </div>
                <Award className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Hours Learned</p>
                  <p className="text-2xl font-bold">{stats.totalHours}</p>
                </div>
                <Clock className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Certificates</p>
                  <p className="text-2xl font-bold">{stats.certificates}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Enrolled Courses */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>My Courses</span>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/courses">Browse More</Link>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="border rounded-lg p-6 hover:shadow-card-hover transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              Last accessed {course.lastAccessed}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {course.timeSpent} spent
                            </span>
                          </div>
                          <div className="mb-3">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium">Progress</span>
                              <span className="text-sm text-muted-foreground">
                                {course.completedLessons}/{course.totalLessons} lessons
                              </span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                          {course.progress < 100 && (
                            <p className="text-sm text-muted-foreground">
                              Next: {course.nextLesson}
                            </p>
                          )}
                        </div>
                        <div className="ml-4">
                          {course.progress === 100 ? (
                            <Badge variant="secondary" className="bg-success/10 text-success">
                              Completed
                            </Badge>
                          ) : (
                            <Badge variant="secondary">
                              {course.progress}% Complete
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-gradient-primary" asChild>
                          <Link to={`/course/${course.id}`}>
                            <Play className="h-3 w-3 mr-1" />
                            {course.progress === 100 ? 'Review' : 'Continue'}
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-3 w-3 mr-1" />
                          Resources
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Certificates */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-success" />
                  My Certificates
                </CardTitle>
              </CardHeader>
              <CardContent>
                {certificates.length > 0 ? (
                  <div className="space-y-4">
                    {certificates.map((cert) => (
                      <div key={cert.id} className="border rounded-lg p-4 bg-gradient-card">
                        <h4 className="font-medium mb-2">{cert.title}</h4>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>Completed: {new Date(cert.completedDate).toLocaleDateString()}</p>
                          <p>ID: {cert.credentialId}</p>
                        </div>
                        <Button size="sm" variant="outline" className="mt-3 w-full">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Award className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                    <p className="text-muted-foreground">No certificates yet</p>
                    <p className="text-sm text-muted-foreground">Complete a course to earn your first certificate!</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Learning Streak */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  Learning Streak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">7</div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Days in a row! Keep it up!
                  </p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    {[true, true, true, true, true, true, true].map((active, index) => (
                      <div
                        key={index}
                        className={`w-6 h-6 rounded-full ${
                          active ? 'bg-accent' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/courses">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Browse Courses
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resources
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Award className="h-4 w-4 mr-2" />
                  View Certificates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;