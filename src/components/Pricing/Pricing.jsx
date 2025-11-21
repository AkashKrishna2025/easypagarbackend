import React, { useEffect, useState } from 'react';
import "./Pricing.css"; // Your existing CSS

const Pricing = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(
          'https://wbtechindia.com/apis/masterportallin/plan/upgrade/Active',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ SoftwareID: 8 }),
          }
        );
        const data = await response.json();
        if (data.status === 200 && data.data) {
          setPlans(data.data);
        }
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };

    fetchPlans();
  }, []);

  const hiddenFeatures = ["Annual Reports", "Notification"];
  const customOrder = [
    'Trial Plan',
    'EasyPagar Basic',
    'EasyPagar Plus',
    'EasyPagar Pro',
    'Intro Plan'
  ];

  const sortedPlans = [...plans].sort(
    (a, b) => customOrder.indexOf(a.Name) - customOrder.indexOf(b.Name)
  );

  const featureOrder = [
    "Employee", "Branch", "Attendance", "Leave",
    "Loan", "Expense", "Reports", "Messages",
    "Advertise", "Role Creation"
  ];

  // Placeholder rows for CLS mitigation
  const placeholderRows = 5;

  return (
    <section className="pricing-table scroll-mt-[100px]" id="pricing">
      <h2 className="text-xl font-bold text-customPurple text-center py-2 px-2">
        Plans &amp; Pricing
      </h2>
      <p className="text-md font-bold text-text-secondary text-center py-6 px-4">
        Select the plan that best fits your organization's needs
      </p>

      <div className="table-wrapper overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="header-item header-mobile text-left px-2 py-4">Features</th>
              {sortedPlans.length > 0
                ? sortedPlans.map((plan) => (
                    <th key={plan._id} className="header-item text-xs mobile-subplan leading-10 text-center">
                      <div>{plan.Name}</div>
                      <div className="text-xs pt-2">
                        ₹{plan.Amount}/ {plan.Duration} Days
                      </div>
                    </th>
                  ))
                : Array.from({ length: 5 }).map((_, idx) => (
                    <th key={idx} className="header-item text-xs mobile-subplan leading-10 text-center">&nbsp;</th>
                  ))
              }
            </tr>
          </thead>
          <tbody>
            {featureOrder.map((featureName) => {
              if (hiddenFeatures.includes(featureName)) return null;

              return (
                <tr key={featureName}>
                  <th className="feature-items bg-pricie-bg text-white text-center px-2 py-4 text-xs">
                    {featureName}
                  </th>
                  {sortedPlans.length > 0
                    ? sortedPlans.map((plan) => {
                        const currentFeature = plan.AllFeatures.find(f => f.FeatureName === featureName);
                        return (
                          <td key={`${plan._id}-${featureName}`} className="availability text-xs text-center">
                            {currentFeature ? (currentFeature.Count ? currentFeature.Count : '✔️') : '❌'}
                          </td>
                        );
                      })
                    : Array.from({ length: 5 }).map((_, idx) => (
                        <td key={idx} className="availability text-xs text-center">&nbsp;</td>
                      ))
                  }
                </tr>
              );
            })}

            {/* Placeholder rows to reduce CLS if plans are still loading */}
            {plans.length === 0 && Array.from({ length: placeholderRows }).map((_, idx) => (
              <tr key={`placeholder-${idx}`}>
                <th className="feature-items bg-pricie-bg text-white text-center px-2 py-4 text-xs">&nbsp;</th>
                {Array.from({ length: 5 }).map((__, i) => (
                  <td key={i} className="availability text-xs text-center">&nbsp;</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Pricing;
