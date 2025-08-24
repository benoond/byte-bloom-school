import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [credentials, setCredentials] = useState({
    email: "student@example.com",
    password: "password123"
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation with pre-populated credentials
    if (credentials.email === "student@example.com" && credentials.password === "password123") {
      toast({
        title: "Login Successful",
        description: "Welcome to your dashboard!",
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Login Failed", 
        description: "Please use the provided credentials",
        variant: "destructive",
      });
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Student Login
          </CardTitle>
          <CardDescription>
            Enter your credentials to access your dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="bg-muted/50 p-3 rounded-md text-sm">
              <p className="font-medium text-muted-foreground mb-1">Demo Credentials:</p>
              <p className="text-xs text-muted-foreground">Email: student@example.com</p>
              <p className="text-xs text-muted-foreground">Password: password123</p>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-all duration-300"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default Login;