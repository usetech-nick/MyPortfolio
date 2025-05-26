import { Code, User, Link } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relateive">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
          <div className="space-y-6 ">
            <h3 className="text-xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              I craft modern, responsive websites with a focus on clean design
              and seamless user experiences. From static sites to dynamic apps,
              I love turning ideas into interactive, fast, and accessible web
              solutions.
            </p>

            <p className="text-muted-foreground">
              In the Web3 space, I’m exploring decentralized technologies to
              build transparent, user-empowered platforms. Whether it’s smart
              contracts or dApps, I’m all about merging creativity with
              blockchain innovation.{" "}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a href="" className="cosmic-button-1">
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 ">
            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4">
                <div className="p3 rounded-full bg-primary/10 ">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold txt-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4">
                <div className="p3 rounded-full bg-primary/10 ">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold txt-lg"> UI/UX </h4>
                  <p className="text-muted-foreground">
                    Designing intiuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4">
                <div className="p3 rounded-full bg-primary/10 ">
                  <Link className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold txt-lg"> BlockChain</h4>
                  <p className="text-muted-foreground">
                    Writing secure and optimized smart contracts for EVM
                    compatible chains in Solidity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
