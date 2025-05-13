import axios from 'axios'

export default async function handler(req, res) {
  // Example: Fetch from a free polling API or mock data
  const polling = [
    { party: 'Labour', percent: 42 },
    { party: 'Conservative', percent: 28 },
    { party: 'Lib Dem', percent: 12 },
    { party: 'Reform', percent: 8 },
    { party: 'Greens', percent: 5 },
    { party: 'SNP', percent: 3 },
    { party: 'Plaid Cymru', percent: 1 },
    { party: 'Independents', percent: 1 }
  ]
  // Replace with real API calls as needed
  const gdp = 3200 // Example
  const interestRate = 5.25 // Example
  res.status(200).json({ polling, gdp, interestRate })
}
