import { Leaf, ShieldCheck, Flame, UtensilsCrossed } from "lucide-react";

const highlights = [
  {
    title: "Sugarcane Bagasse",
    subtitle: "Renewable Agricultural Fiber",
    copy: "Molded from plant residue remaining after sugarcane juice extraction. Renewable, tree-free, and natural.",
    icon: Leaf,
  },
  {
    title: "Plant-Based",
    subtitle: "Plastic-Free Alternative",
    copy: "A responsible alternative to conventional polystyrene and single-use plastics for modern catering.",
    icon: ShieldCheck,
  },
  {
    title: "Strong & Durable",
    subtitle: "Engineered Stacking Rigidity",
    copy: "High structural rigidity designed for heavy gravies, high stackability, and reliable delivery transit.",
    icon: Flame,
  },
  {
    title: "Food-Service Ready",
    subtitle: "Hot, Cold & Freezer Friendly",
    copy: "Natural oil and water resistance, suitable for commercial microwaves and cold storage.",
    icon: UtensilsCrossed,
  },
];

export function CompanyHighlights() {
  return (
    <section className="highlights-section" id="highlights" aria-label="Key Product Attributes">
      <div className="container">
        <div className="highlights-grid">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="highlight-col">
                <div className="highlight-icon-wrap" aria-hidden="true">
                  <Icon size={20} />
                </div>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-subtitle">{item.subtitle}</p>
                <p className="highlight-copy">{item.copy}</p>
                <span className="highlight-step">0{index + 1}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
