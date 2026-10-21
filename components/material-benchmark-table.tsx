import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

interface BenchmarkRow {
  criteria: string;
  nirvaeco: string;
  polystyrene: string;
  paperboard: string;
}

const benchmarkData: BenchmarkRow[] = [
  {
    criteria: "Feedstock Source",
    nirvaeco: "Sugarcane Bagasse Fiber (Upcycled Agro Residue)",
    polystyrene: "Petroleum By-product",
    paperboard: "Virgin Tree Wood Pulp",
  },
  {
    criteria: "Composting Duration",
    nirvaeco: "Biodegradable & Compostable (Soil Nutritive)",
    polystyrene: "500+ Years (Persistent Microplastic Waste)",
    paperboard: "20–30 Years (Plastic Lining Barrier)",
  },
  {
    criteria: "Thermal Safe Range",
    nirvaeco: "-20°C to +120°C (Microwave & Freezer Safe)",
    polystyrene: "Melts at 80°C / Leaches Styrene",
    paperboard: "Softens at High Temps / Weakened Seams",
  },
  {
    criteria: "Oil & Water Barrier",
    nirvaeco: "Natural Plant-Fiber Resistance (No Added Film)",
    polystyrene: "Chemical Stabilizers Required",
    paperboard: "Polyethylene / PE Plastic Coated",
  },
  {
    criteria: "Regulatory Status",
    nirvaeco: "Plant-Based & 100% Plastic-Free",
    polystyrene: "Banned or Restricted in Global Markets",
    paperboard: "Subject to Single-Use Plastic Levies",
  },
];

export function MaterialBenchmarkTable() {
  return (
    <section id="material-science" className="benchmark-section section" aria-labelledby="benchmark-heading">
      <div className="container">
        {/* Section Header */}
        <div className="curated-header">
          <div className="curated-header-left">
            <p className="section-eyebrow">COMPARATIVE ANALYSES</p>
            <h2 id="benchmark-heading" className="section-title">
              Material Science Benchmark
            </h2>
          </div>
          <div className="curated-header-right">
            <p className="curated-header-copy">
              Pure sugarcane bagasse outperforms conventional single-use food service alternatives
              across lifecycle durability, temperature safety, and disposal outcomes.
            </p>
          </div>
        </div>

        {/* Technical Comparison Table */}
        <div className="benchmark-table-wrap">
          <table className="benchmark-table">
            <thead>
              <tr>
                <th className="col-criteria">PERFORMANCE CRITERIA</th>
                <th className="col-nirvaeco">
                  <div className="nirvaeco-th-inner">
                    <span>NIRVAECO (BAGASSE)</span>
                    <span className="th-badge">Preferred</span>
                  </div>
                </th>
                <th className="col-comp">POLYSTYRENE (EPS FOAM)</th>
                <th className="col-comp">PE-LINED PAPERBOARD</th>
              </tr>
            </thead>
            <tbody>
              {benchmarkData.map((row) => (
                <tr key={row.criteria}>
                  <td className="cell-criteria">{row.criteria}</td>
                  <td className="cell-nirvaeco">
                    <div className="cell-content">
                      <CheckCircle2 size={16} className="icon-check" />
                      <span>{row.nirvaeco}</span>
                    </div>
                  </td>
                  <td className="cell-comp cell-ps">
                    <div className="cell-content">
                      {row.criteria === "Regulatory Status" ? (
                        <XCircle size={15} className="icon-ban" />
                      ) : (
                        <AlertTriangle size={15} className="icon-warn" />
                      )}
                      <span>{row.polystyrene}</span>
                    </div>
                  </td>
                  <td className="cell-comp cell-paper">
                    <div className="cell-content">
                      <span>{row.paperboard}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
