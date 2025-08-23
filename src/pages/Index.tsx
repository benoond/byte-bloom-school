import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Award, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              🚀 Learn Computer Skills for the Future
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Master essential computer skills with hands-on projects, bite-sized lessons, and industry-recognized certificates. Start your tech journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-button text-lg px-8 py-6"
                asChild
              >
                <Link to="/courses">
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose ByteBloom?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform is designed to make learning computer skills accessible, engaging, and effective for everyone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center shadow-card hover:shadow-card-hover transition-all duration-300 bg-gradient-card border-0">
              <CardContent className="p-8">
                <div className="h-16 w-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Hands-on Projects</h3>
                <p className="text-muted-foreground">
                  Build real-world projects that you can showcase in your portfolio and apply immediately in your career.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-card-hover transition-all duration-300 bg-gradient-card border-0">
              <CardContent className="p-8">
                <div className="h-16 w-16 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Short Videos</h3>
                <p className="text-muted-foreground">
                  Learn at your own pace with bite-sized 10-15 minute lessons that fit into your busy schedule.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-card-hover transition-all duration-300 bg-gradient-card border-0">
              <CardContent className="p-8">
                <div className="h-16 w-16 mx-auto mb-6 rounded-full bg-success flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Certificates</h3>
                <p className="text-muted-foreground">
                  Earn industry-recognized certificates upon completion to boost your resume and career prospects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Popular Courses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular computer skills courses, designed for complete beginners.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Programming Foundations (Python)",
                description: "Learn programming basics with Python, the most beginner-friendly language.",
                duration: "3 weeks",
                lessons: "12 lessons"
              },
              {
                title: "Web Development Essentials",
                description: "Build your first website with HTML, CSS, and JavaScript fundamentals.",
                duration: "3 weeks", 
                lessons: "15 lessons"
              },
              {
                title: "Digital Literacy & Productivity",
                description: "Master essential computer skills and productivity tools for modern work.",
                duration: "2 weeks",
                lessons: "10 lessons"
              }
            ].map((course, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="h-2 w-full bg-gradient-primary rounded-full mb-4"></div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {course.description}
                  </p>
                  <div className="flex justify-between text-xs text-muted-foreground mb-4">
                    <span>{course.duration}</span>
                    <span>{course.lessons}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-accent">Beginner</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" asChild className="bg-gradient-primary shadow-button">
              <Link to="/courses">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our comprehensive computer skills courses.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 shadow-button text-lg px-8 py-6"
            asChild
          >
            <Link to="/courses">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;