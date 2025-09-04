import { Card, CardContent } from "@/components/ui/card";
import { Recycle, Leaf, Target, Users, Globe, Award, BarChart3 } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    description: "Committed to reducing environmental impact through innovative waste management solutions."
  },
  {
    icon: Recycle,
    title: "Circular Economy",
    description: "Promoting sustainable practices that turn waste into valuable resources."
  },
  {
    icon: Target,
    title: "Efficiency Focus",
    description: "Streamlining waste management processes for maximum effectiveness and cost savings."
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Empowering communities to actively participate in sustainable waste management."
  }
];

const stats = [
  { value: "500K+", label: "Tons Recycled", icon: Recycle },
  { value: "1,200+", label: "Organizations", icon: Users },
  { value: "45%", label: "Waste Reduction", icon: Target },
  { value: "98%", label: "Client Satisfaction", icon: Award }
];

export default function About() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-glow/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              About EcoWaste
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our Waste Management System helps track and manage waste efficiently. 
              It reduces pollution, improves recycling, and promotes sustainable living 
              through intelligent technology and community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We envision a world where waste is transformed from a problem into a solution. 
                Through innovative technology and sustainable practices, we're building a 
                circular economy that benefits both communities and the environment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our platform empowers organizations to make data-driven decisions, 
                optimize their waste management processes, and contribute to a more 
                sustainable future for generations to come.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do, from product development 
              to customer service and community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Innovative Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto">
                  <BarChart3 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">AI Analytics</h3>
                <p className="text-muted-foreground">
                  Advanced machine learning algorithms provide insights into waste patterns and optimization opportunities.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Cloud Platform</h3>
                <p className="text-muted-foreground">
                  Secure, scalable cloud infrastructure ensures reliable access to your data anywhere, anytime.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Collaboration Tools</h3>
                <p className="text-muted-foreground">
                  Integrated tools that connect teams, communities, and stakeholders for better coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}